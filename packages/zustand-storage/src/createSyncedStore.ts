import { createStore } from "zust-api";
import defaultStorageEngine from "./storageEngine";
import { debounce, deepMerge, shallowMerge } from "./utils";
import { SyncedStore, SyncedStoreConfig } from "./types";

/**
 * Creates a synced store that combines zust‑api state management with persistence via @aivron/sync-storage,
 * and optional database integration.
 *
 * @template State - The type of the state. Must extend object.
 * @template Actions - The type of the actions.
 * @param config - The configuration object for the synced store.
 * @returns A synced store containing the React hook and utility methods.
 */
export function createSyncedStore<State extends object, Actions>(
  config: SyncedStoreConfig<State, Actions>
): SyncedStore<State, Actions> {
  const {
    key,
    storageEngine = defaultStorageEngine,
    initialState,
    actions: actionsCreator,
    syncOptions = {},
    mergeStrategy = "replace",
    migrate,
    database, // Optional database integration config
  } = config;

  const {
    debounce: debounceDelay = 0,
    serialize = JSON.stringify,
    deserialize = JSON.parse,
    persistOn = "change",
    interval = 0,
    onError,
  } = syncOptions;

  // Create the zust‑api store using the initial state.
  const store: any = createStore(initialState);

  // Build the actions using zust‑api's setDeep and getState.
  const actions = actionsCreator(store.setDeep, store.getState);

  /**
   * Custom setter supporting functional updates.
   */
  const customSetState = (partial: any, replace = false) => {
    const current = store.getState() as State;
    const update = typeof partial === "function" ? partial(current) : partial;
    store.setDeep("", update);
  };

  /**
   * Persists the current state to storage.
   */
  let triggerPersist = (): void => {
    try {
      const currentState = store.getState() as State;
      const data = serialize(currentState);
      storageEngine.setItem(key, data);
    } catch (error: any) {
      if (onError) onError(error);
      else console.error("Persist error:", error);
    }
  };

  if (debounceDelay > 0) {
    triggerPersist = debounce(triggerPersist, debounceDelay);
  }

  // Persist state on change if configured.
  if (persistOn === "change") {
    store.subscribe((state: State) => {
      triggerPersist();
    });
  }

  // Periodic persistence using interval mode.
  if (persistOn === "interval" && interval > 0) {
    setInterval(() => {
      try {
        const currentState = store.getState() as State;
        const data = serialize(currentState);
        storageEngine.setItem(key, data);
      } catch (error: any) {
        if (onError) onError(error);
        else console.error("Persist error:", error);
      }
    }, interval);
  }

  /**
   * Rehydrates the state from persisted storage.
   */
  const rehydrate = (): void => {
    try {
      const data = storageEngine.getItem(key);
      if (data) {
        let persistedState: State = deserialize(data);
        if (migrate) {
          persistedState = migrate(persistedState);
        }
        let newState: State;
        switch (mergeStrategy) {
          case "deep":
            newState = deepMerge({ ...initialState }, persistedState);
            break;
          case "shallow":
            newState = shallowMerge(initialState, persistedState);
            break;
          case "replace":
          default:
            newState = persistedState;
            break;
        }
        customSetState(() => newState, true);
      }
    } catch (error: any) {
      if (onError) onError(error);
      else console.error("Rehydrate error:", error);
    }
  };

  // Immediately rehydrate on store creation.
  rehydrate();

  // Middleware support.
  const middlewares: Array<(state: State) => State> = [];
  const addMiddleware = (mw: (state: State) => State): void => {
    middlewares.push(mw);
    const currentState = store.getState() as State;
    const newState = mw(currentState);
    customSetState(() => newState, true);
  };

  /**
   * Resets the store to its initial state and clears persisted storage.
   */
  const resetStore = (): void => {
    customSetState(() => initialState, true);
    storageEngine.removeItem(key);
  };

  // Database integration methods (if configured)
  let fetchFromDB: ((query: object) => Promise<void>) | undefined;
  let saveToDB: ((query: object) => Promise<void>) | undefined;

  if (database) {
    /**
     * Fetches data from the database and merges it into the store state.
     * @param query - The query object used to fetch data.
     */
    fetchFromDB = async (query: object): Promise<void> => {
      try {
        const { client, collectionOrTable, fromRecord } = database;
        const records = await client.find(collectionOrTable, query);
        if (records.length > 0) {
          const record = records[0];
          const newStatePartial: Partial<State> = fromRecord ? fromRecord(record) : record;
          let mergedState: State;
          switch (mergeStrategy) {
            case "deep":
              mergedState = deepMerge(store.getState(), newStatePartial);
              break;
            case "shallow":
              mergedState = shallowMerge(store.getState(), newStatePartial);
              break;
            case "replace":
            default:
              mergedState = newStatePartial as State;
              break;
          }
          customSetState(() => mergedState, true);
        }
      } catch (error: any) {
        if (database.onError) database.onError(error);
        else console.error("Error fetching from DB:", error);
      }
    };

    /**
     * Saves the current store state to the database.
     * @param query - The query object to locate an existing record. Updates if found, inserts otherwise.
     */
    saveToDB = async (query: object): Promise<void> => {
      try {
        const { client, collectionOrTable, toRecord } = database;
        const state = store.getState();
        const record = toRecord ? toRecord(state) : state;
        const existingRecords = await client.find(collectionOrTable, query);
        if (existingRecords.length > 0) {
          await client.update(collectionOrTable, query, record);
        } else {
          await client.insert(collectionOrTable, record);
        }
      } catch (error: any) {
        if (database.onError) database.onError(error);
        else console.error("Error saving to DB:", error);
      }
    };
  }

  return {
    useStore: store.useStore as () => [State, Actions],
    getState: store.getState as () => State,
    setState: customSetState,
    subscribe: store.subscribe as (listener: (state: State) => void) => () => void,
    persist: triggerPersist,
    rehydrate,
    addMiddleware,
    resetStore,
    actions,
    // Expose DB integration methods when configured
    fetchFromDB,
    saveToDB,
  };
}

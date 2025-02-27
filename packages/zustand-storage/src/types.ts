/**
 * Interface for a storage engine.
 */
export interface StorageEngine {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/**
 * Merge strategy to combine persisted state with the initial state.
 */
export type MergeStrategy = 'deep' | 'shallow' | 'replace';

/**
 * Options for controlling state persistence.
 */
export interface SyncOptions<State> {
  debounce?: number;
  serialize?: (state: State) => string;
  deserialize?: (data: string) => State;
  persistOn?: 'change' | 'interval';
  interval?: number;
  onError?: (error: Error) => void;
}

/**
 * Function type for updating state.
 */
export type StoreSet<State> = (
  partial: Partial<State> | ((state: State) => Partial<State>),
  replace?: boolean
) => void;

/**
 * Configuration for database integration.
 */
export interface DatabaseIntegration<State> {
  client: any; // Ideally this is of type DatabaseClient (imported from the DB module)
  collectionOrTable: string;
  /**
   * Optional transform function to convert a DB record to a partial state.
   */
  fromRecord?: (record: any) => Partial<State>;
  /**
   * Optional transform function to convert the current state to a DB record.
   */
  toRecord?: (state: State) => object;
  /**
   * Optional error handler for database operations.
   */
  onError?: (error: Error) => void;
}

/**
 * Configuration for creating a synced store.
 */
export interface SyncedStoreConfig<State, Actions> {
  key: string;
  storageEngine?: StorageEngine;
  initialState: State;
  actions: (set: StoreSet<State>, get: () => State) => Actions;
  syncOptions?: SyncOptions<State>;
  mergeStrategy?: MergeStrategy;
  migrate?: (persistedState: any) => State;
  /**
   * Optional database integration configuration.
   */
  database?: DatabaseIntegration<State>;
}

/**
 * Interface for the synced store returned by createSyncedStore.
 */
export interface SyncedStore<State, Actions> {
  /**
   * Hook to access the current state and actions.
   */
  useStore: () => [State, Actions];
  /**
   * Retrieves the current state of the store.
   * @returns The current state.
   */
  getState: () => State;
  setState: StoreSet<State>;
  subscribe: (listener: (state: State) => void) => () => void;
  /**
   * Persists the store state to the storage engine.
   */
  persist: () => void;
  /**
   * Rehydrates the store state from the persisted storage.
   */
  rehydrate: () => void;
  addMiddleware: (mw: (state: State) => State) => void;
  resetStore: () => void;
  actions: Actions;
  /**
   * Fetches data from the database and merges it into the store state.
   */
  fetchFromDB?: (query: object) => Promise<void>;
  /**
   * Saves the current store state to the database.
   */
  saveToDB?: (query: object) => Promise<void>;
}

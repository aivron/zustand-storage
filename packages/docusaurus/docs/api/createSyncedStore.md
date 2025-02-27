---
title: createSyncedStore
sidebar_label: createSyncedStore
---

# createSyncedStore

`createSyncedStore` is the primary function used to create a synced store that integrates state management with persistence and optional database support. It allows you to effortlessly set up a store with automatic rehydration, configurable merge strategies, and even database synchronization.

## Usage

```ts
import { createSyncedStore } from 'zustand-storage';

const store = createSyncedStore({
  key: 'app-state',
  initialState: { count: 0 },
  actions: (set, get) => ({
    increment: () => set({ count: get().count + 1 }),
  }),
  syncOptions: {
    debounce: 300,
    persistOn: 'change',
    onError: (error) => console.error("Sync error:", error),
  },
  mergeStrategy: 'deep',
});
```

## Parameters

- **key**: `string`
  The storage key used to persist and retrieve state.

- **initialState**: `State`
  The initial state of your store.

- **actions**: `(set: StoreSet<State>, get: () => State) => Actions`
  A function that returns an object containing action methods to update the state.

- **syncOptions**: `SyncOptions<State>` (optional)
  Configuration options for state persistence:
  - **debounce**: `number` – The debounce delay in milliseconds to throttle persistence calls.
  - **persistOn**: `'change' | 'interval'` – Determines whether the state should be persisted on change or at set intervals.
  - **onError**: `(error: Error) => void` – A callback function that is invoked if persistence fails.

- **mergeStrategy**: `'deep' | 'shallow' | 'replace'` (optional)
  Defines how to merge the persisted state with the initial state during rehydration.

- **migrate**: `(persistedState: any) => State` (optional)
  A function to migrate persisted state to the current state structure.

- **database**: `DatabaseIntegration<State>` (optional)
  Configuration for integrating with an external database:
  - **client**: A database client instance.
  - **collectionOrTable**: `string` – The name of the collection or table.
  - **fromRecord**: `(record: any) => Partial<State>` (optional) – Transforms a database record into a partial state.
  - **toRecord**: `(state: State) => object` (optional) – Transforms the current state into a record for the database.
  - **onError**: `(error: Error) => void` (optional) – Error handler for database operations.

## Returns

`createSyncedStore` returns an object representing the synced store, which includes:

- **useStore**: A React hook to access the state and actions.
- **getState**: Function to retrieve the current state.
- **setState**: Function to update the state.
- **subscribe**: Function to subscribe to state changes.
- **persist**: Function to manually trigger state persistence.
- **rehydrate**: Function to rehydrate the state from storage.
- **addMiddleware**: Function to add custom middleware for state updates.
- **resetStore**: Function to reset the store to its initial state and clear persisted data.
- **actions**: The actions object defined during store creation.
- **fetchFromDB**: (Optional) Function to fetch data from the database.
- **saveToDB**: (Optional) Function to save the current state to the database.

## Example

Below is a complete example using `createSyncedStore`:

```ts
import { createSyncedStore } from 'zustand-storage';

interface AppState {
  count: number;
}

interface AppActions {
  increment: () => void;
}

const store = createSyncedStore<AppState, AppActions>({
  key: 'app-state',
  initialState: { count: 0 },
  actions: (set, get) => ({
    increment: () => set({ count: get().count + 1 }),
  }),
  syncOptions: {
    debounce: 300,
    persistOn: 'change',
    onError: (error) => console.error("Sync error:", error),
  },
  mergeStrategy: 'deep',
});

export default store;
```

## Additional Notes

- **Persistence and Rehydration:**
  The store is automatically rehydrated upon creation, ensuring that persisted state is loaded seamlessly.

- **Database Integration:**
  If configured, the optional `fetchFromDB` and `saveToDB` methods allow for synchronizing state with an external database.

- **Middleware Support:**
  Custom middleware can be added to transform or monitor state changes.

This function streamlines the process of combining state management with persistence, allowing you to focus on building your application logic while Zustand Storage handles the rest.
```

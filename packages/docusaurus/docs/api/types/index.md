---
title: Types
sidebar_label: Types
---

# Types

Zustand Storage leverages TypeScript interfaces and types to provide a robust, type-safe API for state management with persistence and optional database integration. This section outlines the key interfaces and types used within the package.

## StorageEngine

The `StorageEngine` interface abstracts the methods required for a storage backend. It defines functions to retrieve, store, and remove items.

```ts
export interface StorageEngine {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
```

- **getItem:** Retrieves the value associated with the provided key, or returns `null` if not found.
- **setItem:** Stores a value under the specified key.
- **removeItem:** Deletes the key-value pair from storage.

## MergeStrategy

`MergeStrategy` defines how the persisted state is merged with the initial state during rehydration.

```ts
export type MergeStrategy = 'deep' | 'shallow' | 'replace';
```

- **deep:** Recursively merges nested objects.
- **shallow:** Merges only the top-level properties.
- **replace:** Replaces the initial state entirely with the persisted state.

## SyncOptions

The `SyncOptions` interface provides configuration options for state persistence, including debounce timing, serialization, and error handling.

```ts
export interface SyncOptions<State> {
  debounce?: number;
  serialize?: (state: State) => string;
  deserialize?: (data: string) => State;
  persistOn?: 'change' | 'interval';
  interval?: number;
  onError?: (error: Error) => void;
}
```

- **debounce:** Delay (in milliseconds) to throttle persistence calls.
- **serialize:** Function to convert state to a string before storage.
- **deserialize:** Function to convert stored data back into state.
- **persistOn:** Determines when to persist state (`change` or `interval`).
- **interval:** Time interval for periodic persistence when using interval mode.
- **onError:** Callback invoked if an error occurs during persistence.

## StoreSet

`StoreSet` is a function type for updating the store's state. It accepts a partial state update or a function that computes the update.

```ts
export type StoreSet<State> = (
  partial: Partial<State> | ((state: State) => Partial<State>),
  replace?: boolean
) => void;
```

- **partial:** Either a partial state object or a function that receives the current state and returns a partial update.
- **replace:** Optional boolean flag to replace the entire state instead of merging.

## DatabaseIntegration

The `DatabaseIntegration` interface allows you to integrate an external database with your store. It specifies the client, table/collection name, and optional transformation functions.

```ts
export interface DatabaseIntegration<State> {
  client: any; // Ideally, this should be of type DatabaseClient.
  collectionOrTable: string;
  fromRecord?: (record: any) => Partial<State>;
  toRecord?: (state: State) => object;
  onError?: (error: Error) => void;
}
```

- **client:** The database client instance.
- **collectionOrTable:** Name of the collection or table in the database.
- **fromRecord:** (Optional) Function to transform a database record into a partial state.
- **toRecord:** (Optional) Function to transform the current state into a record for database storage.
- **onError:** (Optional) Error handler for database operations.

## SyncedStoreConfig

`SyncedStoreConfig` defines the configuration for creating a synced store. It includes options for persistence, state merging, migration, and optional database integration.

```ts
export interface SyncedStoreConfig<State, Actions> {
  key: string;
  storageEngine?: StorageEngine;
  initialState: State;
  actions: (set: StoreSet<State>, get: () => State) => Actions;
  syncOptions?: SyncOptions<State>;
  mergeStrategy?: MergeStrategy;
  migrate?: (persistedState: any) => State;
  database?: DatabaseIntegration<State>;
}
```

- **key:** Unique identifier for persisting state.
- **storageEngine:** (Optional) Custom storage engine; defaults to a built-in fallback.
- **initialState:** The initial state of the store.
- **actions:** Function that returns an object containing methods to update the state.
- **syncOptions:** (Optional) Options controlling persistence behavior.
- **mergeStrategy:** (Optional) Strategy for merging persisted state with the initial state.
- **migrate:** (Optional) Function to migrate persisted state to the current structure.
- **database:** (Optional) Configuration for integrating with an external database.

## SyncedStore

The `SyncedStore` interface represents the store returned by `createSyncedStore`. It provides hooks and methods for state management, persistence, and optional database synchronization.

```ts
export interface SyncedStore<State, Actions> {
  useStore: () => [State, Actions];
  getState: () => State;
  setState: StoreSet<State>;
  subscribe: (listener: (state: State) => void) => () => void;
  persist: () => void;
  rehydrate: () => void;
  addMiddleware: (mw: (state: State) => State) => void;
  resetStore: () => void;
  actions: Actions;
  fetchFromDB?: (query: object) => Promise<void>;
  saveToDB?: (query: object) => Promise<void>;
}
```

- **useStore:** React hook to access the current state and actions.
- **getState:** Retrieves the current state synchronously.
- **setState:** Function to update the state.
- **subscribe:** Registers a listener for state updates.
- **persist:** Manually triggers state persistence.
- **rehydrate:** Reloads state from storage.
- **addMiddleware:** Adds middleware to process state updates.
- **resetStore:** Resets the state to its initial value and clears persisted data.
- **actions:** Object containing the predefined action methods.
- **fetchFromDB:** (Optional) Fetches data from an external database.
- **saveToDB:** (Optional) Saves the current state to an external database.

---

These types provide a solid foundation for building state management solutions with persistence and database integration in Zustand Storage. They ensure type safety and clarity, helping you develop robust and maintainable applications.

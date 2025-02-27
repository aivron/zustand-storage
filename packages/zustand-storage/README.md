# zustand-storage

[![npm version](https://img.shields.io/npm/v/zustand-storage.svg)](https://www.npmjs.com/package/zustand-storage)
[![Build Status](https://github.com/aivron/zustand-storage/workflows/CI/badge.svg)](https://github.com/aivron/zustand-storage/actions)
[![License](https://img.shields.io/npm/l/zustand-storage.svg)](LICENSE)

`zustand-storage` is a powerful state management library built on top of [zust‑api](https://github.com/pmndrs/zustand) that provides seamless persistence and optional direct database integration. It supports persistence via various storage engines (including `localStorage` and an in-memory fallback) and integrates with databases such as MongoDB and PostgreSQL. With its flexible API, you can easily create a synced store that handles client-side state, auto-persistence, and even database fetching/updating—all following DRY and SOLID principles.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
  - [Creating a Basic Synced Store](#creating-a-basic-synced-store)
  - [React Integration](#react-integration)
- [API Reference](#api-reference)
  - [Store Configuration & Options](#store-configuration--options)
  - [Database Integration](#database-integration)
- [Database Clients](#database-clients)
  - [MongoDB Client](#mongodb-client)
  - [PostgreSQL Client](#postgresql-client)
- [Advanced Usage](#advanced-usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)
- [Repository](#repository)

## Features

- **Synced State Management:**
  Create a state store with built-in persistence using a configurable storage engine.

- **Auto-Persistence:**
  Automatically persist state changes to a storage engine (e.g., `localStorage`) with options for debouncing and interval-based persistence.

- **Flexible Merge Strategies:**
  Merge persisted state with your initial state using deep, shallow, or replace strategies.

- **Middleware Support:**
  Easily add middleware to transform or log state updates.

- **Database Integration:**
  Directly fetch from or save to databases (MongoDB, PostgreSQL) with built-in methods.
  Integrate your own database client by implementing the common `DatabaseClient` interface.

## Installation

Install the package via npm:

```bash
npm install zustand-storage
```

Or using yarn:

```bash
yarn add zustand-storage
```

## Getting Started

### Creating a Basic Synced Store

Below is an example of creating a simple synced store with default persistence using `localStorage` or an in-memory fallback.

```ts
import { createSyncedStore } from 'zustand-storage';

interface AppState {
  count: number;
}

const store = createSyncedStore<AppState, { increment: () => void }>({
  key: 'app-state', // unique key for persistence
  initialState: { count: 0 },
  actions: (set, get) => ({
    increment: () => set({ count: get().count + 1 }),
  }),
  syncOptions: {
    debounce: 300,         // Debounce persistence by 300ms
    persistOn: 'change',   // Persist state on every change
    onError: (error) => console.error("Sync error:", error),
  },
  mergeStrategy: 'deep',   // Use deep merging to combine states
});
```

### React Integration

Use the provided React hook to access the store in your components:

```tsx
import React from 'react';
import { useStore } from 'zustand-storage';

function Counter() {
  const [state, actions] = useStore();
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={actions.increment}>Increment</button>
    </div>
  );
}

export default Counter;
```

## API Reference

### Store Configuration & Options

When creating a store, the configuration object (of type `SyncedStoreConfig`) supports:

- **`key` (string):**
  Unique identifier for persisting state.

- **`initialState` (object):**
  Your store’s initial state.

- **`actions` (function):**
  A function that receives the state setter (`StoreSet`) and a getter to build your actions.

- **`syncOptions` (object):**
  Configure persistence with:
  - `debounce` (number): Delay for debouncing persistence.
  - `serialize` / `deserialize`: Custom serialization functions (defaults to `JSON.stringify`/`JSON.parse`).
  - `persistOn`: Either `'change'` (persist immediately on state change) or `'interval'` (persist periodically).
  - `interval` (number): Interval in milliseconds when using interval mode.
  - `onError`: Callback for error handling during persistence.

- **`mergeStrategy` (string):**
  Strategy for merging persisted state: `'deep'`, `'shallow'`, or `'replace'`.

- **`migrate` (function):**
  A migration function to update persisted state if needed.

### Database Integration

You can extend the store to directly interact with a database by adding the optional `database` configuration.

```ts
interface DatabaseIntegration<State> {
  client: any;  // Instance of a database client (e.g., MongoDBClient or PostgreSQLClient)
  collectionOrTable: string; // Name of the collection (for MongoDB) or table (for PostgreSQL)
  fromRecord?: (record: any) => Partial<State>; // Transform DB record to state
  toRecord?: (state: State) => object;          // Transform state to DB record
  onError?: (error: Error) => void;             // Database operation error handler
}
```

When provided, two new methods become available on the store:

- **`fetchFromDB(query: object): Promise<void>`**
  Fetches data from the database based on the query and merges it into the store.

- **`saveToDB(query: object): Promise<void>`**
  Saves the current store state to the database. If the record exists (based on the query), it will update; otherwise, it will insert a new record.

## Database Clients

`zustand-storage` provides two built-in database client implementations. These classes implement a common `DatabaseClient` interface, so you can easily swap or extend them.

### MongoDB Client

The `MongoDBClient` class uses the official MongoDB Node.js driver.

**Usage Example:**

```ts
import { MongoDBClient } from 'zustand-storage/database/MongoDBClient';

const mongoClient = new MongoDBClient('mongodb://localhost:27017', 'mydb');
await mongoClient.connect();

const users = await mongoClient.find('users', { active: true });
console.log(users);

await mongoClient.disconnect();
```

### PostgreSQL Client

The `PostgreSQLClient` class uses the `pg` library to interact with PostgreSQL.

**Usage Example:**

```ts
import { PostgreSQLClient } from 'zustand-storage/database/PostgreSQLClient';

const pgClient = new PostgreSQLClient('postgresql://user:pass@localhost:5432/mydb');
await pgClient.connect();

const users = await pgClient.find('users', { active: true });
console.log(users);

await pgClient.disconnect();
```

## Advanced Usage

### Integrating Database with the Store

You can create a store that not only persists state locally but also integrates with a database. This is especially useful for syncing remote data with client state.

**Example:**

```ts
import { createSyncedStore } from 'zustand-storage';
import { MongoDBClient } from 'zustand-storage/database/MongoDBClient';

interface AppState {
  users: any[];
}

const mongoClient = new MongoDBClient('mongodb://localhost:27017', 'mydb');

const store = createSyncedStore<AppState, { addUser: (user: any) => void }>({
  key: 'app-state',
  initialState: { users: [] },
  actions: (set, get) => ({
    addUser: (user) => set({ users: [...get().users, user] }),
  }),
  syncOptions: {
    debounce: 300,
    persistOn: 'change',
    onError: (error) => console.error("Sync error:", error),
  },
  mergeStrategy: 'deep',
  database: {
    client: mongoClient,
    collectionOrTable: 'users',
    fromRecord: (record) => ({ users: [record] }), // Custom transform function
    toRecord: (state) => state.users[0],              // Custom transform function
    onError: (error) => console.error("DB Integration Error:", error),
  },
});

// Fetch data from the database and merge it into the store.
store.fetchFromDB && store.fetchFromDB({ active: true });

// Save the current state to the database.
store.saveToDB && store.saveToDB({ id: 123 });
```

### Customizing the Storage Engine

If you need a custom persistence mechanism, you can pass your own storage engine that implements the `StorageEngine` interface.

```ts
import { createSyncedStore, StorageEngine } from 'zustand-storage';

const customStorageEngine: StorageEngine = {
  getItem: (key) => {
    // Your custom logic to get an item.
    return localStorage.getItem(key);
  },
  setItem: (key, value) => {
    // Your custom logic to set an item.
    localStorage.setItem(key, value);
  },
  removeItem: (key) => {
    // Your custom logic to remove an item.
    localStorage.removeItem(key);
  }
};

const store = createSyncedStore({
  key: 'app-state',
  initialState: { count: 0 },
  actions: (set, get) => ({
    increment: () => set({ count: get().count + 1 })
  }),
  storageEngine: customStorageEngine,
});
```

## Error Handling

Both local persistence and database operations use robust error handling:

- **Persistence Errors:**
  Use the `onError` callback in `syncOptions` to catch and handle any persistence errors.
- **Database Errors:**
  Each database operation is wrapped in try/catch blocks. You can provide a custom error handler in the database configuration (`database.onError`).

## Contributing

Contributions are welcome! Please check the [issues](https://github.com/aivron/zustand-storage/issues) for bugs or feature requests and feel free to submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Repository

The source code is available on GitHub: [github.com/aivron/zustand-storage](https://github.com/aivron/zustand-storage)

---

Happy coding!

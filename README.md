# Zustand Storage

A universal solution combining [@aivron/sync-storage](https://github.com/aivron/sync-storage) and [zust-api](https://github.com/Smart-Earners-Team/Zustand-API) for React (web & desktop). It merges local persistence with a Zustand-inspired API to provide core storage operations, bulk actions, JSON support, TTL, and integrated React hooks.

## Features

- **Universal Storage:** Works seamlessly on both web and desktop applications.
- **Local Persistence:** Persist state locally using a configurable storage engine.
- **Zustand-Inspired API:** An intuitive API for state management and persistence.
- **Core Storage Operations:** Includes methods to get, set, update, and remove data.
- **Bulk Actions:** Perform operations on multiple items at once.
- **JSON Support:** Built-in serialization and deserialization for handling JSON data.
- **TTL (Time-To-Live):** Manage expiration of stored items.
- **Integrated React Hooks:** Easily integrate state management into your React components.
- **Optional Database Integration:** Connect to external databases (e.g., MongoDB, PostgreSQL) for advanced use cases.
- **TypeScript Support:** Fully typed interfaces for safer and more predictable development.

## Installation

Install via npm or pnpm:

```bash
npm install zustand-storage
# or
pnpm add zustand-storage

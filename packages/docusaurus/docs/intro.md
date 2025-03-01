---
id: intro
title: Introduction
description: Zustand Storage is a universal state management solution that combines @aivron/sync-storage and zust-api to provide seamless persistence, middleware, and optional database integration for React apps.
sidebar_position: 1
slug: /docs
---

⚡️ **Zustand Storage** helps you manage your application state effortlessly with a powerful API and automatic persistence—all built with React in mind.

💸 Building a robust state management solution from scratch can be challenging. Instead, **focus on your app’s core features** while Zustand Storage takes care of state synchronization, local persistence, and even database integration.

💥 Ready for more? With advanced features like configurable merge strategies, debounce persistence, middleware support, and optional direct integration with databases such as MongoDB and PostgreSQL, Zustand Storage scales with your project’s needs.

## Fast Track ⏱️ {#fast-track}

Learn Zustand Storage in **5 minutes** by following this quick tutorial.

### Installation

Install [Node.js](https://nodejs.org/en/download/) (version 18.0 or above) and add Zustand Storage to your project:

```bash
npm install zustand-storage
```

Or with pnpm:

```bash
pnpm add zustand-storage
```

### Create Your Synced Store

Create a new file (e.g., `store.ts`) and set up your synced store:

```ts
import { createSyncedStore } from 'zustand-storage';

interface AppState {
  count: number;
}

const store = createSyncedStore<AppState, { increment: () => void }>({
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

### Using the Store in Your Application

Integrate the store in your React components using the provided hook:

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

## Key Features

- **Effortless Integration:** Quickly set up your synced store and integrate it with React.
- **Automatic Persistence:** Configure debounce intervals and merge strategies to keep your state in sync across sessions.
- **Middleware Support:** Enhance state updates with custom middleware.
- **Database Integration:** Optionally connect to databases like MongoDB or PostgreSQL for hybrid local-remote state management.

## Next Steps

- **API Reference:** Dive into detailed API docs for advanced usage.
- **Migration Guide:** Learn how to handle state schema changes with ease.
- **FAQ & Troubleshooting:** Find answers to common questions and issues.

:::tip
Need more details or help? Visit our [GitHub repository](https://github.com/aivron/zustand-storage) for comprehensive documentation, examples, and support.
:::

Happy coding with Zustand Storage!

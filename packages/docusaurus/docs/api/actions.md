---
title: actions
sidebar_label: actions
---

# actions

The `actions` object includes all the functions you define when creating your synced store with `createSyncedStore`. These actions provide a clean interface for updating state, performing asynchronous tasks, and managing side effects.

## Usage

When creating your store, you define actions to update the state. For example:

```ts
import { createSyncedStore } from 'zustand-storage';

interface AppState {
  count: number;
}

interface AppActions {
  increment: () => void;
  decrement: () => void;
}

const store = createSyncedStore<AppState, AppActions>({
  key: 'app-state',
  initialState: { count: 0 },
  actions: (set, get) => ({
    increment: () => set({ count: get().count + 1 }),
    decrement: () => set((prev) => ({ count: prev.count - 1 })),
  }),
  syncOptions: {
    debounce: 300,
    persistOn: 'change',
  },
  mergeStrategy: 'deep',
});

export default store;
```

## Accessing Actions

You can access the actions directly via the store:

```ts
import store from './store';

store.actions.increment();
```

Or by using the `useStore` hook within a React component:

```tsx
import React from 'react';
import { useStore } from 'zustand-storage';

function Counter() {
  const [state, actions] = useStore();

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={actions.increment}>Increment</button>
      <button onClick={actions.decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Additional Notes

- **Customization:**
  Actions are defined during store creation and can handle both synchronous and asynchronous state updates.

- **Side Effects:**
  Actions can include side effects such as API calls, logging, or other operations as needed by your application.

- **Type Safety:**
  When using TypeScript, defining interfaces for your state and actions ensures a predictable and type-safe store.

The `actions` object centralizes your application's state modifications, making it easier to maintain and evolve your business logic.

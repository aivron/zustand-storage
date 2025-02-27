---
title: useStore
sidebar_label: useStore
---

# useStore

The `useStore` hook provides a convenient way to access the store's current state and its associated actions within your React components. It ensures that your components re-render automatically when the state changes.

## Usage

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

## Returns

The `useStore` hook returns an array with two elements:

1. **State:** The current state object of your store.
2. **Actions:** An object containing the action methods defined during the store's creation.

This hook is designed to seamlessly integrate with React, triggering re-renders whenever the state updates.

## Example

Below is a complete example that demonstrates the use of `useStore` in a simple counter application:

```tsx
import React from 'react';
import { useStore } from 'zustand-storage';

export default function App() {
  const [state, actions] = useStore();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: {state.count}</p>
      <button onClick={actions.increment}>Increment</button>
      <button onClick={actions.decrement}>Decrement</button>
    </div>
  );
}
```

## Additional Notes

- **Automatic Re-rendering:**
  The hook listens for changes in the store's state and causes the component to re-render, ensuring your UI stays up-to-date.

- **Integration with createSyncedStore:**
  The state and actions returned by `useStore` correspond directly to the configuration provided when creating the store with `createSyncedStore`.

- **Type Safety:**
  When using TypeScript, ensure that your store and actions are properly typed to leverage the full benefits of type-checking.

By using `useStore`, you can efficiently manage and reflect state changes in your React components with minimal boilerplate.

---
title: resetStore
sidebar_label: resetStore
---

# resetStore

The `resetStore` function resets the store to its initial state and clears any persisted data from the storage engine. This is useful when you need to revert your application to a known starting state, such as during user logout or for debugging purposes.

## Usage

```ts
import store from './store';

// Reset the store to its initial state and clear persisted data
store.resetStore();
```

## Additional Notes

- **State Reversion:**
  `resetStore` replaces the current state with the predefined initial state, ensuring a clean slate.

- **Clearing Persistence:**
  In addition to resetting the in-memory state, this function also removes the corresponding persisted data from the storage engine, ensuring that the reset state is maintained across sessions.

- **Use Cases:**
  Consider using `resetStore` in scenarios like user logout, error recovery, or when a complete state refresh is required.

By using `resetStore`, you can easily revert your application to its default state, providing a straightforward mechanism for state management resets.
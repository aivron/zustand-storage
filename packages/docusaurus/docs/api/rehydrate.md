---
title: rehydrate
sidebar_label: rehydrate
---

# rehydrate

The `rehydrate` function reloads the store's state from the persisted storage. It merges the persisted state with the initial state using the configured merge strategy, ensuring that your application starts with the most up-to-date state.

## Usage

```ts
import store from './store';

// Rehydrate the store's state from storage
store.rehydrate();
```

## Additional Notes

- **Automatic Rehydration:**
  `rehydrate` is typically called automatically during store initialization, but you can invoke it manually if needed.

- **Merge Strategy:**
  The merging of persisted state with the initial state is governed by the `mergeStrategy` option (`deep`, `shallow`, or `replace`).

- **Error Handling:**
  If an error occurs during rehydration (e.g., corrupted data), the error is passed to the `onError` callback defined in your syncOptions.

By calling `rehydrate`, you ensure that your application loads the persisted state, keeping your user experience seamless and consistent.

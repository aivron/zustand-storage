---
title: persist
sidebar_label: persist
---

# persist

The `persist` function is used to manually trigger the persistence of the store's current state to the configured storage engine. This can be useful when you want to ensure that the latest state is saved immediately, outside of the automatic persistence triggers.

## Usage

```ts
import store from './store';

// Manually persist the current state
store.persist();
```

## Additional Notes

- **Manual Trigger:**
  While Zustand Storage automatically persists state changes based on your configuration (e.g., on change or at intervals), `persist` gives you the flexibility to force a save at any moment.

- **Error Handling:**
  If an error occurs during persistence, the `onError` callback provided in your syncOptions will be invoked.

Using `persist` allows you to have more control over when your state is saved, ensuring that critical updates are not missed.

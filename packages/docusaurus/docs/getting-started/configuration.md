# Configuration

In this guide, you'll learn how to configure your synced store. You can customize persistence options, merge strategies, and more.

Start by creating a file (e.g., `store.ts`) and define your store configuration as follows:

```ts
import { createSyncedStore } from 'zustand-storage';

const store = createSyncedStore({
  key: 'your-key',
  initialState: { /* your initial state */ },
  actions: (set, get) => ({ /* your actions */ }),
  syncOptions: {
    debounce: 300,
    persistOn: 'change',
    onError: (error) => console.error('Sync error:', error),
  },
  mergeStrategy: 'deep', // Options: deep, shallow, replace
});

export default store;
```

This configuration sets up the basics of persistence and state management for your application.

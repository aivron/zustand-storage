# TypeScript Support

Zustand Storage is built with TypeScript, ensuring strong type safety for your state and actions. Define interfaces for your state and actions to fully leverage these benefits:

```ts
interface AppState {
  count: number;
}

interface AppActions {
  increment: () => void;
}

const store = createSyncedStore<AppState, AppActions>({
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

This approach helps catch errors during development and improves overall code quality.

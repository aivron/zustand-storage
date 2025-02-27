---
title: addMiddleware
sidebar_label: addMiddleware
---

# addMiddleware

The `addMiddleware` function allows you to register custom middleware that processes and potentially transforms the store's state whenever it updates. This is useful for adding side effects, logging, state normalization, or any other custom behavior that needs to be applied to state changes.

## Usage

```ts
import store from './store';

store.addMiddleware((state) => {
  // Example: Log the current state whenever it updates.
  console.log('Middleware processing state:', state);

  // You can modify the state if necessary.
  return state;
});
```

## Parameters

- **middleware**: A function that takes the current state as its argument and returns a new state. This function is executed immediately upon addition and on every subsequent state update.

## Returns

This function does not return a value. Instead, it registers the middleware to be applied to all state updates.

## Additional Notes

- **Immediate Execution:**
  When added, the middleware is executed immediately with the current state, ensuring any transformation or side effect is applied right away.

- **Multiple Middleware:**
  You can add multiple middleware functions. They are executed in the order they are added, allowing for chained transformations.

- **Common Use Cases:**
  Middleware is often used for debugging (e.g., logging state changes), modifying state formats, or enforcing certain invariants within your state.

By using `addMiddleware`, you extend the functionality of your store, making it a powerful tool to tailor state management to your application's specific needs.

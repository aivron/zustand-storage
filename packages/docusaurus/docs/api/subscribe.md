---
title: subscribe
sidebar_label: subscribe
---

# subscribe

The `subscribe` function allows you to listen for changes in the store's state. It accepts a callback function that will be invoked every time the state is updated.

## Usage

```ts
import store from './store';

const unsubscribe = store.subscribe((newState) => {
  console.log("State changed:", newState);
});

// When you no longer need to listen to state changes, call the unsubscribe function:
unsubscribe();
```

## Parameters

- **listener**: A callback function that receives the updated state whenever a change occurs.

## Returns

A function that, when invoked, unsubscribes the listener from future state updates.

## Additional Notes

- **Side Effects:**
  Use `subscribe` to trigger side effects (e.g., logging, analytics) when the state changes.
- **Memory Management:**
  Always call the unsubscribe function when the listener is no longer needed to avoid memory leaks.

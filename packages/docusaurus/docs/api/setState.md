---
title: setState
sidebar_label: setState
---

# setState

`setState` is a function provided by the store to update the state. It accepts either a partial state object or a function that returns a partial state update, allowing for both direct and functional updates.

## Usage

```ts
import store from './store';

// Direct update with a partial state object:
store.setState({ count: 10 });

// Functional update using a callback:
store.setState((prevState) => ({ count: prevState.count + 1 }));
```

## Parameters

- **partial:** A partial state object or a function that receives the current state and returns a partial state.
- **replace (optional):** A boolean flag that, if set to `true`, replaces the entire state with the new state provided.

## Returns

This function does not return a value. It updates the store's state and triggers a re-render in components that subscribe to the state.

## Example

Below is an example demonstrating both types of state updates:

```ts
import store from './store';

// Update using a partial state object:
store.setState({ count: 5 });

// Update using a function:
store.setState((prev) => ({ count: prev.count + 2 }));
```

## Additional Notes

- **Re-rendering:**
  Calling `setState` will trigger re-renders in all components that are subscribed to the store, ensuring your UI reflects the updated state.

- **Persistence:**
  If persistence is configured, every call to `setState` may trigger a persistence operation based on the defined `syncOptions`.

`setState` provides a flexible mechanism to update your application's state while seamlessly integrating with the persistence layer.

---
title: getState
sidebar_label: getState
---

# getState

The `getState` function retrieves the current state of your store. It provides a synchronous snapshot of the state, which can be useful for debugging, conditional logic, or operations outside of React components.

## Usage

```ts
import store from './store';

const currentState = store.getState();
console.log('Current State:', currentState);
```

## Returns

- **State Object:** The complete current state of the store.

## Example

Below is an example where `getState` is used to log the current state after performing an action:

```ts
import store from './store';

function logCurrentCount() {
  const state = store.getState();
  console.log('The current count is:', state.count);
}

// Assume an action that modifies the state has been dispatched here
logCurrentCount();
```

## Additional Notes

- **Synchronous Access:**
  `getState` provides an immediate snapshot of the state, making it ideal for non-React contexts or debugging purposes.

- **Integration:**
  This function is automatically included in the store object returned by `createSyncedStore`.

Using `getState` ensures that you can always access the most up-to-date state from your store when needed.

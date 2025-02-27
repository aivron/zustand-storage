---
title: saveToDB
sidebar_label: saveToDB
---

# saveToDB

The `saveToDB` function is an optional method available when database integration is configured in your store. It saves the current state of your store to the external database, updating an existing record if one is found or inserting a new record otherwise.

## Usage

```ts
import store from './store';

store.saveToDB({ id: 'record-id' })
  .then(() => {
    console.log('Store state saved to the database successfully.');
  })
  .catch((error) => console.error('Error saving to DB:', error));
```

## Parameters

- **query**: An object that defines the criteria for locating an existing record in the database. If a record is found, it is updated; otherwise, a new record is inserted.

## Returns

A Promise that resolves when the state has been saved to the database.

## Additional Notes

- **Optional Integration:**
  `saveToDB` is only available if a database configuration is provided during store creation.

- **Transform Function:**
  If a `toRecord` transform function is provided in your database configuration, it will be used to convert the current state into a record format suitable for the database.

- **Database Sync:**
  This function ensures that your application's state can be persisted not just locally, but also in an external data store, enabling hybrid state management scenarios.

Using `saveToDB`, you can synchronize your application's state with an external database, ensuring data persistence and consistency across different platforms.

---
title: fetchFromDB
sidebar_label: fetchFromDB
---

# fetchFromDB

The `fetchFromDB` function is an optional method available when database integration is configured in your store. It fetches data from the external database and merges it into your current state based on the defined merge strategy.

## Usage

```ts
import store from './store';

store.fetchFromDB({ id: 'record-id' })
  .then(() => {
    console.log('Data fetched from the database and merged into the state.');
  })
  .catch((error) => console.error('Error fetching from DB:', error));
```

## Parameters

- **query**: An object that defines the criteria for fetching data from the database. This is used to locate the appropriate record(s).

## Returns

A Promise that resolves when the state has been updated with the data fetched from the database.

## Additional Notes

- **Optional Integration:**
  `fetchFromDB` is only available if you have provided a database configuration (with a valid client and associated options) in your store setup.

- **Merge Strategy:**
  The data fetched from the database will be merged into the current state using the `mergeStrategy` defined during store creation (`deep`, `shallow`, or `replace`).

- **Transform Function:**
  If a `fromRecord` transform function is provided in your database configuration, it will be used to convert the fetched record into a partial state object.

Using `fetchFromDB`, you can synchronize your application's state with external data sources, making it easier to manage hybrid local-remote state management.

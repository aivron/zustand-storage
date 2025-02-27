---
title: API Reference
---

```tsx
import Link from '@docusaurus/Link';
import styles from './../styles.modules.css';

export default function API_Reference() {
  return (
    <>
      <p>
        Zustand Storage provides a comprehensive API for managing your application's state with persistence, middleware support, and optional database integration. Select an endpoint below to learn more.
      </p>
      <div className={styles.cardContainer}>
        <Link to="/docs/api/createSyncedStore" className={styles.card}>
          <h3>createSyncedStore</h3>
          <p>Create a synced store with persistence and optional database integration.</p>
        </Link>

        <Link to="/docs/api/useStore" className={styles.card}>
          <h3>useStore</h3>
          <p>Access the store's current state and actions using this React hook.</p>
        </Link>

        <Link to="/docs/api/actions" className={styles.card}>
          <h3>actions</h3>
          <p>Predefined actions defined during store creation to update state.</p>
        </Link>

        <Link to="/docs/api/getState" className={styles.card}>
          <h3>getState</h3>
          <p>Retrieve the current state of the store synchronously.</p>
        </Link>

        <Link to="/docs/api/setState" className={styles.card}>
          <h3>setState</h3>
          <p>Update the store's state using direct or functional updates.</p>
        </Link>

        <Link to="/docs/api/subscribe" className={styles.card}>
          <h3>subscribe</h3>
          <p>Listen for state changes in the store and react accordingly.</p>
        </Link>

        <Link to="/docs/api/persist" className={styles.card}>
          <h3>persist</h3>
          <p>Manually trigger persistence of the current state to storage.</p>
        </Link>

        <Link to="/docs/api/rehydrate" className={styles.card}>
          <h3>rehydrate</h3>
          <p>Load persisted state into the store, merging it with the initial state.</p>
        </Link>

        <Link to="/docs/api/addMiddleware" className={styles.card}>
          <h3>addMiddleware</h3>
          <p>Add custom middleware to process and transform state updates.</p>
        </Link>

        <Link to="/docs/api/resetStore" className={styles.card}>
          <h3>resetStore</h3>
          <p>Reset the store to its initial state and clear persisted data.</p>
        </Link>

        <Link to="/docs/api/fetchFromDB" className={styles.card}>
          <h3>fetchFromDB</h3>
          <p>(Optional) Fetch data from an external database to update the store.</p>
        </Link>

        <Link to="/docs/api/saveToDB" className={styles.card}>
          <h3>saveToDB</h3>
          <p>(Optional) Save the current store state to an external database.</p>
        </Link>
      </div>
    </>
  )
}
```

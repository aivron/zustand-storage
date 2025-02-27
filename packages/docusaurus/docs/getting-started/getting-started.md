
```tsx
import Link from '@docusaurus/Link';
import styles from './../styles.modules.css';

export default function GettingStarted() {
  return (
    <>
      <h1>Getting Started</h1>
      <p>
        Welcome to the <strong>Zustand Storage</strong> “Getting Started” section!
        Below, you’ll find essential guides and tutorials to help you integrate
        Zustand Storage into your application quickly and effectively.
      </p>

      <div className={styles.cardContainer}>
        <Link to="/docs/getting-started/installation" className={styles.card}>
          <h3>Installation</h3>
          <p>How to install Zustand Storage locally.</p>
        </Link>

        <Link to="/docs/getting-started/configuration" className={styles.card}>
          <h3>Configuration</h3>
          <p>Configuring your synced store’s behavior.</p>
        </Link>
      </div>
    </>
  );
}
```

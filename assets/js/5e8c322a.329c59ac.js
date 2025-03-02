"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[594],{3573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"api/index","title":"API Reference","description":"","source":"@site/docs/api/index.md","sourceDirName":"api","slug":"/api/","permalink":"/zustand-storage/api/","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"alphadevking","lastUpdatedAt":1740941703000,"frontMatter":{"title":"API Reference"}}');var a=n(612),r=n(7066);const o={title:"API Reference"},i=void 0,c={},d=[];function p(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import Link from \'@docusaurus/Link\';\nimport styles from \'./../styles.modules.css\';\n\nexport default function API_Reference() {\n  return (\n    <>\n      <p>\n        Zustand Storage provides a comprehensive API for managing your application\'s state with persistence, middleware support, and optional database integration. Select an endpoint below to learn more.\n      </p>\n      <div className={styles.cardContainer}>\n        <Link to="/docs/api/createSyncedStore" className={styles.card}>\n          <h3>createSyncedStore</h3>\n          <p>Create a synced store with persistence and optional database integration.</p>\n        </Link>\n\n        <Link to="/docs/api/useStore" className={styles.card}>\n          <h3>useStore</h3>\n          <p>Access the store\'s current state and actions using this React hook.</p>\n        </Link>\n\n        <Link to="/docs/api/actions" className={styles.card}>\n          <h3>actions</h3>\n          <p>Predefined actions defined during store creation to update state.</p>\n        </Link>\n\n        <Link to="/docs/api/getState" className={styles.card}>\n          <h3>getState</h3>\n          <p>Retrieve the current state of the store synchronously.</p>\n        </Link>\n\n        <Link to="/docs/api/setState" className={styles.card}>\n          <h3>setState</h3>\n          <p>Update the store\'s state using direct or functional updates.</p>\n        </Link>\n\n        <Link to="/docs/api/subscribe" className={styles.card}>\n          <h3>subscribe</h3>\n          <p>Listen for state changes in the store and react accordingly.</p>\n        </Link>\n\n        <Link to="/docs/api/persist" className={styles.card}>\n          <h3>persist</h3>\n          <p>Manually trigger persistence of the current state to storage.</p>\n        </Link>\n\n        <Link to="/docs/api/rehydrate" className={styles.card}>\n          <h3>rehydrate</h3>\n          <p>Load persisted state into the store, merging it with the initial state.</p>\n        </Link>\n\n        <Link to="/docs/api/addMiddleware" className={styles.card}>\n          <h3>addMiddleware</h3>\n          <p>Add custom middleware to process and transform state updates.</p>\n        </Link>\n\n        <Link to="/docs/api/resetStore" className={styles.card}>\n          <h3>resetStore</h3>\n          <p>Reset the store to its initial state and clear persisted data.</p>\n        </Link>\n\n        <Link to="/docs/api/fetchFromDB" className={styles.card}>\n          <h3>fetchFromDB</h3>\n          <p>(Optional) Fetch data from an external database to update the store.</p>\n        </Link>\n\n        <Link to="/docs/api/saveToDB" className={styles.card}>\n          <h3>saveToDB</h3>\n          <p>(Optional) Save the current store state to an external database.</p>\n        </Link>\n      </div>\n    </>\n  )\n}\n'})})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},7066:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(4344);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[520],{4424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/createSyncedStore","title":"createSyncedStore","description":"createSyncedStore is the primary function used to create a synced store that integrates state management with persistence and optional database support. It allows you to effortlessly set up a store with automatic rehydration, configurable merge strategies, and even database synchronization.","source":"@site/docs/api/createSyncedStore.md","sourceDirName":"api","slug":"/api/createSyncedStore","permalink":"/api/createSyncedStore","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"alphadevking","lastUpdatedAt":1740874064000,"frontMatter":{"title":"createSyncedStore","sidebar_label":"createSyncedStore"},"sidebar":"api","previous":{"title":"API Reference","permalink":"/api"},"next":{"title":"useStore","permalink":"/api/useStore"}}');var s=t(612),i=t(7066);const o={title:"createSyncedStore",sidebar_label:"createSyncedStore"},a="createSyncedStore",c={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"createsyncedstore",children:"createSyncedStore"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"createSyncedStore"})," is the primary function used to create a synced store that integrates state management with persistence and optional database support. It allows you to effortlessly set up a store with automatic rehydration, configurable merge strategies, and even database synchronization."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createSyncedStore } from 'zustand-storage';\n\nconst store = createSyncedStore({\n  key: 'app-state',\n  initialState: { count: 0 },\n  actions: (set, get) => ({\n    increment: () => set({ count: get().count + 1 }),\n  }),\n  syncOptions: {\n    debounce: 300,\n    persistOn: 'change',\n    onError: (error) => console.error(\"Sync error:\", error),\n  },\n  mergeStrategy: 'deep',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"key"}),": ",(0,s.jsx)(n.code,{children:"string"}),"\nThe storage key used to persist and retrieve state."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initialState"}),": ",(0,s.jsx)(n.code,{children:"State"}),"\nThe initial state of your store."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"actions"}),": ",(0,s.jsx)(n.code,{children:"(set: StoreSet<State>, get: () => State) => Actions"}),"\nA function that returns an object containing action methods to update the state."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"syncOptions"}),": ",(0,s.jsx)(n.code,{children:"SyncOptions<State>"})," (optional)\nConfiguration options for state persistence:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"debounce"}),": ",(0,s.jsx)(n.code,{children:"number"})," \u2013 The debounce delay in milliseconds to throttle persistence calls."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"persistOn"}),": ",(0,s.jsx)(n.code,{children:"'change' | 'interval'"})," \u2013 Determines whether the state should be persisted on change or at set intervals."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"onError"}),": ",(0,s.jsx)(n.code,{children:"(error: Error) => void"})," \u2013 A callback function that is invoked if persistence fails."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"mergeStrategy"}),": ",(0,s.jsx)(n.code,{children:"'deep' | 'shallow' | 'replace'"})," (optional)\nDefines how to merge the persisted state with the initial state during rehydration."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"migrate"}),": ",(0,s.jsx)(n.code,{children:"(persistedState: any) => State"})," (optional)\nA function to migrate persisted state to the current state structure."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"database"}),": ",(0,s.jsx)(n.code,{children:"DatabaseIntegration<State>"})," (optional)\nConfiguration for integrating with an external database:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"client"}),": A database client instance."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"collectionOrTable"}),": ",(0,s.jsx)(n.code,{children:"string"})," \u2013 The name of the collection or table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fromRecord"}),": ",(0,s.jsx)(n.code,{children:"(record: any) => Partial<State>"})," (optional) \u2013 Transforms a database record into a partial state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"toRecord"}),": ",(0,s.jsx)(n.code,{children:"(state: State) => object"})," (optional) \u2013 Transforms the current state into a record for the database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"onError"}),": ",(0,s.jsx)(n.code,{children:"(error: Error) => void"})," (optional) \u2013 Error handler for database operations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"createSyncedStore"})," returns an object representing the synced store, which includes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"useStore"}),": A React hook to access the state and actions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"getState"}),": Function to retrieve the current state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"setState"}),": Function to update the state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"subscribe"}),": Function to subscribe to state changes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"persist"}),": Function to manually trigger state persistence."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"rehydrate"}),": Function to rehydrate the state from storage."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"addMiddleware"}),": Function to add custom middleware for state updates."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"resetStore"}),": Function to reset the store to its initial state and clear persisted data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"actions"}),": The actions object defined during store creation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fetchFromDB"}),": (Optional) Function to fetch data from the database."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"saveToDB"}),": (Optional) Function to save the current state to the database."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Below is a complete example using ",(0,s.jsx)(n.code,{children:"createSyncedStore"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createSyncedStore } from 'zustand-storage';\n\ninterface AppState {\n  count: number;\n}\n\ninterface AppActions {\n  increment: () => void;\n}\n\nconst store = createSyncedStore<AppState, AppActions>({\n  key: 'app-state',\n  initialState: { count: 0 },\n  actions: (set, get) => ({\n    increment: () => set({ count: get().count + 1 }),\n  }),\n  syncOptions: {\n    debounce: 300,\n    persistOn: 'change',\n    onError: (error) => console.error(\"Sync error:\", error),\n  },\n  mergeStrategy: 'deep',\n});\n\nexport default store;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Persistence and Rehydration:"}),"\nThe store is automatically rehydrated upon creation, ensuring that persisted state is loaded seamlessly."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Database Integration:"}),"\nIf configured, the optional ",(0,s.jsx)(n.code,{children:"fetchFromDB"})," and ",(0,s.jsx)(n.code,{children:"saveToDB"})," methods allow for synchronizing state with an external database."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Middleware Support:"}),"\nCustom middleware can be added to transform or monitor state changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This function streamlines the process of combining state management with persistence, allowing you to focus on building your application logic while Zustand Storage handles the rest."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7066:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(4344);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
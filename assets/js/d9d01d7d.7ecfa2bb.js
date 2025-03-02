"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[588],{7066:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(4344);const s={},d=a.createContext(s);function r(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(d.Provider,{value:t},e.children)}},9417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"api/addMiddleware","title":"addMiddleware","description":"The addMiddleware function allows you to register custom middleware that processes and potentially transforms the store\'s state whenever it updates. This is useful for adding side effects, logging, state normalization, or any other custom behavior that needs to be applied to state changes.","source":"@site/docs/api/addMiddleware.md","sourceDirName":"api","slug":"/api/addMiddleware","permalink":"/api/addMiddleware","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"alphadevking","lastUpdatedAt":1740874064000,"frontMatter":{"title":"addMiddleware","sidebar_label":"addMiddleware"},"sidebar":"api","previous":{"title":"rehydrate","permalink":"/api/rehydrate"},"next":{"title":"resetStore","permalink":"/api/resetStore"}}');var s=n(612),d=n(7066);const r={title:"addMiddleware",sidebar_label:"addMiddleware"},i="addMiddleware",o={},l=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Additional Notes",id:"additional-notes",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"addmiddleware",children:"addMiddleware"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"addMiddleware"})," function allows you to register custom middleware that processes and potentially transforms the store's state whenever it updates. This is useful for adding side effects, logging, state normalization, or any other custom behavior that needs to be applied to state changes."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import store from './store';\n\nstore.addMiddleware((state) => {\n  // Example: Log the current state whenever it updates.\n  console.log('Middleware processing state:', state);\n\n  // You can modify the state if necessary.\n  return state;\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"middleware"}),": A function that takes the current state as its argument and returns a new state. This function is executed immediately upon addition and on every subsequent state update."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return a value. Instead, it registers the middleware to be applied to all state updates."}),"\n",(0,s.jsx)(t.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Immediate Execution:"}),"\nWhen added, the middleware is executed immediately with the current state, ensuring any transformation or side effect is applied right away."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Multiple Middleware:"}),"\nYou can add multiple middleware functions. They are executed in the order they are added, allowing for chained transformations."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Common Use Cases:"}),"\nMiddleware is often used for debugging (e.g., logging state changes), modifying state formats, or enforcing certain invariants within your state."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["By using ",(0,s.jsx)(t.code,{children:"addMiddleware"}),", you extend the functionality of your store, making it a powerful tool to tailor state management to your application's specific needs."]})]})}function u(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);
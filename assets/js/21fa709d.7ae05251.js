"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8816],{41583:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>r});n(67294);var i=n(85893),s=n(11151);const o={title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},a=void 0,c={unversionedId:"concepts/nodes/staking/staking-options",id:"concepts/nodes/staking/staking-options",title:"Options for Building Staking Integrations",description:"This document describes the three different methods for staking at a high level.",source:"@site/docs/concepts/nodes/staking/staking-options.mdx",sourceDirName:"concepts/nodes/staking",slug:"/concepts/nodes/staking/staking-options",permalink:"/docs/concepts/nodes/staking/staking-options",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/staking/staking-options.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1684183030,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{title:"Options for Building Staking Integrations",sidebar_title:"Technical Staking Options"},sidebar:"tutorialSidebar",previous:{title:"Manage a Staking Collection",permalink:"/docs/concepts/nodes/staking/staking-collection"},next:{title:"Staking and Delegation rewards",permalink:"/docs/concepts/nodes/staking/staking-rewards"}},d={},r=[];function l(t){const e=Object.assign({p:"p",h1:"h1",a:"a",code:"code"},(0,s.ah)(),t.components),{Callout:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This document describes the three different methods for staking at a high level."}),"\n",(0,i.jsx)(n,{type:"warning",children:(0,i.jsx)(e.p,{children:"We highly recommended you use the Staking Collection paradigm,\nas this will be the most supported method for staking with any set up,\nincluding locked FLOW."})}),"\n",(0,i.jsx)(e.h1,{id:"staking-collection",children:"Staking Collection"}),"\n",(0,i.jsx)(e.p,{children:"A Staking Collection is a resource that allows its owner to manage multiple staking\nobjects in a single account via a single storage path, and perform staking actions\nusing both locked and unlocked Flow. It also supports machine accounts,\na necessary feature for Flow epoch node operation."}),"\n",(0,i.jsx)(e.p,{children:"The staking collection paradigm is the most flexible of the three choices\nand will receive the most support in the future.\nIt is the set-up that Flow Port and many other staking providers use."}),"\n",(0,i.jsxs)(e.p,{children:["The staking collection setup and guide is detailed in the ",(0,i.jsx)(e.a,{href:"/docs/concepts/nodes/staking/staking-collection",children:"staking collection guide."})]}),"\n",(0,i.jsx)(e.h1,{id:"basic-staking",children:"Basic Staking"}),"\n",(0,i.jsxs)(e.p,{children:["The basic method to stake is to stake directly with the ",(0,i.jsx)(e.code,{children:"FlowIDTableStaking"})," smart contract.\nThis would involve calling the node or delegator registration functions directly in the staking\ncontract and storing the staking objects directly in account storage."]}),"\n",(0,i.jsx)(e.p,{children:"This is probably the simplest way to do it, but it is not very flexible\nand not recommended."}),"\n",(0,i.jsxs)(e.p,{children:["The basic staking guide is detailed ",(0,i.jsx)(e.a,{href:"/docs/concepts/nodes/staking/unlocked-staking-guide",children:"here"})]}),"\n",(0,i.jsx)(e.h1,{id:"locked-tokens-staking",children:"Locked Tokens Staking"}),"\n",(0,i.jsx)(e.p,{children:"This method is what almost all of the participants in the Flow Community sale originally used for staking.\nIt involves creating a secondary account that holds the user's locked tokens from the sale.\nA capability is created for the secondary account that allows the user's main account to\nregister to stake and perform staking actions with the locked tokens\nwithout allowing them to actually withdraw any of the locked tokens to their primary account."}),"\n",(0,i.jsxs)(e.p,{children:["The locked account setup is detailed in the ",(0,i.jsx)(e.a,{href:"/docs/concepts/flow-token/locked-account-setup",children:"locked account setup page"}),"\nand the ",(0,i.jsx)(e.a,{href:"./locked-staking-guide",children:"locked account staking guide."})]}),"\n",(0,i.jsx)(e.p,{children:"This version is only recommended if you are dealing with locked tokens,\nbut even if you are using locked tokens, it is recommended that you follow the locked account setup,\nthen use the staking collection for managing staking objects."})]})}const h=function(t){void 0===t&&(t={});const{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(l,t)})):l(t)}}}]);
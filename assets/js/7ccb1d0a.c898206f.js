"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4382],{65655:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});s(67294);var i=s(85893),c=s(11151);const n={title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes"},r=void 0,a={unversionedId:"concepts/nodes/archive-api-rate-limits",id:"concepts/nodes/archive-api-rate-limits",title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes",description:"Rate limits",source:"@site/docs/concepts/nodes/archive-api-rate-limits.mdx",sourceDirName:"concepts/nodes",slug:"/concepts/nodes/archive-api-rate-limits",permalink:"/docs/concepts/nodes/archive-api-rate-limits",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/archive-api-rate-limits.mdx",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683160952,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{title:"Flow Archive Access API rate limits on Dapper Labs Archive nodes"},sidebar:"tutorialSidebar",previous:{title:"Flow Archive Node Access API Specification",permalink:"/docs/concepts/nodes/archive-access-api"},next:{title:"Delegation",permalink:"/docs/concepts/nodes/delegation"}},l={},o=[{value:"Rate limits",id:"rate-limits",level:4},{value:"Mainnet",id:"mainnet",level:5},{value:"Testnet and Sandboxnet",id:"testnet-and-sandboxnet",level:5}];function d(e){const t=Object.assign({h4:"h4",p:"p",a:"a",code:"code",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h4,{id:"rate-limits",children:"Rate limits"}),"\n",(0,i.jsxs)(t.p,{children:["Following are the current rate limits for the ",(0,i.jsx)(t.a,{href:"archive-access-api",children:"Archive Node gRPC API"})," in total across all Dapper Labs Archive nodes. The actual limits are enforced by each individual node. If you are using a load balanced endpoint, the limits below are the max rate, and may vary depending on how your requests are routed."]}),"\n",(0,i.jsxs)(t.p,{children:["Once the limit has reached, the client will receive an RPC error ",(0,i.jsx)(t.code,{children:"ResourceExhausted"})," in the gRPC response."]}),"\n",(0,i.jsxs)(t.p,{children:["Please note, these limits only apply to the archive nodes hosted by Dapper Labs. Archive nodes run by other node operators will have different rate limits.\nAlso, all the gRPC endpoints listed below start with ",(0,i.jsx)(t.code,{children:"flow.access.AccessAPI"})," due to the Archive Access API having the same gRPC protobuf definitions as the original Access API from our ",(0,i.jsx)(t.a,{href:"https://docs.onflow.org/nodes/node-operation/node-roles/#access",children:"Access Nodes"}),". For information on rate limitting of the Access API for Flow's Access Nodes please visit ",(0,i.jsx)(t.a,{href:"https://developers.flow.com/nodes/access-api-rate-limits",children:"this page"}),"."]}),"\n",(0,i.jsx)(t.h5,{id:"mainnet",children:"Mainnet"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{align:"left",children:"gRPC API"}),(0,i.jsx)(t.th,{align:"center",children:"Total request per second per client IP"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtBlockHeight"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]})]})]}),"\n",(0,i.jsx)(t.h5,{id:"testnet-and-sandboxnet",children:"Testnet and Sandboxnet"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{align:"left",children:"gRPC API"}),(0,i.jsx)(t.th,{align:"center",children:"Total request per second per IP"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/GetAccountAtLatestBlock"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockID"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{align:"left",children:"flow.access.AccessAPI/ExecuteScriptAtBlockHeight"}),(0,i.jsx)(t.td,{align:"center",children:"5"})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);
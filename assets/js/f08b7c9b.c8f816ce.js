"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[939],{91834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});a(67294);var n=a(85893),o=a(11151);const s={title:"Staking FAQ",sidebar_title:"FAQs",description:"Frequently Asked Questions"},i=void 0,r={unversionedId:"concepts/nodes/staking/faq",id:"concepts/nodes/staking/faq",title:"Staking FAQ",description:"Frequently Asked Questions",source:"@site/docs/concepts/nodes/staking/faq.md",sourceDirName:"concepts/nodes/staking",slug:"/concepts/nodes/staking/faq",permalink:"/docs/concepts/nodes/staking/faq",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/staking/faq.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1683160952,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{title:"Staking FAQ",sidebar_title:"FAQs",description:"Frequently Asked Questions"},sidebar:"tutorialSidebar",previous:{title:"Epoch and Staking Terminology",permalink:"/docs/concepts/nodes/staking/epoch-terminology"},next:{title:"How to Stake with Locked FLOW",permalink:"/docs/concepts/nodes/staking/locked-staking-guide"}},d={},l=[{value:"Where will users receive their staking reward for each staking option?",id:"where-will-users-receive-their-staking-reward-for-each-staking-option",level:3},{value:"Will staking rewards be automatically re-staked?",id:"will-staking-rewards-be-automatically-re-staked",level:3},{value:"Does it make a difference as to what TYPE of node we delegate to in terms of rewards?",id:"does-it-make-a-difference-as-to-what-type-of-node-we-delegate-to-in-terms-of-rewards",level:3},{value:"Can a validator change its fees?",id:"can-a-validator-change-its-fees",level:3},{value:"Can a token holder stake to multiple nodes? If yes, how is the stake split between them?",id:"can-a-token-holder-stake-to-multiple-nodes-if-yes-how-is-the-stake-split-between-them",level:3},{value:"Is there a utility to generate the FLOW addresses?",id:"is-there-a-utility-to-generate-the-flow-addresses",level:3},{value:"Is the wallet key transferred to the staked node?",id:"is-the-wallet-key-transferred-to-the-staked-node",level:3},{value:"Can I stake through multiple accounts to meet the minimum FLOW required for staking a node?",id:"can-i-stake-through-multiple-accounts-to-meet-the-minimum-flow-required-for-staking-a-node",level:3},{value:"How can I reach the Consensus node minimum stake of 500K FLOW",id:"how-can-i-reach-the-consensus-node-minimum-stake-of-500k-flow",level:3},{value:"Is rewards payout another spork?",id:"is-rewards-payout-another-spork",level:3},{value:"Can I query an account address of a node ID or delegator ID?",id:"can-i-query-an-account-address-of-a-node-id-or-delegator-id",level:3}];function c(e){const t=Object.assign({h3:"h3",p:"p",a:"a",em:"em",code:"code"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"where-will-users-receive-their-staking-reward-for-each-staking-option",children:"Where will users receive their staking reward for each staking option?"}),"\n",(0,n.jsx)(t.p,{children:"Staking rewards are not deposited directly into a user's account.\nThey are deposited to the user's rewards pool in their connected staking object\nand can be withdrawn or restaked at any time."}),"\n",(0,n.jsx)(t.p,{children:"If you staked using Flow Port, then you should be able to see your staking rewards there.\nYou can also withdraw the rewards or manually re-stake them through Flow Port."}),"\n",(0,n.jsxs)(t.p,{children:["If you staked using a staking provider such as Kraken, Blocto or Finoa,\nplease read ",(0,n.jsx)(t.a,{href:"/docs/concepts/nodes/staking/custody-providers",children:"our guides"})," for more information."]}),"\n",(0,n.jsx)(t.h3,{id:"will-staking-rewards-be-automatically-re-staked",children:"Will staking rewards be automatically re-staked?"}),"\n",(0,n.jsxs)(t.p,{children:["There will be ",(0,n.jsx)(t.em,{children:"no"})," automatic re-staking of staking rewards with Flow Port (i.e. using Ledger or Blocto).\nIf you want to re-stake your rewards, you must manually do so yourself."]}),"\n",(0,n.jsxs)(t.p,{children:["If you staked using a staking provider such as Kraken, Blocto or Finoa,\nplease read ",(0,n.jsx)(t.a,{href:"/docs/concepts/nodes/staking/custody-providers",children:"our guides"})," for more information."]}),"\n",(0,n.jsxs)(t.p,{children:["DeFi liquid staking strategies such as offered by ",(0,n.jsx)(t.a,{href:"https://app.increment.fi/staking",children:"incrementFi"}),"\nare not managed by the protocol or nodes, but are more sophisticated ways\nto manage your staking."]}),"\n",(0,n.jsx)(t.h3,{id:"does-it-make-a-difference-as-to-what-type-of-node-we-delegate-to-in-terms-of-rewards",children:"Does it make a difference as to what TYPE of node we delegate to in terms of rewards?"}),"\n",(0,n.jsx)(t.p,{children:"No, rewards are calculated the same for every node type."}),"\n",(0,n.jsx)(t.h3,{id:"can-a-validator-change-its-fees",children:"Can a validator change its fees?"}),"\n",(0,n.jsx)(t.p,{children:"The network enforces a delegation fee of 8% which cannot be directly changed.\nAny different fees that nodes claim they have are rebates that they\noffer using their own methods and are not enforced by the protocol."}),"\n",(0,n.jsx)(t.h3,{id:"can-a-token-holder-stake-to-multiple-nodes-if-yes-how-is-the-stake-split-between-them",children:"Can a token holder stake to multiple nodes? If yes, how is the stake split between them?"}),"\n",(0,n.jsxs)(t.p,{children:["A token holder can delegate to multiple nodes from a single account if they use the\n",(0,n.jsx)(t.a,{href:"/docs/concepts/nodes/staking/staking-collection",children:"Staking Collection"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The staking collection is enabled by default on Flow port, and many custody providers also support it."}),"\n",(0,n.jsx)(t.h3,{id:"is-there-a-utility-to-generate-the-flow-addresses",children:"Is there a utility to generate the FLOW addresses?"}),"\n",(0,n.jsx)(t.p,{children:"Staking of FLOW has to be done via Flow port which requires a login through Ledger or Blocto.\nHence, a utility cannot be used to generate a Flow address since it cannot be used to stake via Flow port."}),"\n",(0,n.jsx)(t.h3,{id:"is-the-wallet-key-transferred-to-the-staked-node",children:"Is the wallet key transferred to the staked node?"}),"\n",(0,n.jsx)(t.p,{children:"No - The keys on the node are different from the wallet keys. The wallet keys always stay in the wallet.\nA node operator generates the staking and networking keys separately which will be used on the node."}),"\n",(0,n.jsx)(t.h3,{id:"can-i-stake-through-multiple-accounts-to-meet-the-minimum-flow-required-for-staking-a-node",children:"Can I stake through multiple accounts to meet the minimum FLOW required for staking a node?"}),"\n",(0,n.jsx)(t.p,{children:"No, the minimum stake must come from a single account for all node types.\nTemporarily, the minimum for consensus nodes can come from a combination\nof staking actions from two accounts controlled by the same party."}),"\n",(0,n.jsx)(t.h3,{id:"how-can-i-reach-the-consensus-node-minimum-stake-of-500k-flow",children:"How can I reach the Consensus node minimum stake of 500K FLOW"}),"\n",(0,n.jsx)(t.p,{children:"The consensus node minimum of 500K FLOW can be met with a minimum\n250,000 FLOW staking action and additional delegation\nadding a minimum of 250,000 more FLOW from the same entity."}),"\n",(0,n.jsx)(t.h3,{id:"is-rewards-payout-another-spork",children:"Is rewards payout another spork?"}),"\n",(0,n.jsx)(t.p,{children:"No, rewards payout is not a spork but (currently) a separate transaction\nthat the Flow governance committee initiates."}),"\n",(0,n.jsx)(t.h3,{id:"can-i-query-an-account-address-of-a-node-id-or-delegator-id",children:"Can I query an account address of a node ID or delegator ID?"}),"\n",(0,n.jsxs)(t.p,{children:["The staking smart contract does not directly associate a node or delegator with an account address.\nIt associates it with the assigned resource object that corresponds to that entry in the contract.\nThere can be any number of these objects stored in the same account,\nand they can be moved to different accounts if the owner chooses.\nIt is possible to query the information about a node that an address runs though, by using the\n",(0,n.jsx)(t.code,{children:"get_node_info_from_address.cdc"})," script."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[83831],{87696:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});o(67294);var t=o(85893),i=o(11151);const s={title:"Launch a Token",sidebar_label:"Launch a Token",description:"Launch a Fungible or Non-Fungible Token on the Flow Network.",sidebar_position:5,sidebar_custom_props:{icon:"\ud83d\udcd3"}},l=void 0,a={unversionedId:"guides/launchToken",id:"version-stable/guides/launchToken",title:"Launch a Token",description:"Launch a Fungible or Non-Fungible Token on the Flow Network.",source:"@site/versioned_docs/version-stable/guides/launchToken.md",sourceDirName:"guides",slug:"/guides/launchToken",permalink:"/docs/guides/launchToken",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/launchToken.md",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694724388,formattedLastUpdatedAt:"Sep 14, 2023",sidebarPosition:5,frontMatter:{title:"Launch a Token",sidebar_label:"Launch a Token",description:"Launch a Fungible or Non-Fungible Token on the Flow Network.",sidebar_position:5,sidebar_custom_props:{icon:"\ud83d\udcd3"}},sidebar:"guides",previous:{title:"Building an App",permalink:"/docs/guides/flow-app-quickstart"},next:{title:"Running a Node",permalink:"/docs/guides/runningNode"}},r={},c=[{value:"Token Standards",id:"token-standards",level:2},{value:"Non-Fungible Tokens (NFTs)",id:"non-fungible-tokens-nfts",level:3},{value:"Fungible Tokens",id:"fungible-tokens",level:3},{value:"How to Launch a Fungible Token",id:"how-to-launch-a-fungible-token",level:2},{value:"Final Words",id:"final-words",level:2}];function d(e){const n=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",ul:"ul",li:"li",h1:"h1",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"token-standards",children:"Token Standards"}),"\n",(0,t.jsxs)(n.p,{children:["It is important that Flow has Token Standards for ",(0,t.jsx)(n.a,{href:"/docs/building-on-flow/core-contracts/flow-ft/",children:"Fungible tokens"})," and ",(0,t.jsx)(n.a,{href:"/docs/building-on-flow/core-contracts/flow-nft/",children:"Non-fungible"})," tokens. This allows applications and other smart contracts to interact with your token in a predictable way."]}),"\n",(0,t.jsx)(n.h3,{id:"non-fungible-tokens-nfts",children:"Non-Fungible Tokens (NFTs)"}),"\n",(0,t.jsxs)(n.p,{children:["All NFTs on the Flow blockchain implement the ",(0,t.jsx)(n.a,{href:"/docs/building-on-flow/core-contracts/non-fungible-token",children:"NonFungibleToken"})," interface, allowing them to be compatible with wallets, marketplaces and other cross-app experiences."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/building-on-flow/core-contracts/non-fungible-token",children:"Non-Fungible Token (NFT) contract interface"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fungible-tokens",children:"Fungible Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["The FLOW token is a fungible token, ",(0,t.jsx)(n.a,{href:"../building-on-flow/core-contracts/flow-token",children:"More Information"}),".  Fungible tokens can be used for various reasons on the Flow blockchain."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In order to create a fungible token, the ",(0,t.jsx)(n.a,{href:"../building-on-flow/core-contracts/fungible-token",children:"Fungible tokens"}),", interface has to be implemented."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-launch-a-fungible-token",children:"How to Launch a Fungible Token"}),"\n",(0,t.jsx)(n.p,{children:"There is a lot to consider when creating a token, strong tokenomics, private or public sale, distribution, and finally an organized launch on centralized and decentralized exchanges. These concepts will not be discussed here, only how to create a token."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/onflow/flow-ft",children:"Flow Token Standard"})," - minimum requirements to implement a safe, secure, easy to understand and easy to use fungible token contract"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Example of a Fungible Token Contract ",(0,t.jsx)(n.a,{href:"https://github.com/onflow/flow-ft/blob/master/contracts/ExampleToken.cdc",children:"ExampleToken"}),". See how to deploy contracts ",(0,t.jsx)(n.a,{href:"/docs/guides/deploying/mainnet-deployment",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"how-to-launch-a-non-fungible-token-nft",children:"How to Launch a Non-Fungible Token (NFT)"}),"\n",(0,t.jsx)(n.p,{children:"A NFT collection is very flexible and can be used for many different use cases. The most common use case is for digital art, but it can also be used for collectibles, game items, and more. Keeping this in mind, a tool will help build the NFT collection metadata."}),"\n",(0,t.jsx)(n.p,{children:"A few resources to help start your NFT collection:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.touchstone.city/guide/en/welcome",children:"Touchstone"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://academy.ecdao.org/en/quickstarts/1-non-fungible-token",children:"Emeralkd Academy: Quickstart"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"NFT Catalog"})}),"\n",(0,t.jsxs)(n.p,{children:["After getting your NFT collection created, look into your collection registered on the ",(0,t.jsx)(n.a,{href:"/docs/tools/toolchains/nft-catalog/overview",children:"NFT catalog"}),". The NFT Catalog will allow developers to easily discover your NFT collection. This will give them the opportunity to integrate your collection into their applications."]}),"\n",(0,t.jsx)(n.h2,{id:"final-words",children:"Final Words"}),"\n",(0,t.jsx)(n.p,{children:"We have given in this guide a number of guidelines and templates to help you get around the cold start problem."}),"\n",(0,t.jsx)(n.p,{children:"More Resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/FlowFans/flow-token-list",children:"Flow Token List"})," - how to add a token to the Flow native token list"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLSdMiIkj2goF3Ib7wJHRb-YNvruwBghq1NP1IOfz4p2smIFp0w/viewform",children:"Flowscan Request Form"})," | Token Metadata - please fill this out to update your token metadata on Flowscan"]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}}}]);
"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75961],{28722:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});a(67294);var i=a(85893),s=a(11151);const r={title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",sidebar_label:"Best practices",sidebar_position:2,sidebar_custom_props:{icon:"\ud83e\udd47"}},n=void 0,c={unversionedId:"guides/nft-marketplace/best-practices",id:"guides/nft-marketplace/best-practices",title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",source:"@site/docs/guides/nft-marketplace/best-practices.md",sourceDirName:"guides/nft-marketplace",slug:"/guides/nft-marketplace/best-practices",permalink:"/docs/next/guides/nft-marketplace/best-practices",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/nft-marketplace/best-practices.md",tags:[],version:"current",lastUpdatedBy:"Gregor G",lastUpdatedAt:1693503861,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:2,frontMatter:{title:"Best practices",description:"Learn about best practices and patterns for NFT marketplaces",sidebar_label:"Best practices",sidebar_position:2,sidebar_custom_props:{icon:"\ud83e\udd47"}},sidebar:"guides",previous:{title:"Overview",permalink:"/docs/next/guides/nft-marketplace/overview"},next:{title:"Building blocks",permalink:"/docs/next/guides/nft-marketplace/building-blocks"}},l={},o=[{value:"Maintain accuracy of displayed price",id:"maintain-accuracy-of-displayed-price",level:2},{value:"Clean up stale NFT listings",id:"clean-up-stale-nft-listings",level:2},{value:"Provide rich filtering/search capabilities",id:"provide-rich-filteringsearch-capabilities",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",a:"a"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Besides following the best practices of building a scalable web application that can handle unexpected user traffic surge, NFT marketplaces should also follow the best practices listed below but often ignored."}),"\n",(0,i.jsx)(t.h2,{id:"maintain-accuracy-of-displayed-price",children:"Maintain accuracy of displayed price"}),"\n",(0,i.jsx)(t.p,{children:"NFT purchase ultimately settles on the blockchain, but NFT buyers see the prices of the NFTs for sale on the marketplace website. The marketplace platform should ensure that the price listed on the web page, their backend, and the blockchain are in sync. If that is not the case, it can lead to ugly surprises for the NFT buyers."}),"\n",(0,i.jsx)(t.h2,{id:"clean-up-stale-nft-listings",children:"Clean up stale NFT listings"}),"\n",(0,i.jsxs)(t.p,{children:["Often, sellers change their listing price for the NFT on sale. That can lead to multiple listings on the chain. After a price change, marketplace platforms should ensure that any lower price listings are deleted from the chain. Also, once the NFT is sold, the marketplace should ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/nft-storefront/blob/main/transactions/cleanup_purchased_listings.cdc",children:"clean up"})," all sale listings for that NFT."]}),"\n",(0,i.jsx)(t.h2,{id:"provide-rich-filteringsearch-capabilities",children:"Provide rich filtering/search capabilities"}),"\n",(0,i.jsx)(t.p,{children:"Frequently, NFT buyers are inundated by irrelevant NFTs while not being able to find what they are looking for. Having comprehensive search and filtering capabilities on the platform can help provide good UX to the NFT buyers. Filtering capability should be implemented, keeping in mind that different NFT types have different traits"})]})}const p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);
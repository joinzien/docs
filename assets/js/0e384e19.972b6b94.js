"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{9698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r=n.p+"assets/images/expanded_diagram-7b378aead054133bb3e27dfd0814af4a.png",i=n.p+"assets/images/state_change-76392db1d066e531eee9a6e1b2e94c24.png",s={slug:"/"},d="Expanded NFTs",l={unversionedId:"intro",id:"intro",title:"Expanded NFTs",description:"Intro",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",frontMatter:{slug:"/"},sidebar:"tutorialSidebar"},p={},c=[{value:"Intro",id:"intro",level:3},{value:"How do Expanded NFTs work?",id:"how-do-expanded-nfts-work",level:3},{value:"Which token standard do Expanded NFTs use?",id:"which-token-standard-do-expanded-nfts-use",level:3},{value:"Are there any examples of Expanded NFTs?",id:"are-there-any-examples-of-expanded-nfts",level:3},{value:"Why Expanded NFTs?",id:"why-expanded-nfts",level:3}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expanded-nfts"},"Expanded NFTs"),(0,o.kt)("h3",{id:"intro"},"Intro"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/joinzien/expanded-nft"},"Expanded NFTs")," are Non-Fungible Tokens (ERC-721) introduced by Zien that can be redeemed on-chain for unique physical counterparts. A format for artworks between off-chain and on-chain that enables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hybrid digital/material artworks"),(0,o.kt)("li",{parentName:"ul"},"A new way for artists to produce and distribute physical art"),(0,o.kt)("li",{parentName:"ul"},"A new way for people to collect contemporary art")),(0,o.kt)("img",{src:r}),(0,o.kt)("h3",{id:"how-do-expanded-nfts-work"},"How do Expanded NFTs work?"),(0,o.kt)("p",null,"Expanded NFTs create an alternative approach to ",(0,o.kt)("em",{parentName:"p"},"redeeming")," NFTs in contexts where the material nature of physical objects cannot or should not be automated (i.e. 3D printed). Our interest at Zien is enabling the creation of digital-first artworks that aren't limited in how they can be expressed physically. We imagine the process could also be useful in other contexts."),(0,o.kt)("img",{src:i}),(0,o.kt)("p",null,"Expanded NFTs have four primary states governing the digital to physical state-change process: ",(0,o.kt)("code",null,"minted"),", ",(0,o.kt)("code",null,"sealed"),", ",(0,o.kt)("code",null,"unsealed")," and ",(0,o.kt)("code",null,"delivered"),". The first implementation of Expanded NFTs includes an appointed person or team to manage off-chain queries that aren't yet resolved using oracles or governance processes. Over time we imagine a decentralised ecosystem of production removing the reliance on a centralised team ('Progressively Decentralised Production')."),(0,o.kt)("p",null,"In the instance of Zien, Expanded NFT holders send ",(0,o.kt)("strong",{parentName:"p"},"redeem")," to the ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/Zienzienbot"},"Zien bot")," on Telegram to trigger the process into action (call ",(0,o.kt)("code",null,"redeem"),"). Detailed production costs and timeframe are presented to Expanded NFT holders (",(0,o.kt)("code",null,"setOfferTerms"),") who accept/reject the terms on-chain (",(0,o.kt)("code",null,"acceptOfferTerms")," or ",(0,o.kt)("code",null,"rejectOfferTerms"),"). If accepted, a USDC transaction is confirmed, and the Expanded NFT moves to the ",(0,o.kt)("code",null,"unsealed")," state. This locks the Expanded NFT to the owners' wallet for the duration of production. "),(0,o.kt)("p",null,"When production is complete and before shipping, the metadata of the Expanded NFT is updated to include references to high-resolution images of the artwork and a condition report (",(0,o.kt)("code",null,"productionComplete"),"). Upon delivery of the physical artwork, owners process an on-chain transaction to unlock and complete the Expanded NFT state-change process (",(0,o.kt)("code",null,"acceptDelivery"),")."),(0,o.kt)("h3",{id:"which-token-standard-do-expanded-nfts-use"},"Which token standard do Expanded NFTs use?"),(0,o.kt)("p",null,"Expanded NFTs are ERC-721 Non-Fungible Tokens on the Ethereum blockchain, implemented as an extension of the Zora open-source NFT ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ourzora/nft-editions"},"smart-contracts"),"."),(0,o.kt)("h3",{id:"are-there-any-examples-of-expanded-nfts"},"Are there any examples of Expanded NFTs?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zien.io/drop/agnieszka-kurant-sentimentite"},"Sentimentite")," by Agnieszka Kurant is the first hybrid digital/physical object (artwork) to use the Expanded NFT format. New drops of Expanded NFTs are in production and the code is open-source and freely available for implementing within other projects."),(0,o.kt)("h3",{id:"why-expanded-nfts"},"Why Expanded NFTs?"),(0,o.kt)("p",null,"At Zien, we believe much of our lives today exists in the 2.5th Dimension. The non-hierarchy between online and offline, between on-chain, vs off-chain. In many ways the original ",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-721"},"EIP-721: Non-Fungible Token Standard")," written in 2018 references this ",(0,o.kt)("em",{parentName:"p"},"in-between")," space:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more."')),(0,o.kt)("p",null,"The short but expansive history of relating second and third dimensions on-chain is rich with experiments and one we hope Expanded NFTs can contribute to, helping to realise ambitious art as the traditional art world(s) and crypto converge and offer an alternative solution to connecting NFTs with physical assets."),(0,o.kt)("p",null,"Read more in our ",(0,o.kt)("a",{parentName:"p",href:"https://mirror.xyz/0x024287720C7260c5BcD06Aa5C6C89975d27b5eb3/RjqnOq1IUO2RR03iyP7ZRBKvfy4SqZypc2APWjGYMUg"},"Mirror post"),"."))}u.isMDXComponent=!0}}]);
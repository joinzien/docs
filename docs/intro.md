---
slug: /
---

# Expanded NFTs

### Intro
[Expanded NFTs](https://github.com/joinzien/expanded-nft) are Non-Fungible Tokens (ERC-721) introduced by Zien that can be redeemed on-chain for unique physical counterparts. A format for art between off-chain and on-chain that enables:
* Hybrid digital / material artworks
* A new way for artists to produce and distribute physical art
* A new way for people to collect physical art

import ExpandedDiagramUrl from '@site/static/img/expanded_diagram.png';

<img src={ExpandedDiagramUrl} />

### How do Expanded NFTs work?
Expanded NFTs create an alternative approach to *redeeming* NFTs in contexts where the material nature of physical objects can't or shouldn't be automated (i.e. 3D printed). Our interest at Zien is enabling the creation of digital-first artworks that aren't limited in how they can be expressed physically. We imagine the process could be useful in other contexts.

import StateChangeUrl from '@site/static/img/state_change.png';

<img src={StateChangeUrl} />

Expanded NFTs have four primary states governing the digital to physical state-change process: <code>minted</code>, <code>sealed</code>, <code>unsealed</code> and <code>delivered</code>. The first implementation of Expanded NFTs includes an appointed person or team to manage off-chain queries that aren't yet resolved using oracles or governance processes. Over time we imagine a decentralised ecosystem of production removing the reliance on a centralised team ('Progressively Decentralised Production').

In the instance of Zien, Expanded NFT holders send **redeem** to the Zien WhatsApp channel to trigger the process into action (call <code>redeem</code>). Detailed production costs and timeframe are presented to Expanded NFT holders (<code>setOfferTerms</code>) who accept/reject the terms on-chain (<code>acceptOfferTerms</code> or <code>rejectOfferTerms</code>). If accepted, a USDC transaction is confirmed, and the Expanded NFT moves to the <code>unsealed</code> state. This locks the Expanded NFT to the owners' wallet for the duration of production. 

When production is complete and before shipping, metadata of the Expanded NFT is updated to include references to high-resolution images of the artwork and condition report (<code>productionComplete</code>). Upon delivery of the physical artwork, owners process an on-chain transaction to unlock and complete the Expanded NFT state-change process (<code>acceptDelivery</code>).

### Which token standard do Expanded NFTs use?
Expanded NFTs are ERC-721 Non-Fungible Tokens on the Ethereum blockchain, implemented as an extension of the Zora open-source NFT [smart-contracts](https://github.com/ourzora/nft-editions).

### Are there any examples of Expanded NFTs?
[Sentimentite](https://zien.io/drop/agnieszka-kurant-sentimentite) by Agnieszka Kurant is the first hybrid digital/physical object (artwork) to use the Expanded NFT format. New drops of Expanded NFTs are in production and the code is freely available for implementing within other projects.

### Why Expanded NFTs?
At Zien, we believe much of our lives today exists in the 2.5th Dimension. The non-hierarchy between online and offline, between on-chain, vs off-chain. In many ways the original [EIP-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) written in 2018 references this *in-between* space:

>"NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more."

The short but expansive history of relating second and third dimensions on-chain is rich with experiments and one we hope Expanded NFTs can contribute to, helping to realise ambitious art as the traditional art world(s) and crypto converge and offer an alternative solution to connecting NFTs with physical assets.

Read more on our [Mirror post](https://mirror.xyz/0x024287720C7260c5BcD06Aa5C6C89975d27b5eb3/RjqnOq1IUO2RR03iyP7ZRBKvfy4SqZypc2APWjGYMUg).
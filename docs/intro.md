---
sidebar_position: 1
title: Introduction
---

# Introduction

Pixel Protocol is the canonical, public specification for the Pixels packet protocol. It documents every message exchanged between a Pixels client and server so that independent implementations can achieve full compatibility without reverse-engineering the wire format from scratch.

## About the protocol

The Pixels protocol is a **binary, message-oriented** protocol transported over **WebSocket**. Each message is prefixed with a 4-byte big-endian length, followed by a 2-byte big-endian message ID (header), and then zero or more payload fields serialized in declaration order. An optional **RC4 encryption** layer can be activated after a Diffie-Hellman key exchange during the handshake phase.

Communication is bidirectional:

- **Client → Server (c2s):** messages initiated by the client, such as movement commands, chat, or purchase requests.
- **Server → Client (s2c):** messages initiated by the server, such as room state updates, inventory changes, or authentication confirmations.

## Analysis methodology

This specification was produced by cross-referencing the **Nitro client** (the primary packet-structure authority) with three independent server implementations:

| Codename | Description | Language |
|-----------|-------------|----------|
| **GLADIATOR** | Server implementation A | Java |
| **GALAXY** | Server implementation B | Java |
| **SODIUM** | Server implementation C | C# |

The Nitro client defines the definitive packet headers and field layouts. The server implementations provide behavioural context, validation rules, and compatibility notes.

## Protocol coverage

The table below shows the total number of distinct packet headers registered in each source. These numbers reflect raw header constants or handler classes, so they may include deprecated or unused entries.

| Source | Client → Server | Server → Client | Total |
|--------|:-:|:-:|:-:|
| **Nitro client** | 463 | 459 | **922** |
| **GLADIATOR** | 356 | 468 | **824** |
| **GALAXY** | 365 | 352 | **717** |
| **SODIUM** | 312 | 244 | **556** |

The Nitro client has the broadest coverage and is treated as the authoritative source for header IDs and field order. The counts above reflect unique packet IDs (excluding sentinel values and counting aliases only once).

## Packet realms

All known packets are organized into the following high-level **realms** based on their functional domain. The counts below are derived from Nitro client headers.

| Realm | S2C | C2S | Total | Description |
|-------|:-:|:-:|:-:|-------------|
| **Handshake & Security** | 5 | 8 | **13** | Diffie-Hellman exchange, SSO authentication, machine ID, release version |
| **Session & Connection** | 20 | 10 | **30** | Ping/pong, latency measurement, hotel status, availability, disconnect |
| **User & Profile** | 27 | 29 | **56** | User info, figure, settings, badges, currency, effects, wardrobe, subscription |
| **Messenger & Social** | 16 | 14 | **30** | Friend list, private messages, relationships, follow, invitations |
| **Navigator** | 18 | 37 | **55** | Room search, categories, favorites, popular rooms, room creation |
| **Room** | 44 | 46 | **90** | Room info, model, heightmap, settings, rights, banning, doorbell, events |
| **Room Entities** | 20 | 14 | **34** | Avatar/unit state, movement, chat, shout, whisper, dance, effects, typing |
| **Furniture & Items** | 47 | 52 | **99** | Floor/wall items, dimmer, wired, decorations, mannequins, YouTube display |
| **Catalog & Store** | 11 | 10 | **21** | Store pages, product offers, purchases, gift wrapping, voucher redemption |
| **Subscription & Offers** | 24 | 26 | **50** | Club subscription, targeted offers, builders club, seasonal calendars |
| **Economy & Trading** | 26 | 28 | **54** | Marketplace, trading, credits, rentable spaces |
| **Inventory** | 20 | 13 | **33** | Unseen items, bot/pet/furniture inventory updates |
| **Groups & Forums** | 28 | 36 | **64** | Guild management, badges, member lists, group forums |
| **Pets** | 20 | 21 | **41** | Pet info, breeding, training, riding, leveling, supplements |
| **Achievements & Talents** | 14 | 10 | **24** | Achievement progress, notifications, talent track |
| **Quests & Campaigns** | 18 | 15 | **33** | Quests, seasonal quests, campaigns, competitions, community goals |
| **Games & Entertainment** | 28 | 21 | **49** | Game center, leaderboards, music/jukebox, polls, voting, quizzes |
| **Moderation & Safety** | 40 | 43 | **83** | Mod tools, call-for-help, sanctions, guide system, chat review |
| **Camera & Photos** | 7 | 8 | **15** | Camera snapshots, photo publishing/purchasing, thumbnails |
| **Notifications & Landing** | 16 | 6 | **22** | Desktop view, news, promotions, alerts, welcome gifts, NUX |
| **Crafting & Recycling** | 7 | 9 | **16** | Ecotron, crafting recipes, composting |
| **Other** | 3 | 7 | **10** | Mystery box, fireworks, rentable extensions, miscellaneous |

:::note
These realm counts are approximations based on naming conventions in the Nitro client headers. Some packets could reasonably belong to more than one realm; the grouping is intended as a navigational aid, not a rigid classification.
:::

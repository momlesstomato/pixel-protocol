---
title: marketplace.search_offers
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2407`
- **Header**: `MARKETPLACE_REQUEST_OFFERS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Search for items on the Marketplace

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `minPrice` | `int32` | required | Minimum price filter (-1 for no minimum). |
| `maxPrice` | `int32` | required | Maximum price filter (-1 for no maximum). |
| `query` | `string` | required | Search text to match against item names. |
| `sortType` | `int32` | required | Sort mode for results. |

## Behavior

### Sender
Sent when the player searches the Marketplace using filters or a text query.


### Receiver
The server queries active listings matching the criteria and responds with matching offers and a total count. Confirmed in GLADIATOR.

## Notes

- No additional notes

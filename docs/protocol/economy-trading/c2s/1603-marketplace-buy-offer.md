---
title: marketplace.buy_offer
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1603`
- **Header**: `MARKETPLACE_BUY_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase an item from the Marketplace

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Marketplace offer identifier to purchase. |

## Behavior

### Sender
Sent when the player clicks buy on a Marketplace listing.


### Receiver
The server validates the offer is still available, deducts credits from the buyer, marks the offer as sold, and responds with the purchase result. Confirmed in GLADIATOR.

## Notes

- No additional notes

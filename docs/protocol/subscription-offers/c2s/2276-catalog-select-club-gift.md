---
title: catalog.select_club_gift
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2276`
- **Header**: `CATALOG_SELECT_VIP_GIFT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Select a Club gift from the available rewards

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `giftName` | `string` | required | Product code of the selected gift item. |

## Behavior

### Sender
Sent when the player chooses a gift from the HC/VIP gift selection dialog.


### Receiver
The server validates Club membership, marks the gift as claimed, delivers the item to inventory, and responds with a club gift selected confirmation. Confirmed in GLADIATOR.

## Notes

- No additional notes

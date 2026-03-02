---
title: offer.purchase_targeted
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1826`
- **Header**: `PURCHASE_TARGETED_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase the currently displayed targeted offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Targeted offer identifier. |
| `quantity` | `int32` | required | Number of times to purchase the offer. |

## Behavior

### Sender
Sent when the player clicks the buy button on the targeted offer overlay.


### Receiver
The server validates the offer, deducts credits or activity points, delivers the purchased items to inventory, and removes the offer. Confirmed in GLADIATOR.

## Notes

- No additional notes

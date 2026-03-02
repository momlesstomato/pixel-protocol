---
title: marketplace.cancel_sale
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `434`
- **Header**: `MARKETPLACE_TAKE_BACK_ITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cancel a Marketplace listing and return the item

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Marketplace offer identifier to cancel. |

## Behavior

### Sender
Sent when the player clicks take back on one of their own listings.


### Receiver
The server removes the listing from the Marketplace, returns the item to inventory, and sends a cancellation result. Confirmed in GLADIATOR.

## Notes

- No additional notes

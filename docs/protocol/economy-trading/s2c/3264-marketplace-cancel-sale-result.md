---
title: marketplace.cancel_sale_result
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3264`
- **Header**: `MARKETPLACE_CANCEL_SALE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm a Marketplace listing cancellation

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Marketplace offer that was cancelled. |
| `success` | `boolean` | required | Whether the cancellation was successful. |

## Behavior

### Sender
Sent after a cancel-sale request is processed.


### Receiver
The client removes the listing from the active offers view and returns the item to inventory.

## Notes

- No additional notes

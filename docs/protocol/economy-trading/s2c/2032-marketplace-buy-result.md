---
title: marketplace.buy_result
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2032`
- **Header**: `MARKETPLACE_AFTER_ORDER_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the result of a Marketplace purchase

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | Purchase result code (1=success, 2=sold out, 3=price changed). |
| `newOfferId` | `int32` | required | New offer ID if the offer was updated. |
| `newPrice` | `int32` | required | Updated price if the offer changed. |
| `requestedOfferId` | `int32` | required | Original offer ID that was requested. |

## Behavior

### Sender
Sent after a buy-offer request is processed.


### Receiver
The client shows a success or failure notification and updates the player's credit balance.

## Notes

- No additional notes

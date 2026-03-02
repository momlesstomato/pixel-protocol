---
title: marketplace.can_sell
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `54`
- **Header**: `MARKETPLACE_SELL_ITEM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate whether the player can create Marketplace listings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | Result code (1=allowed, other=denied). |
| `tokenCount` | `int32` | required | Number of listing tokens the player has. |

## Behavior

### Sender
Sent in response to a can-sell eligibility check.


### Receiver
The client enables or disables the sell button based on eligibility.

## Notes

- No additional notes

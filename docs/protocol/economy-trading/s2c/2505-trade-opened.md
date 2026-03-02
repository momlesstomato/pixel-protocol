---
title: trade.opened
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2505`
- **Header**: `TRADE_OPEN`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a trade session has been opened

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | Room entity ID of the first trader. |
| `userCanTrade` | `int32` | required | First user trade capability flag (1=can trade). |
| `otherUserId` | `int32` | required | Room entity ID of the second trader. |
| `otherUserCanTrade` | `int32` | required | Second user trade capability flag. |

## Behavior

### Sender
Sent to both participants when a trade is successfully initiated.


### Receiver
The client opens the trade window showing both inventories.

## Notes

- No additional notes

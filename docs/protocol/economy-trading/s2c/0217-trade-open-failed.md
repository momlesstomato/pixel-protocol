---
title: trade.open_failed
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `217`
- **Header**: `TRADE_OPEN_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that the trade could not be opened

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `int32` | required | Failure reason: 7=requester already trading, 8=target already trading. |
| `otherUserName` | `string` | required | Display name of the other user (if applicable). |

## Behavior

### Sender
Sent when a trade request fails due to the target being unavailable or already trading.


### Receiver
The client shows an error message with the reason.

## Notes

- No additional notes

---
title: trade.closed
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1373`
- **Header**: `TRADE_CLOSED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the trade session was closed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | Room entity ID of the user who closed the trade. |
| `reason` | `int32` | required | Close reason (1=error during commit). |

## Behavior

### Sender
Sent to both participants when the trade is cancelled or closed.


### Receiver
The client closes the trade window.

## Notes

- No additional notes

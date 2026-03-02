---
title: trade.accepted
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2568`
- **Header**: `TRADE_ACCEPTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a user accepted the trade offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | Room entity ID of the user who accepted. |
| `accepted` | `int32` | required | Accept state (1=accepted, 0=not accepted). |

## Behavior

### Sender
Sent to both participants when one user clicks accept.


### Receiver
The client updates the accept indicator for the specified user.

## Notes

- No additional notes

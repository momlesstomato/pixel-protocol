---
title: trade.open
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1481`
- **Header**: `TRADE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Initiate a trade with another user in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `targetUserId` | `int32` | required | Room entity ID of the user to trade with. |

## Behavior

### Sender
Sent when the player clicks another avatar and selects the trade option from the context menu.


### Receiver
The server verifies both users are in the same room, neither is already trading, trading is enabled for the room, and both users have trading permissions. If valid, it opens a trade session and sends trade opened to both participants. Confirmed in GLADIATOR.

## Notes

- No additional notes

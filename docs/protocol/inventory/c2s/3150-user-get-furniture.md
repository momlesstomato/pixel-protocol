---
title: user.get_furniture
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3150`
- **Header**: `USER_FURNITURE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the furniture inventory while inside a room

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the inventory panel while currently in a room.


### Receiver
The server responds with the player's furniture list in fragments. The response uses fragmentation because the inventory may contain thousands of items. Confirmed in GLADIATOR.

## Notes

- No additional notes

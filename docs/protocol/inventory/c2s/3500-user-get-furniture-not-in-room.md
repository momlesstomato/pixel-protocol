---
title: user.get_furniture_not_in_room
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3500`
- **Header**: `REQUESTFURNIINVENTORYWHENNOTINROOM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the furniture inventory while not in a room

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the inventory panel from the hotel view.


### Receiver
The server responds with the furniture list fragments, identical in format to the in-room request. Confirmed in GLADIATOR.

## Notes

- No additional notes

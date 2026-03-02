---
title: room.rights_cleared
sidebar_position: 40
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2392`
- **Header**: `ROOM_RIGHTS_CLEAR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that all room rights have been cleared

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to all former rights holders when the room owner clears all rights with `room.remove_all_rights` (c2s 2683).


### Receiver
The client updates the user's rights state to none. Confirmed in GLADIATOR.

## Notes

- No additional notes

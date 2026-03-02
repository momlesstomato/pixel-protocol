---
title: user.update_badges
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `644`
- **Header**: `USER_BADGES_CURRENT_UPDATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save the current badge slot assignments

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user saves their badge display configuration. The payload encodes each occupied slot as a sequential pair of slot index and badge code. Empty slots are omitted.


### Receiver
The server updates the user's badge slot assignments in the database and broadcasts the change to relevant rooms.

## Notes

- Payload is a flat list of pairs (no count prefix): `int32` slotIndex (1–5), `string` badgeCode — one pair per occupied slot, in slot order.


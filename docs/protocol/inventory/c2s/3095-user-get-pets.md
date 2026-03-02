---
title: user.get_pets
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3095`
- **Header**: `USER_PETS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the pet inventory

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the pet tab of the inventory panel.


### Receiver
The server responds with the list of pets owned by the player that are not placed in a room. Confirmed in GLADIATOR.

## Notes

- No additional notes

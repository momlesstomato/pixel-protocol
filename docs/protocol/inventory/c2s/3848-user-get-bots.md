---
title: user.get_bots
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3848`
- **Header**: `USER_BOTS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the bot inventory

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the bot tab of the inventory panel.


### Receiver
The server responds with the list of bots owned by the player. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: group.get_create_options
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `798`
- **Header**: `GROUP_CREATE_OPTIONS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request data needed to create a new group

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the group creation dialog.


### Receiver
The server responds with the group creation cost and a list of rooms the player owns that can host a group. Confirmed in GLADIATOR.

## Notes

- No additional notes

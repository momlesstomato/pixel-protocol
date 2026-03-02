---
title: user.change_name
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2977`
- **Header**: `CHANGE_USERNAME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit a new display name for the authenticated user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | required | Desired new display name |

## Behavior

### Sender
Sent after the user confirms a new username in the name-change flow. The server validates and applies the new name if eligible. `canChangeName` in `user.info` (s2c 2725) must be true before this packet is sent.


### Receiver
The server validates the name (length, allowed characters, and uniqueness), persists it on success, and responds with `user.change_name_result` (s2c 118). It also broadcasts `user.name_change` (s2c 2182) to affected sessions.

## Notes

- No additional notes

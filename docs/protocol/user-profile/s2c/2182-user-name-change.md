---
title: user.name_change
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2182`
- **Header**: `UNIT_CHANGE_NAME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Broadcast a user's display name change

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `webId` | `int32` | required | External web-account identifier associated with the user |
| `id` | `int32` | required | Internal user ID (room-unit ID) of the renamed user |
| `newName` | `string` | required | The user's new display name |

## Behavior

### Sender
Sent by the server to all sessions affected by a username change. The packet includes both a web-account ID (used by the external website layer) and the internal room-unit ID so clients can update all relevant UI elements.


### Receiver
The client updates the username in the local session data, friend list entries, and any open chat logs that reference the old name.

## Notes

- No additional notes

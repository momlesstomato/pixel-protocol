---
title: user.settings_room_invites
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1086`
- **Header**: `USER_SETTINGS_INVITES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle room invitation acceptance

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomInvites` | `boolean` | required | true = accept room invites; false = block room invites |

## Behavior

### Sender
Sent when the user enables or disables the ability to receive room invitations from friends.


### Receiver
The server persists the preference. When a friend sends a room invite and this flag is false the server suppresses delivery. No response packet is sent.

## Notes

- No additional notes

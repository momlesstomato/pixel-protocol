---
title: navigator.room_info
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `687`
- **Header**: `ROOM_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver full metadata and settings for a requested room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomEnter` | `boolean` | required | True when the client should proceed to enter the room after receiving this packet.<br/> |
| `roomData` | `object` | required | Full room data record (see `navigator.search_result` s2c 2690 for the room data record field order).<br/> |
| `roomForward` | `boolean` | required | True when this response is part of a room-forward flow.<br/> |
| `staffPick` | `boolean` | required | True when the room has been selected as a staff pick. |
| `isGroupMember` | `boolean` | required | True when the requesting user is a member of the room's group. |
| `allInRoomMuted` | `boolean` | required | True when all users in the room are currently muted. |
| `moderationSettings` | `object` | required | Room moderation configuration (kick, mute, ban thresholds by user type). Structure confirmed in GLADIATOR.<br/> |
| `canMute` | `boolean` | required | True when the requesting user has mute rights in the room. |
| `chatSettings` | `object` | required | Room chat configuration (mode, speed, distance, flood protection settings). Structure confirmed in GLADIATOR.<br/> |

## Behavior

### Sender
Sent in response to `navigator.get_room_info` (c2s 2230). Contains the full room data record plus moderation configuration and chat settings.


### Receiver
When `roomEnter` is true the client proceeds to enter the room. When `roomForward` is true the client treats this as a redirect. The client stores `staffPick`, `isGroupMember`, `allInRoomMuted`, and `canMute` flags for use in the room UI. Chat and moderation settings are applied immediately. Confirmed in GLADIATOR.

## Notes

- No additional notes

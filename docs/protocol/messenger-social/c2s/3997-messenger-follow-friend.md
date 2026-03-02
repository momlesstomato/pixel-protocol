---
title: messenger.follow_friend
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3997`
- **Header**: `FOLLOW_FRIEND`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Follow a friend to their current room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `friendId` | `int32` | required | User ID of the online friend to follow. |

## Behavior

### Sender
Sent when the user clicks "Follow" on a friend who is currently in a room. The friend must be online and their `followingAllowed` flag must be set in the friend list entry.


### Receiver
The server looks up the target friend's current room and, if the user is permitted to enter, forwards the client to that room via `room.forward` (s2c 160). If the follow cannot be completed, the server responds with `messenger.follow_failed` (s2c 3048). Confirmed in GLADIATOR.

## Notes

- No additional notes

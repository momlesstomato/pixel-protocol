---
title: user.get_tags
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `17`
- **Header**: `USER_TAGS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the profile tags of a user currently in a room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomUnitId` | `int32` | required | Room unit ID that identifies the target user within the room |

## Behavior

### Sender
Sent to fetch the profile tags of a user occupying a room unit. Tags are short freeform strings (e.g. "music", "gaming") that users configure on their profile to describe themselves; they are displayed on the in-room hover panel and profile card. The request identifies the target by room unit ID because the user may not be known by their user ID at the point the client triggers this call.


### Receiver
The server looks up the profile tags for the user occupying the given room unit and responds with `user.tags` (s2c 1255).

## Notes

- No additional notes

---
title: user.tags
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1255`
- **Header**: `GET_USER_TAGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the profile tags of a user in a room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomUnitId` | `int32` | required | Room unit ID that identifies the user whose tags are listed |
| `count` | `int32` | required | Number of tag strings that follow |

## Behavior

### Sender
Sent in response to `user.get_tags` (c2s 17). Contains the profile tags configured by the user identified by `roomUnitId`. Tags are short freeform strings users set on their profile to describe themselves; the client stores them in the session data manager keyed to the room unit.


### Receiver
The client stores the tag list for the room unit and renders the tags on the in-room hover panel and profile card for that user.

## Notes

- Each tag entry: `string` tag.

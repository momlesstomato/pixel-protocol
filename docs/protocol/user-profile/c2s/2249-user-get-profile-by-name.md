---
title: user.get_profile_by_name
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2249`
- **Header**: `USER_PROFILE_BY_NAME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the public profile of a user by username

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | Display name of the user whose profile is requested |

## Behavior

### Sender
Sent when the client wants to look up a profile by display name rather than by numeric ID, for example from a search result or a chat name-click flow.


### Receiver
The server resolves the username to a user ID, then responds with `user.profile` (s2c 3898). If the username is not found the server may send no response or a generic error.

## Notes

- No additional notes

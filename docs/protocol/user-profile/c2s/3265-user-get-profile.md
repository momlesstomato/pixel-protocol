---
title: user.get_profile
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3265`
- **Header**: `USER_PROFILE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the public profile of a user by ID

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose profile is requested |
| `openProfile` | `boolean` | required | Whether the client intends to open the profile window |

## Behavior

### Sender
Sent when the client wants to display another user's public profile card. The `userId` identifies the target; `openProfile` signals whether the client intends to open the profile window (true) or is fetching data silently (false).


### Receiver
The server looks up the target user (online or offline) and responds with `user.profile` (s2c 3898). If the user does not exist the server may send no response or an error packet.

## Notes

- No additional notes

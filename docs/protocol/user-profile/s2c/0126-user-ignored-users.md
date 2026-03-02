---
title: user.ignored_users
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `126`
- **Header**: `USER_IGNORED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the current session's ignore list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of username entries that follow |

## Behavior

### Sender
Sent in response to `user.get_ignored` (c2s 3878). Contains the display names of all users currently on the ignore list, optionally filtered by the prefix provided in the request.


### Receiver
The client replaces its local ignore list with the received names. Subsequent chat messages from these users are suppressed without sending further requests to the server.

## Notes

- Each entry: `string` username.

---
title: messenger.init
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1605`
- **Header**: `MESSENGER_INIT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver messenger configuration and friend categories to the client

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userFriendLimit` | `int32` | required | Maximum number of friends allowed for this user. May be elevated by club membership or a server-side permission override.<br/> |
| `normalFriendLimit` | `int32` | required | Maximum friend count for standard (non-club) accounts. |
| `extendedFriendLimit` | `int32` | required | Maximum friend count for club (VIP) accounts. |
| `categoryCount` | `int32` | required | Number of custom friend categories that follow. |

## Behavior

### Sender
Sent in response to `messenger.init` (c2s 2781). Delivers the friend limit thresholds and the list of custom friend categories the user has created.


### Receiver
The client stores the limit values to enforce friend list capacity in the UI and populates the category dropdown. The client then sends `messenger.refresh` (c2s 1419) to request the friend list fragments. Confirmed in GLADIATOR and GALAXY.

## Notes

- After `categoryCount`, each category entry is two fields: `id` (int32) and `name` (string).


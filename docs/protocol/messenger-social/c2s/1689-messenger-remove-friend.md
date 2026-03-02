---
title: messenger.remove_friend
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1689`
- **Header**: `REMOVE_FRIEND`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove one or more users from the friend list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of user IDs that follow. |

## Behavior

### Sender
Sent when the user removes friends from the friend list UI. Multiple removals can be batched in one packet.


### Receiver
The server deletes the bidirectional friendship record for each listed user ID. For each target who is currently online, the server sends them `messenger.update` (s2c 2800) with a removal entry for the local user's ID. The server then sends the local user `messenger.update` (s2c 2800) confirming all removals. Confirmed in GLADIATOR.

## Notes

- After `count`, each entry is a single `int32` user ID of the friend to remove.

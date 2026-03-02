---
title: user.get_relationship_status
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2138`
- **Header**: `MESSENGER_RELATIONSHIPS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the public relationship status entries for a user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose relationship statuses are requested |

## Behavior

### Sender
Sent to retrieve the relationship status counts (heart / smile / bobba) that a target user has assigned to their friends, along with one random representative friend per status type.


### Receiver
The server responds with `user.relationship_status` (s2c 2016). If the target user has no relationships the server sends the packet with a count of zero.

## Notes

- No additional notes

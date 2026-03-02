---
title: user.relationship_status
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2016`
- **Header**: `MESSENGER_RELATIONSHIPS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a user's public relationship status entries

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose relationship statuses are listed |
| `count` | `int32` | required | Number of relationship entries that follow |

## Behavior

### Sender
Sent in response to `user.get_relationship_status` (c2s 2138). For each relationship type that has at least one friend assigned, the server sends the total count and one randomly selected representative friend (ID, name, figure).


### Receiver
The client renders the relationship section of the profile card. Each entry shows an emoji icon, the total count, and the representative friend's avatar.

## Notes

- Each entry: `int32` relationshipType (1 = HEART, 2 = SMILE, 3 = BOBBA), `int32` friendCount (total friends with this type), `int32` randomFriendId, `string` randomFriendName, `string` randomFriendFigure.


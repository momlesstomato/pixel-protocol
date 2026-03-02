---
title: forum.stats
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3011`
- **Header**: `GROUP_FORUM_DATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver forum statistics and permission data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `name` | `string` | required | Forum (group) name. |
| `description` | `string` | required | Forum description. |
| `icon` | `string` | required | Group icon/badge code. |
| `totalThreads` | `int32` | required | Total thread count. |
| `leaderboardScore` | `int32` | required | Forum leaderboard ranking score. |
| `totalMessages` | `int32` | required | Total message count. |
| `unreadMessages` | `int32` | required | Unread message count for the player. |
| `lastMessageId` | `int32` | required | ID of the most recent message. |
| `lastMessageAuthorId` | `int32` | required | Author of the most recent message. |
| `lastMessageAuthorName` | `string` | required | Author name of the most recent message. |
| `lastMessageTimeAgo` | `int32` | required | Seconds since the last message. |
| `readPermission` | `int32` | required | Read permission level. |
| `postMessagePermission` | `int32` | required | Message posting permission level. |
| `postThreadPermission` | `int32` | required | Thread creation permission level. |
| `moderatePermission` | `int32` | required | Moderation permission level. |
| `readPermissionError` | `string` | required | Error key for read permission denial. |
| `postMessagePermissionError` | `string` | required | Error key for message permission denial. |
| `postThreadPermissionError` | `string` | required | Error key for thread permission denial. |
| `moderatePermissionError` | `string` | required | Error key for moderation permission denial. |
| `reportPermissionError` | `string` | required | Error key for report permission denial. |
| `canChangeSettings` | `boolean` | required | Whether the player can modify forum settings. |
| `isStaff` | `boolean` | required | Whether the player has staff-level access. |

## Behavior

### Sender
Sent in response to a forum stats request.


### Receiver
The client renders the forum overview with thread counts, permissions, and moderation capabilities.

## Notes

- No additional notes

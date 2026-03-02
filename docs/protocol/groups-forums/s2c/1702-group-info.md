---
title: group.info
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1702`
- **Header**: `GROUP_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver group information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int32` | required | Group identifier. |
| `exists` | `boolean` | required | Whether the group exists (discarded by client). |
| `type` | `int32` | required | Group type indicator. |
| `title` | `string` | required | Group display name. |
| `description` | `string` | required | Group description text. |
| `badge` | `string` | required | Badge code string. |
| `roomId` | `int32` | required | Base room identifier. |
| `roomName` | `string` | required | Base room display name. |
| `membershipType` | `int32` | required | Player's membership type in this group. |
| `membersCount` | `int32` | required | Total member count. |
| `isFavorite` | `boolean` | required | Whether this is the player's favorite group. |
| `createdAt` | `string` | required | Group creation date string. |
| `isOwner` | `boolean` | required | Whether the player owns this group. |
| `isAdmin` | `boolean` | required | Whether the player is an admin. |
| `ownerName` | `string` | required | Display name of the group owner. |
| `showFlag` | `boolean` | required | Whether the group flag is shown. |
| `canMembersDecorate` | `boolean` | required | Whether members can place furniture. |
| `pendingRequestsCount` | `int32` | required | Number of pending join requests. |

## Behavior

### Sender
Sent in response to a group info request.


### Receiver
The client displays the group information dialog.

## Notes

- No additional notes

---
title: group.members
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1200`
- **Header**: `GROUP_MEMBERS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a page of group members

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `groupTitle` | `string` | required | Group display name. |
| `roomId` | `int32` | required | Base room identifier. |
| `badge` | `string` | required | Badge code string. |
| `totalMembersCount` | `int32` | required | Total members matching the filter. |
| `members` | `list&lt;object&gt;` | required | Member entries with rank (int32: 0=owner, 1=admin, 2=member, 3=pending, 4=blocked), id (int32), name (string), figure (string), and joinedAt (string). |
| `isAdmin` | `boolean` | required | Whether the requester is an admin. |
| `pageSize` | `int32` | required | Number of members per page. |
| `pageIndex` | `int32` | required | Current page index. |
| `level` | `int32` | required | Active rank filter. |
| `query` | `string` | required | Active search filter. |

## Behavior

### Sender
Sent in response to a group members request.


### Receiver
The client displays the paginated member list with rank indicators.

## Notes

- No additional notes

---
title: group.settings
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3965`
- **Header**: `GROUP_SETTINGS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver editable group settings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomCount` | `int32` | required | Number of available rooms (non-zero triggers room data). |
| `roomId` | `int32` | required | Base room identifier (if roomCount &gt; 0). |
| `roomName` | `string` | required | Room name (if roomCount &gt; 0). |
| `id` | `int32` | required | Group identifier. |
| `title` | `string` | required | Group display name. |
| `description` | `string` | required | Group description. |
| `colorA` | `int32` | required | Primary color identifier. |
| `colorB` | `int32` | required | Secondary color identifier. |
| `state` | `int32` | required | Membership state (0=open, 1=locked, 2=closed). |
| `canMembersDecorate` | `int32` | required | Decoration permission (0=members allowed). |
| `badgeParts` | `list&lt;object&gt;` | required | Badge part entries with key (int32), color (int32), and position (int32). |
| `badgeCode` | `string` | required | Current badge code string. |
| `membersCount` | `int32` | required | Total member count. |

## Behavior

### Sender
Sent in response to a group settings request for admins.


### Receiver
The client populates the group settings editor.

## Notes

- No additional notes

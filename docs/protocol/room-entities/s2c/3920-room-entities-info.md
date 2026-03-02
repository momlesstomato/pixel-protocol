---
title: room_entities.info
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3920`
- **Header**: `UNIT_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update a unit's display information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomIndex` | `int32` | required | Room entity index of the unit. |
| `name` | `string` | required | Updated display name. |
| `custom` | `string` | required | Custom field (motto or bot speech). |
| `figure` | `string` | required | Updated figure string. |
| `gender` | `string` | required | Gender: `M` or `F`. |
| `groupId` | `int32` | required | Group/badge ID (0 if none). |
| `groupStatus` | `int32` | required | Group member status. |
| `groupName` | `string` | required | Group name (empty if none). |
| `activityPoints` | `int32` | required | User's activity point score. |
| `isModerator` | `boolean` | required | True if the unit is a moderator. |

## Behavior

### Sender
Sent when a unit changes its name, figure, or other display properties (e.g. after an outfit change).


### Receiver
The client refreshes the unit's rendering. Confirmed in GLADIATOR.

## Notes

- No additional notes

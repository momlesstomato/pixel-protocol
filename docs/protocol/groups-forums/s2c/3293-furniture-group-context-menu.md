---
title: furniture.group_context_menu
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3293`
- **Header**: `FURNITURE_GROUP_CONTEXT_MENU_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver group context menu information for furniture

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the furniture. |
| `groupId` | `int32` | required | ID of the linked group. |
| `groupName` | `string` | required | Display name of the group. |
| `badgeCode` | `string` | required | Group badge code string. |

## Behavior

### Sender
Sent when the user interacts with group-linked furniture, providing group badge and identity for the context menu.


### Receiver
The client shows the group context menu with the received info. Confirmed in GLADIATOR.

## Notes

- No additional notes

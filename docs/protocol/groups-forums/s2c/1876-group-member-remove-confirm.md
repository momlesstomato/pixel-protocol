---
title: group.member_remove_confirm
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1876`
- **Header**: `GROUP_MEMBER_REMOVE_CONFIRM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show furniture impact before removing a member

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | User identifier being removed. |
| `furnitureCount` | `int32` | required | Number of furniture items the user has placed in the group room. |

## Behavior

### Sender
Sent in response to a remove-member-confirm request.


### Receiver
The client shows a confirmation dialog with the number of affected furniture items.

## Notes

- No additional notes

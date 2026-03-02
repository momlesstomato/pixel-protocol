---
title: group.members_refresh
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2445`
- **Header**: `GROUP_MEMBERS_REFRESH`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Signal that the group member list should be refreshed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier whose members changed. |

## Behavior

### Sender
Sent when the membership list changes (join, leave, promote, demote).


### Receiver
The client re-requests the member list to show updated data.

## Notes

- No additional notes

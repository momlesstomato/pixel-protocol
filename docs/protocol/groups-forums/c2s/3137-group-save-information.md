---
title: group.save_information
sidebar_position: 39
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3137`
- **Header**: `GROUP_SAVE_INFORMATION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the group name and description

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to update. |
| `title` | `string` | required | New group display name. |
| `description` | `string` | required | New group description. |

## Behavior

### Sender
Sent when a group admin saves changes to the group information.


### Receiver
The server updates the group name and description. A group details changed notification is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: group.delete
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1134`
- **Header**: `GROUP_DELETE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Delete a group permanently

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to delete. |

## Behavior

### Sender
Sent when the group owner confirms group deletion.


### Receiver
The server verifies ownership, removes all member associations, furniture links, and the group record. A deactivated notification is sent to all group members in affected rooms. Confirmed in GLADIATOR.

## Notes

- No additional notes

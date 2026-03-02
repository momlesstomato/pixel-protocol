---
title: group.save_preferences
sidebar_position: 42
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3435`
- **Header**: `GROUP_SAVE_PREFERENCES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the group membership preferences

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `membershipState` | `int32` | required | Membership type: 0=open, 1=approval required, 2=closed. |
| `allowDecorate` | `int32` | required | Whether members can place furniture: 0=admins only, 1=members allowed. |

## Behavior

### Sender
Sent when a group admin changes the membership type or decoration permission.


### Receiver
The server updates the group state (open/locked/closed) and the member decoration permission. Confirmed in GLADIATOR.

## Notes

- No additional notes

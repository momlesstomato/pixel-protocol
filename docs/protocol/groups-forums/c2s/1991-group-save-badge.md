---
title: group.save_badge
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1991`
- **Header**: `GROUP_SAVE_BADGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the group badge design

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `badgePartCount` | `int32` | required | Number of badge part values that follow. |
| `badgeParts` | `list&lt;int32&gt;` | required | Flat array of badge part values. |

## Behavior

### Sender
Sent when a group admin saves a new badge configuration in the badge editor.


### Receiver
The server updates the group badge and regenerates the badge image. All members see the updated badge. Confirmed in GLADIATOR.

## Notes

- No additional notes

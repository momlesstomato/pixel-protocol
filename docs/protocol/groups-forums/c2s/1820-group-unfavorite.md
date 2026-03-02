---
title: group.unfavorite
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1820`
- **Header**: `GROUP_UNFAVORITE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Remove the favorite group designation

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to unfavorite. |

## Behavior

### Sender
Sent when the player clears their favorite group.


### Receiver
The server removes the favorite badge from the player's avatar and notifies room occupants. Confirmed in GLADIATOR.

## Notes

- No additional notes

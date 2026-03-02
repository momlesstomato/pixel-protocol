---
title: group.favorite
sidebar_position: 44
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3549`
- **Header**: `GROUP_FAVORITE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set a group as the player's favorite

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to mark as favorite. |

## Behavior

### Sender
Sent when the player selects a group as their favorite, causing the badge to appear on their avatar.


### Receiver
The server updates the player's favorite group and notifies room occupants of the badge change. Confirmed in GLADIATOR.

## Notes

- No additional notes

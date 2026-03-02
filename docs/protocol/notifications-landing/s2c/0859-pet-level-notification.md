---
title: pet.level_notification
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `859`
- **Header**: `PET_LEVEL_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the owner that a pet leveled up

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier. |
| `petName` | `string` | required | Pet display name. |
| `level` | `int32` | required | New level reached. |
| `figureData` | `object` | required | Pet figure data for the notification icon. |

## Behavior

### Sender
Sent to the pet owner when their pet levels up, even if in another room.


### Receiver
The client shows a notification bubble with the pet name and new level.

## Notes

- No additional notes

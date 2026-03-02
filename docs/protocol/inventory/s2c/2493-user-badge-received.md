---
title: user.badge_received
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2493`
- **Header**: `USER_BADGES_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the user has received a new badge

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badgeId` | `int32` | required | Numeric badge identifier |
| `badgeCode` | `string` | required | Badge code string used to look up badge art |

## Behavior

### Sender
Sent when the user earns a new badge from an achievement, purchase, or promotional code. The client adds it to the badge inventory.


### Receiver
The client appends the new badge to the local inventory and may display a badge-received notification overlay.

## Notes

- No additional notes

---
title: group.buy
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `230`
- **Header**: `GROUP_BUY`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase and create a new group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | required | Group display name. |
| `description` | `string` | required | Group description text. |
| `roomId` | `int32` | required | Base room identifier for the group. |
| `colorA` | `int32` | required | Primary badge color identifier. |
| `colorB` | `int32` | required | Secondary badge color identifier. |
| `badgePartCount` | `int32` | required | Number of badge part values that follow. |
| `badgeParts` | `list&lt;int32&gt;` | required | Flat array of badge part values. |

## Behavior

### Sender
Sent when the player confirms group creation after filling in all details.


### Receiver
The server validates the name is available, deducts the creation cost, creates the group with the specified settings, and responds with the group purchased confirmation. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: forum.get_stats
sidebar_position: 40
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3149`
- **Header**: `GET_FORUM_STATS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request statistics and settings for a group forum

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier whose forum to query. |

## Behavior

### Sender
Sent when the player opens a group forum page.


### Receiver
The server responds with the full forum data including thread counts, message counts, permissions, and settings. Confirmed in GLADIATOR.

## Notes

- No additional notes

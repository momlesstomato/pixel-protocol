---
title: room.ambassador_alert
sidebar_position: 40
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2996`
- **Header**: `ROOM_AMBASSADOR_ALERT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send an ambassador alert in the current room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | Alert message text. |

## Behavior

### Sender
Sent by a Nitro ambassador to alert moderators about activity in the current room.


### Receiver
The server logs the ambassador alert and notifies moderators. Confirmed in GLADIATOR.

## Notes

- No additional notes

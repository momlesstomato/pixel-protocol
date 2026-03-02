---
title: availability.time
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `600`
- **Header**: `AVAILABILITY_TIME`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report scheduled open/close time information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isOpen` | `int32` | required | Non-zero if the hotel is currently open, zero if closed |
| `minutesUntilChange` | `int32` | required | Minutes until the hotel opens (if closed) or closes (if open) |

## Behavior

### Sender
Sent by the server to inform the client about how long until the hotel opens or closes. The `isOpen` field indicates the current state; `minutesUntilChange` indicates when it will toggle.


### Receiver
The client may display a countdown timer or status message indicating when the hotel will open or close.

## Notes

- No additional notes

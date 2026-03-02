---
title: hotel.maintenance
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1350`
- **Header**: `HOTEL_MAINTENANCE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report current maintenance mode status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isInMaintenance` | `boolean` | required | Whether the hotel is currently in maintenance |
| `minutesUntilMaintenance` | `int32` | required | Minutes until maintenance starts (or ends if already in maintenance) |
| `duration` | `int32` | optional | Expected maintenance duration in minutes (default 15 if absent) |

## Behavior

### Sender
Sent by the server to indicate whether the hotel is in maintenance mode and when maintenance will end or begin.


### Receiver
The client may display a maintenance banner or countdown. If `isInMaintenance` is true, the client may restrict functionality.

## Notes

- No additional notes

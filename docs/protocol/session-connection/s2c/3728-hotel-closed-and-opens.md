---
title: hotel.closed_and_opens
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3728`
- **Header**: `HOTEL_CLOSED_AND_OPENS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Inform the client when the hotel will reopen

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `openHour` | `int32` | required | Hour of the day the hotel will open (0-23) |
| `openMinute` | `int32` | required | Minute of the hour the hotel will open (0-59) |

## Behavior

### Sender
Sent when the hotel is currently closed and there is a known reopening schedule. Provides the hour and minute (server local time) at which the hotel will open.


### Receiver
The client displays a "Hotel is closed — opens at HH:MM" message.

## Notes

- No additional notes

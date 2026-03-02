---
title: hotel.closes_and_opens_at
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2771`
- **Header**: `HOTEL_CLOSES_AND_OPENS_AT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Announce upcoming close and reopen schedule

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `openHour` | `int32` | required | Hour of the day the hotel will reopen (0-23) |
| `openMinute` | `int32` | required | Minute of the hour the hotel will reopen (0-59) |
| `userThrownOutAtClose` | `boolean` | required | Whether users are forcefully disconnected when the hotel closes |

## Behavior

### Sender
Sent by the server to announce that the hotel will close and reopen at specified times. Also indicates whether users will be forcefully disconnected at close time.


### Receiver
The client displays a schedule notification and prepares for potential disconnection if `userThrownOutAtClose` is true.

## Notes

- No additional notes

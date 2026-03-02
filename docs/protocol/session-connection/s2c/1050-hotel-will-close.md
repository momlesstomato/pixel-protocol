---
title: hotel.will_close
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1050`
- **Header**: `HOTEL_WILL_CLOSE_MINUTES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Warn the client that the hotel will close soon

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `minutes` | `int32` | required | Minutes until the hotel closes |

## Behavior

### Sender
Sent by the server when a scheduled shutdown is approaching. The single field indicates how many minutes remain before the hotel closes.


### Receiver
The client displays a countdown warning to the user (e.g. "Hotel closing in 10 minutes"). The user should save any pending state.

## Notes

- No additional notes

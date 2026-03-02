---
title: room.filter_words
sidebar_position: 47
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2937`
- **Header**: `ROOM_GET_FILTER_WORDS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the room custom filter word list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `words` | `string[]` | required | Array of custom filter words for the room. |

## Behavior

### Sender
Sent in response to the filter words request. Contains the list of custom banned words set by the room owner.


### Receiver
The client populates the filter words management panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

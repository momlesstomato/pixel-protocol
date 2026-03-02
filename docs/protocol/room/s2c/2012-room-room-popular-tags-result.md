---
title: room.room_popular_tags_result
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2012`
- **Header**: `ROOM_POPULAR_TAGS_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Room popular tags result

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about room popular tags result.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

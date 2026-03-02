---
title: navigator.guest_room_search_result
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `52`
- **Header**: `GUEST_ROOM_SEARCH_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guest room search result

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about guest room search result.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

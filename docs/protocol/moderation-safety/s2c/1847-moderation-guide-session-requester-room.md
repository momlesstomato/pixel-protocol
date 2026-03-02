---
title: moderation.guide_session_requester_room
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1847`
- **Header**: `GUIDE_SESSION_REQUESTER_ROOM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Guide session requester room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about guide session requester room state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

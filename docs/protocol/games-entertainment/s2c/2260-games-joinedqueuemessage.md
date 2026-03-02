---
title: games.joinedqueuemessage
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2260`
- **Header**: `JOINEDQUEUEMESSAGE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Games & Entertainment
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Joinedqueuemessage

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about joinedqueuemessage state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

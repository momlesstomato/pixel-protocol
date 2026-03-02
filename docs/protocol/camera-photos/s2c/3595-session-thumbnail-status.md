---
title: session.thumbnail_status
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3595`
- **Header**: `THUMBNAIL_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Thumbnail status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |
| `field2` | `boolean` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about thumbnail status.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

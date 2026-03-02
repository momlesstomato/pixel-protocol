---
title: session.thumbnail_update_result
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1927`
- **Header**: `THUMBNAIL_UPDATE_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Thumbnail update result

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about thumbnail update result.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

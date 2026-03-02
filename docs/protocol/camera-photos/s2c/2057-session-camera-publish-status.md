---
title: session.camera_publish_status
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2057`
- **Header**: `CAMERA_PUBLISH_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Camera publish status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about camera publish status.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

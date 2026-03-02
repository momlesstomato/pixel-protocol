---
title: session.init_camera
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3878`
- **Header**: `INIT_CAMERA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Init camera

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |
| `field3` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about init camera.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

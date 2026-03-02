---
title: session.camera_storage_url
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3696`
- **Header**: `CAMERA_STORAGE_URL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Camera & Photos
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Camera storage url

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about camera storage url.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

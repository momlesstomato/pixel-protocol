---
title: furniture.objects_data_update
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1453`
- **Header**: `OBJECTS_DATA_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Objects data update

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |
| `field2` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about objects data update.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

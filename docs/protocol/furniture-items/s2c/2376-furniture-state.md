---
title: furniture.state
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2376`
- **Header**: `FURNITURE_STATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the state of a furniture item (one-way door)

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room floor item ID. |
| `state` | `int32` | required | Door state: 0=closed, 1=open. |

## Behavior

### Sender
Sent when a one-way door changes its open/closed state.


### Receiver
The client updates the door's visual state. Confirmed in GLADIATOR.

## Notes

- No additional notes

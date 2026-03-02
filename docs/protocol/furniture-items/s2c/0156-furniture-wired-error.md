---
title: furniture.wired_error
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `156`
- **Header**: `WIRED_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate a wired configuration validation error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Wired validation error code. |

## Behavior

### Sender
Sent when a wired save request fails validation. The error code indicates the reason.


### Receiver
The client highlights the invalid configuration in the editor. Confirmed in GLADIATOR.

## Notes

- No additional notes

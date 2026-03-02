---
title: catalog.purchase_error
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1404`
- **Header**: `CATALOG_PURCHASE_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that a purchase failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Purchase error code: 0=generic, 1=not_enough_credits, 2=not_enough_points, 3=not_available_for_you.<br/> |

## Behavior

### Sender
Sent when a purchase fails due to insufficient balance or other catalog-level error.


### Receiver
The client shows the error message. Confirmed in GLADIATOR.

## Notes

- No additional notes

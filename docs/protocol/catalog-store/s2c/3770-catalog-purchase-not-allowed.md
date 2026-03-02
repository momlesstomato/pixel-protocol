---
title: catalog.purchase_not_allowed
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3770`
- **Header**: `CATALOG_PURCHASE_NOT_ALLOWED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that the user is not permitted to purchase

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Specific permission denial reason code. |

## Behavior

### Sender
Sent when the user is not allowed to purchase (e.g. guest account or parental controls restriction).


### Receiver
The client shows a permission denied message. Confirmed in GLADIATOR.

## Notes

- No additional notes

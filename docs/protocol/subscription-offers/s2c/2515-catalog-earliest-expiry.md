---
title: catalog.earliest_expiry
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2515`
- **Header**: `CATALOG_EARLIEST_EXPIRY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the earliest catalog page expiration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageName` | `string` | required | Name of the page expiring soonest. |
| `secondsLeft` | `int32` | required | Seconds until expiration. |

## Behavior

### Sender
Sent in response to an earliest expiry request.


### Receiver
The client uses this to show a notification about the nearest expiring catalog page.

## Notes

- No additional notes

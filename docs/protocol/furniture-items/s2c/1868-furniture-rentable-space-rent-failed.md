---
title: furniture.rentable_space_rent_failed
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1868`
- **Header**: `RENTABLE_SPACE_RENT_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that rentable space rental failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Error code: 1=already_rented, 2=not_enough_currency. |

## Behavior

### Sender
Sent when a rental request fails due to the space already being rented or an insufficient currency balance.


### Receiver
The client shows the appropriate failure message. Confirmed in GLADIATOR.

## Notes

- No additional notes

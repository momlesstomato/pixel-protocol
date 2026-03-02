---
title: furniture.rentable_space_status
sidebar_position: 54
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3559`
- **Header**: `RENTABLE_SPACE_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the current status of a rentable space

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the rentable space furniture. |
| `isRented` | `boolean` | required | True if the space is currently rented. |
| `isOwner` | `boolean` | required | True if the requesting user is the current renter. |
| `renterId` | `int32` | required | User ID of the current renter (0 if unrented). |
| `renterName` | `string` | required | Username of the current renter (empty if unrented). |

## Behavior

### Sender
Sent in response to a rentable space status request or when the rental state changes.


### Receiver
The client displays the rental status and options. Confirmed in GLADIATOR.

## Notes

- No additional notes

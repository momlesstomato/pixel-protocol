---
title: furniture.lovelock_start
sidebar_position: 55
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3753`
- **Header**: `LOVELOCK_FURNI_START`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Initiate the love lock sequence

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the love lock furniture. |
| `initiatorName` | `string` | required | Username of the user who initiated the lock. |
| `partnerName` | `string` | required | Username of the invited partner. |

## Behavior

### Sender
Sent to notify both participating users that a love lock sequence has been initiated.


### Receiver
The client shows the love lock confirmation dialog. Confirmed in GLADIATOR.

## Notes

- No additional notes

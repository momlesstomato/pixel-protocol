---
title: furniture.lovelock_finished
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `770`
- **Header**: `LOVELOCK_FURNI_FINISHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the love lock sequence completed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room item ID of the love lock furniture. |

## Behavior

### Sender
Sent when both users have confirmed the love lock, finalizing the locking sequence.


### Receiver
The client plays the lock animation and marks the furniture as locked. Confirmed in GLADIATOR.

## Notes

- No additional notes

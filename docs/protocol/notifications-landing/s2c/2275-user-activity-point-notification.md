---
title: user.activity_point_notification
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2275`
- **Header**: `ACTIVITY_POINT_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client of an activity-point currency change

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `int32` | required | New total balance of the activity-point currency |
| `amountChanged` | `int32` | required | Signed delta applied to the balance (positive = earned, negative = spent) |
| `type` | `int32` | required | Currency type identifier (e.g. 0 = Pixels, 5 = Diamonds) |

## Behavior

### Sender
Sent when the user's activity-point balance for a specific currency type changes (earned or spent). The `amountChanged` field carries the signed delta.


### Receiver
The client updates the displayed balance for the given currency type and may play a reward animation if `amountChanged` is positive.

## Notes

- No additional notes

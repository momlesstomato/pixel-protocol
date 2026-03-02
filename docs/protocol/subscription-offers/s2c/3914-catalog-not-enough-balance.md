---
title: catalog.not_enough_balance
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3914`
- **Header**: `NOT_ENOUGH_BALANCE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate insufficient balance for a purchase

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notEnoughCredits` | `boolean` | required | Whether credits are insufficient. |
| `notEnoughActivityPoints` | `boolean` | required | Whether activity points are insufficient. |
| `activityPointType` | `int32` | required | Type of activity points that are short (only present if notEnoughActivityPoints is true). |

## Behavior

### Sender
Sent when a purchase fails due to insufficient credits or activity points.


### Receiver
The client shows an error dialog explaining which currency is insufficient.

## Notes

- No additional notes

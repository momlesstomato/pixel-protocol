---
title: user.currency
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2018`
- **Header**: `USER_CURRENCY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the authenticated user's activity-point currency balances

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of currency entries that follow |

## Behavior

### Sender
Sent in response to `user.get_currency` (c2s 273) and after any transaction that changes an activity-point balance. Each entry maps a currency type ID to its current amount.


### Receiver
The client updates the currency HUD for each type received. Currency types not present in the list are left unchanged.

## Notes

- Each entry: `int32` currencyType, `int32` amount.
- Common currency types: 0 = Pixels, 5 = Diamonds. Additional types are hotel-specific.

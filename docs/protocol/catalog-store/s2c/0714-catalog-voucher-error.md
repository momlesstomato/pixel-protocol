---
title: catalog.voucher_error
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `714`
- **Header**: `REDEEM_VOUCHER_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that voucher redemption failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `errorCode` | `int32` | required | Voucher error code: 0=invalid, 1=already_used, 2=expired. |

## Behavior

### Sender
Sent when a voucher code is invalid, expired, or already used.


### Receiver
The client shows the redemption failure message. Confirmed in GLADIATOR.

## Notes

- No additional notes

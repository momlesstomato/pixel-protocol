---
title: catalog.redeem_voucher
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `339`
- **Header**: `CATALOG_REDEEM_VOUCHER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Redeem a voucher code

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `voucherCode` | `string` | required | The voucher code string to redeem. |

## Behavior

### Sender
Sent when the user submits a voucher code. The server validates and applies the voucher reward.


### Receiver
The server responds with `catalog.voucher_ok` (s2c 3336) on success or `catalog.voucher_error` (s2c 714) on failure. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.voucher_ok
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3336`
- **Header**: `REDEEM_VOUCHER_OK`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm successful voucher redemption

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productCode` | `string` | required | Product code of the redeemed voucher reward. |

## Behavior

### Sender
Sent when the server successfully redeems a voucher code entered by the user.


### Receiver
The client shows the redemption success message and may refresh the currency display. Confirmed in GLADIATOR.

## Notes

- No additional notes

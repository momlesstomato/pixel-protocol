---
title: catalog.direct_sms_club_buy
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `195`
- **Header**: `DIRECT_SMS_CLUB_BUY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver direct SMS Club purchase availability

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pricePointUrl` | `string` | required | URL for the SMS pricing endpoint. |
| `market` | `string` | required | Market identifier for the SMS provider. |
| `lengthInDays` | `int32` | required | Number of days the SMS purchase covers. |

## Behavior

### Sender
Sent in response to a direct club buy availability check.


### Receiver
The client shows the SMS purchase option if available.

## Notes

- No additional notes

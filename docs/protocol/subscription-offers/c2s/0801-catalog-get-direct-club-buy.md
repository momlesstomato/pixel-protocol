---
title: catalog.get_direct_club_buy
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `801`
- **Header**: `GET_DIRECT_CLUB_BUY_AVAILABLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Check whether direct SMS Club purchase is available

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `durationDays` | `int32` | required | Requested subscription length in days. |

## Behavior

### Sender
Sent to determine if the player can buy Club membership via SMS/direct payment.


### Receiver
The server responds with the direct SMS club buy availability status including price point URL and market information.

## Notes

- No additional notes

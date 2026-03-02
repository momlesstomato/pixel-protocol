---
title: calendar.seasonal_daily_offer
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1889`
- **Header**: `SEASONAL_CALENDAR_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the seasonal calendar daily offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page identifier for the offer. |
| `offer` | `object` | required | Catalog offer data structure. |

## Behavior

### Sender
Sent in response to a seasonal daily offer request.


### Receiver
The client displays the daily offer in the seasonal calendar interface.

## Notes

- No additional notes

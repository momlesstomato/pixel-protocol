---
title: furniture.rentable_furni_offer
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `35`
- **Header**: `RENTABLE_FURNI_RENT_OR_BUYOUT_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a rentable furniture rent or buyout offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productCode` | `string` | required | Product code of the rentable furniture. |
| `dayPrice` | `int32` | required | Daily rental price in credits. |
| `totalPrice` | `int32` | required | Full buyout price in credits. |
| `extend` | `boolean` | required | True if this is an extension offer for an existing rental. |
| `buyout` | `boolean` | required | True if buyout is available. |
| `actAsOwner` | `boolean` | required | True if the user acts as the owner of the rented space. |

## Behavior

### Sender
Sent when the user requests rental/buyout details for a rentable furniture item.


### Receiver
The client shows the offer details and pricing. Confirmed in GLADIATOR.

## Notes

- No additional notes

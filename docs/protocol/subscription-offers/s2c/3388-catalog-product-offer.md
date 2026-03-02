---
title: catalog.product_offer
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3388`
- **Header**: `PRODUCT_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver details for a single product offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offer` | `object` | required | Full offer record (same structure as catalog page offers). |

## Behavior

### Sender
Sent in response to `catalog.get_product_offer` (c2s 2594) with the offer data for a single catalog item.


### Receiver
The client displays the offer details, typically in a targeted offer dialog. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.get_product_offer
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2594`
- **Header**: `GET_PRODUCT_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request details for a specific product offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Catalog offer identifier. |

## Behavior

### Sender
Sent when the client needs to display a single offer by its ID, e.g. from a notification link.


### Receiver
The server responds with `catalog.product_offer` (s2c 3388). Confirmed in GLADIATOR.

## Notes

- No additional notes

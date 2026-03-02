---
title: catalog.check_giftable
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1347`
- **Header**: `GET_IS_OFFER_GIFTABLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Check whether a catalog offer can be purchased as a gift

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Catalog offer identifier to check. |

## Behavior

### Sender
Sent before showing the gift wrapping UI to confirm that the selected offer supports gift purchasing.


### Receiver
The server responds indicating whether the offer is giftable. Confirmed in GLADIATOR.

## Notes

- No additional notes

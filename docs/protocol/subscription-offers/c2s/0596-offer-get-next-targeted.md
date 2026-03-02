---
title: offer.get_next_targeted
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `596`
- **Header**: `GET_NEXT_TARGETED_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the next available targeted offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Current offer identifier to get the next one after. |

## Behavior

### Sender
Sent after dismissing or purchasing a targeted offer to check for subsequent offers.


### Receiver
The server checks for remaining targeted offers and responds with the next offer data or a not-found response.

## Notes

- No additional notes

---
title: subscription.new_user_experience_gift_offer
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3575`
- **Header**: `NEW_USER_EXPERIENCE_GIFT_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: New user experience gift offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Field extracted from parser source. |

## Behavior

### Sender
The server sends this message to inform the client about new user experience gift offer.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

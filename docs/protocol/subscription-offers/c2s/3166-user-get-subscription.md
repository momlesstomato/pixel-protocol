---
title: user.get_subscription
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3166`
- **Header**: `USER_SUBSCRIPTION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request subscription status for a named product

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | required | Club product identifier, e.g. `"club_habbo"` |

## Behavior

### Sender
Sent to request the subscription status for a specific club product by name (e.g. `"club_habbo"`). This allows targeted refresh of a single product's subscription state.


### Receiver
The server responds with `user.subscription` (s2c 954) scoped to the requested product name.

## Notes

- No additional notes

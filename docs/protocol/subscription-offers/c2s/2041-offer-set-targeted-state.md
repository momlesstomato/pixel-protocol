---
title: offer.set_targeted_state
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2041`
- **Header**: `SET_TARGETTED_OFFER_STATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the state of a targeted offer for the current user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offerId` | `int32` | required | Targeted offer identifier. |
| `state` | `int32` | required | New state value for this offer. |

## Behavior

### Sender
Sent when the player interacts with a targeted offer (e.g. dismisses or views it) to record the state change.


### Receiver
The server stores the updated offer state for the user. Confirmed in GLADIATOR.

## Notes

- No additional notes

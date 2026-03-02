---
title: catalog.club_extend_offer
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3964`
- **Header**: `CLUB_EXTENDED_OFFER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a Club membership extension offer

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offer` | `object` | required | Extension offer data including base offer fields plus extension-specific pricing and duration. |

## Behavior

### Sender
Sent in response to a get-extend-offer request with the available extension options.


### Receiver
The client displays the extension offer dialog allowing the player to purchase additional subscription time.

## Notes

- No additional notes

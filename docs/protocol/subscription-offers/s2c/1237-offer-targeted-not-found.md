---
title: offer.targeted_not_found
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1237`
- **Header**: `TARGET_OFFER_NOT_FOUND`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate no targeted offer is available

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the server has no active targeted offer for the player.


### Receiver
The client dismisses the targeted offer UI or does not display it.

## Notes

- No additional notes

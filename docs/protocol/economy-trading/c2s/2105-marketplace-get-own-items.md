---
title: marketplace.get_own_items
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2105`
- **Header**: `MARKETPLACE_REQUEST_OWN_ITEMS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the player's own Marketplace listings

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the My Offers tab in the Marketplace.


### Receiver
The server responds with all active and expired listings owned by the player, including any redeemable credits from completed sales. Confirmed in GLADIATOR.

## Notes

- No additional notes

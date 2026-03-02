---
title: marketplace.redeem_credits
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2650`
- **Header**: `MARKETPLACE_REDEEM_CREDITS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Redeem accumulated credits from completed Marketplace sales

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player clicks the redeem button in the My Offers section.


### Receiver
The server transfers waiting credits to the player's balance and responds with an updated offers list showing zero waiting credits. Confirmed in GLADIATOR.

## Notes

- No additional notes

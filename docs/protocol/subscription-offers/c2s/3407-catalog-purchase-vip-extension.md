---
title: catalog.purchase_vip_extension
sidebar_position: 34
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3407`
- **Header**: `PURCHASE_VIP_MEMBERSHIP_EXTENSION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase a VIP Club membership extension

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player confirms purchasing a VIP membership extension.


### Receiver
The server processes the VIP extension purchase, deducts credits, extends the subscription period, and sends an updated subscription status. Confirmed in GLADIATOR.

## Notes

- No additional notes

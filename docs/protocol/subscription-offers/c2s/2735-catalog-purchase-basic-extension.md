---
title: catalog.purchase_basic_extension
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2735`
- **Header**: `PURCHASE_BASIC_MEMBERSHIP_EXTENSION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase a basic Club membership extension

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player confirms purchasing a basic HC membership extension.


### Receiver
The server processes the extension purchase, deducts credits, extends the subscription period, and sends an updated subscription status. Confirmed in GLADIATOR.

## Notes

- No additional notes

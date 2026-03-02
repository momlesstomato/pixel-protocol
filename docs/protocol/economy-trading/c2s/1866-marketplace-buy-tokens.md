---
title: marketplace.buy_tokens
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1866`
- **Header**: `MARKETPLACE_BUY_TOKENS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Purchase Marketplace listing tokens

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player buys additional tokens to list items on the Marketplace.


### Receiver
The server deducts credits and adds listing tokens to the player's account.

## Notes

- No additional notes

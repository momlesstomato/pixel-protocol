---
title: marketplace.get_can_sell
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `848`
- **Header**: `REQUEST_SELL_ITEM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Check whether the player can list an item on the Marketplace

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent before the sell dialog opens to verify the player has selling permissions and tokens.


### Receiver
The server responds with the eligibility result and current token count.

## Notes

- No additional notes

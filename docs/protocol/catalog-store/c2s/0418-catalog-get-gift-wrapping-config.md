---
title: catalog.get_gift_wrapping_config
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `418`
- **Header**: `GET_GIFT_WRAPPING_CONFIG`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the available gift wrapping options

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user opens the gift wrapping selector before purchasing a gift.


### Receiver
The server responds with `catalog.gift_wrapping_config` (s2c 2234). Confirmed in GLADIATOR.

## Notes

- No additional notes

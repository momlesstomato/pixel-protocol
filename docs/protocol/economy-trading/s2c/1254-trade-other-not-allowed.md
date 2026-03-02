---
title: trade.other_not_allowed
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1254`
- **Header**: `TRADE_OTHER_NOT_ALLOWED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that the other user is not allowed to trade

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the trade target does not have trading permissions.


### Receiver
The client shows an error indicating the other user cannot trade.

## Notes

- No additional notes

---
title: trade.you_not_allowed
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3058`
- **Header**: `TRADE_YOU_NOT_ALLOWED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that the current user is not allowed to trade

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the requesting user does not have trading permissions.


### Receiver
The client shows an error indicating the player cannot trade.

## Notes

- No additional notes

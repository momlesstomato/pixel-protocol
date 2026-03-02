---
title: trade.no_such_item
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2873`
- **Header**: `TRADE_NO_SUCH_ITEM`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that a traded item no longer exists

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the trade involves an item that has been removed.


### Receiver
The client shows an error and may refresh the trade session.

## Notes

- No additional notes

---
title: trade.completed
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1001`
- **Header**: `TRADE_COMPLETED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the trade was successfully completed

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to both participants after all items have been exchanged.


### Receiver
The client closes the trade window and shows a success notification.

## Notes

- No additional notes

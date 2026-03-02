---
title: trade.confirmation
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2720`
- **Header**: `TRADE_CONFIRMATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show the final trade confirmation dialog

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when both participants have accepted the trade.


### Receiver
The client displays the confirmation dialog with a summary of items to be exchanged.

## Notes

- No additional notes

---
title: trade.confirm
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2760`
- **Header**: `TRADE_CONFIRM`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm the trade after both parties accepted

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player clicks confirm in the final trade confirmation dialog.


### Receiver
The server checks both users have confirmed, executes the item exchange between inventories, and sends trade completed to both participants. Confirmed in GLADIATOR.

## Notes

- No additional notes

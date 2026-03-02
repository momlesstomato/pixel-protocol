---
title: trade.accept
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3863`
- **Header**: `TRADE_ACCEPT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Accept the current trade offer

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player clicks the accept button in the trade window after reviewing the items.


### Receiver
The server marks the player as having accepted. If both parties have accepted, the trade moves to the confirmation phase. Confirmed in GLADIATOR.

## Notes

- No additional notes

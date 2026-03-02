---
title: trade.unaccept
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1444`
- **Header**: `TRADE_UNACCEPT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Withdraw acceptance of the trade offer

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player clicks unaccept after previously accepting the trade.


### Receiver
The server reverts the accept state for this user and notifies both participants. Confirmed in GLADIATOR.

## Notes

- No additional notes

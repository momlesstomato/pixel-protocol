---
title: trade.cancel
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2341`
- **Header**: `TRADE_CANCEL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Cancel the trade before confirmation

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player clicks cancel during the trade negotiation phase.


### Receiver
The server cancels the trade session and notifies both participants with a trade closed message. Confirmed in GLADIATOR.

## Notes

- No additional notes

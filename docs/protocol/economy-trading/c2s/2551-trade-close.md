---
title: trade.close
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2551`
- **Header**: `TRADE_CLOSE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Close the trade window

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player closes the trade dialog.


### Receiver
The server ends the trade session and sends a trade closed notification to both users. Confirmed in GLADIATOR.

## Notes

- No additional notes

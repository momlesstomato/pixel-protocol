---
title: trade.not_open
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3128`
- **Header**: `TRADE_NOT_OPEN`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that no trade session is currently open

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when a trade action is attempted but no trade session exists.


### Receiver
The client shows an error or closes any stale trade windows.

## Notes

- No additional notes

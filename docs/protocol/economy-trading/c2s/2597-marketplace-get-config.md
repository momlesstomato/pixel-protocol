---
title: marketplace.get_config
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2597`
- **Header**: `MARKETPLACE_CONFIG`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the Marketplace configuration

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player first opens the Marketplace interface.


### Receiver
The server responds with Marketplace settings including commission rates, price limits, and timing values. Confirmed in GLADIATOR.

## Notes

- No additional notes

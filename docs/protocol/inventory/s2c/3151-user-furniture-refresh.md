---
title: user.furniture_refresh
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3151`
- **Header**: `USER_FURNITURE_REFRESH`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Invalidate the cached furniture inventory

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the server determines the client's furniture cache is stale.


### Receiver
The client discards its cached furniture list and requests a fresh inventory.

## Notes

- No additional notes

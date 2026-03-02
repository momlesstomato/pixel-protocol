---
title: user.get_currency
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `273`
- **Header**: `USER_CURRENCY`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the current activity-point currency balances

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client to refresh its local copy of the user's activity-point currency balances (seasonal currencies, pixels, etc.). The packet carries no payload.


### Receiver
The server responds with `user.currency` (s2c 2018) containing all currency type/amount pairs for the authenticated user.

## Notes

- No additional notes

---
title: navigator.init
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2110`
- **Header**: `NAVIGATOR_INIT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Initialize the navigator and receive all initial state

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the client opens the navigator window for the first time in a session. Carries no payload. The server responds with a burst of packets that establish the full navigator state.


### Receiver
The server sends the following packets in sequence: `navigator.settings` (s2c 518), `navigator.metadata` (s2c 3052), `navigator.lifted` (s2c 3104), `navigator.collapsed` (s2c 1543), `navigator.saved_searches` (s2c 3984), `navigator.event_categories` (s2c 3244). Confirmed in GLADIATOR.

## Notes

- No additional notes

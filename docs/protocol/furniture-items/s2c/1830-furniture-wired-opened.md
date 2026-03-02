---
title: furniture.wired_opened
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1830`
- **Header**: `WIRED_OPEN`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that a wired furniture item was opened

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to acknowledge that the wired furniture editor was opened, allowing the client to initialize the editor UI.


### Receiver
The client opens the wired editor panel. Confirmed in GLADIATOR.

## Notes

- No additional notes

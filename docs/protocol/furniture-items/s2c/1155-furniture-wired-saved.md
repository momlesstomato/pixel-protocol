---
title: furniture.wired_saved
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1155`
- **Header**: `WIRED_SAVE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that wired configuration was saved

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent after a successful wired save operation. Carries no payload; the client closes the wired editor.


### Receiver
The client closes the wired editor. Confirmed in GLADIATOR.

## Notes

- No additional notes

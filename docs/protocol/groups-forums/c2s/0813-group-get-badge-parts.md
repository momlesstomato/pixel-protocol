---
title: group.get_badge_parts
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `813`
- **Header**: `GROUP_PARTS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request all available group badge parts

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the player opens the group badge editor.


### Receiver
The server responds with all available bases, symbols, and colors that can be used to compose a group badge. Confirmed in GLADIATOR.

## Notes

- No additional notes

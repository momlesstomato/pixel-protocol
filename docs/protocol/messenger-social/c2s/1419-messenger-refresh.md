---
title: messenger.refresh
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1419`
- **Header**: `FRIEND_LIST_UPDATE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a full refresh of the friend list

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to force the server to re-send the complete friend list. Carries no payload. Used after the friend list UI is opened to ensure it is up to date.


### Receiver
The server re-sends the friend list fragments via `messenger.friends` (s2c 3130). Confirmed in GLADIATOR.

## Notes

- No additional notes

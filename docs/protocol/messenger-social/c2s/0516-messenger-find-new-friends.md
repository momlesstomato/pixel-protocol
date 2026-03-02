---
title: messenger.find_new_friends
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `516`
- **Header**: `FIND_NEW_FRIENDS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Trigger the automated friend-finder process

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user activates the find-new-friends feature. Carries no payload. The server runs a matching algorithm and may forward the user to a pairing room.


### Receiver
The server initiates the find-friends matching process and responds with `messenger.find_friends_result` (s2c 1210) indicating whether matching succeeded. Confirmed in GLADIATOR.

## Notes

- No additional notes

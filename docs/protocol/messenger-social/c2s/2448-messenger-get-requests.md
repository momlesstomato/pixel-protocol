---
title: messenger.get_requests
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2448`
- **Header**: `GET_FRIEND_REQUESTS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the full list of pending friend requests

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent on demand to retrieve all outstanding friend requests addressed to the local user. Carries no payload.


### Receiver
The server queries all pending requests for the user and responds with `messenger.friend_requests` (s2c 280). Confirmed in GLADIATOR.

## Notes

- No additional notes

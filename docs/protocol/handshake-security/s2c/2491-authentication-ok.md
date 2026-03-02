---
title: authentication.ok
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2491`
- **Header**: `AUTHENTICATED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Handshake & Security
- **Phase**: `auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm successful SSO authentication

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the server after the SSO ticket has been validated, the user session loaded, and the user marked as online. This is always the first packet in the post-authentication burst and is followed by availability status, initial pings, user permissions, subscription data, and other session-init messages.


### Receiver
The client transitions from the handshake phase to the authenticated phase. It marks the handshake as complete, dispatches an internal authenticated event, and immediately requests user info (e.g. `user.info` c2s 357). From this point the client may send game-state packets such as navigator searches or room entry.

## Notes

- No additional notes

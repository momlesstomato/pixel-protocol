---
title: user.get_info
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `357`
- **Header**: `USER_INFO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request own user data from the server

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client immediately after receiving `authentication.ok` (s2c 2491) to request its own user data. The packet carries no payload; the server identifies the requesting user from the session.


### Receiver
The server responds with `user.info` (s2c 2725) containing the authenticated user's full identity and preference data, followed by `user.permissions` (s2c 411) and `user.subscription` (s2c 954).

## Notes

- No additional notes

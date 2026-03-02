---
title: messenger.init
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2781`
- **Header**: `MESSENGER_INIT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Initialize the friend list and messenger subsystem

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client immediately after receiving `user.info` (s2c 2725) to request the messenger configuration. Carries no payload. The server responds with `messenger.init` (s2c 1605) which delivers the friend limit values and category list.


### Receiver
The server looks up the user's messenger limits and custom friend categories, then sends `messenger.init` (s2c 1605). Confirmed in GLADIATOR and GALAXY.

## Notes

- No additional notes

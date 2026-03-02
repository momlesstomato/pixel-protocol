---
title: user.achievement_notification
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `806`
- **Header**: `ACHIEVEMENT_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Achievement notification

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about achievement notification.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

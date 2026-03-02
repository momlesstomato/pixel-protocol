---
title: messenger.minimail_new
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1911`
- **Header**: `MESSENGER_MINIMAIL_NEW`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client that a new minimail message has arrived

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Pushed when a new minimail message is delivered to the user. Carries no payload; the client is expected to fetch the updated count via `messenger.minimail_count` (s2c 2803) or to open the inbox to retrieve message content.


### Receiver
The client shows a notification prompting the user to check their minimail inbox. Confirmed in GLADIATOR.

## Notes

- No additional notes

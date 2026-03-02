---
title: room_entities.set_chat_style
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1030`
- **Header**: `USER_SETTINGS_CHAT_STYLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set the user's preferred chat bubble style

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `styleId` | `int32` | required | Selected chat bubble style identifier. |

## Behavior

### Sender
Sent when the user selects a chat bubble style preference.


### Receiver
The server persists the chat style preference. Confirmed in GLADIATOR.

## Notes

- No additional notes

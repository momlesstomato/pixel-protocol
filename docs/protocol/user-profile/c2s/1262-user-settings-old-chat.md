---
title: user.settings_old_chat
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1262`
- **Header**: `USER_SETTINGS_OLD_CHAT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Toggle old-style chat bubble mode

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `oldChat` | `boolean` | required | true = legacy bubble chat; false = modern floating chat |

## Behavior

### Sender
Sent when the user toggles between the modern floating chat style and the legacy bubble chat style.


### Receiver
The server persists the preference and may forward the flag to other users in the same room to adjust their rendering of this user's chat messages. No response packet is sent.

## Notes

- No additional notes

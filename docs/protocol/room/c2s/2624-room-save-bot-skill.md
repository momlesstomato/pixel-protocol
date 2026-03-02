---
title: room.save_bot_skill
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2624`
- **Header**: `BOT_SKILL_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Room
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save a bot skill configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `botId` | `int32` | required | ID of the bot. |
| `skillId` | `int32` | required | Skill type identifier. |
| `data` | `string` | required | JSON or plain-text skill configuration payload. |

## Behavior

### Sender
Sent when the room owner updates a bot's skill settings via the bot configuration panel.


### Receiver
The server persists the skill configuration. Confirmed in GLADIATOR.

## Notes

- No additional notes

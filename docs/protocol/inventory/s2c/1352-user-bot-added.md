---
title: user.bot_added
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1352`
- **Header**: `ADD_BOT_TO_INVENTORY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Add a bot to the inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bot` | `object` | required | Bot data containing id, name, motto, gender, and figure. |
| `openInventory` | `boolean` | required | Whether the client should automatically open the inventory panel. |

## Behavior

### Sender
Sent when the player receives a new bot (purchase or pickup from room).


### Receiver
The client adds the bot to the inventory bot list.

## Notes

- No additional notes

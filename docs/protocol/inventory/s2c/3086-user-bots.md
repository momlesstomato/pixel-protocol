---
title: user.bots
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3086`
- **Header**: `USER_BOTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the player's bot inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bots` | `list&lt;object&gt;` | required | List of bots, each containing id (int32), name (string), motto (string), gender (string), and figure (string). |

## Behavior

### Sender
Sent in response to a bot inventory request.


### Receiver
The client renders the bot list in the inventory panel.

## Notes

- No additional notes

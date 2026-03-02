---
title: furniture.postit_open
sidebar_position: 42
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2366`
- **Header**: `FURNITURE_POSTIT_STICKY_POLE_OPEN`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a post-it sticky pole is ready for writing

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room wall item ID of the post-it. |
| `color` | `string` | required | Current color code of the post-it. |
| `text` | `string` | required | Current text content of the post-it. |

## Behavior

### Sender
Sent when the user places a post-it note or clicks an existing one, opening the editor.


### Receiver
The client opens the post-it editor with the current content. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: furniture.save_postit
sidebar_position: 53
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3283`
- **Header**: `FURNITURE_POSTIT_SAVE_STICKY_POLE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save the content of a post-it note

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `itemId` | `int32` | required | Room wall item ID of the post-it. |
| `color` | `string` | required | Selected post-it color code. |
| `text` | `string` | required | Post-it note text content. |

## Behavior

### Sender
Sent when the user saves text and color changes to an existing post-it note.


### Receiver
The server updates the post-it content. Confirmed in GLADIATOR.

## Notes

- No additional notes

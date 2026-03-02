---
title: user.save_wardrobe_outfit
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `800`
- **Header**: `SAVE_WARDROBE_OUTFIT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save an outfit to a wardrobe slot

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `slotId` | `int32` | required | Wardrobe slot index (1-based) to save the outfit into |
| `look` | `string` | required | Full Nitro figure code string for the outfit |
| `gender` | `string` | required | Gender code: `M` for male, `F` for female |

## Behavior

### Sender
Sent when the user saves the current avatar look into a specific wardrobe slot. The server overwrites any existing outfit in that slot.


### Receiver
The server persists the outfit data for the slot. No explicit response packet is sent; the client updates its local wardrobe model optimistically.

## Notes

- No additional notes

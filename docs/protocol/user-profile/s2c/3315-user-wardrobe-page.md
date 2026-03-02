---
title: user.wardrobe_page
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3315`
- **Header**: `USER_OUTFITS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a page of the user's saved wardrobe outfits

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageIndex` | `int32` | required | Wardrobe page index (read by the client but not used for display) |
| `count` | `int32` | required | Number of outfit slot entries that follow |

## Behavior

### Sender
Sent in response to a wardrobe page request. Each entry represents one saved outfit slot with its figure code and gender. Unused slots are omitted.


### Receiver
The client populates the wardrobe editor's slot grid. The client skips the page index field and uses only the slot entries.

## Notes

- Each entry: `int32` slotId, `string` figure, `string` gender.

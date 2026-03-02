---
title: user.get_wardrobe
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2742`
- **Header**: `GET_WARDROBE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a page of saved wardrobe outfits

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Zero-based wardrobe page index to retrieve |

## Behavior

### Sender
Sent to load a specific page of the user's wardrobe slots. Page numbering starts at 0. Most implementations use a single page (0) for the entire wardrobe.


### Receiver
The server responds with `user.wardrobe_page` (s2c 3315) containing the outfit slots for the requested page.

## Notes

- No additional notes

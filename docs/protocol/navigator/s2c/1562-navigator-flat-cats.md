---
title: navigator.flat_cats
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1562`
- **Header**: `NAVIGATOR_CATEGORIES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of room categories the user may use when creating or editing a room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categoryCount` | `int32` | required | Number of category entries that follow. |

## Behavior

### Sender
Sent in response to `navigator.get_flat_cats` (c2s 3027). Lists every category the user has permission to place a room in, including metadata for automatic and staff-only categories.


### Receiver
The client populates the category dropdown in the room-creation and room-settings forms. Confirmed in GLADIATOR (as NAVIGATOR_CATEGORIES).

## Notes

- Each category entry contains: `id` (int32), `name` (string), `visible` (boolean), `automatic` (boolean; true for auto-assigned categories), `automaticCategoryKey` (string; key used by the server when assigning rooms automatically), `globalCategoryKey` (string; client-side localization key), `staffOnly` (boolean; true for categories restricted to staff).


---
title: navigator.event_categories
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3244`
- **Header**: `NAVIGATOR_EVENT_CATEGORIES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of event categories available for room promotions

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categoryCount` | `int32` | required | Number of event category entries that follow. |

## Behavior

### Sender
Sent as part of the navigator init burst. Lists the categories that can be used when scheduling a room event promotion.


### Receiver
The client populates the event-category dropdown in the room event scheduling UI. Confirmed in GLADIATOR.

## Notes

- Each category entry contains: `id` (int32), `name` (string), `visible` (boolean; whether this category is shown in the UI).


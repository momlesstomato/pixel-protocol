---
title: group.badges
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2402`
- **Header**: `GROUP_BADGES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver group badge codes for room display

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `badges` | `list&lt;object&gt;` | required | Badge entries mapping group identifiers to badge code strings. |

## Behavior

### Sender
Sent when entering a room that has group associations.


### Receiver
The client caches the badge images for rendering on group furniture and avatars.

## Notes

- No additional notes

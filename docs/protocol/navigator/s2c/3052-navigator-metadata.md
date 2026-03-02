---
title: navigator.metadata
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3052`
- **Header**: `NAVIGATOR_METADATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the top-level search context structure with saved searches

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contextCount` | `int32` | required | Number of top-level search context entries that follow. |

## Behavior

### Sender
Sent as part of the navigator init burst. Defines the ordered list of top-level search tabs (contexts) and any saved searches nested within each.


### Receiver
The client renders the search tab bar from the received contexts and populates each tab's saved-search list. Confirmed in GLADIATOR.

## Notes

- Each context entry contains: `code` (string; identifies the search tab), `savedSearchCount` (int32; number of saved searches under this context), then for each saved search: `id` (int32), `code` (string), `filter` (string), `localization` (string).


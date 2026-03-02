---
title: navigator.saved_searches
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3984`
- **Header**: `NAVIGATOR_SEARCHES`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the user's full list of saved searches

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `searchCount` | `int32` | required | Number of saved-search entries that follow. |

## Behavior

### Sender
Sent as part of the navigator init burst and after a search is saved or deleted. Contains all saved searches flat (not grouped by context).


### Receiver
The client replaces its local saved-search list with the received entries. Confirmed in GLADIATOR.

## Notes

- Each entry contains: `id` (int32; server-assigned identifier), `code` (string; search context), `filter` (string; free-text filter), `localization` (string; display label).


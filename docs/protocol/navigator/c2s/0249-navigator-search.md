---
title: navigator.search
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `249`
- **Header**: `NAVIGATOR_SEARCH`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Search for rooms within a named search category

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | required | Identifies the search context. The server maps each code to a query strategy (e.g. popular rooms, own rooms, rooms where friends are).<br/> |
| `data` | `string` | required | Free-text filter applied within the search context. May be an empty string when the search context does not require a text filter.<br/> |

## Behavior

### Sender
Sent when the user performs a room search. The `code` field identifies which search tab or context is active (e.g., `"popular"`, `"my"`, `"friends"`). The `data` field carries the free-text query string; it may be empty for non-text searches.


### Receiver
The server runs the search corresponding to `code` filtered by `data` and responds with `navigator.search_result` (s2c 2690). Confirmed in GLADIATOR.

## Notes

- No additional notes

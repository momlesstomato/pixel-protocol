---
title: navigator.search_save
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2226`
- **Header**: `NAVIGATOR_SEARCH_SAVE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Save the current search as a named bookmark

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | required | Search context code to save. |
| `data` | `string` | required | Free-text filter to save alongside the code. |

## Behavior

### Sender
Sent when the user saves a search for future reuse. The saved search is associated with a code and a data filter string.


### Receiver
The server creates a saved-search record for the user. The updated saved-search list is delivered via `navigator.saved_searches` (s2c 3984). Confirmed in GLADIATOR.

## Notes

- No additional notes

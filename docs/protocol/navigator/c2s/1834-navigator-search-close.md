---
title: navigator.search_close
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1834`
- **Header**: `NAVIGATOR_SEARCH_CLOSE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mark a search category tab as collapsed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | required | Search category code to mark as collapsed. |

## Behavior

### Sender
Sent when the user collapses a search category in the navigator. The server records this preference.


### Receiver
The server marks the category identified by `code` as collapsed for the user's navigator state. No response packet is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

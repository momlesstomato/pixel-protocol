---
title: navigator.search_open
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `637`
- **Header**: `NAVIGATOR_SEARCH_OPEN`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Mark a search category tab as expanded

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | required | Search category code to mark as expanded. |

## Behavior

### Sender
Sent when the user clicks to expand a collapsed search category in the navigator. The server records this preference.


### Receiver
The server marks the category identified by `code` as open (not collapsed) for the user's navigator state. No response packet is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

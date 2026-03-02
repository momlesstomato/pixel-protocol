---
title: navigator.search_delete
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1954`
- **Header**: `NAVIGATOR_DELETE_SAVED_SEARCH`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Delete a previously saved search bookmark

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `searchId` | `int32` | required | Server-assigned ID of the saved search to delete. |

## Behavior

### Sender
Sent when the user removes a saved search. The search is identified by its server-assigned integer ID.


### Receiver
The server deletes the saved-search record. No confirmation packet is sent. Confirmed in GLADIATOR.

## Notes

- No additional notes

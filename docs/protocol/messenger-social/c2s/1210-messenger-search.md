---
title: messenger.search
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1210`
- **Header**: `HABBO_SEARCH`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Search for users by name fragment

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | `string` | required | Username substring to search for. Must be at least one character.<br/> |

## Behavior

### Sender
Sent when the user types in the friend-search box. The server returns up to two result groups: friends matching the query and non-friends matching the query.


### Receiver
The server searches for usernames containing the query string and responds with `messenger.search_result` (s2c 973). Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: user.approve_name
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2109`
- **Header**: `APPROVE_NAME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit a name string for server-side word screening

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | required | Name string to screen |
| `type` | `int32` | required | Server-defined integer that identifies the naming context (values are server-specific) |

## Behavior

### Sender
Sent when the client needs the server to screen a name string against forbidden-word filters before it is persisted. The `type` value is a server-defined integer that scopes the validation to the appropriate naming rules for that context.


### Receiver
The server runs the name through its word filter and naming rules for the given type, then responds with `user.approve_name_result` (s2c 1503) containing the result code and any validation detail string.

## Notes

- No additional notes

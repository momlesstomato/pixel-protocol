---
title: user.guild_edit_failed
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3988`
- **Header**: `GUILD_EDIT_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report that a guild edit operation failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `int32` | required | Reason code for the failure: 1 = no admin permission, 2 = guild not found, 3 = name not allowed, 4 = description not allowed<br/> |

## Behavior

### Sender
Sent when an attempt to edit a guild (group) settings fails server-side. The reason code identifies the cause.


### Receiver
The client displays an appropriate error message to the user.

## Notes

- No additional notes

---
title: moderation.issue_deleted
sidebar_position: 40
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3192`
- **Header**: `ISSUE_DELETED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Issue deleted

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about issue deleted state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

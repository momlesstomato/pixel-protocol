---
title: moderation.issue_close_notification
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `934`
- **Header**: `ISSUE_CLOSE_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Issue close notification

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about issue close notification state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

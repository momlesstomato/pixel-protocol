---
title: connection.error
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1004`
- **Header**: `CONNECTION_ERROR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report a connection-level error

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `messageId` | `int32` | required | Header ID of the message that caused the error |
| `errorCode` | `int32` | required | Numeric error code |
| `timestamp` | `string` | required | Server-side timestamp of the error occurrence |

## Behavior

### Sender
Sent by the server when a connection-level error occurs, such as an invalid or unrecognized message from the client. The error includes the offending message ID, a numeric error code, and a timestamp.


### Receiver
The client may log the error for debugging, display a generic error notification, or ignore it. This packet does not necessarily cause a disconnect; it is informational.

## Notes

- No additional notes

---
title: group.decline_request
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1894`
- **Header**: `GROUP_REQUEST_DECLINE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Decline a pending membership request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier whose request to decline. |

## Behavior

### Sender
Sent by a group admin or owner when rejecting a join request.


### Receiver
The server removes the pending request. Confirmed in GLADIATOR.

## Notes

- No additional notes

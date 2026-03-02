---
title: group.accept_request
sidebar_position: 41
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3386`
- **Header**: `GROUP_REQUEST_ACCEPT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Accept a pending membership request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `userId` | `int32` | required | User identifier whose request to accept. |

## Behavior

### Sender
Sent by a group admin or owner when approving a join request.


### Receiver
The server adds the user as a member and removes the pending request. Confirmed in GLADIATOR.

## Notes

- No additional notes

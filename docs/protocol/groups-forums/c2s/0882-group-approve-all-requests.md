---
title: group.approve_all_requests
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `882`
- **Header**: `APPROVE_ALL_MEMBERSHIP_REQUESTS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Accept all pending membership requests

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |

## Behavior

### Sender
Sent by a group admin to approve all waiting join requests at once.


### Receiver
The server adds all pending requesters as members.

## Notes

- No additional notes

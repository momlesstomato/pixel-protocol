---
title: group.join_failed
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `762`
- **Header**: `GROUP_HABBO_JOIN_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that a group join attempt failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier. |
| `reason` | `int32` | required | Failure reason code. |

## Behavior

### Sender
Sent when a join request cannot be processed.


### Receiver
The client shows an error explaining why the player cannot join the group.

## Notes

- No additional notes

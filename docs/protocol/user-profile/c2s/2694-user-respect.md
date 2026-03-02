---
title: user.respect
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2694`
- **Header**: `USER_RESPECT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Send a respect point to another user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user receiving the respect point |

## Behavior

### Sender
Sent when the user clicks the respect button on another user's profile. Each session has a limited number of respect points to give per day; the server tracks this counter.


### Receiver
The server decrements the sender's remaining daily respect counter, increments the target's total respects received, and broadcasts `user.respect_received` (s2c 2815) to both parties. If the sender has no remaining respect points the server silently ignores the request.

## Notes

- No additional notes

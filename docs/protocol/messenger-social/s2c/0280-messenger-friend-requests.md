---
title: messenger.friend_requests
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `280`
- **Header**: `MESSENGER_REQUESTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full list of pending incoming friend requests

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalRequests` | `int32` | required | Total count of all pending requests (may differ from the immediately following count if the list is paged).<br/> |
| `requestCount` | `int32` | required | Number of request records in this packet. |

## Behavior

### Sender
Sent in response to `messenger.get_requests` (c2s 2448). Contains all outstanding requests addressed to the user, ordered by arrival time.


### Receiver
The client replaces its local request list with the received entries. Confirmed in GLADIATOR.

## Notes

- After `requestCount`, each request entry contains: `requestId` (int32; same as the sender's user ID), `requesterName` (string), `figureString` (string).


---
title: messenger.accept_result
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `896`
- **Header**: `MESSENGER_ACCEPT_FRIENDS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report failures encountered while processing friend-request acceptances

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureCount` | `int32` | required | Number of failure records that follow. |

## Behavior

### Sender
Sent in response to `messenger.accept_friend` (c2s 137) when one or more acceptances fail. Only failed entries are listed; successful acceptances are reflected in `messenger.update` (s2c 2800).


### Receiver
The client reads each failure record and displays the appropriate error state for the affected request. Confirmed in GLADIATOR (as MessengerErrorComposer).

## Notes

- After `failureCount`, each failure entry contains: `userId` (int32; the requester whose acceptance failed), `errorCode` (int32; 1 = own list full, 2 = target list full, 3 = target not accepting requests, 4 = target not found).


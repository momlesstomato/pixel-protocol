---
title: user.set_classification
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2285`
- **Header**: `USER_CLASSIFICATION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Declare the user class type for the current session

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userClassType` | `string` | required | Server-defined string identifying the user's class type |

## Behavior

### Sender
Sent by the client to register its user class type string with the server. The string value is server-defined and corresponds to the classification categories the server sends back in `user.classification` (s2c 966).


### Receiver
The server records the class type for the session. It uses this when populating `user.classification` (s2c 966) responses that map user IDs to their names and class types.

## Notes

- No additional notes

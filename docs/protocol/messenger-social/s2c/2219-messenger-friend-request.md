---
title: messenger.friend_request
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2219`
- **Header**: `MESSENGER_REQUEST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client of a new incoming friend request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestId` | `int32` | required | Numeric ID of the sender's user account. Used as the request identifier when accepting or declining.<br/> |
| `requesterName` | `string` | required | Display name of the user sending the request. |
| `figureString` | `string` | required | Avatar figure string of the requesting user. |

## Behavior

### Sender
Pushed to the client when another user sends them a friend request via `messenger.request_friend` (c2s 3157) and the target is currently online.


### Receiver
The client adds the request to the pending friend request list and may display a notification. The user can then accept or decline via `messenger.accept_friend` (c2s 137) or `messenger.decline_friend` (c2s 2890). Confirmed in GLADIATOR.

## Notes

- No additional notes

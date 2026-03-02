---
title: user.classification
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `966`
- **Header**: `USER_CLASSIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver user ID, username, and class type for a set of users

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of user classification entries that follow |

## Behavior

### Sender
Sent by the server with the user IDs, usernames, and class type strings for a batch of users. The class type string corresponds to the value previously sent by those users in `user.set_classification` (c2s 2285). The client stores two maps keyed by user ID: one for usernames and one for class type strings.


### Receiver
The client stores the entries in `classifiedUsersNames` and `classifiedUsersClass` maps, keyed by user ID.

## Notes

- Each entry: `int32` userId, `string` username, `string` userClass (the class type string for that user).


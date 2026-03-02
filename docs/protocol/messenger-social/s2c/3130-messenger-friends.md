---
title: messenger.friends
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3130`
- **Header**: `MESSENGER_FRIENDS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver one fragment of the user's friend list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `totalFragments` | `int32` | required | Total number of fragments that make up the complete friend list. |
| `fragmentNumber` | `int32` | required | Zero-based index of this fragment within the full set. |
| `friendCount` | `int32` | required | Number of friend records in this fragment. |

## Behavior

### Sender
Sent one or more times in response to `messenger.refresh` (c2s 1419). Large friend lists are split into fragments of up to 750 friends each. The client must receive all fragments before the friend list is complete.


### Receiver
The client accumulates fragments using `totalFragments` and `fragmentNumber` (0-indexed) to know when all friends have been received. Confirmed in GLADIATOR.

## Notes

- After `friendCount`, each friend entry contains the following fields in order: `id` (int32), `name` (string), `gender` (int32; 0=male, 1=female), `online` (boolean), `followingAllowed` (boolean; true when the friend is in a room and permits following), `figure` (string; figure string, empty when offline), `categoryId` (int32; -1 if uncategorized), `motto` (string), `realName` (string), `lastAccess` (string; ISO-format timestamp of last logout, empty when online), `persistedMessageUser` (boolean; true when offline messaging is available), `vipMember` (boolean), `pocketHabboUser` (boolean), `relationshipStatus` (int16; 0=none, 1=heart, 2=smile, 3=wave).


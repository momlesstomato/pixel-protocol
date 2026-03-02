---
title: messenger.search_result
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `973`
- **Header**: `MESSENGER_SEARCH`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver user-search results split into friends and others

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `friendCount` | `int32` | required | Number of friend-match entries that follow. |
| `otherCount` | `int32` | required | Number of non-friend-match entries that follow after the friend entries.<br/> |

## Behavior

### Sender
Sent in response to `messenger.search` (c2s 1210). Results are split into two groups: friends matching the query come first, followed by non-friends.


### Receiver
The client renders the two groups in separate sections of the search results panel. Confirmed in GLADIATOR (as UserSearchResultComposer).

## Notes

- Each search result entry (both friend and other groups) contains: `avatarId` (int32), `avatarName` (string), `avatarMotto` (string), `isOnline` (boolean), `canFollow` (boolean), `lastOnlineData` (string; ISO-format last-seen timestamp), `avatarGender` (int32; 0=male, 1=female), `avatarFigure` (string), `realName` (string).


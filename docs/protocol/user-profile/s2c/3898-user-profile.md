---
title: user.profile
sidebar_position: 37
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3898`
- **Header**: `USER_PROFILE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a user's public profile card data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int32` | required | Numeric user ID |
| `username` | `string` | required | Display name |
| `figure` | `string` | required | Nitro figure code string |
| `motto` | `string` | required | User's personal motto text |
| `registration` | `string` | required | Account creation date formatted as `dd-MM-yyyy` |
| `achievementPoints` | `int32` | required | Total achievement points earned |
| `friendsCount` | `int32` | required | Number of confirmed friends |
| `isMyFriend` | `boolean` | required | Whether the viewing user is already a friend of the target |
| `requestSent` | `boolean` | required | Whether the viewing user has sent an outstanding friend request |
| `isOnline` | `boolean` | required | Whether the target user is currently online |
| `groupsCount` | `int32` | required | Number of group entries that follow |

## Behavior

### Sender
Sent in response to `user.get_profile` (c2s 3265) or `user.get_profile_by_name` (c2s 2249). The packet contains all fields needed to render the profile card: identity, appearance, achievement score, friend and online status, group memberships, and last-seen information.


### Receiver
The client renders the profile card. `isMyFriend` and `requestSent` control which action buttons are shown (add friend, cancel request, or none). `secondsSinceLastVisit` is used for the "last online" label; servers set this to -1 when the user has hidden their online status or is currently online. `openProfileWindow` signals whether the client should automatically display the window (true) or suppress it (false).

## Notes

- After `groupsCount`, each group entry is serialized in order: `int32` groupId, `string` groupName, `string` badgeCode, `string` colorA, `string` colorB, `boolean` favourite, `int32` ownerId, `boolean` hasForum.

- After the group array: `int32` secondsSinceLastVisit (seconds since the user was last online; -1 when the user is currently online or has hidden their status), `boolean` openProfileWindow.


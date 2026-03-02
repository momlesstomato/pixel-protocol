---
title: user.extended_profile_changed
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `876`
- **Header**: `EXTENDED_PROFILE_CHANGED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that another user's extended profile data has changed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user whose extended profile has changed |

## Behavior

### Sender
Sent to inform the client that the extended profile data for the specified user has been updated. The client should re-fetch the profile if it is currently displayed.


### Receiver
The client checks whether the profile card for the given user is currently open. If so, it re-requests the profile data.

## Notes

- No additional notes

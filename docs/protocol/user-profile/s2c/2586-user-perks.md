---
title: user.perks
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2586`
- **Header**: `USER_PERKS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of perk allowances for the authenticated user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of perk entries that follow |

## Behavior

### Sender
Sent during the post-authentication burst. Each entry names a server-defined feature (perkCode), carries an error message string (empty when the perk is granted), and a boolean that indicates whether the feature is available to this user.


### Receiver
The client stores the perk entries and uses `isAllowed` to gate access to the corresponding features. The `errorMessage` string is surfaced to the user when access is denied.

## Notes

- Each entry: `string` perkCode (server-defined feature identifier), `string` errorMessage (displayed when the perk is not allowed; empty string when the perk is granted), `boolean` isAllowed.


---
title: user.guild_member_mgmt_failed
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `818`
- **Header**: `GUILD_MEMBER_MGMT_FAILED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report that a guild member management action failed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `guildId` | `int32` | required | ID of the guild in which the action was attempted |
| `reason` | `int32` | required | Reason code for the failure: 1 = no admin permission, 2 = target not a member, 3 = cannot demote owner<br/> |

## Behavior

### Sender
Sent when an attempt to manage a guild member (kick, promote, demote, etc.) fails. Both the affected guild and the reason are provided.


### Receiver
The client displays an appropriate error message to the user.

## Notes

- No additional notes

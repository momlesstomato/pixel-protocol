---
title: moderation.call_for_help
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1691`
- **Header**: `CALL_FOR_HELP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit a call-for-help report

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | The user-written report description. |
| `topicIndex` | `int32` | required | Index of the selected help topic category. |
| `reportedUserId` | `int32` | required | User identifier of the player being reported. |
| `reportedRoomId` | `int32` | required | Room identifier where the incident occurred. |
| `chatEntries` | `list&lt;string&gt;` | required | Chat evidence as length-prefixed alternating pairs: each pair consists of a pattern identifier (string) followed by the message text (string). The list count is half the raw entry count. |

## Behavior

### Sender
The client sends this when a user files a report against another user from the help menu. It includes the report message, the selected topic, the reported user and room identifiers, and the relevant chat entries.


### Receiver
The server creates a new moderation issue, stores the chat evidence, and queues it for moderator review. The server responds with a CFH result message to confirm submission.

## Notes

- No additional notes

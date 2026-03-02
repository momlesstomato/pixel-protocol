---
title: moderation.pick_issues
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `15`
- **Header**: `PICK_ISSUES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Pick moderation issues for review

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `issueIds` | `list&lt;int32&gt;` | required | Array of issue identifiers to pick, length-prefixed with an int32 count. |
| `retryEnabled` | `boolean` | required | Whether the moderator wants retry logic enabled for this pick operation. |
| `retryCount` | `int32` | required | Number of retry attempts if the pick fails due to contention. |
| `message` | `string` | required | Optional note attached to the pick action. |

## Behavior

### Sender
The client sends this when a moderator selects one or more open issues from the issue queue to begin review. It contains a list of issue identifiers to claim.


### Receiver
The server assigns the listed issues to the requesting moderator, removing them from the shared queue. Other moderators receive updated queue state. The server responds with issue details for the claimed issues.

## Notes

- No additional notes

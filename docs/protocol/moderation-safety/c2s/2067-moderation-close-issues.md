---
title: moderation.close_issues
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2067`
- **Header**: `CLOSE_ISSUES`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Close one or more moderation issues with a resolution

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resolutionType` | `int32` | required | Resolution code: 1 = useless, 2 = abusive, 3 = resolved. |
| `issueIds` | `list&lt;int32&gt;` | required | Array of issue identifiers to close, length-prefixed with an int32 count. |

## Behavior

### Sender
The client sends this when a moderator resolves one or more issues. It includes the resolution type and a list of issue identifiers.


### Receiver
The server marks each listed issue as closed with the given resolution type. It notifies the reporting users and removes the issues from the active queue.

## Notes

- No additional notes

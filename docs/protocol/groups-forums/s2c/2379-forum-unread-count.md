---
title: forum.unread_count
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2379`
- **Header**: `GROUP_FORUM_UNREAD_COUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the total unread forum message count

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Total unread forum messages. |

## Behavior

### Sender
Sent in response to a get-unread-count request.


### Receiver
The client updates the unread badge on the forum navigation icon.

## Notes

- No additional notes

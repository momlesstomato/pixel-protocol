---
title: forum.list
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3001`
- **Header**: `GROUP_FORUM_LIST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a list of group forums

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `listCode` | `int32` | required | Filter type that was requested. |
| `totalAmount` | `int32` | required | Total number of forums matching the filter. |
| `startIndex` | `int32` | required | Starting offset of this page. |
| `forums` | `list&lt;object&gt;` | required | Forum entries with group ID, name, description, icon, thread/message counts, and last activity. |

## Behavior

### Sender
Sent in response to a forum list request.


### Receiver
The client displays the forum directory with activity summaries.

## Notes

- No additional notes

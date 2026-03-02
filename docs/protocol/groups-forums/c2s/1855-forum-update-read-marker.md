---
title: forum.update_read_marker
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1855`
- **Header**: `UPDATE_FORUM_READ_MARKER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the read position in forum threads

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `int32` | required | Number of read marker entries. |
| `entries` | `list&lt;object&gt;` | required | Each entry contains groupId (int32), messageId (int32), and readFlag (boolean). |

## Behavior

### Sender
Sent to mark messages as read in one or more forum threads.


### Receiver
The server updates the read marker for each specified thread.

## Notes

- No additional notes

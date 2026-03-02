---
title: group.get_settings
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1004`
- **Header**: `GROUP_SETTINGS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the editable settings of a group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to query settings for. |

## Behavior

### Sender
Sent when a group owner or admin opens the group settings dialog.


### Receiver
The server responds with the full group settings including rooms, colors, badge parts, and membership preferences. Only returns data if the requester has admin rights. Confirmed in GLADIATOR.

## Notes

- No additional notes

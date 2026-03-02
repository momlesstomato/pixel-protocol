---
title: messenger.update
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2800`
- **Header**: `MESSENGER_UPDATE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Push incremental changes to the friend list

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categoryCount` | `int32` | required | Number of category records that follow. Each has `id` (int32) and `name` (string). The category list replaces the previous one.<br/> |
| `updateCount` | `int32` | required | Number of update entries that follow. |

## Behavior

### Sender
Sent whenever the friend list changes: a friend comes online or goes offline, is added, or is removed. Also sent as an acknowledgement after `messenger.remove_friend` (c2s 1689).


### Receiver
The client applies each update record to its local friend list. Category changes listed before the update entries must be applied first. Confirmed in GLADIATOR and GALAXY.

## Notes

- After `updateCount`, each update entry begins with `type` (int32). When `type` is -1 (removal), the next field is `id` (int32) and no further data follows for that entry. When `type` is 0 (update) or 1 (addition), the full friend data record follows starting with `id` (see `messenger.friends` s2c 3130 for the field order).


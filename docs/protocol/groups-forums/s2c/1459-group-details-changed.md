---
title: group.details_changed
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1459`
- **Header**: `GROUP_DETAILS_CHANGED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that group details have been updated

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group whose details changed. |

## Behavior

### Sender
Sent to room occupants when a group's information changes.


### Receiver
The client refreshes the displayed group badge and information.

## Notes

- No additional notes

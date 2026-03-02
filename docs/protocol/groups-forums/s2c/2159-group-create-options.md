---
title: group.create_options
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2159`
- **Header**: `GROUP_CREATE_OPTIONS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver group creation options

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupCost` | `int32` | required | Credit cost to create a group. |
| `availableRooms` | `list&lt;object&gt;` | required | Rooms eligible for group assignment, each with roomId (int32) and roomName (string). |

## Behavior

### Sender
Sent in response to a create-options request.


### Receiver
The client populates the group creation dialog with the cost and available rooms.

## Notes

- No additional notes

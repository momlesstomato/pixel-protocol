---
title: group.member
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `265`
- **Header**: `GROUP_MEMBER`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver information about a single group member

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `member` | `object` | required | Member data including rank, id, name, figure, and join date. |

## Behavior

### Sender
Sent when the client requests details about a specific group member.


### Receiver
The client updates the member detail view.

## Notes

- No additional notes

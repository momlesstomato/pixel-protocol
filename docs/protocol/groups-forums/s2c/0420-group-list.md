---
title: group.list
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `420`
- **Header**: `GROUP_LIST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a list of groups for a user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groups` | `list&lt;object&gt;` | required | Group summary entries. |

## Behavior

### Sender
Sent in response to a group listing request.


### Receiver
The client displays the group list on a user's profile or info panel.

## Notes

- No additional notes

---
title: forum.get_list
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `436`
- **Header**: `GET_FORUMS_LIST`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a list of group forums

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `listCode` | `int32` | required | Filter type for the forum list (0=my forums, 1=most active, 2=most viewed). |
| `startIndex` | `int32` | required | Starting offset for pagination. |
| `count` | `int32` | required | Number of forums to return. |

## Behavior

### Sender
Sent when the player browses the forum directory with a specific filter.


### Receiver
The server responds with a paginated list of forums matching the filter criteria.

## Notes

- No additional notes

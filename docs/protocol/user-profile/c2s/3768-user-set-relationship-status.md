---
title: user.set_relationship_status
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3768`
- **Header**: `SET_RELATIONSHIP_STATUS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Set or clear the relationship status toward a friend

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `friendId` | `int32` | required | ID of the friend whose relationship status is being set |
| `relationshipType` | `int32` | required | Relationship type enum: 0 = NONE (clear), 1 = HEART, 2 = SMILE, 3 = BOBBA<br/> |

## Behavior

### Sender
Sent when the user assigns or removes a relationship emoji on a friend. The relationship type maps to a well-known enum value. Setting the type to 0 (NONE) clears any existing relationship.


### Receiver
The server stores the new relationship type for the pair. No explicit response packet is sent; the friend list update reflects the change asynchronously.

## Notes

- No additional notes

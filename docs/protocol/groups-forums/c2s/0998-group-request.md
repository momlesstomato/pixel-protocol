---
title: group.request
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `998`
- **Header**: `GROUP_REQUEST`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request to join a group

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groupId` | `int32` | required | Group identifier to request membership for. |

## Behavior

### Sender
Sent when the player clicks join on a group that requires approval.


### Receiver
The server adds a pending membership request. If membership is open, the player is added immediately; if locked, admins are notified. Confirmed in GLADIATOR.

## Notes

- No additional notes

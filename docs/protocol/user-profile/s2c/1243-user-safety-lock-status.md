---
title: user.safety_lock_status
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1243`
- **Header**: `ACCOUNT_SAFETY_LOCK_STATUS_CHANGE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client of an account safety-lock state change

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `int32` | required | Safety-lock status: 0 = locked, 1 = unlocked |

## Behavior

### Sender
Sent when the safety-lock status of the account changes (e.g. a parent enables or disables parental controls). The status maps to a simple locked/unlocked enum.


### Receiver
The client updates the safety-lock state and restricts or unlocks features accordingly.

## Notes

- No additional notes

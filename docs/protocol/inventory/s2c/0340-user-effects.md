---
title: user.effects
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `340`
- **Header**: `USER_EFFECTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the full avatar effect inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effects` | `list&lt;object&gt;` | required | List of effects, each containing type (int32), subType (int32), duration (int32), inactiveCount (int32), secondsLeftIfActive (int32), and isPermanent (boolean). |

## Behavior

### Sender
Sent on login or when the effect list needs to be refreshed.


### Receiver
The client populates the effects panel in the inventory.

## Notes

- No additional notes

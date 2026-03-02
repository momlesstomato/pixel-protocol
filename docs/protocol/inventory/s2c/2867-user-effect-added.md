---
title: user.effect_added
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2867`
- **Header**: `USER_EFFECT_LIST_ADD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Inventory
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a new avatar effect has been added to inventory

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `int32` | required | Avatar effect type identifier |
| `subType` | `int32` | required | Effect sub-type identifier |
| `duration` | `int32` | required | Effect duration in seconds |
| `isPermanent` | `boolean` | required | Whether the effect never expires |

## Behavior

### Sender
Sent when the user receives a new avatar effect (e.g. from a purchase or gift). The client appends the effect to the local inventory without requesting a full refresh.


### Receiver
The client adds the new effect entry to the inventory panel and may show a notification.

## Notes

- No additional notes

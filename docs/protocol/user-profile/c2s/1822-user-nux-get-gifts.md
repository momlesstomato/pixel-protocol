---
title: user.nux_get_gifts
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1822`
- **Header**: `NEW_USER_EXPERIENCE_GET_GIFTS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit gift selections during the new-user experience

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `selectionCount` | `int32` | required | Total number of integer values that follow (selections × 3) |

## Behavior

### Sender
Sent during the NUX gift-selection step. The user picks one gift per NUX day/step combination; each selection is encoded as a triple of day index, step index, and gift index.


### Receiver
The server records the gift selections and delivers the corresponding items to the user's inventory.

## Notes

- After `selectionCount`, each gift selection is three `int32` values: `dayIndex`, `stepIndex`, `giftIndex`.


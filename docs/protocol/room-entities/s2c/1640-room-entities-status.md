---
title: room_entities.status
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1640`
- **Header**: `UNIT_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Room Entities
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update unit positions and action states in the room

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `unitCount` | `int32` | required | Number of unit status records. |
| `units` | `object[]` | required | Array of unit status records. Each contains: `roomIndex` (int32), `x` (int32), `y` (int32), `z` (string), `headDirection` (int32), `bodyDirection` (int32), `actions` (object[]) where each action has a `type` (string) and optional `value` (string).<br/> |

## Behavior

### Sender
Sent whenever one or more units change position or action state (e.g. moving, sitting, carrying an item).


### Receiver
The client updates the affected units' positions and animations. Confirmed in GLADIATOR.

## Notes

- No additional notes

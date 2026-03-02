---
title: navigator.lifted
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3104`
- **Header**: `NAVIGATOR_LIFTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of featured (lifted) rooms shown at the top of the navigator

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roomCount` | `int32` | required | Number of lifted room entries that follow. |

## Behavior

### Sender
Sent as part of the navigator init burst. Contains rooms selected by the server to be featured prominently in the navigator header area.


### Receiver
The client renders the lifted rooms as a highlighted row at the top of the navigator. Confirmed in GLADIATOR.

## Notes

- Each lifted room entry contains: `roomId` (int32), `areaId` (int32; identifier of the navigator area the room belongs to), `image` (string; URL or key of the room thumbnail), `caption` (string; display label shown below the thumbnail).


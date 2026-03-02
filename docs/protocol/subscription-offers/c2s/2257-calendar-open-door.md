---
title: calendar.open_door
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2257`
- **Header**: `OPEN_CAMPAIGN_CALENDAR_DOOR`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Open a campaign calendar door for the current day

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaignName` | `string` | required | Name of the active campaign calendar. |
| `dayNumber` | `int32` | required | Zero-based day index to open. |

## Behavior

### Sender
Sent when the player clicks on a calendar door to claim the daily reward.


### Receiver
The server validates that the door has not been opened already, grants the reward, and responds with the door contents.

## Notes

- No additional notes

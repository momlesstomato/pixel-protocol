---
title: calendar.open_door_staff
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3889`
- **Header**: `OPEN_CAMPAIGN_CALENDAR_DOOR_STAFF`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Force-open a campaign calendar door as a staff member

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaignName` | `string` | required | Name of the campaign calendar. |
| `dayNumber` | `int32` | required | Zero-based day index to force-open. |

## Behavior

### Sender
Sent by staff to preview or force-open any calendar door regardless of the current date.


### Receiver
The server bypasses date validation and opens the requested door, responding with the door contents.

## Notes

- No additional notes

---
title: calendar.data
sidebar_position: 25
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2531`
- **Header**: `CAMPAIGN_CALENDAR_DATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver campaign calendar data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `campaignName` | `string` | required | Name identifier of the active campaign. |
| `campaignImage` | `string` | required | Image URL for the calendar background. |
| `currentDay` | `int32` | required | Current day number in the campaign. |
| `campaignDays` | `int32` | required | Total number of days in the campaign. |
| `openedDays` | `list&lt;int32&gt;` | required | Day indices the player has already opened. |
| `missedDays` | `list&lt;int32&gt;` | required | Day indices the player missed. |

## Behavior

### Sender
Sent when the player opens the campaign calendar or on login during an active campaign.


### Receiver
The client renders the calendar grid with opened, missed, and available doors.

## Notes

- No additional notes

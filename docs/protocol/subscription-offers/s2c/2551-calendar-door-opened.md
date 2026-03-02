---
title: calendar.door_opened
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2551`
- **Header**: `CAMPAIGN_CALENDAR_DOOR_OPENED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm a calendar door was opened and deliver the reward

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `doorOpened` | `boolean` | required | Whether the door was successfully opened. |
| `productName` | `string` | required | Name of the reward product. |
| `customImage` | `string` | required | Optional custom image URL for the reward. |
| `furnitureClassName` | `string` | required | Furniture class name of the reward item. |

## Behavior

### Sender
Sent after the player opens a campaign calendar door.


### Receiver
The client reveals the door contents with an animation showing the reward.

## Notes

- No additional notes

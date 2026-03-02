---
title: furniture.custom_notification
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `909`
- **Header**: `CUSTOM_USER_NOTIFICATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Notifications & Landing
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a custom notification message from furniture

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | required | Notification message text. |

## Behavior

### Sender
Sent when a furniture item generates a user-targeted notification message (e.g. from a wired or scripted furniture).


### Receiver
The client displays the notification message to the user. Confirmed in GLADIATOR.

## Notes

- No additional notes

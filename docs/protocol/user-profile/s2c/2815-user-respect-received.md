---
title: user.respect_received
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2815`
- **Header**: `USER_RESPECT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that a user has received a respect point

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | ID of the user who received the respect point |
| `respectsReceived` | `int32` | required | Updated total respect points received by this user |

## Behavior

### Sender
Sent to both the giver and receiver when a respect action is completed. The packet identifies the recipient and their new total respect count.


### Receiver
The client plays the respect animation for the target user and updates the displayed respect total on the profile card if it is open.

## Notes

- No additional notes

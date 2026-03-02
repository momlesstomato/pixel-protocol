---
title: user.badge_request_fulfilled
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2998`
- **Header**: `BADGE_REQUEST_FULFILLED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report whether a promotional badge request was fulfilled

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestCode` | `string` | required | The promotional badge request code that was evaluated |
| `fulfilled` | `boolean` | required | Whether the badge was granted for this request code |

## Behavior

### Sender
Sent in response to `user.request_badge` (c2s 3077) or `user.check_badge_request` (c2s 1364). Indicates whether the badge associated with the request code was granted.


### Receiver
The client reads the result and shows a success or failure message to the user.

## Notes

- No additional notes

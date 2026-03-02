---
title: user.request_badge
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3077`
- **Header**: `REQUESTABADGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a specific promotional or achievement badge

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestCode` | `string` | required | Promotional badge request code |

## Behavior

### Sender
Sent to claim a badge by its promotional request code. Used for limited-time badge campaigns where users submit a code to receive a badge.


### Receiver
The server validates the request code and responds with `user.badge_request_fulfilled` (s2c 2998) indicating whether the badge was granted.

## Notes

- No additional notes

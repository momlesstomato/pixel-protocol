---
title: user.check_badge_request
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1364`
- **Header**: `GETISBADGEREQUESTFULFILLED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Achievements & Talents
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Check whether a badge request code has been fulfilled

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requestCode` | `string` | required | Badge request code to check fulfillment status for |

## Behavior

### Sender
Sent to query the fulfillment status of a previously submitted badge request code without re-requesting the badge.


### Receiver
The server responds with `user.badge_request_fulfilled` (s2c 2998) indicating current fulfillment state.

## Notes

- No additional notes

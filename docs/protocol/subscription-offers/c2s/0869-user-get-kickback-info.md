---
title: user.get_kickback_info
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `869`
- **Header**: `SCR_GET_KICKBACK_INFO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request Habbo Club kickback (reward) information

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to retrieve the user's Habbo Club credit kickback data, including streak information, percentages, and upcoming payday details. Carries no payload.


### Receiver
The server responds with `user.kickback_info` (s2c 3277).

## Notes

- No additional notes

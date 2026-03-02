---
title: catalog.get_club_gift_info
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `487`
- **Header**: `GET_CLUB_GIFT_INFO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request Habbo Club member gift information

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the user opens the club gift selection interface to see available gifts and the selection deadline.


### Receiver
The server responds with `catalog.club_gift_info` (s2c 619). Confirmed in GLADIATOR.

## Notes

- No additional notes

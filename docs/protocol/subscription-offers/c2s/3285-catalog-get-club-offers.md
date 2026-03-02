---
title: catalog.get_club_offers
sidebar_position: 33
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3285`
- **Header**: `GET_CLUB_OFFERS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request available Habbo Club membership offers

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `windowId` | `int32` | required | UI window identifier (server may use this for routing responses). |

## Behavior

### Sender
Sent when the user opens the club subscription page in the catalog.


### Receiver
The server responds with `catalog.club_offers` (s2c 2405). Confirmed in GLADIATOR.

## Notes

- No additional notes

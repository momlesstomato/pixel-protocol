---
title: catalog.builders_club_query_furni_count
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2529`
- **Header**: `BUILDERS_CLUB_QUERY_FURNI_COUNT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the current Builders Club furniture placement count

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client when opening the inventory or placing Builders Club items to check against the placement limit.


### Receiver
The server responds with the current furniture count placed under the Builders Club allowance. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: catalog.get_earliest_expiry
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3135`
- **Header**: `GET_CATALOG_PAGE_WITH_EARLIEST_EXP`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the earliest expiring catalog page timestamp

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent on catalog load to determine the nearest page expiration for timer display.


### Receiver
The server responds with the earliest catalog page expiration information.

## Notes

- No additional notes

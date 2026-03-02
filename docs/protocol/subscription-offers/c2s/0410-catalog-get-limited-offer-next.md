---
title: catalog.get_limited_offer_next
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `410`
- **Header**: `GET_LIMITED_OFFER_APPEARING_NEXT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the next limited offer appearance time

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the client wants to display a countdown for the next limited-time offer.


### Receiver
The server responds with the seconds until the next limited offer appears, along with the page and offer identifiers.

## Notes

- No additional notes

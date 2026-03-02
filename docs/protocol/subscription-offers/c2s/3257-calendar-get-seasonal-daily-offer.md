---
title: calendar.get_seasonal_daily_offer
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3257`
- **Header**: `GET_SEASONAL_CALENDAR_DAILY_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the current seasonal calendar daily offer

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the seasonal calendar UI opens to load the daily offer.


### Receiver
The server responds with the daily offer details including the catalog page and offer data.

## Notes

- No additional notes

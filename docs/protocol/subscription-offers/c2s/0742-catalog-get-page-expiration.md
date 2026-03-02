---
title: catalog.get_page_expiration
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `742`
- **Header**: `GET_CATALOG_PAGE_EXPIRATION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request expiration time for a specific catalog page

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the client needs to display a countdown timer for a time- limited catalog page.


### Receiver
The server responds with the expiration timestamp for the requested catalog page.

## Notes

- No additional notes

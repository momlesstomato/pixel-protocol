---
title: catalog.page_expiration
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2668`
- **Header**: `CATALOG_PAGE_EXPIRATION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a catalog page expiration timestamp

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page identifier. |
| `secondsLeft` | `int32` | required | Seconds until the page expires. |
| `pageName` | `string` | required | Display name of the expiring page. |

## Behavior

### Sender
Sent in response to a page expiration request.


### Receiver
The client starts a countdown timer showing when the catalog page will expire.

## Notes

- No additional notes

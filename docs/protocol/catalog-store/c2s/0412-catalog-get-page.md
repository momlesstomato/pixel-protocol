---
title: catalog.get_page
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `412`
- **Header**: `GET_CATALOG_PAGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request a specific catalog page's content

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pageId` | `int32` | required | Catalog page identifier. |
| `offerId` | `int32` | required | Specific offer to focus on (-1 for all offers on the page). |
| `catalogType` | `string` | required | Catalog mode string. |

## Behavior

### Sender
Sent when the user navigates to a catalog page. The `offerId` may be -1 when not filtering by offer.


### Receiver
The server responds with `catalog.page` (s2c 804). Confirmed in GLADIATOR.

## Notes

- No additional notes

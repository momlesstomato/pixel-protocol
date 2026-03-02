---
title: catalog.purchase_ok
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `869`
- **Header**: `CATALOG_PURCHASE_OK`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm that a purchase was completed successfully

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offer` | `object` | required | Offer record for the purchased item (same structure as catalog page offers). |

## Behavior

### Sender
Sent when the server successfully processes a purchase request. Contains the purchased offer details.


### Receiver
The client shows the purchase success dialog. Confirmed in GLADIATOR.

## Notes

- No additional notes

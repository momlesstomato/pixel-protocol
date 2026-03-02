---
title: catalog.club_gift_selected
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `659`
- **Header**: `CLUB_GIFT_SELECTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm a Club gift was claimed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productCode` | `string` | required | Product code of the selected gift. |
| `products` | `list&lt;object&gt;` | required | List of product items in the selected gift. |

## Behavior

### Sender
Sent after the player selects a Club gift to confirm the selection.


### Receiver
The client shows a success notification and updates the gift availability state.

## Notes

- No additional notes

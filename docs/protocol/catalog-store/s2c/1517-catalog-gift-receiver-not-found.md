---
title: catalog.gift_receiver_not_found
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1517`
- **Header**: `GIFT_RECEIVER_NOT_FOUND`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Indicate that the gift recipient was not found

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `username` | `string` | required | The username that was not found. |

## Behavior

### Sender
Sent when a purchase-as-gift request fails because the recipient username does not exist.


### Receiver
The client shows an error indicating the recipient was not found. Confirmed in GLADIATOR.

## Notes

- No additional notes

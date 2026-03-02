---
title: furniture.rentable_space_rented
sidebar_position: 39
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2046`
- **Header**: `RENTABLE_SPACE_RENT_OK`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Confirm successful rentable space rental

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent when the server confirms that the user successfully rented a rentable space furniture item.


### Receiver
The client shows the rental confirmation and updates the space UI. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: marketplace.own_items
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3884`
- **Header**: `MARKETPLACE_OWN_ITEMS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the player's own Marketplace listings

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creditsWaiting` | `int32` | required | Total credits available to redeem from completed sales. |
| `offers` | `list&lt;object&gt;` | required | List of the player's offers, each containing offerId, status, furniType, item data, price, and timing fields. |

## Behavior

### Sender
Sent in response to a get-own-items request.


### Receiver
The client displays the player's active and expired listings with a redeemable credits total.

## Notes

- No additional notes

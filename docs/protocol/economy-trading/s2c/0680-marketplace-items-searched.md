---
title: marketplace.items_searched
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `680`
- **Header**: `MARKETPLACE_ITEMS_SEARCHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver Marketplace search results

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `offers` | `list&lt;object&gt;` | required | Matched offer list with offerId, status, furniType, item data, price, time left, average price, and offer count per item. |
| `totalItemsFound` | `int32` | required | Total number of offers matching the search for pagination. |

## Behavior

### Sender
Sent in response to a search-offers request.


### Receiver
The client displays the matching listings with pagination.

## Notes

- No additional notes

---
title: navigator.category_visitor_counts
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1455`
- **Header**: `CATEGORIES_WITH_VISITOR_COUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver current and maximum visitor counts per room category

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entryCount` | `int32` | required | Number of category count entries that follow. |

## Behavior

### Sender
Sent periodically to update the navigator category badges that show how many users are currently in rooms belonging to each category.


### Receiver
The client updates the visitor count badges displayed next to category names in the navigator. Confirmed in GLADIATOR.

## Notes

- Each entry contains three `int32` values: `categoryId`, `currentVisitorCount`, `maxVisitorCount`.


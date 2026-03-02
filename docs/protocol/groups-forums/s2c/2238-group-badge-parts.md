---
title: group.badge_parts
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2238`
- **Header**: `GROUP_BADGE_PARTS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver all available group badge parts

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bases` | `list&lt;object&gt;` | required | Badge base parts with id (int32), valueA (string), and valueB (string). |
| `symbols` | `list&lt;object&gt;` | required | Badge symbol parts with id (int32), valueA (string), and valueB (string). |
| `partColors` | `list&lt;object&gt;` | required | Part color options with id (int32) and color (string). |
| `colorsA` | `list&lt;object&gt;` | required | Primary color options with id (int32) and color (string). |
| `colorsB` | `list&lt;object&gt;` | required | Secondary color options with id (int32) and color (string). |

## Behavior

### Sender
Sent in response to a badge parts request.


### Receiver
The client populates the badge editor with bases, symbols, and colors.

## Notes

- No additional notes

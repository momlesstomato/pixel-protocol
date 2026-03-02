---
title: marketplace.config
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1823`
- **Header**: `MARKETPLACE_CONFIG`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the Marketplace configuration

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | required | Whether the Marketplace is currently enabled. |
| `commission` | `int32` | required | Commission percentage taken from sales. |
| `tokenCost` | `int32` | required | Credit cost per listing token. |
| `advertisementCost` | `int32` | required | Cost for promoted listings. |
| `minimumPrice` | `int32` | required | Minimum allowed listing price in credits. |
| `maximumPrice` | `int32` | required | Maximum allowed listing price in credits. |
| `offerTime` | `int32` | required | Duration in hours that offers remain listed. |
| `displayTime` | `int32` | required | Duration in hours that expired offers remain visible. |

## Behavior

### Sender
Sent in response to a Marketplace config request.


### Receiver
The client uses these settings to configure the marketplace UI, price filters, and commission display.

## Notes

- No additional notes

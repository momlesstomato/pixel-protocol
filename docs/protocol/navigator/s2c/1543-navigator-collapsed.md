---
title: navigator.collapsed
sidebar_position: 20
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1543`
- **Header**: `NAVIGATOR_COLLAPSED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the list of search category codes that are currently collapsed

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categoryCount` | `int32` | required | Number of category code strings that follow. |

## Behavior

### Sender
Sent as part of the navigator init burst. Lists the category codes the user has collapsed so the client can restore the correct state.


### Receiver
The client marks each listed category as collapsed in the navigator UI. Confirmed in GLADIATOR.

## Notes

- After `categoryCount`, each entry is a `string` category code.

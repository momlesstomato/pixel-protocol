---
title: availability.status
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2033`
- **Header**: `AVAILABILITY_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report hotel availability and shutdown state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | required | Whether the hotel is currently open for play |
| `onShutdown` | `boolean` | required | Whether the hotel is in the process of shutting down |
| `isAuthentic` | `boolean` | optional | Whether the user is an authenticated (non-guest) account |

## Behavior

### Sender
Sent by the server in the post-authentication burst immediately after `authentication.ok`. It informs the client whether the hotel is open, whether a shutdown is in progress, and optionally whether the user is an authenticated (non-guest) account. All three server implementations send this with hardcoded values `(true, false, true)`.


### Receiver
The client reads the availability flags and may use them to display maintenance warnings, restrict navigation, or show a "hotel closed" overlay. If `isOpen` is false or `onShutdown` is true, the client may prevent the user from entering rooms or making purchases.

## Notes

- No additional notes

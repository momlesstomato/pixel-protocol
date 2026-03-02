---
title: user.figure
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2429`
- **Header**: `USER_FIGURE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify the client that its avatar figure has been updated

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `figure` | `string` | required | Confirmed Nitro figure code string |
| `gender` | `string` | required | Confirmed gender: `M` or `F` |

## Behavior

### Sender
Sent by the server after a successful `user.update_figure` (c2s 2730) to confirm the accepted figure and gender back to the client. The values reflect the stored state after any server-side normalization.


### Receiver
The client updates its local figure state with the confirmed values and re-renders the avatar.

## Notes

- No additional notes

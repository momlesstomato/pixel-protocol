---
title: user.update_figure
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2730`
- **Header**: `USER_FIGURE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the authenticated user's avatar figure and gender

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `gender` | `string` | required | Gender code: `M` for male, `F` for female |
| `figure` | `string` | required | Full Nitro figure code string |

## Behavior

### Sender
Sent by the client when the user applies a new look from the wardrobe editor. The gender string must be uppercase (`M` or `F`). The figure string is the full Nitro figure code.


### Receiver
The server validates the figure string against the owned wardrobe parts (if enforcement is enabled) and updates the user's look in the database. It then broadcasts a figure update to any room the user is currently in and may send a confirmation via `user.figure` (s2c 2429).

## Notes

- No additional notes

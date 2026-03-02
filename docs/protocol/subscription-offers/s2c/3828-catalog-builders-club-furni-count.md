---
title: catalog.builders_club_furni_count
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3828`
- **Header**: `BUILDERS_CLUB_FURNI_COUNT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Return the current Builders Club furniture count

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `furniCount` | `int32` | required | Number of furniture items currently placed under Builders Club. |

## Behavior

### Sender
Sent in response to a builders club furni count query.


### Receiver
The client updates the furniture counter display in the Builders Club panel.

## Notes

- No additional notes

---
title: moderation.chat_review_session_offered_to_guide
sidebar_position: 19
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `735`
- **Header**: `CHAT_REVIEW_SESSION_OFFERED_TO_GUIDE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Chat review session offered to guide

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about chat review session offered to guide state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

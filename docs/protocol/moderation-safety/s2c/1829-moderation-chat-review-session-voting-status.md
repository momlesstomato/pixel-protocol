---
title: moderation.chat_review_session_voting_status
sidebar_position: 30
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1829`
- **Header**: `CHAT_REVIEW_SESSION_VOTING_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Chat review session voting status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about chat review session voting status state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

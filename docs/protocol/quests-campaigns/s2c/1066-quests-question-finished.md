---
title: quests.question_finished
sidebar_position: 14
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1066`
- **Header**: `QUESTION_FINISHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Question finished

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about question finished state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

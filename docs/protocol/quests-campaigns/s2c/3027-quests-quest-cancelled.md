---
title: quests.quest_cancelled
sidebar_position: 23
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3027`
- **Header**: `QUEST_CANCELLED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Quest cancelled

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about quest cancelled state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

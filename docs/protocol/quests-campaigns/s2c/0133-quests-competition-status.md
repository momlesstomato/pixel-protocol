---
title: quests.competition_status
sidebar_position: 11
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `133`
- **Header**: `COMPETITION_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Competition status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `boolean` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about competition status state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

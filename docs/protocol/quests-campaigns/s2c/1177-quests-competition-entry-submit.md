---
title: quests.competition_entry_submit
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1177`
- **Header**: `COMPETITION_ENTRY_SUBMIT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Competition entry submit

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field1` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field2` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field3` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field4` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field5` | `string` | required | Wire field extracted from the Nitro client parser. |
| `field6` | `int32` | required | Wire field extracted from the Nitro client parser. |
| `field7` | `string` | required | Wire field extracted from the Nitro client parser. |

## Behavior

### Sender
The server sends this message to inform the client about competition entry submit state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

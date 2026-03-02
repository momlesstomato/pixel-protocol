---
title: user.approve_name_result
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1503`
- **Header**: `CATALOG_APPROVE_NAME_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Return the approval result for a catalog or pet name

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | 0 = approved, 1 = moderated (inappropriate words), 2 = rejected for other reasons<br/> |
| `validationInfo` | `string` | required | Additional validation detail string from the screening service |

## Behavior

### Sender
Sent in response to `user.approve_name` (c2s 2109). Indicates whether the submitted name passed the word filter and any additional validation info from the screening service.


### Receiver
The client reads the result code. If 0 the name is approved and the flow can continue (e.g. confirming pet name). If non-zero, an error is shown and the user must choose a different name.

## Notes

- No additional notes

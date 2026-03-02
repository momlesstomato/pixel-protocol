---
title: user.check_name
sidebar_position: 38
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3950`
- **Header**: `CHECK_USERNAME`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Validate a candidate display name before committing

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | required | Candidate display name to validate |

## Behavior

### Sender
Sent to check whether a proposed username is valid and available before the user confirms. Used for live validation feedback in the name-change UI.


### Receiver
The server validates the name and responds with `user.check_name_result` (s2c 563) containing the validation result code and optional alternative suggestions.

## Notes

- No additional notes

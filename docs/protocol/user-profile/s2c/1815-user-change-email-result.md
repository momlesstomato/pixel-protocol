---
title: user.change_email_result
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1815`
- **Header**: `CHANGE_EMAIL_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report the result of an email address change request

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | 0 = changed successfully, 1 = invalid address format, 2 = address already in use, 3 = change not allowed<br/> |

## Behavior

### Sender
Sent in response to `user.change_email` (c2s 3965). The result code indicates success or the reason the change was rejected.


### Receiver
The client shows a success or error notification. On success it updates the displayed email address in account settings.

## Notes

- No additional notes

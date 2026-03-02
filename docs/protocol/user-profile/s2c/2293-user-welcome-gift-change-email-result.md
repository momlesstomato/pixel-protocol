---
title: user.welcome_gift_change_email_result
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2293`
- **Header**: `WELCOME_GIFT_CHANGE_EMAIL_RESULT`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report the result of a welcome-gift email update

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `result` | `int32` | required | 0 = email recorded successfully, 1 = invalid address, 2 = address already in use<br/> |

## Behavior

### Sender
Sent in response to `user.welcome_gift_change_email` (c2s 66). Indicates whether the email address was successfully recorded for the welcome-gift flow.


### Receiver
The client reads the result and advances or retries the welcome-gift email step accordingly.

## Notes

- No additional notes

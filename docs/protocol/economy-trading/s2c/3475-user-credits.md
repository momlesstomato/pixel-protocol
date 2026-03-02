---
title: user.credits
sidebar_position: 35
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3475`
- **Header**: `USER_CREDITS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Economy & Trading
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the authenticated user's credit balance

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `credits` | `string` | required | Credit balance encoded as a decimal string (e.g. `"500"`) |

## Behavior

### Sender
Sent by the server after login and after any transaction that changes the credit balance. The balance is encoded as a string rather than an integer to support decimal display on some hotel configurations.


### Receiver
The client parses the string as a decimal number and displays it in the currency HUD.

## Notes

- No additional notes

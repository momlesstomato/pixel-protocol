---
title: user.change_email
sidebar_position: 39
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3965`
- **Header**: `EMAIL_CHANGE`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit a new email address for the account

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newEmail` | `string` | required | New email address to associate with the account |

## Behavior

### Sender
Sent when the user submits a new email address from the account settings panel.


### Receiver
The server validates the address format and uniqueness, then responds with `user.change_email_result` (s2c 1815) indicating whether the change was accepted.

## Notes

- No additional notes

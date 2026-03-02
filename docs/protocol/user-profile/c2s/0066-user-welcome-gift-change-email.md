---
title: user.welcome_gift_change_email
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `66`
- **Header**: `WELCOME_GIFT_CHANGE_EMAIL`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Submit an email address update as part of the welcome-gift flow

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newEmail` | `string` | required | Email address to associate with the welcome-gift eligibility |

## Behavior

### Sender
Sent during the new-user welcome-gift flow when the user provides or updates their email address to unlock gift eligibility.


### Receiver
The server records the address and responds with `user.welcome_gift_change_email_result` (s2c 2293).

## Notes

- No additional notes

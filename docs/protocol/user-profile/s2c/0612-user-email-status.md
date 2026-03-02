---
title: user.email_status
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `612`
- **Header**: `EMAIL_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the account email address and verification status

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | required | Current email address on file for the account |
| `isVerified` | `boolean` | required | Whether the email address has been verified |
| `allowChange` | `boolean` | required | Whether the user is permitted to change the email address |

## Behavior

### Sender
Sent in response to `user.get_email_status` (c2s 2557). Provides the current email address, whether it has been verified, and whether the user may change it.


### Receiver
The client populates the account settings email section and may show a "verify your email" prompt if `isVerified` is false.

## Notes

- No additional notes

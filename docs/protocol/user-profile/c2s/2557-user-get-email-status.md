---
title: user.get_email_status
sidebar_position: 29
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2557`
- **Header**: `EMAIL_GET_STATUS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the account email address and verification status

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to fetch the current email address on file, whether it has been verified, and whether the user is allowed to change it. Carries no payload.


### Receiver
The server responds with `user.email_status` (s2c 612).

## Notes

- No additional notes

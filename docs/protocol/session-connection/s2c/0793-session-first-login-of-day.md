---
title: session.first_login_of_day
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `793`
- **Header**: `FIRST_LOGIN_OF_DAY`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: First login of day

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about first login of day.


### Receiver
The client processes the received data and updates its state.

## Notes

- No additional notes

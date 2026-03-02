---
title: user.noobness_level
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3738`
- **Header**: `NOOBNESS_LEVEL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the account identity level that gates NUX features

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `noobnessLevel` | `int32` | required | Account identity level: 0 = OLD_IDENTITY (established account), 1 = NEW_IDENTITY (recently created account), 2 = REAL_NOOB (brand-new account in the onboarding flow)<br/> |

## Behavior

### Sender
Sent during the post-authentication burst. The value maps to `NoobnessLevelEnum`: 0 = OLD_IDENTITY, 1 = NEW_IDENTITY, 2 = REAL_NOOB. Any value other than 0 causes the client to set the `new.identity` configuration flag, which activates NUX tutorial overlays and related onboarding features.


### Receiver
The client stores the level in the session data. If the value is not OLD_IDENTITY (0), the client enables the new-identity configuration and shows NUX UI.

## Notes

- No additional notes

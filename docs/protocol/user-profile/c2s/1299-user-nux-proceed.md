---
title: user.nux_proceed
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1299`
- **Header**: `NEW_USER_EXPERIENCE_SCRIPT_PROCEED`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Signal completion of the current new-user experience step

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent to the server to confirm that the client has finished processing the current step of the new-user experience (NUX) onboarding sequence. Carries no payload. The server drives the NUX sequence; the client sends this packet to acknowledge each step before the server advances to the next one.


### Receiver
The server records that the current NUX step is complete for the session and continues the NUX script sequence.

## Notes

- No additional notes

---
title: client.disconnect
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2445`
- **Header**: `DISCONNECT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Session & Connection
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Client-initiated graceful disconnect

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the client when the user explicitly logs out or navigates away. This notifies the server of an intentional disconnect so it can clean up the session immediately rather than waiting for a timeout.


### Receiver
The server terminates the session, removes the user from all rooms, persists any unsaved state (currency, inventory), and closes the underlying connection.

## Notes

- No additional notes

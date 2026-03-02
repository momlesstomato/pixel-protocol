---
title: navigator.open_room_creator
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2064`
- **Header**: `NAVIGATOR_OPEN_ROOM_CREATOR`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Instruct the client to open the room-creation dialog

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the server to prompt the client to open the room creation dialog without a prior explicit request from the client. Used in flows such as a direct room-creation URL.


### Receiver
The client opens the room-creation form immediately upon receiving this packet. Carries no payload. Confirmed in GLADIATOR.

## Notes

- No additional notes

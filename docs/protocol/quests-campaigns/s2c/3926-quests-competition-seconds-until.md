---
title: quests.competition_seconds_until
sidebar_position: 27
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3926`
- **Header**: `COMPETITION_SECONDS_UNTIL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Competition seconds until

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about competition seconds until state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

---
title: quests.competition_rooms_data
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3954`
- **Header**: `COMPETITION_ROOMS_DATA`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Competition rooms data

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about competition rooms data state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

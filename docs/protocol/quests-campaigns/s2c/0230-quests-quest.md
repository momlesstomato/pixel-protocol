---
title: quests.quest
sidebar_position: 12
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `230`
- **Header**: `QUEST`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Quests & Campaigns
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Quest

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
The server sends this message to inform the client about quest state.


### Receiver
The client processes the received data and updates its local state accordingly.

## Notes

- No additional notes

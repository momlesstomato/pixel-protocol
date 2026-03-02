---
title: catalog.published
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1866`
- **Header**: `CATALOG_PUBLISHED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Catalog & Store
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Notify that the catalog has been updated

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent by the server to all connected clients when a catalog update is published, prompting them to refresh.


### Receiver
The client invalidates its cached catalog data and may show a refresh prompt. Confirmed in GLADIATOR.

## Notes

- No additional notes

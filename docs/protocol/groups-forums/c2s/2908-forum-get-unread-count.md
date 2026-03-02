---
title: forum.get_unread_count
sidebar_position: 36
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2908`
- **Header**: `GET_UNREAD_FORUMS_COUNT`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Groups & Forums
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the total count of unread forum messages

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent periodically or when the forum icon is displayed to show an unread badge.


### Receiver
The server responds with the total number of unread forum messages across all groups.

## Notes

- No additional notes

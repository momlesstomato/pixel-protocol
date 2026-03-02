---
title: user.update_motto
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2228`
- **Header**: `USER_MOTTO`
- **Direction**: Client to Server (`c2s`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Update the authenticated user's motto

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `motto` | `string` | required | New motto text |

## Behavior

### Sender
Sent when the user saves a new motto from their profile editor. The server may enforce a maximum length or filter forbidden words.


### Receiver
The server updates the motto in the database and broadcasts the change to any room the user is currently in. No explicit confirmation packet is sent.

## Notes

- No additional notes

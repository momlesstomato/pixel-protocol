---
title: messenger.find_friends_result
sidebar_position: 16
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1210`
- **Header**: `MESSENGER_FIND_FRIENDS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Messenger & Social
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Report the outcome of the automated friend-finder process

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | required | True when the server started the pairing process successfully. |

## Behavior

### Sender
Sent in response to `messenger.find_new_friends` (c2s 516) to indicate whether the server successfully initiated the pairing process.


### Receiver
The client uses the result to update the UI: on success it may navigate the user to a matching room; on failure it shows an error. Confirmed in GLADIATOR and GALAXY.

## Notes

- No additional notes

---
title: navigator.get_flat_cats
sidebar_position: 43
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3027`
- **Header**: `GET_USER_FLAT_CATS`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the list of available room categories

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent before the room-creation or room-settings form is shown to populate the category dropdown. Carries no payload.


### Receiver
The server responds with `navigator.flat_cats` (s2c 1562) listing every category the user is eligible to use. Confirmed in GLADIATOR.

## Notes

- No additional notes

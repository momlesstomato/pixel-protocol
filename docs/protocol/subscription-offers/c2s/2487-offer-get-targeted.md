---
title: offer.get_targeted
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2487`
- **Header**: `GET_TARGETED_OFFER`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the current targeted offer

## Payload fields

No payload fields (header-only packet).

## Behavior

### Sender
Sent on login or when the client needs to display the targeted offer dialog.


### Receiver
The server looks up active targeted offers for the player and responds with the offer data or a not-found message.

## Notes

- No additional notes

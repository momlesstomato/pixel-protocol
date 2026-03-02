---
title: user.welcome_gift_status
sidebar_position: 31
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2707`
- **Header**: `WELCOME_GIFT_STATUS`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver welcome-gift email status and furni eligibility

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | required | Current email address on file (may be empty if none set) |
| `isVerified` | `boolean` | required | Whether the email address has been verified |
| `allowChange` | `boolean` | required | Whether the user may update the email address |
| `furniId` | `int32` | required | ID of the welcome-gift furni item pending email verification |
| `requestedByUser` | `boolean` | required | Whether this status was sent in response to a user action |

## Behavior

### Sender
Sent during the welcome-gift flow to provide the current email status and the ID of the furniture item gated behind email verification. `requestedByUser` indicates whether the user explicitly requested this status.


### Receiver
The client uses the status to display the correct step of the welcome-gift UI (provide email, verify email, or claim gift).

## Notes

- No additional notes

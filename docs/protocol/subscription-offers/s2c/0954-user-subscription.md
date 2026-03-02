---
title: user.subscription
sidebar_position: 18
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `954`
- **Header**: `USER_SUBSCRIPTION`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver Pixels Club subscription state

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `productName` | `string` | required | Club product identifier, e.g. `"club_habbo"` |
| `daysToPeriodEnd` | `int32` | required | Days remaining in the current subscription period |
| `memberPeriods` | `int32` | required | Number of complete subscription periods the user has held |
| `periodsSubscribedAhead` | `int32` | required | Number of future periods already paid for |
| `responseType` | `int32` | required | Trigger code: 1 = login refresh, 2 = new purchase, 3 = discount available, 4 = citizenship discount<br/> |
| `hasEverBeenMember` | `boolean` | required | Whether the user has ever held a Club subscription |
| `isVip` | `boolean` | required | Whether the user currently has a VIP subscription |
| `pastClubDays` | `int32` | required | Total days the user has been a Club member historically |
| `pastVipDays` | `int32` | required | Total days the user has been a VIP member historically |
| `minutesUntilExpiration` | `int32` | required | Minutes until the current subscription period expires |
| `minutesSinceLastModified` | `int32` | optional | Minutes since the subscription record was last modified; only present when bytes remain in the payload |

## Behavior

### Sender
Sent during the post-authentication burst and after a subscription purchase or renewal. The `responseType` field indicates the trigger: login refresh, new purchase, or discount offer. The optional `minutesSinceLastModified` field is only present when the server has additional modification timestamp data.


### Receiver
The client updates the Club badge, expiry countdown, and VIP indicators. `responseType` may trigger a purchase-success animation when set to 2.

## Notes

- No additional notes

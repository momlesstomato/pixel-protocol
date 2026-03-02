---
title: user.kickback_info
sidebar_position: 28
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `3277`
- **Header**: `SCR_SEND_KICKBACK_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Subscription & Offers
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver Habbo Club credit kickback and streak information

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currentHcStreak` | `int32` | required | Current consecutive HC subscription streak count |
| `firstSubscriptionDate` | `string` | required | Date of the user's first HC subscription (formatted string) |
| `kickbackPercentage` | `double` | required | Percentage of spending returned as credit kickback |
| `totalCreditsMissed` | `int32` | required | Credits that were not claimed due to lapsed subscriptions |
| `totalCreditsRewarded` | `int32` | required | Total credits received through the kickback program |
| `totalCreditsSpent` | `int32` | required | Total credits the user has spent during HC subscription |
| `creditRewardForStreakBonus` | `int32` | required | Bonus credits awarded for maintaining the current streak |
| `creditRewardForMonthlySpent` | `int32` | required | Credits awarded based on this month's spending |
| `timeUntilPayday` | `int32` | required | Seconds until the next kickback payday |

## Behavior

### Sender
Sent in response to `user.get_kickback_info` (c2s 869). Provides details about the user's HC subscription streak, kickback percentage, and accumulated credit reward data.


### Receiver
The client displays the kickback summary in the HC benefits panel, including the payday countdown.

## Notes

- No additional notes

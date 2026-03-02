---
title: furniture.wired_reward
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `178`
- **Header**: `WIRED_REWARD`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Furniture & Items
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a wired reward result to the user

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rewardType` | `int32` | required | Type of reward granted. |
| `uniqueRewards` | `boolean` | required | True if rewards are unique per user. |
| `badgeRewards` | `object[]` | required | Array of badge reward records. |
| `prizeRewards` | `object[]` | required | Array of prize reward records. |

## Behavior

### Sender
Sent when a wired reward action fires and grants the user a prize or currency.


### Receiver
The client shows the reward notification. Confirmed in GLADIATOR.

## Notes

- No additional notes

---
title: user.info
sidebar_position: 32
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2725`
- **Header**: `USER_INFO`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the authenticated user's own identity and preference data

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `int32` | required | Numeric user ID |
| `username` | `string` | required | Display name |
| `figure` | `string` | required | Nitro figure code string |
| `gender` | `string` | required | Gender: `M` or `F` |
| `motto` | `string` | required | User's personal motto text |
| `realName` | `string` | required | Real name if the account exposes it, otherwise empty string |
| `directMail` | `boolean` | required | Whether the user has consented to direct-mail communications |
| `respectsReceived` | `int32` | required | Total respect points this user has received |
| `respectsRemaining` | `int32` | required | Respect points the user may still give to other users today |
| `respectsPetRemaining` | `int32` | required | Respect points the user may still give to pets today |
| `streamPublishingAllowed` | `boolean` | required | Whether the user is permitted to publish a room stream |
| `lastAccessDate` | `string` | required | ISO-style timestamp of the user's last login |
| `canChangeName` | `boolean` | required | Whether the user is eligible to change their display name |
| `safetyLocked` | `boolean` | required | Whether the account is under safety-lock (parental control) |

## Behavior

### Sender
Sent by the server in response to `user.get_info` (c2s 357) immediately after the authentication burst. It carries the full identity record of the currently authenticated user: display name, figure, gender, motto, real name (if exposed), direct-mail consent, respect counters, stream publishing permission, last-access date, name-change eligibility, and safety-lock status.


### Receiver
The client stores all fields in the session state. The respect counters (`respectsRemaining`, `respectsPetRemaining`) govern how many respect actions the user may perform today. `canChangeName` controls visibility of the name-change flow. `safetyLocked` restricts certain actions for accounts under parental control.

## Notes

- No additional notes

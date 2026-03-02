---
title: pet.experience
sidebar_position: 21
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2156`
- **Header**: `PET_EXPERIENCE`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show experience gained by a pet

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier. |
| `roomIndex` | `int32` | required | Room entity index. |
| `gainedExperience` | `int32` | required | Amount of experience gained. |

## Behavior

### Sender
Sent when a pet gains experience from an interaction.


### Receiver
The client displays a floating experience bubble on the pet.

## Notes

- No additional notes

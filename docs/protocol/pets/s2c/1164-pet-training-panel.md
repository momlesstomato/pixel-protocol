---
title: pet.training_panel
sidebar_position: 15
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `1164`
- **Header**: `PET_TRAINING_PANEL`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver the pet training command panel

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `petId` | `int32` | required | Pet identifier. |
| `commands` | `list&lt;int32&gt;` | required | All command identifiers the pet knows. |
| `enabledCommands` | `list&lt;int32&gt;` | required | Command identifiers the pet can currently execute. |

## Behavior

### Sender
Sent in response to a get-pet-commands request.


### Receiver
The client displays the training panel showing available and enabled commands.

## Notes

- No additional notes

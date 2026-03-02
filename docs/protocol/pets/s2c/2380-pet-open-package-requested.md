---
title: pet.open_package_requested
sidebar_position: 22
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2380`
- **Header**: `PET_OPEN_PACKAGE_REQUESTED`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Pets
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Show the pet package opening dialog

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objectId` | `int32` | required | Inventory item identifier of the pet package. |
| `figureData` | `string` | required | Optional pet figure preview string. |

## Behavior

### Sender
Sent when the player activates a pet egg or package item.


### Receiver
The client displays a dialog prompting the player to name the pet.

## Notes

- No additional notes

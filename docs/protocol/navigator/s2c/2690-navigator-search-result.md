---
title: navigator.search_result
sidebar_position: 24
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2690`
- **Header**: `NAVIGATOR_SEARCH`
- **Direction**: Server to Client (`s2c`)
- **Realm**: Navigator
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver room search results for a given search context

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `code` | `string` | required | Echo of the search context code from the request. |
| `data` | `string` | required | Echo of the free-text filter from the request. |
| `resultListCount` | `int32` | required | Number of result-list group entries that follow. |

## Behavior

### Sender
Sent in response to `navigator.search` (c2s 249). Contains the query echo and a list of result-list groups, each corresponding to a sub-category within the search context.


### Receiver
The client renders each result list as a collapsible group within the navigator results panel, applying the display mode and action from each group. Confirmed in GLADIATOR.

## Notes

- Each result-list entry contains: `code` (string; sub-category identifier), `data` (string; label or query used for this group), `action` (int32; 0 = none, 1 = more results available, 2 = go back), `closed` (boolean; true when the group is collapsed by default), `mode` (int32; 0 = list, 1 = thumbnails, 2 = thumbnails-only), `roomCount` (int32), then `roomCount` room data records.

- Each room data record contains: `roomId` (int32), `roomName` (string), `ownerId` (int32), `ownerName` (string), `doorMode` (int32; 0 = open, 1 = doorbell, 2 = password, 3 = invisible), `userCount` (int32), `maxUserCount` (int32), `description` (string), `tradeMode` (int32), `score` (int32), `ranking` (int32), `categoryId` (int32), `tagCount` (int32) followed by `tagCount` tag strings, `bitMask` (int32), then conditional fields based on bitmask bits: bit 1 adds `officialRoomPicRef` (string); bit 2 adds `groupId` (int32), `groupName` (string), `groupBadge` (string); bit 4 adds `adName` (string), `adDescription` (string), `adExpiresInMin` (int32); bit 8 sets `showOwner`; bit 16 sets `allowPets`; bit 32 sets `displayAd`.


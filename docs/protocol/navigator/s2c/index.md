---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Navigator
- **Total packets**: 18

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 52 | `GUEST_ROOM_SEARCH_RESULT` | [`navigator.guest_room_search_result`](./0052-navigator-guest-room-search-result.md) | Guest room search result | `session` | `nitro-1.6.6` |
| 84 | `NO_SUCH_FLAT` | [`navigator.no_such_flat`](./0084-navigator-no-such-flat.md) | No such flat | `session` | `nitro-1.6.6` |
| 151 | `USER_FAVORITE_ROOM_COUNT` | [`navigator.favourites`](./0151-navigator-favourites.md) | Deliver the user's full favourites list with capacity limit | `session` | `nitro-1.6.6` |
| 378 | `CAN_CREATE_ROOM` | [`navigator.can_create_room`](./0378-navigator-can-create-room.md) | Report whether the user is permitted to create a new room | `session` | `nitro-1.6.6` |
| 518 | `NAVIGATOR_SETTINGS` | [`navigator.settings`](./0518-navigator-settings.md) | Deliver the user's saved navigator window layout settings | `session` | `nitro-1.6.6` |
| 687 | `ROOM_INFO` | [`navigator.room_info`](./0687-navigator-room-info.md) | Deliver full metadata and settings for a requested room | `session` | `nitro-1.6.6` |
| 1304 | `ROOM_CREATED` | [`navigator.room_created`](./1304-navigator-room-created.md) | Confirm successful room creation and provide the new room's identity | `session` | `nitro-1.6.6` |
| 1331 | `CONVERTED_ROOM_ID` | [`navigator.converted_room_id`](./1331-navigator-converted-room-id.md) | Converted room id | `session` | `nitro-1.6.6` |
| 1455 | `CATEGORIES_WITH_VISITOR_COUNT` | [`navigator.category_visitor_counts`](./1455-navigator-category-visitor-counts.md) | Deliver current and maximum visitor counts per room category | `session` | `nitro-1.6.6` |
| 1543 | `NAVIGATOR_COLLAPSED` | [`navigator.collapsed`](./1543-navigator-collapsed.md) | Deliver the list of search category codes that are currently collapsed | `session` | `nitro-1.6.6` |
| 1562 | `NAVIGATOR_CATEGORIES` | [`navigator.flat_cats`](./1562-navigator-flat-cats.md) | Deliver the list of room categories the user may use when creating or editing a room | `session` | `nitro-1.6.6` |
| 2064 | `NAVIGATOR_OPEN_ROOM_CREATOR` | [`navigator.open_room_creator`](./2064-navigator-open-room-creator.md) | Instruct the client to open the room-creation dialog | `session` | `nitro-1.6.6` |
| 2524 | `USER_FAVORITE_ROOM` | [`navigator.favourite_changed`](./2524-navigator-favourite-changed.md) | Notify the client that a room was added to or removed from favourites | `session` | `nitro-1.6.6` |
| 2690 | `NAVIGATOR_SEARCH` | [`navigator.search_result`](./2690-navigator-search-result.md) | Deliver room search results for a given search context | `session` | `nitro-1.6.6` |
| 3052 | `NAVIGATOR_METADATA` | [`navigator.metadata`](./3052-navigator-metadata.md) | Deliver the top-level search context structure with saved searches | `session` | `nitro-1.6.6` |
| 3104 | `NAVIGATOR_LIFTED` | [`navigator.lifted`](./3104-navigator-lifted.md) | Deliver the list of featured (lifted) rooms shown at the top of the navigator | `session` | `nitro-1.6.6` |
| 3244 | `NAVIGATOR_EVENT_CATEGORIES` | [`navigator.event_categories`](./3244-navigator-event-categories.md) | Deliver the list of event categories available for room promotions | `session` | `nitro-1.6.6` |
| 3984 | `NAVIGATOR_SEARCHES` | [`navigator.saved_searches`](./3984-navigator-saved-searches.md) | Deliver the user's full list of saved searches | `session` | `nitro-1.6.6` |

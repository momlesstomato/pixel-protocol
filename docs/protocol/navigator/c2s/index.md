---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Navigator
- **Total packets**: 37

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 39 | `MY_GUILD_BASES_SEARCH` | [`navigator.my_guild_bases_search`](./0039-navigator-my-guild-bases-search.md) | My guild bases search | `session` | `nitro-1.6.6` |
| 172 | `FORWARD_TO_A_COMPETITION_ROOM` | [`navigator.forward_to_a_competition_room`](./0172-navigator-forward-to-a-competition-room.md) | Forward to a competition room | `session` | `nitro-1.6.6` |
| 249 | `NAVIGATOR_SEARCH` | [`navigator.search`](./0249-navigator-search.md) | Search for rooms within a named search category | `session` | `nitro-1.6.6` |
| 272 | `MY_ROOM_RIGHTS_SEARCH` | [`navigator.my_room_rights_search`](./0272-navigator-my-room-rights-search.md) | My room rights search | `session` | `nitro-1.6.6` |
| 309 | `ROOM_FAVORITE_REMOVE` | [`navigator.favourite_remove`](./0309-navigator-favourite-remove.md) | Remove a room from the user's favourites list | `session` | `nitro-1.6.6` |
| 314 | `CONVERT_GLOBAL_ROOM_ID` | [`navigator.convert_global_room_id`](./0314-navigator-convert-global-room-id.md) | Convert global room id | `session` | `nitro-1.6.6` |
| 433 | `COMPETITION_ROOM_SEARCH` | [`navigator.competition_room_search`](./0433-navigator-competition-room-search.md) | Competition room search | `session` | `nitro-1.6.6` |
| 637 | `NAVIGATOR_SEARCH_OPEN` | [`navigator.search_open`](./0637-navigator-search-open.md) | Mark a search category tab as expanded | `session` | `nitro-1.6.6` |
| 685 | `GO_TO_FLAT` | [`navigator.go_to_flat`](./0685-navigator-go-to-flat.md) | Go to flat | `session` | `nitro-1.6.6` |
| 865 | `FORWARD_TO_RANDOM_COMPETITION_ROOM` | [`navigator.forward_to_random_competition_room`](./0865-navigator-forward-to-random-competition-room.md) | Forward to random competition room | `session` | `nitro-1.6.6` |
| 1002 | `MY_FREQUENT_ROOM_HISTORY_SEARCH` | [`navigator.my_frequent_room_history_search`](./1002-navigator-my-frequent-room-history-search.md) | My frequent room history search | `session` | `nitro-1.6.6` |
| 1202 | `NAVIGATOR_CATEGORY_LIST_MODE` | [`navigator.category_mode`](./1202-navigator-category-mode.md) | Set the display mode for a navigator category | `session` | `nitro-1.6.6` |
| 1229 | `GET_OFFICIAL_ROOMS` | [`navigator.official_rooms`](./1229-navigator-official-rooms.md) | Get official rooms | `session` | `nitro-1.6.6` |
| 1450 | `FORWARD_TO_A_SUBMITTABLE_ROOM` | [`navigator.forward_to_a_submittable_room`](./1450-navigator-forward-to-a-submittable-room.md) | Forward to a submittable room | `session` | `nitro-1.6.6` |
| 1703 | `FORWARD_TO_SOME_ROOM` | [`navigator.forward_to_some_room`](./1703-navigator-forward-to-some-room.md) | Forward to some room | `session` | `nitro-1.6.6` |
| 1786 | `ROOMS_WHERE_MY_FRIENDS_ARE` | [`navigator.rooms_where_my_friends_are`](./1786-navigator-rooms-where-my-friends-are.md) | Rooms where my friends are | `session` | `nitro-1.6.6` |
| 1834 | `NAVIGATOR_SEARCH_CLOSE` | [`navigator.search_close`](./1834-navigator-search-close.md) | Mark a search category tab as collapsed | `session` | `nitro-1.6.6` |
| 1954 | `NAVIGATOR_DELETE_SAVED_SEARCH` | [`navigator.search_delete`](./1954-navigator-search-delete.md) | Delete a previously saved search bookmark | `session` | `nitro-1.6.6` |
| 2110 | `NAVIGATOR_INIT` | [`navigator.init`](./2110-navigator-init.md) | Initialize the navigator and receive all initial state | `session` | `nitro-1.6.6` |
| 2128 | `CAN_CREATE_ROOM` | [`navigator.can_create_room`](./2128-navigator-can-create-room.md) | Check whether the user is permitted to create a new room | `session` | `nitro-1.6.6` |
| 2226 | `NAVIGATOR_SEARCH_SAVE` | [`navigator.search_save`](./2226-navigator-search-save.md) | Save the current search as a named bookmark | `session` | `nitro-1.6.6` |
| 2230 | `GET_GUEST_ROOM` | [`navigator.get_room_info`](./2230-navigator-get-room-info.md) | Request detailed information about a specific room | `session` | `nitro-1.6.6` |
| 2264 | `MY_ROOM_HISTORY_SEARCH` | [`navigator.my_room_history_search`](./2264-navigator-my-room-history-search.md) | My room history search | `session` | `nitro-1.6.6` |
| 2266 | `MY_FRIENDS_ROOM_SEARCH` | [`navigator.my_friends_room_search`](./2266-navigator-my-friends-room-search.md) | My friends room search | `session` | `nitro-1.6.6` |
| 2277 | `MY_ROOMS_SEARCH` | [`navigator.my_rooms_search`](./2277-navigator-my-rooms-search.md) | My rooms search | `session` | `nitro-1.6.6` |
| 2537 | `MY_RECOMMENDED_ROOMS` | [`navigator.my_recommended_rooms`](./2537-navigator-my-recommended-rooms.md) | My recommended rooms | `session` | `nitro-1.6.6` |
| 2578 | `MY_FAVOURITE_ROOMS_SEARCH` | [`navigator.my_favourite_rooms_search`](./2578-navigator-my-favourite-rooms-search.md) | My favourite rooms search | `session` | `nitro-1.6.6` |
| 2752 | `ROOM_CREATE` | [`navigator.create_room`](./2752-navigator-create-room.md) | Create a new room with the specified configuration | `session` | `nitro-1.6.6` |
| 2758 | `POPULAR_ROOMS_SEARCH` | [`navigator.popular_rooms_search`](./2758-navigator-popular-rooms-search.md) | Popular rooms search | `session` | `nitro-1.6.6` |
| 2930 | `GUILD_BASE_SEARCH` | [`navigator.guild_base_search`](./2930-navigator-guild-base-search.md) | Guild base search | `session` | `nitro-1.6.6` |
| 2939 | `ROOMS_WITH_HIGHEST_SCORE_SEARCH` | [`navigator.rooms_with_highest_score_search`](./2939-navigator-rooms-with-highest-score-search.md) | Rooms with highest score search | `session` | `nitro-1.6.6` |
| 2970 | `VISIT_USER` | [`navigator.visit_user`](./2970-navigator-visit-user.md) | Visit user | `session` | `nitro-1.6.6` |
| 3027 | `GET_USER_FLAT_CATS` | [`navigator.get_flat_cats`](./3027-navigator-get-flat-cats.md) | Request the list of available room categories | `session` | `nitro-1.6.6` |
| 3159 | `NAVIGATOR_SETTINGS_SAVE` | [`navigator.settings_save`](./3159-navigator-settings-save.md) | Persist the navigator window layout preferences | `session` | `nitro-1.6.6` |
| 3782 | `GET_CATEGORIES_WITH_USER_COUNT` | [`navigator.categories_with_user_count`](./3782-navigator-categories-with-user-count.md) | Get categories with user count | `session` | `nitro-1.6.6` |
| 3817 | `ROOM_FAVORITE` | [`navigator.favourite_add`](./3817-navigator-favourite-add.md) | Add a room to the user's favourites list | `session` | `nitro-1.6.6` |
| 3943 | `ROOM_TEXT_SEARCH` | [`navigator.room_text_search`](./3943-navigator-room-text-search.md) | Room text search | `session` | `nitro-1.6.6` |

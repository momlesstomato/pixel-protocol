---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Room
- **Total packets**: 46

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 143 | `VOTE_FOR_ROOM` | [`room.vote_for_room`](./0143-room-vote-for-room.md) | Vote for room | `session` | `nitro-1.6.6` |
| 532 | `ROOM_DELETE` | [`room.delete`](./0532-room-delete.md) | Delete the room | `session` | `nitro-1.6.6` |
| 777 | `PURCHASE_ROOM_AD` | [`room.purchase_room_ad`](./0777-room-purchase-room-ad.md) | Purchase room ad | `session` | `nitro-1.6.6` |
| 808 | `ROOM_RIGHTS_GIVE` | [`room.give_rights`](./0808-room-give-rights.md) | Grant room rights to a user | `session` | `nitro-1.6.6` |
| 826 | `GET_POPULAR_ROOM_TAGS` | [`room.popular_room_tags`](./0826-room-popular-room-tags.md) | Get popular room tags | `session` | `nitro-1.6.6` |
| 875 | `ROOM_MODEL_SAVE` | [`room.save_floor_plan`](./0875-room-save-floor-plan.md) | Save an updated room floor plan | `session` | `nitro-1.6.6` |
| 924 | `SET_CLOTHING_CHANGE_DATA` | [`room.set_clothing_change_data`](./0924-room-set-clothing-change-data.md) | Set clothing change data for an avatar figure object | `session` | `nitro-1.6.6` |
| 992 | `ROOM_BAN_REMOVE` | [`room.unban_user`](./0992-room-unban-user.md) | Remove a ban from a user in the room | `session` | `nitro-1.6.6` |
| 1075 | `GET_ROOM_AD_PURCHASE_INFO` | [`room.room_ad_purchase_info`](./1075-room-room-ad-purchase-info.md) | Get room ad purchase info | `session` | `nitro-1.6.6` |
| 1320 | `ROOM_KICK` | [`room.kick_user`](./1320-room-kick-user.md) | Kick a user from the room | `session` | `nitro-1.6.6` |
| 1477 | `ROOM_BAN_GIVE` | [`room.ban_user`](./1477-room-ban-user.md) | Ban a user from the room | `session` | `nitro-1.6.6` |
| 1592 | `BOT_PLACE` | [`room.place_bot`](./1592-room-place-bot.md) | Place a bot from inventory into the room | `session` | `nitro-1.6.6` |
| 1644 | `ROOM_DOORBELL` | [`room.doorbell`](./1644-room-doorbell.md) | Ring the doorbell of a locked room | `session` | `nitro-1.6.6` |
| 1687 | `GET_OCCUPIED_TILES` | [`room.get_occupied_tiles`](./1687-room-get-occupied-tiles.md) | Request the set of occupied tiles in the room | `session` | `nitro-1.6.6` |
| 1911 | `ROOM_FILTER_WORDS` | [`room.room_filter_words`](./1911-room-room-filter-words.md) | Room filter words | `session` | `nitro-1.6.6` |
| 1918 | `ROOM_STAFF_PICK` | [`room.room_staff_pick`](./1918-room-room-staff-pick.md) | Room staff pick | `session` | `nitro-1.6.6` |
| 1969 | `ROOM_SETTINGS_SAVE` | [`room.save_settings`](./1969-room-save-settings.md) | Save updated room settings | `session` | `nitro-1.6.6` |
| 1986 | `BOT_CONFIGURATION` | [`room.get_bot_configuration`](./1986-room-get-bot-configuration.md) | Request the configuration panel for a bot | `session` | `nitro-1.6.6` |
| 2064 | `ROOM_RIGHTS_REMOVE` | [`room.take_rights`](./2064-room-take-rights.md) | Remove room rights from a specific user | `session` | `nitro-1.6.6` |
| 2267 | `ROOM_BAN_LIST` | [`room.get_ban_list`](./2267-room-get-ban-list.md) | Request the room ban list | `session` | `nitro-1.6.6` |
| 2283 | `ROOM_AD_PURCHASE_INITIATED` | [`room.room_ad_purchase_initiated`](./2283-room-room-ad-purchase-initiated.md) | Room ad purchase initiated | `session` | `nitro-1.6.6` |
| 2300 | `ROOM_MODEL` | [`room.get_model`](./2300-room-get-model.md) | Request the room layout model and entry data | `session` | `nitro-1.6.6` |
| 2312 | `ROOM_ENTER` | [`room.enter`](./2312-room-enter.md) | Enter a room by its flat ID | `session` | `nitro-1.6.6` |
| 2412 | `ROOM_AD_EVENT_TAB_CLICKED` | [`room.room_ad_event_tab_clicked`](./2412-room-room-ad-event-tab-clicked.md) | Room ad event tab clicked | `session` | `nitro-1.6.6` |
| 2624 | `BOT_SKILL_SAVE` | [`room.save_bot_skill`](./2624-room-save-bot-skill.md) | Save a bot skill configuration | `session` | `nitro-1.6.6` |
| 2668 | `ROOM_AD_EVENT_TAB_VIEWED` | [`room.room_ad_event_tab_viewed`](./2668-room-room-ad-event-tab-viewed.md) | Room ad event tab viewed | `session` | `nitro-1.6.6` |
| 2683 | `ROOM_RIGHTS_REMOVE_ALL` | [`room.remove_all_rights`](./2683-room-remove-all-rights.md) | Remove rights from all users in the room | `session` | `nitro-1.6.6` |
| 2725 | `CANCEL_ROOM_EVENT` | [`room.cancel_room_event`](./2725-room-cancel-room-event.md) | Cancel room event | `session` | `nitro-1.6.6` |
| 2809 | `ROOM_AD_SEARCH` | [`room.room_ad_search`](./2809-room-room-ad-search.md) | Room ad search | `session` | `nitro-1.6.6` |
| 2996 | `ROOM_AMBASSADOR_ALERT` | [`room.ambassador_alert`](./2996-room-ambassador-alert.md) | Send an ambassador alert in the current room | `session` | `nitro-1.6.6` |
| 3001 | `ROOM_FILTER_WORDS_MODIFY` | [`room.room_filter_words_modify`](./3001-room-room-filter-words-modify.md) | Room filter words modify | `session` | `nitro-1.6.6` |
| 3093 | `CHANGE_QUEUE` | [`room.change_queue`](./3093-room-change-queue.md) | Change the user's position in the room queue | `session` | `nitro-1.6.6` |
| 3129 | `ROOM_SETTINGS` | [`room.get_settings`](./3129-room-get-settings.md) | Request the full room settings record | `session` | `nitro-1.6.6` |
| 3182 | `ROOM_RIGHTS_REMOVE_OWN` | [`room.remove_own_rights`](./3182-room-remove-own-rights.md) | Relinquish the user's own room rights | `session` | `nitro-1.6.6` |
| 3305 | `SET_ROOM_SESSION_TAGS` | [`room.room_session_tags`](./3305-room-room-session-tags.md) | Set room session tags | `session` | `nitro-1.6.6` |
| 3323 | `BOT_PICKUP` | [`room.pickup_bot`](./3323-room-pickup-bot.md) | Remove a bot from the room into inventory | `session` | `nitro-1.6.6` |
| 3385 | `ROOM_RIGHTS_LIST` | [`room.get_rights_list`](./3385-room-get-rights-list.md) | Request the list of users with room rights | `session` | `nitro-1.6.6` |
| 3485 | `ROOM_MUTE_USER` | [`room.mute_user`](./3485-room-mute-user.md) | Mute a specific user in the room | `session` | `nitro-1.6.6` |
| 3559 | `GET_ROOM_ENTRY_TILE` | [`room.get_entry_tile`](./3559-room-get-entry-tile.md) | Request the room entry tile position | `session` | `nitro-1.6.6` |
| 3582 | `ROOM_LIKE` | [`room.like`](./3582-room-like.md) | Like the current room | `session` | `nitro-1.6.6` |
| 3608 | `SET_OBJECT_DATA` | [`room.set_object_data`](./3608-room-set-object-data.md) | Set extra data on a room object | `session` | `nitro-1.6.6` |
| 3637 | `ROOM_MUTE` | [`room.toggle_mute`](./3637-room-toggle-mute.md) | Toggle room-wide mute for all users | `session` | `nitro-1.6.6` |
| 3666 | `SET_ITEM_DATA` | [`room.set_item_data`](./3666-room-set-item-data.md) | Update the data of a floor item | `session` | `nitro-1.6.6` |
| 3736 | `ROOM_DIRECTORY_ROOM_NETWORK_OPEN_CONNECTION` | [`room.room_directory_room_network_open_connection`](./3736-room-room-directory-room-network-open-connection.md) | Room directory room network open connection | `session` | `nitro-1.6.6` |
| 3964 | `GET_ITEM_DATA` | [`room.get_item_data`](./3964-room-get-item-data.md) | Request extra data for a specific room item | `session` | `nitro-1.6.6` |
| 3991 | `EDIT_ROOM_EVENT` | [`room.edit_room_event`](./3991-room-edit-room-event.md) | Edit room event | `session` | `nitro-1.6.6` |

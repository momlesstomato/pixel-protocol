---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Room
- **Total packets**: 44

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 160 | `ROOM_FORWARD` | [`room.forward`](./0160-room-forward.md) | Forward the client to a different room | `session` | `nitro-1.6.6` |
| 339 | `ROOM_RIGHTS_OWNER` | [`room.rights_owner`](./0339-room-rights-owner.md) | Notify the user that they have room owner rights | `session` | `nitro-1.6.6` |
| 482 | `ROOM_SCORE` | [`room.score`](./0482-room-score.md) | Deliver the room's current score | `session` | `nitro-1.6.6` |
| 558 | `ROOM_HEIGHT_MAP_UPDATE` | [`room.height_map_update`](./0558-room-height-map-update.md) | Update specific tiles in the room heightmap | `session` | `nitro-1.6.6` |
| 566 | `FLOOD_CONTROL` | [`room.flood_control`](./0566-room-flood-control.md) | Flood control | `session` | `nitro-1.6.6` |
| 749 | `ROOM_INFO_OWNER` | [`room.owner_info`](./0749-room-owner-info.md) | Provide the room owner's display information | `session` | `nitro-1.6.6` |
| 758 | `ROOM_ENTER` | [`room.entered`](./0758-room-entered.md) | Confirm successful room entry | `session` | `nitro-1.6.6` |
| 780 | `ROOM_RIGHTS` | [`room.rights`](./0780-room-rights.md) | Deliver the user's rights level in the room | `session` | `nitro-1.6.6` |
| 826 | `ROOM_MUTE_USER` | [`room.user_muted`](./0826-room-user-muted.md) | Notify a user that they have been muted | `session` | `nitro-1.6.6` |
| 878 | `ROOM_DOORBELL_REJECTED` | [`room.doorbell_rejected`](./0878-room-doorbell-rejected.md) | Notify the visitor that doorbell access was denied | `session` | `nitro-1.6.6` |
| 899 | `ROOM_ENTER_ERROR` | [`room.entry_error`](./0899-room-entry-error.md) | Indicate that room entry has failed | `session` | `nitro-1.6.6` |
| 948 | `ROOM_SETTINGS_SAVE` | [`room.settings_saved`](./0948-room-settings-saved.md) | Confirm that room settings were saved successfully | `session` | `nitro-1.6.6` |
| 1033 | `ROOM_SPECTATOR` | [`room.spectator_mode`](./1033-room-spectator-mode.md) | Indicate the user is in spectator mode | `session` | `nitro-1.6.6` |
| 1191 | `ROOM_SETTINGS_CHAT` | [`room.chat_settings`](./1191-room-chat-settings.md) | Deliver the room chat configuration | `session` | `nitro-1.6.6` |
| 1284 | `ROOM_RIGHTS_LIST` | [`room.rights_list`](./1284-room-rights-list.md) | Deliver the full list of users with room rights | `session` | `nitro-1.6.6` |
| 1301 | `ROOM_MODEL` | [`room.model`](./1301-room-model.md) | Deliver the room layout model data | `session` | `nitro-1.6.6` |
| 1327 | `ROOM_RIGHTS_LIST_REMOVE` | [`room.rights_list_remove`](./1327-room-rights-list-remove.md) | Notify that a user was removed from the rights list | `session` | `nitro-1.6.6` |
| 1498 | `ROOM_SETTINGS` | [`room.settings`](./1498-room-settings.md) | Deliver the full room settings record | `session` | `nitro-1.6.6` |
| 1555 | `ROOM_SETTINGS_SAVE_ERROR` | [`room.settings_save_error`](./1555-room-settings-save-error.md) | Indicate that room settings could not be saved | `session` | `nitro-1.6.6` |
| 1664 | `ROOM_MODEL_DOOR` | [`room.door_settings`](./1664-room-door-settings.md) | Deliver the room entry door position and direction | `session` | `nitro-1.6.6` |
| 1759 | `ROOM_AD_ERROR` | [`room.room_ad_error`](./1759-room-room-ad-error.md) | Room ad error | `session` | `nitro-1.6.6` |
| 1840 | `ROOM_EVENT` | [`room.event_info`](./1840-room-event-info.md) | Deliver room event or advertisement information | `session` | `nitro-1.6.6` |
| 1869 | `ROOM_BAN_LIST` | [`room.ban_list`](./1869-room-ban-list.md) | Deliver the list of users banned from the room | `session` | `nitro-1.6.6` |
| 2012 | `ROOM_POPULAR_TAGS_RESULT` | [`room.room_popular_tags_result`](./2012-room-room-popular-tags-result.md) | Room popular tags result | `session` | `nitro-1.6.6` |
| 2031 | `ROOM_MODEL_NAME` | [`room.model_name`](./2031-room-model-name.md) | Deliver the room model identifier | `session` | `nitro-1.6.6` |
| 2088 | `ROOM_RIGHTS_LIST_ADD` | [`room.rights_list_add`](./2088-room-rights-list-add.md) | Notify that a user was added to the rights list | `session` | `nitro-1.6.6` |
| 2208 | `ROOM_QUEUE_STATUS` | [`room.queue_status`](./2208-room-queue-status.md) | Deliver the doorbell queue status | `session` | `nitro-1.6.6` |
| 2274 | `ROOM_PROMOTION` | [`room.event`](./2274-room-event.md) | Deliver room event or promotion data | `session` | `nitro-1.6.6` |
| 2309 | `ROOM_DOORBELL` | [`room.doorbell_ringing`](./2309-room-doorbell-ringing.md) | Notify the room owner that someone is at the door | `session` | `nitro-1.6.6` |
| 2392 | `ROOM_RIGHTS_CLEAR` | [`room.rights_cleared`](./2392-room-rights-cleared.md) | Notify that all room rights have been cleared | `session` | `nitro-1.6.6` |
| 2454 | `ROOM_PAINT` | [`room.paint`](./2454-room-paint.md) | Deliver the room decoration settings | `session` | `nitro-1.6.6` |
| 2468 | `ROOM_AD_PURCHASE` | [`room.room_ad_purchase`](./2468-room-room-ad-purchase.md) | Room ad purchase | `session` | `nitro-1.6.6` |
| 2533 | `ROOM_MUTED` | [`room.muted`](./2533-room-muted.md) | Notify that room-wide mute state has changed | `session` | `nitro-1.6.6` |
| 2599 | `CAN_CREATE_ROOM_EVENT` | [`room.can_create_room_event`](./2599-room-can-create-room-event.md) | Can create room event | `session` | `nitro-1.6.6` |
| 2753 | `ROOM_HEIGHT_MAP` | [`room.height_map`](./2753-room-height-map.md) | Deliver the full room tile heightmap | `session` | `nitro-1.6.6` |
| 2897 | `ROOM_SETTINGS_ERROR` | [`room.room_settings_error`](./2897-room-room-settings-error.md) | Room settings error | `session` | `nitro-1.6.6` |
| 2937 | `ROOM_GET_FILTER_WORDS` | [`room.filter_words`](./2937-room-filter-words.md) | Deliver the room custom filter word list | `session` | `nitro-1.6.6` |
| 3297 | `ROOM_INFO_UPDATED` | [`room.info_updated`](./3297-room-info-updated.md) | Notify that room metadata has been updated | `session` | `nitro-1.6.6` |
| 3429 | `ROOM_BAN_REMOVE` | [`room.ban_removed`](./3429-room-ban-removed.md) | Notify that a ban has been removed | `session` | `nitro-1.6.6` |
| 3479 | `ROOM_EVENT_CANCEL` | [`room.event_cancelled`](./3479-room-event-cancelled.md) | Notify that the active room event was cancelled | `session` | `nitro-1.6.6` |
| 3547 | `ROOM_THICKNESS` | [`room.visualization_settings`](./3547-room-visualization-settings.md) | Deliver room visualization settings | `session` | `nitro-1.6.6` |
| 3783 | `ROOM_DOORBELL_ACCEPTED` | [`room.doorbell_accepted`](./3783-room-doorbell-accepted.md) | Notify the visitor that doorbell access was granted | `session` | `nitro-1.6.6` |
| 3896 | `SHOW_ENFORCE_ROOM_CATEGORY` | [`room.show_enforce_room_category`](./3896-room-show-enforce-room-category.md) | Show enforce room category | `session` | `nitro-1.6.6` |
| 3990 | `ROOM_MODEL_BLOCKED_TILES` | [`room.blocked_tiles`](./3990-room-blocked-tiles.md) | Deliver the set of blocked tiles in the room | `session` | `nitro-1.6.6` |

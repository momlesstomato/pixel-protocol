---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Furniture & Items
- **Total packets**: 47

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 34 | `JUKEBOX_SONG_DISKS` | [`furniture.jukebox_song_disks`](./0034-furniture-jukebox-song-disks.md) | Jukebox song disks | `session` | `nitro-1.6.6` |
| 56 | `GIFT_OPENED` | [`furniture.gift_opened`](./0056-furniture-gift-opened.md) | Gift opened | `session` | `nitro-1.6.6` |
| 105 | `JUKEBOX_PLAYLIST_FULL` | [`furniture.jukebox_playlist_full`](./0105-furniture-jukebox-playlist-full.md) | Jukebox playlist full | `session` | `nitro-1.6.6` |
| 156 | `WIRED_ERROR` | [`furniture.wired_error`](./0156-furniture-wired-error.md) | Indicate a wired configuration validation error | `session` | `nitro-1.6.6` |
| 178 | `WIRED_REWARD` | [`furniture.wired_reward`](./0178-furniture-wired-reward.md) | Deliver a wired reward result to the user | `session` | `nitro-1.6.6` |
| 377 | `LIMITED_SOLD_OUT` | [`furniture.limited_sold_out`](./0377-furniture-limited-sold-out.md) | Limited sold out | `session` | `nitro-1.6.6` |
| 382 | `LOVELOCK_FURNI_FRIEND_COMFIRMED` | [`furniture.lovelock_friend_confirmed`](./0382-furniture-lovelock-friend-confirmed.md) | Notify that the second user confirmed the love lock | `session` | `nitro-1.6.6` |
| 383 | `WIRED_TRIGGER` | [`furniture.wired_trigger`](./0383-furniture-wired-trigger.md) | Deliver wired trigger configuration | `session` | `nitro-1.6.6` |
| 469 | `NOW_PLAYING` | [`furniture.now_playing`](./0469-furniture-now-playing.md) | Now playing | `session` | `nitro-1.6.6` |
| 770 | `LOVELOCK_FURNI_FINISHED` | [`furniture.lovelock_finished`](./0770-furniture-lovelock-finished.md) | Notify that the love lock sequence completed | `session` | `nitro-1.6.6` |
| 1108 | `WIRED_CONDITION` | [`furniture.wired_condition`](./1108-furniture-wired-condition.md) | Deliver wired condition configuration | `session` | `nitro-1.6.6` |
| 1112 | `YOUTUBE_DISPLAY_PLAYLISTS` | [`furniture.youtube_playlists`](./1112-furniture-youtube-playlists.md) | Deliver the available YouTube playlists | `session` | `nitro-1.6.6` |
| 1140 | `PLAYLIST_SONG_ADDED` | [`furniture.playlist_song_added`](./1140-furniture-playlist-song-added.md) | Playlist song added | `session` | `nitro-1.6.6` |
| 1155 | `WIRED_SAVE` | [`furniture.wired_saved`](./1155-furniture-wired-saved.md) | Confirm that wired configuration was saved | `session` | `nitro-1.6.6` |
| 1369 | `ITEM_WALL` | [`furniture.wall_items`](./1369-furniture-wall-items.md) | Deliver the full list of wall items in the room | `session` | `nitro-1.6.6` |
| 1381 | `OFFICIAL_SONG_ID` | [`furniture.official_song_id`](./1381-furniture-official-song-id.md) | Official song id | `session` | `nitro-1.6.6` |
| 1411 | `YOUTUBE_DISPLAY_VIDEO` | [`furniture.youtube_video`](./1411-furniture-youtube-video.md) | Deliver the currently playing YouTube video info | `session` | `nitro-1.6.6` |
| 1434 | `WIRED_ACTION` | [`furniture.wired_action`](./1434-furniture-wired-action.md) | Deliver wired action configuration | `session` | `nitro-1.6.6` |
| 1453 | `OBJECTS_DATA_UPDATE` | [`furniture.objects_data_update`](./1453-furniture-objects-data-update.md) | Objects data update | `session` | `nitro-1.6.6` |
| 1501 | `USER_FURNITURE_POSTIT_PLACED` | [`furniture.user_furniture_postit_placed`](./1501-furniture-user-furniture-postit-placed.md) | User furniture postit placed | `session` | `nitro-1.6.6` |
| 1534 | `FURNITURE_FLOOR_ADD` | [`furniture.floor_item_added`](./1534-furniture-floor-item-added.md) | Notify that a floor item was placed in the room | `session` | `nitro-1.6.6` |
| 1554 | `YOUTUBE_CONTROL_VIDEO` | [`furniture.youtube_control`](./1554-furniture-youtube-control.md) | Relay a YouTube playback control command | `session` | `nitro-1.6.6` |
| 1723 | `FURNITURE_ALIASES` | [`furniture.aliases`](./1723-furniture-aliases.md) | Deliver furniture alias name mappings | `session` | `nitro-1.6.6` |
| 1748 | `PLAYLIST` | [`furniture.playlist`](./1748-furniture-playlist.md) | Playlist | `session` | `nitro-1.6.6` |
| 1778 | `FURNITURE_FLOOR` | [`furniture.floor_items`](./1778-furniture-floor-items.md) | Deliver the full list of floor items in the room | `session` | `nitro-1.6.6` |
| 1830 | `WIRED_OPEN` | [`furniture.wired_opened`](./1830-furniture-wired-opened.md) | Confirm that a wired furniture item was opened | `session` | `nitro-1.6.6` |
| 1868 | `RENTABLE_SPACE_RENT_FAILED` | [`furniture.rentable_space_rent_failed`](./1868-furniture-rentable-space-rent-failed.md) | Indicate that rentable space rental failed | `session` | `nitro-1.6.6` |
| 2009 | `ITEM_WALL_UPDATE` | [`furniture.wall_item_updated`](./2009-furniture-wall-item-updated.md) | Notify that a wall item changed state | `session` | `nitro-1.6.6` |
| 2046 | `RENTABLE_SPACE_RENT_OK` | [`furniture.rentable_space_rented`](./2046-furniture-rentable-space-rented.md) | Confirm successful rentable space rental | `session` | `nitro-1.6.6` |
| 2187 | `ITEM_WALL_ADD` | [`furniture.wall_item_added`](./2187-furniture-wall-item-added.md) | Notify that a wall item was placed in the room | `session` | `nitro-1.6.6` |
| 2202 | `FURNITURE_ITEMDATA` | [`furniture.item_data_updated`](./2202-furniture-item-data-updated.md) | Notify that a single item's data changed | `session` | `nitro-1.6.6` |
| 2366 | `FURNITURE_POSTIT_STICKY_POLE_OPEN` | [`furniture.postit_open`](./2366-furniture-postit-open.md) | Notify that a post-it sticky pole is ready for writing | `session` | `nitro-1.6.6` |
| 2376 | `FURNITURE_STATE` | [`furniture.state`](./2376-furniture-state.md) | Deliver the state of a furniture item (one-way door) | `session` | `nitro-1.6.6` |
| 2547 | `FURNITURE_DATA` | [`furniture.data`](./2547-furniture-data.md) | Deliver interaction data for multiple furniture items | `session` | `nitro-1.6.6` |
| 2602 | `USER_SONG_DISKS_INVENTORY` | [`furniture.user_song_disks_inventory`](./2602-furniture-user-song-disks-inventory.md) | User song disks inventory | `session` | `nitro-1.6.6` |
| 2703 | `FURNITURE_FLOOR_REMOVE` | [`furniture.floor_item_removed`](./2703-furniture-floor-item-removed.md) | Notify that a floor item was removed from the room | `session` | `nitro-1.6.6` |
| 2710 | `ITEM_DIMMER_SETTINGS` | [`furniture.dimmer_presets`](./2710-furniture-dimmer-presets.md) | Deliver the dimmer preset configuration | `session` | `nitro-1.6.6` |
| 2816 | `ITEM_STACK_HELPER` | [`furniture.stack_height`](./2816-furniture-stack-height.md) | Deliver the effective stack height of a tile | `session` | `nitro-1.6.6` |
| 2833 | `MYSTERY_BOX_KEYS` | [`furniture.mystery_box_keys`](./2833-furniture-mystery-box-keys.md) | Mystery box keys | `session` | `nitro-1.6.6` |
| 3207 | `ROOM_ROLLING` | [`furniture.rolling`](./3207-furniture-rolling.md) | Animate items or units rolling across the floor | `session` | `nitro-1.6.6` |
| 3208 | `ITEM_WALL_REMOVE` | [`furniture.wall_item_removed`](./3208-furniture-wall-item-removed.md) | Notify that a wall item was removed from the room | `session` | `nitro-1.6.6` |
| 3365 | `TRAX_SONG_INFO` | [`furniture.trax_song_info`](./3365-furniture-trax-song-info.md) | Trax song info | `session` | `nitro-1.6.6` |
| 3431 | `FURNITURE_STATE_2` | [`furniture.dice_value`](./3431-furniture-dice-value.md) | Deliver a dice roll result | `session` | `nitro-1.6.6` |
| 3559 | `RENTABLE_SPACE_STATUS` | [`furniture.rentable_space_status`](./3559-furniture-rentable-space-status.md) | Deliver the current status of a rentable space | `session` | `nitro-1.6.6` |
| 3753 | `LOVELOCK_FURNI_START` | [`furniture.lovelock_start`](./3753-furniture-lovelock-start.md) | Initiate the love lock sequence | `session` | `nitro-1.6.6` |
| 3776 | `FURNITURE_FLOOR_UPDATE` | [`furniture.floor_item_updated`](./3776-furniture-floor-item-updated.md) | Notify that a floor item moved or changed state | `session` | `nitro-1.6.6` |
| 5210 | `FIREWORK_CHARGE_DATA` | [`furniture.firework_charge_data`](./5210-furniture-firework-charge-data.md) | Firework charge data | `session` | `nitro-1.6.6` |

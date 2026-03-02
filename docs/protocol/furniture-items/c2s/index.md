---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Furniture & Items
- **Total packets**: 52

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 99 | `FURNITURE_MULTISTATE` | [`furniture.toggle_multistate`](./0099-furniture-toggle-multistate.md) | Toggle the state of a multistate floor furniture item | `session` | `nitro-1.6.6` |
| 168 | `FURNITURE_WALL_UPDATE` | [`furniture.wall_update`](./0168-furniture-wall-update.md) | Move a wall item to a new position | `session` | `nitro-1.6.6` |
| 210 | `FURNITURE_WALL_MULTISTATE` | [`furniture.toggle_wall_multistate`](./0210-furniture-toggle-wall-multistate.md) | Toggle the state of a multistate wall furniture item | `session` | `nitro-1.6.6` |
| 248 | `FURNITURE_FLOOR_UPDATE` | [`furniture.floor_update`](./0248-furniture-floor-update.md) | Move or rotate a floor item in the room | `session` | `nitro-1.6.6` |
| 336 | `GET_YOUTUBE_DISPLAY_STATUS` | [`furniture.get_youtube_status`](./0336-furniture-get-youtube-status.md) | Request the current YouTube display status | `session` | `nitro-1.6.6` |
| 462 | `BUILDERS_CLUB_PLACE_WALL_ITEM` | [`furniture.builders_club_place_wall_item`](./0462-furniture-builders-club-place-wall-item.md) | Builders club place wall item | `session` | `nitro-1.6.6` |
| 711 | `ITEM_PAINT` | [`furniture.item_paint`](./0711-furniture-item-paint.md) | Item paint | `session` | `nitro-1.6.6` |
| 753 | `ADD_JUKEBOX_DISK` | [`furniture.add_jukebox_disk`](./0753-furniture-add-jukebox-disk.md) | Add jukebox disk | `session` | `nitro-1.6.6` |
| 768 | `WIRED_OPEN` | [`furniture.open_wired`](./0768-furniture-open-wired.md) | Open a wired furniture item for editing | `session` | `nitro-1.6.6` |
| 872 | `RENTABLE_SPACE_STATUS` | [`furniture.rentable_space_status`](./0872-furniture-rentable-space-status.md) | Rentable space status | `session` | `nitro-1.6.6` |
| 1051 | `BUILDERS_CLUB_PLACE_ROOM_ITEM` | [`furniture.builders_club_place_room_item`](./1051-furniture-builders-club-place-room-item.md) | Builders club place room item | `session` | `nitro-1.6.6` |
| 1071 | `RENTABLE_EXTEND_RENT_OR_BUYOUT_FURNI` | [`furniture.rentable_extend_rent_or_buyout_furni`](./1071-furniture-rentable-extend-rent-or-buyout-furni.md) | Rentable extend rent or buyout furni | `session` | `nitro-1.6.6` |
| 1258 | `FURNITURE_PLACE` | [`furniture.place`](./1258-furniture-place.md) | Place a furniture item from inventory into the room | `session` | `nitro-1.6.6` |
| 1325 | `GET_NOW_PLAYING` | [`furniture.now_playing`](./1325-furniture-now-playing.md) | Get now playing | `session` | `nitro-1.6.6` |
| 1435 | `GET_JUKEBOX_PLAYLIST` | [`furniture.jukebox_playlist`](./1435-furniture-jukebox-playlist.md) | Get jukebox playlist | `session` | `nitro-1.6.6` |
| 1520 | `WIRED_TRIGGER_SAVE` | [`furniture.save_wired_trigger`](./1520-furniture-save-wired-trigger.md) | Save wired trigger configuration | `session` | `nitro-1.6.6` |
| 1533 | `ITEM_DICE_CLOSE` | [`furniture.deactivate_dice`](./1533-furniture-deactivate-dice.md) | Stop or close a dice item | `session` | `nitro-1.6.6` |
| 1648 | `ITEM_DIMMER_SAVE` | [`furniture.save_dimmer`](./1648-furniture-save-dimmer.md) | Save a dimmer preset configuration | `session` | `nitro-1.6.6` |
| 1667 | `RENTABLE_SPACE_CANCEL_RENT` | [`furniture.rentable_space_cancel_rent`](./1667-furniture-rentable-space-cancel-rent.md) | Rentable space cancel rent | `session` | `nitro-1.6.6` |
| 1990 | `ITEM_DICE_CLICK` | [`furniture.activate_dice`](./1990-furniture-activate-dice.md) | Activate a dice item to roll it | `session` | `nitro-1.6.6` |
| 2069 | `SET_YOUTUBE_DISPLAY_PLAYLIST` | [`furniture.set_youtube_playlist`](./2069-furniture-set-youtube-playlist.md) | Set the active YouTube playlist | `session` | `nitro-1.6.6` |
| 2115 | `RENTABLE_EXTEND_RENT_OR_BUYOUT_STRIP_ITEM` | [`furniture.rentable_extend_rent_or_buyout_strip_item`](./2115-furniture-rentable-extend-rent-or-buyout-strip-item.md) | Rentable extend rent or buyout strip item | `session` | `nitro-1.6.6` |
| 2144 | `ITEM_COLOR_WHEEL_CLICK` | [`furniture.click_color_wheel`](./2144-furniture-click-color-wheel.md) | Interact with a color-wheel furniture item | `session` | `nitro-1.6.6` |
| 2209 | `MANNEQUIN_SAVE_LOOK` | [`furniture.save_mannequin_look`](./2209-furniture-save-mannequin-look.md) | Save the current avatar look to a mannequin | `session` | `nitro-1.6.6` |
| 2248 | `FURNITURE_POSTIT_PLACE` | [`furniture.place_postit`](./2248-furniture-place-postit.md) | Place a post-it note on the room wall | `session` | `nitro-1.6.6` |
| 2281 | `WIRED_ACTION_SAVE` | [`furniture.save_wired_action`](./2281-furniture-save-wired-action.md) | Save wired action configuration | `session` | `nitro-1.6.6` |
| 2296 | `ITEM_DIMMER_TOGGLE` | [`furniture.toggle_dimmer`](./2296-furniture-toggle-dimmer.md) | Toggle the dimmer on or off | `session` | `nitro-1.6.6` |
| 2304 | `GET_USER_SONG_DISKS` | [`furniture.user_song_disks`](./2304-furniture-user-song-disks.md) | Get user song disks | `session` | `nitro-1.6.6` |
| 2388 | `GET_SOUND_SETTINGS` | [`furniture.sound_settings`](./2388-furniture-sound-settings.md) | Get sound settings | `session` | `nitro-1.6.6` |
| 2518 | `RENTABLE_GET_RENT_OR_BUYOUT_OFFER` | [`furniture.rentable_get_rent_or_buyout_offer`](./2518-furniture-rentable-get-rent-or-buyout-offer.md) | Rentable get rent or buyout offer | `session` | `nitro-1.6.6` |
| 2638 | `WELCOME_OPEN_GIFT` | [`furniture.welcome_open_gift`](./2638-furniture-welcome-open-gift.md) | Welcome open gift | `session` | `nitro-1.6.6` |
| 2651 | `FURNITURE_GROUP_INFO` | [`furniture.furniture_group_info`](./2651-furniture-furniture-group-info.md) | Furniture group info | `session` | `nitro-1.6.6` |
| 2765 | `ONE_WAY_DOOR_CLICK` | [`furniture.click_one_way_door`](./2765-furniture-click-one-way-door.md) | Interact with a one-way door furniture item | `session` | `nitro-1.6.6` |
| 2813 | `ITEM_DIMMER_SETTINGS` | [`furniture.get_dimmer_settings`](./2813-furniture-get-dimmer-settings.md) | Request the dimmer preset configuration | `session` | `nitro-1.6.6` |
| 2850 | `MANNEQUIN_SAVE_NAME` | [`furniture.save_mannequin_name`](./2850-furniture-save-mannequin-name.md) | Save a name for a mannequin | `session` | `nitro-1.6.6` |
| 2880 | `ROOM_TONER_APPLY` | [`furniture.apply_toner`](./2880-furniture-apply-toner.md) | Apply background toner settings | `session` | `nitro-1.6.6` |
| 2946 | `RENTABLE_SPACE_RENT` | [`furniture.rentable_space_rent`](./2946-furniture-rentable-space-rent.md) | Rentable space rent | `session` | `nitro-1.6.6` |
| 3005 | `CONTROL_YOUTUBE_DISPLAY_PLAYBACK` | [`furniture.control_youtube`](./3005-furniture-control-youtube.md) | Control YouTube display playback | `session` | `nitro-1.6.6` |
| 3050 | `REMOVE_JUKEBOX_DISK` | [`furniture.remove_jukebox_disk`](./3050-furniture-remove-jukebox-disk.md) | Remove jukebox disk | `session` | `nitro-1.6.6` |
| 3082 | `GET_SONG_INFO` | [`furniture.song_info`](./3082-furniture-song-info.md) | Get song info | `session` | `nitro-1.6.6` |
| 3189 | `GET_OFFICIAL_SONG_ID` | [`furniture.official_song_id`](./3189-furniture-official-song-id.md) | Get official song id | `session` | `nitro-1.6.6` |
| 3203 | `WIRED_CONDITION_SAVE` | [`furniture.save_wired_condition`](./3203-furniture-save-wired-condition.md) | Save wired condition configuration | `session` | `nitro-1.6.6` |
| 3283 | `FURNITURE_POSTIT_SAVE_STICKY_POLE` | [`furniture.save_postit`](./3283-furniture-save-postit.md) | Save the content of a post-it note | `session` | `nitro-1.6.6` |
| 3336 | `REMOVE_WALL_ITEM` | [`furniture.remove_wall_item`](./3336-furniture-remove-wall-item.md) | Remove wall item | `session` | `nitro-1.6.6` |
| 3373 | `WIRED_APPLY_SNAPSHOT` | [`furniture.apply_wired_snapshot`](./3373-furniture-apply-wired-snapshot.md) | Apply a wired configuration snapshot to multiple items | `session` | `nitro-1.6.6` |
| 3456 | `FURNITURE_PICKUP` | [`furniture.pickup`](./3456-furniture-pickup.md) | Pick up a furniture item from the room | `session` | `nitro-1.6.6` |
| 3498 | `GET_SOUND_MACHINE_PLAYLIST` | [`furniture.sound_machine_playlist`](./3498-furniture-sound-machine-playlist.md) | Get sound machine playlist | `session` | `nitro-1.6.6` |
| 3558 | `PRESENT_OPEN_PRESENT` | [`furniture.present_open_present`](./3558-furniture-present-open-present.md) | Present open present | `session` | `nitro-1.6.6` |
| 3617 | `FURNITURE_RANDOMSTATE` | [`furniture.toggle_random_state`](./3617-furniture-toggle-random-state.md) | Trigger a random state change on a furniture item | `session` | `nitro-1.6.6` |
| 3775 | `FRIEND_FURNI_CONFIRM_LOCK` | [`furniture.friend_furni_confirm_lock`](./3775-furniture-friend-furni-confirm-lock.md) | Friend furni confirm lock | `session` | `nitro-1.6.6` |
| 3839 | `ITEM_STACK_HELPER` | [`furniture.set_stack_height`](./3839-furniture-set-stack-height.md) | Set the stack height of a stack-helper tile | `session` | `nitro-1.6.6` |
| 3898 | `FURNITURE_ALIASES` | [`furniture.furniture_aliases`](./3898-furniture-furniture-aliases.md) | Furniture aliases | `session` | `nitro-1.6.6` |

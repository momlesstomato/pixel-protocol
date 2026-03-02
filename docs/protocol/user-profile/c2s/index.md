---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: User & Profile
- **Total packets**: 29

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 17 | `USER_TAGS` | [`user.get_tags`](./0017-user-get-tags.md) | Request the profile tags of a user currently in a room | `session` | `nitro-1.6.6` |
| 66 | `WELCOME_GIFT_CHANGE_EMAIL` | [`user.welcome_gift_change_email`](./0066-user-welcome-gift-change-email.md) | Submit an email address update as part of the welcome-gift flow | `session` | `nitro-1.6.6` |
| 357 | `USER_INFO` | [`user.get_info`](./0357-user-get-info.md) | Request own user data from the server | `session` | `nitro-1.6.6` |
| 800 | `SAVE_WARDROBE_OUTFIT` | [`user.save_wardrobe_outfit`](./0800-user-save-wardrobe-outfit.md) | Save an outfit to a wardrobe slot | `session` | `nitro-1.6.6` |
| 1086 | `USER_SETTINGS_INVITES` | [`user.settings_room_invites`](./1086-user-settings-room-invites.md) | Toggle room invitation acceptance | `session` | `nitro-1.6.6` |
| 1117 | `USER_IGNORE` | [`user.ignore`](./1117-user-ignore.md) | Add a user to the ignore list by username | `session` | `nitro-1.6.6` |
| 1262 | `USER_SETTINGS_OLD_CHAT` | [`user.settings_old_chat`](./1262-user-settings-old-chat.md) | Toggle old-style chat bubble mode | `session` | `nitro-1.6.6` |
| 1299 | `NEW_USER_EXPERIENCE_SCRIPT_PROCEED` | [`user.nux_proceed`](./1299-user-nux-proceed.md) | Signal completion of the current new-user experience step | `session` | `nitro-1.6.6` |
| 1367 | `USER_SETTINGS_VOLUME` | [`user.settings_volume`](./1367-user-settings-volume.md) | Save audio volume preferences | `session` | `nitro-1.6.6` |
| 1740 | `USER_HOME_ROOM` | [`user.set_home_room`](./1740-user-set-home-room.md) | Set the user's home room | `session` | `nitro-1.6.6` |
| 1752 | `USER_EFFECT_ENABLE` | [`user.effect_enable`](./1752-user-effect-enable.md) | Select or highlight an avatar effect in the inventory | `session` | `nitro-1.6.6` |
| 1822 | `NEW_USER_EXPERIENCE_GET_GIFTS` | [`user.nux_get_gifts`](./1822-user-nux-get-gifts.md) | Submit gift selections during the new-user experience | `session` | `nitro-1.6.6` |
| 2061 | `USER_UNIGNORE` | [`user.unignore`](./2061-user-unignore.md) | Remove a user from the ignore list | `session` | `nitro-1.6.6` |
| 2109 | `APPROVE_NAME` | [`user.approve_name`](./2109-user-approve-name.md) | Submit a name string for server-side word screening | `session` | `nitro-1.6.6` |
| 2138 | `MESSENGER_RELATIONSHIPS` | [`user.get_relationship_status`](./2138-user-get-relationship-status.md) | Request the public relationship status entries for a user | `session` | `nitro-1.6.6` |
| 2228 | `USER_MOTTO` | [`user.update_motto`](./2228-user-update-motto.md) | Update the authenticated user's motto | `session` | `nitro-1.6.6` |
| 2249 | `USER_PROFILE_BY_NAME` | [`user.get_profile_by_name`](./2249-user-get-profile-by-name.md) | Request the public profile of a user by username | `session` | `nitro-1.6.6` |
| 2285 | `USER_CLASSIFICATION` | [`user.set_classification`](./2285-user-set-classification.md) | Declare the user class type for the current session | `session` | `nitro-1.6.6` |
| 2557 | `EMAIL_GET_STATUS` | [`user.get_email_status`](./2557-user-get-email-status.md) | Request the account email address and verification status | `session` | `nitro-1.6.6` |
| 2694 | `USER_RESPECT` | [`user.respect`](./2694-user-respect.md) | Send a respect point to another user | `session` | `nitro-1.6.6` |
| 2730 | `USER_FIGURE` | [`user.update_figure`](./2730-user-update-figure.md) | Update the authenticated user's avatar figure and gender | `session` | `nitro-1.6.6` |
| 2742 | `GET_WARDROBE` | [`user.get_wardrobe`](./2742-user-get-wardrobe.md) | Request a page of saved wardrobe outfits | `session` | `nitro-1.6.6` |
| 2977 | `CHANGE_USERNAME` | [`user.change_name`](./2977-user-change-name.md) | Submit a new display name for the authenticated user | `session` | `nitro-1.6.6` |
| 3265 | `USER_PROFILE` | [`user.get_profile`](./3265-user-get-profile.md) | Request the public profile of a user by ID | `session` | `nitro-1.6.6` |
| 3314 | `USER_IGNORE_ID` | [`user.ignore_id`](./3314-user-ignore-id.md) | Add a user to the ignore list by user ID | `session` | `nitro-1.6.6` |
| 3768 | `SET_RELATIONSHIP_STATUS` | [`user.set_relationship_status`](./3768-user-set-relationship-status.md) | Set or clear the relationship status toward a friend | `session` | `nitro-1.6.6` |
| 3878 | `USER_IGNORED` | [`user.get_ignored`](./3878-user-get-ignored.md) | Fetch the ignored-users list filtered by username prefix | `session` | `nitro-1.6.6` |
| 3950 | `CHECK_USERNAME` | [`user.check_name`](./3950-user-check-name.md) | Validate a candidate display name before committing | `session` | `nitro-1.6.6` |
| 3965 | `EMAIL_CHANGE` | [`user.change_email`](./3965-user-change-email.md) | Submit a new email address for the account | `session` | `nitro-1.6.6` |

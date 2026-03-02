---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: User & Profile
- **Total packets**: 27

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 118 | `USER_CHANGE_NAME` | [`user.change_name_result`](./0118-user-change-name-result.md) | Return the result of a display name change request | `session` | `nitro-1.6.6` |
| 126 | `USER_IGNORED` | [`user.ignored_users`](./0126-user-ignored-users.md) | Deliver the current session's ignore list | `session` | `nitro-1.6.6` |
| 207 | `USER_IGNORED_RESULT` | [`user.ignore_result`](./0207-user-ignore-result.md) | Report the result of an ignore or unignore action | `session` | `nitro-1.6.6` |
| 411 | `USER_PERMISSIONS` | [`user.permissions`](./0411-user-permissions.md) | Deliver the authenticated user's club level and security role | `session` | `nitro-1.6.6` |
| 513 | `USER_SETTINGS` | [`user.settings`](./0513-user-settings.md) | Deliver the authenticated user's persisted client settings | `session` | `nitro-1.6.6` |
| 563 | `CHECK_USER_NAME` | [`user.check_name_result`](./0563-user-check-name-result.md) | Return validation result for a candidate display name | `session` | `nitro-1.6.6` |
| 612 | `EMAIL_STATUS` | [`user.email_status`](./0612-user-email-status.md) | Deliver the account email address and verification status | `session` | `nitro-1.6.6` |
| 876 | `EXTENDED_PROFILE_CHANGED` | [`user.extended_profile_changed`](./0876-user-extended-profile-changed.md) | Notify that another user's extended profile data has changed | `session` | `nitro-1.6.6` |
| 966 | `USER_CLASSIFICATION` | [`user.classification`](./0966-user-classification.md) | Deliver user ID, username, and class type for a set of users | `session` | `nitro-1.6.6` |
| 1243 | `ACCOUNT_SAFETY_LOCK_STATUS_CHANGE` | [`user.safety_lock_status`](./1243-user-safety-lock-status.md) | Notify the client of an account safety-lock state change | `session` | `nitro-1.6.6` |
| 1255 | `GET_USER_TAGS` | [`user.tags`](./1255-user-tags.md) | Deliver the profile tags of a user in a room | `session` | `nitro-1.6.6` |
| 1503 | `CATALOG_APPROVE_NAME_RESULT` | [`user.approve_name_result`](./1503-user-approve-name-result.md) | Return the approval result for a catalog or pet name | `session` | `nitro-1.6.6` |
| 1683 | `USER_BANNED` | [`user.banned`](./1683-user-banned.md) | Notify the client that the user has been banned | `session` | `nitro-1.6.6` |
| 1815 | `CHANGE_EMAIL_RESULT` | [`user.change_email_result`](./1815-user-change-email-result.md) | Report the result of an email address change request | `session` | `nitro-1.6.6` |
| 2016 | `MESSENGER_RELATIONSHIPS` | [`user.relationship_status`](./2016-user-relationship-status.md) | Deliver a user's public relationship status entries | `session` | `nitro-1.6.6` |
| 2023 | `IN_CLIENT_LINK` | [`user.in_client_link`](./2023-user-in-client-link.md) | Deliver a link string for the client to dispatch as an event | `session` | `nitro-1.6.6` |
| 2182 | `UNIT_CHANGE_NAME` | [`user.name_change`](./2182-user-name-change.md) | Broadcast a user's display name change | `session` | `nitro-1.6.6` |
| 2293 | `WELCOME_GIFT_CHANGE_EMAIL_RESULT` | [`user.welcome_gift_change_email_result`](./2293-user-welcome-gift-change-email-result.md) | Report the result of a welcome-gift email update | `session` | `nitro-1.6.6` |
| 2429 | `USER_FIGURE` | [`user.figure`](./2429-user-figure.md) | Notify the client that its avatar figure has been updated | `session` | `nitro-1.6.6` |
| 2586 | `USER_PERKS` | [`user.perks`](./2586-user-perks.md) | Deliver the list of perk allowances for the authenticated user | `session` | `nitro-1.6.6` |
| 2707 | `WELCOME_GIFT_STATUS` | [`user.welcome_gift_status`](./2707-user-welcome-gift-status.md) | Deliver welcome-gift email status and furni eligibility | `session` | `nitro-1.6.6` |
| 2725 | `USER_INFO` | [`user.info`](./2725-user-info.md) | Deliver the authenticated user's own identity and preference data | `session` | `nitro-1.6.6` |
| 2815 | `USER_RESPECT` | [`user.respect_received`](./2815-user-respect-received.md) | Notify that a user has received a respect point | `session` | `nitro-1.6.6` |
| 2875 | `USER_HOME_ROOM` | [`user.home_room`](./2875-user-home-room.md) | Deliver the user's home room and room to enter on login | `session` | `nitro-1.6.6` |
| 3315 | `USER_OUTFITS` | [`user.wardrobe_page`](./3315-user-wardrobe-page.md) | Deliver a page of the user's saved wardrobe outfits | `session` | `nitro-1.6.6` |
| 3738 | `NOOBNESS_LEVEL` | [`user.noobness_level`](./3738-user-noobness-level.md) | Deliver the account identity level that gates NUX features | `session` | `nitro-1.6.6` |
| 3898 | `USER_PROFILE` | [`user.profile`](./3898-user-profile.md) | Deliver a user's public profile card data | `session` | `nitro-1.6.6` |

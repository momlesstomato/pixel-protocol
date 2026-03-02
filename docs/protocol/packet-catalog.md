---
title: Packet Catalog
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Total packets**: 922 (463 c2s, 459 s2c)

## Handshake & Security

### Client to Server (c2s)

- **Packets**: 8

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 96 | `CLIENT_LATENCY_MEASURE` | [`handshake.client_latency_measure`](./handshake-security/c2s/0096-handshake-client-latency-measure.md) | Client latency measure | `session` |
| 773 | `HANDSHAKE_COMPLETE_DIFFIE` | [`handshake.complete_diffie`](./handshake-security/c2s/0773-handshake-complete-diffie.md) | Send client public key and complete key exchange | `crypto` |
| 1053 | `CLIENT_VARIABLES` | [`handshake.client_variables`](./handshake-security/c2s/1053-handshake-client-variables.md) | Send client resource metadata required by some server revisions | `pre-auth` |
| 2419 | `SECURITY_TICKET` | [`security.sso_ticket`](./handshake-security/c2s/2419-security-sso-ticket.md) | Authenticate using the SSO ticket | `auth` |
| 2490 | `SECURITY_MACHINE` | [`security.machine_id`](./handshake-security/c2s/2490-security-machine-id.md) | Send machine and fingerprint identifiers | `pre-auth` |
| 3110 | `HANDSHAKE_INIT_DIFFIE` | [`handshake.init_diffie`](./handshake-security/c2s/3110-handshake-init-diffie.md) | Request signed Diffie-Hellman parameters from server | `crypto` |
| 4000 | `RELEASE_VERSION` | [`handshake.release_version`](./handshake-security/c2s/4000-handshake-release-version.md) | Advertise Nitro release and client platform metadata | `pre-auth` |
| 26979 | `CLIENT_POLICY` | [`handshake.client_policy`](./handshake-security/c2s/26979-handshake-client-policy.md) | Client policy | `session` |

### Server to Client (s2c)

- **Packets**: 5

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 1347 | `HANDSHAKE_INIT_DIFFIE` | [`handshake.init_diffie`](./handshake-security/s2c/1347-handshake-init-diffie.md) | Provide signed prime and generator for Diffie-Hellman | `crypto` |
| 1488 | `SECURITY_MACHINE` | [`security.machine_id`](./handshake-security/s2c/1488-security-machine-id.md) | Send normalized machine id back to client for storage | `auth` |
| 2491 | `AUTHENTICATED` | [`authentication.ok`](./handshake-security/s2c/2491-authentication-ok.md) | Confirm successful SSO authentication | `auth` |
| 3523 | `HANDSHAKE_IDENTITY_ACCOUNT` | [`handshake.identity_accounts`](./handshake-security/s2c/3523-handshake-identity-accounts.md) | Provide linked account identities associated with the session | `auth` |
| 3885 | `HANDSHAKE_COMPLETE_DIFFIE` | [`handshake.complete_diffie`](./handshake-security/s2c/3885-handshake-complete-diffie.md) | Return server public key and optional encryption flag | `crypto` |

## Session & Connection

### Client to Server (c2s)

- **Packets**: 10

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 105 | `DESKTOP_VIEW` | [`session.desktop_view`](./session-connection/c2s/0105-session-desktop-view.md) | Desktop view | `session` |
| 295 | `CLIENT_LATENCY` | [`client.latency_test`](./session-connection/c2s/0295-client-latency-test.md) | Send latency probe id to measure round-trip time | `session` |
| 1160 | `PEER_USERS_CLASSIFICATION` | [`session.peer_users_classification`](./session-connection/c2s/1160-session-peer-users-classification.md) | Peer users classification | `session` |
| 2313 | `CLIENT_TOOLBAR_TOGGLE` | [`session.client_toolbar_toggle`](./session-connection/c2s/2313-session-client-toolbar-toggle.md) | Client toolbar toggle | `session` |
| 2445 | `DISCONNECT` | [`client.disconnect`](./session-connection/c2s/2445-client-disconnect.md) | Client-initiated graceful disconnect | `session` |
| 2596 | `CLIENT_PONG` | [`client.pong`](./session-connection/c2s/2596-client-pong.md) | Keepalive response to server ping | `session` |
| 3226 | `RENDER_ROOM` | [`session.render_room`](./session-connection/c2s/3226-session-render-room.md) | Render room | `session` |
| 3230 | `TRACKING_PERFORMANCE_LOG` | [`session.tracking_performance_log`](./session-connection/c2s/3230-session-tracking-performance-log.md) | Tracking performance log | `session` |
| 3457 | `EVENT_TRACKER` | [`session.event_tracker`](./session-connection/c2s/3457-session-event-tracker.md) | Event tracker | `session` |
| 3847 | `TRACKING_LAG_WARNING_REPORT` | [`session.tracking_lag_warning_report`](./session-connection/c2s/3847-session-tracking-lag-warning-report.md) | Tracking lag warning report | `session` |

### Server to Client (s2c)

- **Packets**: 20

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 10 | `CLIENT_LATENCY` | [`client.latency_response`](./session-connection/s2c/0010-client-latency-response.md) | Echo request id in response to latency test | `session` |
| 122 | `DESKTOP_VIEW` | [`session.desktop_view`](./session-connection/s2c/0122-session-desktop-view.md) | Desktop view | `session` |
| 426 | `RESTORE_CLIENT` | [`session.restore_client`](./session-connection/s2c/0426-session-restore-client.md) | Restore client | `session` |
| 600 | `AVAILABILITY_TIME` | [`availability.time`](./session-connection/s2c/0600-availability-time.md) | Report scheduled open/close time information | `session` |
| 793 | `FIRST_LOGIN_OF_DAY` | [`session.first_login_of_day`](./session-connection/s2c/0793-session-first-login-of-day.md) | First login of day | `session` |
| 1004 | `CONNECTION_ERROR` | [`connection.error`](./session-connection/s2c/1004-connection-error.md) | Report a connection-level error | `session` |
| 1050 | `HOTEL_WILL_CLOSE_MINUTES` | [`hotel.will_close`](./session-connection/s2c/1050-hotel-will-close.md) | Warn the client that the hotel will close soon | `session` |
| 1350 | `HOTEL_MAINTENANCE` | [`hotel.maintenance`](./session-connection/s2c/1350-hotel-maintenance.md) | Report current maintenance mode status | `session` |
| 1600 | `GENERIC_ERROR` | [`session.generic_error`](./session-connection/s2c/1600-session-generic-error.md) | Generic error | `session` |
| 1663 | `HOTEL_MERGE_NAME_CHANGE` | [`session.hotel_merge_name_change`](./session-connection/s2c/1663-session-hotel-merge-name-change.md) | Hotel merge name change | `session` |
| 1890 | `MODERATION_CAUTION` | [`session.moderation_caution`](./session-connection/s2c/1890-session-moderation-caution.md) | Moderation caution | `session` |
| 2033 | `AVAILABILITY_STATUS` | [`availability.status`](./session-connection/s2c/2033-availability-status.md) | Report hotel availability and shutdown state | `session` |
| 2035 | `MOTD_MESSAGES` | [`session.motd_messages`](./session-connection/s2c/2035-session-motd-messages.md) | Motd messages | `session` |
| 2771 | `HOTEL_CLOSES_AND_OPENS_AT` | [`hotel.closes_and_opens_at`](./session-connection/s2c/2771-hotel-closes-and-opens-at.md) | Announce upcoming close and reopen schedule | `session` |
| 3284 | `INFO_FEED_ENABLE` | [`session.info_feed_enable`](./session-connection/s2c/3284-session-info-feed-enable.md) | Info feed enable | `session` |
| 3728 | `HOTEL_CLOSED_AND_OPENS` | [`hotel.closed_and_opens`](./session-connection/s2c/3728-hotel-closed-and-opens.md) | Inform the client when the hotel will reopen | `session` |
| 3801 | `GENERIC_ALERT` | [`session.generic_alert`](./session-connection/s2c/3801-session-generic-alert.md) | Generic alert | `session` |
| 3928 | `CLIENT_PING` | [`client.ping`](./session-connection/s2c/3928-client-ping.md) | Keepalive ping sent by server | `session` |
| 3945 | `EPIC_POPUP` | [`session.epic_popup`](./session-connection/s2c/3945-session-epic-popup.md) | Epic popup | `session` |
| 4000 | `DISCONNECT_REASON` | [`disconnect.reason`](./session-connection/s2c/4000-disconnect-reason.md) | Inform the client why it is being disconnected | `session` |

## User & Profile

### Client to Server (c2s)

- **Packets**: 29

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 17 | `USER_TAGS` | [`user.get_tags`](./user-profile/c2s/0017-user-get-tags.md) | Request the profile tags of a user currently in a room | `session` |
| 66 | `WELCOME_GIFT_CHANGE_EMAIL` | [`user.welcome_gift_change_email`](./user-profile/c2s/0066-user-welcome-gift-change-email.md) | Submit an email address update as part of the welcome-gift flow | `session` |
| 357 | `USER_INFO` | [`user.get_info`](./user-profile/c2s/0357-user-get-info.md) | Request own user data from the server | `session` |
| 800 | `SAVE_WARDROBE_OUTFIT` | [`user.save_wardrobe_outfit`](./user-profile/c2s/0800-user-save-wardrobe-outfit.md) | Save an outfit to a wardrobe slot | `session` |
| 1086 | `USER_SETTINGS_INVITES` | [`user.settings_room_invites`](./user-profile/c2s/1086-user-settings-room-invites.md) | Toggle room invitation acceptance | `session` |
| 1117 | `USER_IGNORE` | [`user.ignore`](./user-profile/c2s/1117-user-ignore.md) | Add a user to the ignore list by username | `session` |
| 1262 | `USER_SETTINGS_OLD_CHAT` | [`user.settings_old_chat`](./user-profile/c2s/1262-user-settings-old-chat.md) | Toggle old-style chat bubble mode | `session` |
| 1299 | `NEW_USER_EXPERIENCE_SCRIPT_PROCEED` | [`user.nux_proceed`](./user-profile/c2s/1299-user-nux-proceed.md) | Signal completion of the current new-user experience step | `session` |
| 1367 | `USER_SETTINGS_VOLUME` | [`user.settings_volume`](./user-profile/c2s/1367-user-settings-volume.md) | Save audio volume preferences | `session` |
| 1740 | `USER_HOME_ROOM` | [`user.set_home_room`](./user-profile/c2s/1740-user-set-home-room.md) | Set the user's home room | `session` |
| 1752 | `USER_EFFECT_ENABLE` | [`user.effect_enable`](./user-profile/c2s/1752-user-effect-enable.md) | Select or highlight an avatar effect in the inventory | `session` |
| 1822 | `NEW_USER_EXPERIENCE_GET_GIFTS` | [`user.nux_get_gifts`](./user-profile/c2s/1822-user-nux-get-gifts.md) | Submit gift selections during the new-user experience | `session` |
| 2061 | `USER_UNIGNORE` | [`user.unignore`](./user-profile/c2s/2061-user-unignore.md) | Remove a user from the ignore list | `session` |
| 2109 | `APPROVE_NAME` | [`user.approve_name`](./user-profile/c2s/2109-user-approve-name.md) | Submit a name string for server-side word screening | `session` |
| 2138 | `MESSENGER_RELATIONSHIPS` | [`user.get_relationship_status`](./user-profile/c2s/2138-user-get-relationship-status.md) | Request the public relationship status entries for a user | `session` |
| 2228 | `USER_MOTTO` | [`user.update_motto`](./user-profile/c2s/2228-user-update-motto.md) | Update the authenticated user's motto | `session` |
| 2249 | `USER_PROFILE_BY_NAME` | [`user.get_profile_by_name`](./user-profile/c2s/2249-user-get-profile-by-name.md) | Request the public profile of a user by username | `session` |
| 2285 | `USER_CLASSIFICATION` | [`user.set_classification`](./user-profile/c2s/2285-user-set-classification.md) | Declare the user class type for the current session | `session` |
| 2557 | `EMAIL_GET_STATUS` | [`user.get_email_status`](./user-profile/c2s/2557-user-get-email-status.md) | Request the account email address and verification status | `session` |
| 2694 | `USER_RESPECT` | [`user.respect`](./user-profile/c2s/2694-user-respect.md) | Send a respect point to another user | `session` |
| 2730 | `USER_FIGURE` | [`user.update_figure`](./user-profile/c2s/2730-user-update-figure.md) | Update the authenticated user's avatar figure and gender | `session` |
| 2742 | `GET_WARDROBE` | [`user.get_wardrobe`](./user-profile/c2s/2742-user-get-wardrobe.md) | Request a page of saved wardrobe outfits | `session` |
| 2977 | `CHANGE_USERNAME` | [`user.change_name`](./user-profile/c2s/2977-user-change-name.md) | Submit a new display name for the authenticated user | `session` |
| 3265 | `USER_PROFILE` | [`user.get_profile`](./user-profile/c2s/3265-user-get-profile.md) | Request the public profile of a user by ID | `session` |
| 3314 | `USER_IGNORE_ID` | [`user.ignore_id`](./user-profile/c2s/3314-user-ignore-id.md) | Add a user to the ignore list by user ID | `session` |
| 3768 | `SET_RELATIONSHIP_STATUS` | [`user.set_relationship_status`](./user-profile/c2s/3768-user-set-relationship-status.md) | Set or clear the relationship status toward a friend | `session` |
| 3878 | `USER_IGNORED` | [`user.get_ignored`](./user-profile/c2s/3878-user-get-ignored.md) | Fetch the ignored-users list filtered by username prefix | `session` |
| 3950 | `CHECK_USERNAME` | [`user.check_name`](./user-profile/c2s/3950-user-check-name.md) | Validate a candidate display name before committing | `session` |
| 3965 | `EMAIL_CHANGE` | [`user.change_email`](./user-profile/c2s/3965-user-change-email.md) | Submit a new email address for the account | `session` |

### Server to Client (s2c)

- **Packets**: 27

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 118 | `USER_CHANGE_NAME` | [`user.change_name_result`](./user-profile/s2c/0118-user-change-name-result.md) | Return the result of a display name change request | `session` |
| 126 | `USER_IGNORED` | [`user.ignored_users`](./user-profile/s2c/0126-user-ignored-users.md) | Deliver the current session's ignore list | `session` |
| 207 | `USER_IGNORED_RESULT` | [`user.ignore_result`](./user-profile/s2c/0207-user-ignore-result.md) | Report the result of an ignore or unignore action | `session` |
| 411 | `USER_PERMISSIONS` | [`user.permissions`](./user-profile/s2c/0411-user-permissions.md) | Deliver the authenticated user's club level and security role | `session` |
| 513 | `USER_SETTINGS` | [`user.settings`](./user-profile/s2c/0513-user-settings.md) | Deliver the authenticated user's persisted client settings | `session` |
| 563 | `CHECK_USER_NAME` | [`user.check_name_result`](./user-profile/s2c/0563-user-check-name-result.md) | Return validation result for a candidate display name | `session` |
| 612 | `EMAIL_STATUS` | [`user.email_status`](./user-profile/s2c/0612-user-email-status.md) | Deliver the account email address and verification status | `session` |
| 876 | `EXTENDED_PROFILE_CHANGED` | [`user.extended_profile_changed`](./user-profile/s2c/0876-user-extended-profile-changed.md) | Notify that another user's extended profile data has changed | `session` |
| 966 | `USER_CLASSIFICATION` | [`user.classification`](./user-profile/s2c/0966-user-classification.md) | Deliver user ID, username, and class type for a set of users | `session` |
| 1243 | `ACCOUNT_SAFETY_LOCK_STATUS_CHANGE` | [`user.safety_lock_status`](./user-profile/s2c/1243-user-safety-lock-status.md) | Notify the client of an account safety-lock state change | `session` |
| 1255 | `GET_USER_TAGS` | [`user.tags`](./user-profile/s2c/1255-user-tags.md) | Deliver the profile tags of a user in a room | `session` |
| 1503 | `CATALOG_APPROVE_NAME_RESULT` | [`user.approve_name_result`](./user-profile/s2c/1503-user-approve-name-result.md) | Return the approval result for a catalog or pet name | `session` |
| 1683 | `USER_BANNED` | [`user.banned`](./user-profile/s2c/1683-user-banned.md) | Notify the client that the user has been banned | `session` |
| 1815 | `CHANGE_EMAIL_RESULT` | [`user.change_email_result`](./user-profile/s2c/1815-user-change-email-result.md) | Report the result of an email address change request | `session` |
| 2016 | `MESSENGER_RELATIONSHIPS` | [`user.relationship_status`](./user-profile/s2c/2016-user-relationship-status.md) | Deliver a user's public relationship status entries | `session` |
| 2023 | `IN_CLIENT_LINK` | [`user.in_client_link`](./user-profile/s2c/2023-user-in-client-link.md) | Deliver a link string for the client to dispatch as an event | `session` |
| 2182 | `UNIT_CHANGE_NAME` | [`user.name_change`](./user-profile/s2c/2182-user-name-change.md) | Broadcast a user's display name change | `session` |
| 2293 | `WELCOME_GIFT_CHANGE_EMAIL_RESULT` | [`user.welcome_gift_change_email_result`](./user-profile/s2c/2293-user-welcome-gift-change-email-result.md) | Report the result of a welcome-gift email update | `session` |
| 2429 | `USER_FIGURE` | [`user.figure`](./user-profile/s2c/2429-user-figure.md) | Notify the client that its avatar figure has been updated | `session` |
| 2586 | `USER_PERKS` | [`user.perks`](./user-profile/s2c/2586-user-perks.md) | Deliver the list of perk allowances for the authenticated user | `session` |
| 2707 | `WELCOME_GIFT_STATUS` | [`user.welcome_gift_status`](./user-profile/s2c/2707-user-welcome-gift-status.md) | Deliver welcome-gift email status and furni eligibility | `session` |
| 2725 | `USER_INFO` | [`user.info`](./user-profile/s2c/2725-user-info.md) | Deliver the authenticated user's own identity and preference data | `session` |
| 2815 | `USER_RESPECT` | [`user.respect_received`](./user-profile/s2c/2815-user-respect-received.md) | Notify that a user has received a respect point | `session` |
| 2875 | `USER_HOME_ROOM` | [`user.home_room`](./user-profile/s2c/2875-user-home-room.md) | Deliver the user's home room and room to enter on login | `session` |
| 3315 | `USER_OUTFITS` | [`user.wardrobe_page`](./user-profile/s2c/3315-user-wardrobe-page.md) | Deliver a page of the user's saved wardrobe outfits | `session` |
| 3738 | `NOOBNESS_LEVEL` | [`user.noobness_level`](./user-profile/s2c/3738-user-noobness-level.md) | Deliver the account identity level that gates NUX features | `session` |
| 3898 | `USER_PROFILE` | [`user.profile`](./user-profile/s2c/3898-user-profile.md) | Deliver a user's public profile card data | `session` |

## Messenger & Social

### Client to Server (c2s)

- **Packets**: 14

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 137 | `ACCEPT_FRIEND` | [`messenger.accept_friend`](./messenger-social/c2s/0137-messenger-accept-friend.md) | Accept one or more pending friend requests | `session` |
| 516 | `FIND_NEW_FRIENDS` | [`messenger.find_new_friends`](./messenger-social/c2s/0516-messenger-find-new-friends.md) | Trigger the automated friend-finder process | `session` |
| 1148 | `FRIEND_REQUEST_QUEST_COMPLETE` | [`messenger.friend_request_quest_complete`](./messenger-social/c2s/1148-messenger-friend-request-quest-complete.md) | Friend request quest complete | `session` |
| 1210 | `HABBO_SEARCH` | [`messenger.search`](./messenger-social/c2s/1210-messenger-search.md) | Search for users by name fragment | `session` |
| 1276 | `SEND_ROOM_INVITE` | [`messenger.room_invite`](./messenger-social/c2s/1276-messenger-room-invite.md) | Send a room invitation to one or more friends | `session` |
| 1419 | `FRIEND_LIST_UPDATE` | [`messenger.refresh`](./messenger-social/c2s/1419-messenger-refresh.md) | Request a full refresh of the friend list | `session` |
| 1523 | `MESSENGER_FRIENDS` | [`messenger.messenger_friends`](./messenger-social/c2s/1523-messenger-messenger-friends.md) | Messenger friends | `session` |
| 1689 | `REMOVE_FRIEND` | [`messenger.remove_friend`](./messenger-social/c2s/1689-messenger-remove-friend.md) | Remove one or more users from the friend list | `session` |
| 2448 | `GET_FRIEND_REQUESTS` | [`messenger.get_requests`](./messenger-social/c2s/2448-messenger-get-requests.md) | Request the full list of pending friend requests | `session` |
| 2781 | `MESSENGER_INIT` | [`messenger.init`](./messenger-social/c2s/2781-messenger-init.md) | Initialize the friend list and messenger subsystem | `session` |
| 2890 | `DECLINE_FRIEND` | [`messenger.decline_friend`](./messenger-social/c2s/2890-messenger-decline-friend.md) | Decline one or more pending friend requests, or clear all | `session` |
| 3157 | `REQUEST_FRIEND` | [`messenger.request_friend`](./messenger-social/c2s/3157-messenger-request-friend.md) | Send a friend request to another user by username | `session` |
| 3567 | `MESSENGER_CHAT` | [`messenger.chat`](./messenger-social/c2s/3567-messenger-chat.md) | Send a private message to a friend | `session` |
| 3997 | `FOLLOW_FRIEND` | [`messenger.follow_friend`](./messenger-social/c2s/3997-messenger-follow-friend.md) | Follow a friend to their current room | `session` |

### Server to Client (s2c)

- **Packets**: 16

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 280 | `MESSENGER_REQUESTS` | [`messenger.friend_requests`](./messenger-social/s2c/0280-messenger-friend-requests.md) | Deliver the full list of pending incoming friend requests | `session` |
| 462 | `MESSENGER_INVITE_ERROR` | [`messenger.room_invite_error`](./messenger-social/s2c/0462-messenger-room-invite-error.md) | Report recipients that could not be reached by a room invitation | `session` |
| 892 | `MESSENGER_MESSAGE_ERROR` | [`messenger.message_error`](./messenger-social/s2c/0892-messenger-message-error.md) | Report a failure when sending a private message or friend request | `session` |
| 896 | `MESSENGER_ACCEPT_FRIENDS` | [`messenger.accept_result`](./messenger-social/s2c/0896-messenger-accept-result.md) | Report failures encountered while processing friend-request acceptances | `session` |
| 973 | `MESSENGER_SEARCH` | [`messenger.search_result`](./messenger-social/s2c/0973-messenger-search-result.md) | Deliver user-search results split into friends and others | `session` |
| 1210 | `MESSENGER_FIND_FRIENDS` | [`messenger.find_friends_result`](./messenger-social/s2c/1210-messenger-find-friends-result.md) | Report the outcome of the automated friend-finder process | `session` |
| 1587 | `MESSENGER_CHAT` | [`messenger.chat`](./messenger-social/s2c/1587-messenger-chat.md) | Deliver an incoming private message from a friend | `session` |
| 1605 | `MESSENGER_INIT` | [`messenger.init`](./messenger-social/s2c/1605-messenger-init.md) | Deliver messenger configuration and friend categories to the client | `session` |
| 1911 | `MESSENGER_MINIMAIL_NEW` | [`messenger.minimail_new`](./messenger-social/s2c/1911-messenger-minimail-new.md) | Notify the client that a new minimail message has arrived | `session` |
| 2219 | `MESSENGER_REQUEST` | [`messenger.friend_request`](./messenger-social/s2c/2219-messenger-friend-request.md) | Notify the client of a new incoming friend request | `session` |
| 2800 | `MESSENGER_UPDATE` | [`messenger.update`](./messenger-social/s2c/2800-messenger-update.md) | Push incremental changes to the friend list | `session` |
| 2803 | `MESSENGER_MINIMAIL_COUNT` | [`messenger.minimail_count`](./messenger-social/s2c/2803-messenger-minimail-count.md) | Deliver the current count of unread minimail messages | `session` |
| 3048 | `MESSENGER_FOLLOW_FAILED` | [`messenger.follow_failed`](./messenger-social/s2c/3048-messenger-follow-failed.md) | Notify the client that following a friend to their room failed | `session` |
| 3130 | `MESSENGER_FRIENDS` | [`messenger.friends`](./messenger-social/s2c/3130-messenger-friends.md) | Deliver one fragment of the user's friend list | `session` |
| 3359 | `MESSENGER_INSTANCE_MESSAGE_ERROR` | [`messenger.instant_message_error`](./messenger-social/s2c/3359-messenger-instant-message-error.md) | Report a delivery failure for a specific private message | `session` |
| 3870 | `MESSENGER_INVITE` | [`messenger.room_invite`](./messenger-social/s2c/3870-messenger-room-invite.md) | Deliver a room invitation sent by a friend | `session` |

## Navigator

### Client to Server (c2s)

- **Packets**: 37

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 39 | `MY_GUILD_BASES_SEARCH` | [`navigator.my_guild_bases_search`](./navigator/c2s/0039-navigator-my-guild-bases-search.md) | My guild bases search | `session` |
| 172 | `FORWARD_TO_A_COMPETITION_ROOM` | [`navigator.forward_to_a_competition_room`](./navigator/c2s/0172-navigator-forward-to-a-competition-room.md) | Forward to a competition room | `session` |
| 249 | `NAVIGATOR_SEARCH` | [`navigator.search`](./navigator/c2s/0249-navigator-search.md) | Search for rooms within a named search category | `session` |
| 272 | `MY_ROOM_RIGHTS_SEARCH` | [`navigator.my_room_rights_search`](./navigator/c2s/0272-navigator-my-room-rights-search.md) | My room rights search | `session` |
| 309 | `ROOM_FAVORITE_REMOVE` | [`navigator.favourite_remove`](./navigator/c2s/0309-navigator-favourite-remove.md) | Remove a room from the user's favourites list | `session` |
| 314 | `CONVERT_GLOBAL_ROOM_ID` | [`navigator.convert_global_room_id`](./navigator/c2s/0314-navigator-convert-global-room-id.md) | Convert global room id | `session` |
| 433 | `COMPETITION_ROOM_SEARCH` | [`navigator.competition_room_search`](./navigator/c2s/0433-navigator-competition-room-search.md) | Competition room search | `session` |
| 637 | `NAVIGATOR_SEARCH_OPEN` | [`navigator.search_open`](./navigator/c2s/0637-navigator-search-open.md) | Mark a search category tab as expanded | `session` |
| 685 | `GO_TO_FLAT` | [`navigator.go_to_flat`](./navigator/c2s/0685-navigator-go-to-flat.md) | Go to flat | `session` |
| 865 | `FORWARD_TO_RANDOM_COMPETITION_ROOM` | [`navigator.forward_to_random_competition_room`](./navigator/c2s/0865-navigator-forward-to-random-competition-room.md) | Forward to random competition room | `session` |
| 1002 | `MY_FREQUENT_ROOM_HISTORY_SEARCH` | [`navigator.my_frequent_room_history_search`](./navigator/c2s/1002-navigator-my-frequent-room-history-search.md) | My frequent room history search | `session` |
| 1202 | `NAVIGATOR_CATEGORY_LIST_MODE` | [`navigator.category_mode`](./navigator/c2s/1202-navigator-category-mode.md) | Set the display mode for a navigator category | `session` |
| 1229 | `GET_OFFICIAL_ROOMS` | [`navigator.official_rooms`](./navigator/c2s/1229-navigator-official-rooms.md) | Get official rooms | `session` |
| 1450 | `FORWARD_TO_A_SUBMITTABLE_ROOM` | [`navigator.forward_to_a_submittable_room`](./navigator/c2s/1450-navigator-forward-to-a-submittable-room.md) | Forward to a submittable room | `session` |
| 1703 | `FORWARD_TO_SOME_ROOM` | [`navigator.forward_to_some_room`](./navigator/c2s/1703-navigator-forward-to-some-room.md) | Forward to some room | `session` |
| 1786 | `ROOMS_WHERE_MY_FRIENDS_ARE` | [`navigator.rooms_where_my_friends_are`](./navigator/c2s/1786-navigator-rooms-where-my-friends-are.md) | Rooms where my friends are | `session` |
| 1834 | `NAVIGATOR_SEARCH_CLOSE` | [`navigator.search_close`](./navigator/c2s/1834-navigator-search-close.md) | Mark a search category tab as collapsed | `session` |
| 1954 | `NAVIGATOR_DELETE_SAVED_SEARCH` | [`navigator.search_delete`](./navigator/c2s/1954-navigator-search-delete.md) | Delete a previously saved search bookmark | `session` |
| 2110 | `NAVIGATOR_INIT` | [`navigator.init`](./navigator/c2s/2110-navigator-init.md) | Initialize the navigator and receive all initial state | `session` |
| 2128 | `CAN_CREATE_ROOM` | [`navigator.can_create_room`](./navigator/c2s/2128-navigator-can-create-room.md) | Check whether the user is permitted to create a new room | `session` |
| 2226 | `NAVIGATOR_SEARCH_SAVE` | [`navigator.search_save`](./navigator/c2s/2226-navigator-search-save.md) | Save the current search as a named bookmark | `session` |
| 2230 | `GET_GUEST_ROOM` | [`navigator.get_room_info`](./navigator/c2s/2230-navigator-get-room-info.md) | Request detailed information about a specific room | `session` |
| 2264 | `MY_ROOM_HISTORY_SEARCH` | [`navigator.my_room_history_search`](./navigator/c2s/2264-navigator-my-room-history-search.md) | My room history search | `session` |
| 2266 | `MY_FRIENDS_ROOM_SEARCH` | [`navigator.my_friends_room_search`](./navigator/c2s/2266-navigator-my-friends-room-search.md) | My friends room search | `session` |
| 2277 | `MY_ROOMS_SEARCH` | [`navigator.my_rooms_search`](./navigator/c2s/2277-navigator-my-rooms-search.md) | My rooms search | `session` |
| 2537 | `MY_RECOMMENDED_ROOMS` | [`navigator.my_recommended_rooms`](./navigator/c2s/2537-navigator-my-recommended-rooms.md) | My recommended rooms | `session` |
| 2578 | `MY_FAVOURITE_ROOMS_SEARCH` | [`navigator.my_favourite_rooms_search`](./navigator/c2s/2578-navigator-my-favourite-rooms-search.md) | My favourite rooms search | `session` |
| 2752 | `ROOM_CREATE` | [`navigator.create_room`](./navigator/c2s/2752-navigator-create-room.md) | Create a new room with the specified configuration | `session` |
| 2758 | `POPULAR_ROOMS_SEARCH` | [`navigator.popular_rooms_search`](./navigator/c2s/2758-navigator-popular-rooms-search.md) | Popular rooms search | `session` |
| 2930 | `GUILD_BASE_SEARCH` | [`navigator.guild_base_search`](./navigator/c2s/2930-navigator-guild-base-search.md) | Guild base search | `session` |
| 2939 | `ROOMS_WITH_HIGHEST_SCORE_SEARCH` | [`navigator.rooms_with_highest_score_search`](./navigator/c2s/2939-navigator-rooms-with-highest-score-search.md) | Rooms with highest score search | `session` |
| 2970 | `VISIT_USER` | [`navigator.visit_user`](./navigator/c2s/2970-navigator-visit-user.md) | Visit user | `session` |
| 3027 | `GET_USER_FLAT_CATS` | [`navigator.get_flat_cats`](./navigator/c2s/3027-navigator-get-flat-cats.md) | Request the list of available room categories | `session` |
| 3159 | `NAVIGATOR_SETTINGS_SAVE` | [`navigator.settings_save`](./navigator/c2s/3159-navigator-settings-save.md) | Persist the navigator window layout preferences | `session` |
| 3782 | `GET_CATEGORIES_WITH_USER_COUNT` | [`navigator.categories_with_user_count`](./navigator/c2s/3782-navigator-categories-with-user-count.md) | Get categories with user count | `session` |
| 3817 | `ROOM_FAVORITE` | [`navigator.favourite_add`](./navigator/c2s/3817-navigator-favourite-add.md) | Add a room to the user's favourites list | `session` |
| 3943 | `ROOM_TEXT_SEARCH` | [`navigator.room_text_search`](./navigator/c2s/3943-navigator-room-text-search.md) | Room text search | `session` |

### Server to Client (s2c)

- **Packets**: 18

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 52 | `GUEST_ROOM_SEARCH_RESULT` | [`navigator.guest_room_search_result`](./navigator/s2c/0052-navigator-guest-room-search-result.md) | Guest room search result | `session` |
| 84 | `NO_SUCH_FLAT` | [`navigator.no_such_flat`](./navigator/s2c/0084-navigator-no-such-flat.md) | No such flat | `session` |
| 151 | `USER_FAVORITE_ROOM_COUNT` | [`navigator.favourites`](./navigator/s2c/0151-navigator-favourites.md) | Deliver the user's full favourites list with capacity limit | `session` |
| 378 | `CAN_CREATE_ROOM` | [`navigator.can_create_room`](./navigator/s2c/0378-navigator-can-create-room.md) | Report whether the user is permitted to create a new room | `session` |
| 518 | `NAVIGATOR_SETTINGS` | [`navigator.settings`](./navigator/s2c/0518-navigator-settings.md) | Deliver the user's saved navigator window layout settings | `session` |
| 687 | `ROOM_INFO` | [`navigator.room_info`](./navigator/s2c/0687-navigator-room-info.md) | Deliver full metadata and settings for a requested room | `session` |
| 1304 | `ROOM_CREATED` | [`navigator.room_created`](./navigator/s2c/1304-navigator-room-created.md) | Confirm successful room creation and provide the new room's identity | `session` |
| 1331 | `CONVERTED_ROOM_ID` | [`navigator.converted_room_id`](./navigator/s2c/1331-navigator-converted-room-id.md) | Converted room id | `session` |
| 1455 | `CATEGORIES_WITH_VISITOR_COUNT` | [`navigator.category_visitor_counts`](./navigator/s2c/1455-navigator-category-visitor-counts.md) | Deliver current and maximum visitor counts per room category | `session` |
| 1543 | `NAVIGATOR_COLLAPSED` | [`navigator.collapsed`](./navigator/s2c/1543-navigator-collapsed.md) | Deliver the list of search category codes that are currently collapsed | `session` |
| 1562 | `NAVIGATOR_CATEGORIES` | [`navigator.flat_cats`](./navigator/s2c/1562-navigator-flat-cats.md) | Deliver the list of room categories the user may use when creating or editing a room | `session` |
| 2064 | `NAVIGATOR_OPEN_ROOM_CREATOR` | [`navigator.open_room_creator`](./navigator/s2c/2064-navigator-open-room-creator.md) | Instruct the client to open the room-creation dialog | `session` |
| 2524 | `USER_FAVORITE_ROOM` | [`navigator.favourite_changed`](./navigator/s2c/2524-navigator-favourite-changed.md) | Notify the client that a room was added to or removed from favourites | `session` |
| 2690 | `NAVIGATOR_SEARCH` | [`navigator.search_result`](./navigator/s2c/2690-navigator-search-result.md) | Deliver room search results for a given search context | `session` |
| 3052 | `NAVIGATOR_METADATA` | [`navigator.metadata`](./navigator/s2c/3052-navigator-metadata.md) | Deliver the top-level search context structure with saved searches | `session` |
| 3104 | `NAVIGATOR_LIFTED` | [`navigator.lifted`](./navigator/s2c/3104-navigator-lifted.md) | Deliver the list of featured (lifted) rooms shown at the top of the navigator | `session` |
| 3244 | `NAVIGATOR_EVENT_CATEGORIES` | [`navigator.event_categories`](./navigator/s2c/3244-navigator-event-categories.md) | Deliver the list of event categories available for room promotions | `session` |
| 3984 | `NAVIGATOR_SEARCHES` | [`navigator.saved_searches`](./navigator/s2c/3984-navigator-saved-searches.md) | Deliver the user's full list of saved searches | `session` |

## Room

### Client to Server (c2s)

- **Packets**: 46

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 143 | `VOTE_FOR_ROOM` | [`room.vote_for_room`](./room/c2s/0143-room-vote-for-room.md) | Vote for room | `session` |
| 532 | `ROOM_DELETE` | [`room.delete`](./room/c2s/0532-room-delete.md) | Delete the room | `session` |
| 777 | `PURCHASE_ROOM_AD` | [`room.purchase_room_ad`](./room/c2s/0777-room-purchase-room-ad.md) | Purchase room ad | `session` |
| 808 | `ROOM_RIGHTS_GIVE` | [`room.give_rights`](./room/c2s/0808-room-give-rights.md) | Grant room rights to a user | `session` |
| 826 | `GET_POPULAR_ROOM_TAGS` | [`room.popular_room_tags`](./room/c2s/0826-room-popular-room-tags.md) | Get popular room tags | `session` |
| 875 | `ROOM_MODEL_SAVE` | [`room.save_floor_plan`](./room/c2s/0875-room-save-floor-plan.md) | Save an updated room floor plan | `session` |
| 924 | `SET_CLOTHING_CHANGE_DATA` | [`room.set_clothing_change_data`](./room/c2s/0924-room-set-clothing-change-data.md) | Set clothing change data for an avatar figure object | `session` |
| 992 | `ROOM_BAN_REMOVE` | [`room.unban_user`](./room/c2s/0992-room-unban-user.md) | Remove a ban from a user in the room | `session` |
| 1075 | `GET_ROOM_AD_PURCHASE_INFO` | [`room.room_ad_purchase_info`](./room/c2s/1075-room-room-ad-purchase-info.md) | Get room ad purchase info | `session` |
| 1320 | `ROOM_KICK` | [`room.kick_user`](./room/c2s/1320-room-kick-user.md) | Kick a user from the room | `session` |
| 1477 | `ROOM_BAN_GIVE` | [`room.ban_user`](./room/c2s/1477-room-ban-user.md) | Ban a user from the room | `session` |
| 1592 | `BOT_PLACE` | [`room.place_bot`](./room/c2s/1592-room-place-bot.md) | Place a bot from inventory into the room | `session` |
| 1644 | `ROOM_DOORBELL` | [`room.doorbell`](./room/c2s/1644-room-doorbell.md) | Ring the doorbell of a locked room | `session` |
| 1687 | `GET_OCCUPIED_TILES` | [`room.get_occupied_tiles`](./room/c2s/1687-room-get-occupied-tiles.md) | Request the set of occupied tiles in the room | `session` |
| 1911 | `ROOM_FILTER_WORDS` | [`room.room_filter_words`](./room/c2s/1911-room-room-filter-words.md) | Room filter words | `session` |
| 1918 | `ROOM_STAFF_PICK` | [`room.room_staff_pick`](./room/c2s/1918-room-room-staff-pick.md) | Room staff pick | `session` |
| 1969 | `ROOM_SETTINGS_SAVE` | [`room.save_settings`](./room/c2s/1969-room-save-settings.md) | Save updated room settings | `session` |
| 1986 | `BOT_CONFIGURATION` | [`room.get_bot_configuration`](./room/c2s/1986-room-get-bot-configuration.md) | Request the configuration panel for a bot | `session` |
| 2064 | `ROOM_RIGHTS_REMOVE` | [`room.take_rights`](./room/c2s/2064-room-take-rights.md) | Remove room rights from a specific user | `session` |
| 2267 | `ROOM_BAN_LIST` | [`room.get_ban_list`](./room/c2s/2267-room-get-ban-list.md) | Request the room ban list | `session` |
| 2283 | `ROOM_AD_PURCHASE_INITIATED` | [`room.room_ad_purchase_initiated`](./room/c2s/2283-room-room-ad-purchase-initiated.md) | Room ad purchase initiated | `session` |
| 2300 | `ROOM_MODEL` | [`room.get_model`](./room/c2s/2300-room-get-model.md) | Request the room layout model and entry data | `session` |
| 2312 | `ROOM_ENTER` | [`room.enter`](./room/c2s/2312-room-enter.md) | Enter a room by its flat ID | `session` |
| 2412 | `ROOM_AD_EVENT_TAB_CLICKED` | [`room.room_ad_event_tab_clicked`](./room/c2s/2412-room-room-ad-event-tab-clicked.md) | Room ad event tab clicked | `session` |
| 2624 | `BOT_SKILL_SAVE` | [`room.save_bot_skill`](./room/c2s/2624-room-save-bot-skill.md) | Save a bot skill configuration | `session` |
| 2668 | `ROOM_AD_EVENT_TAB_VIEWED` | [`room.room_ad_event_tab_viewed`](./room/c2s/2668-room-room-ad-event-tab-viewed.md) | Room ad event tab viewed | `session` |
| 2683 | `ROOM_RIGHTS_REMOVE_ALL` | [`room.remove_all_rights`](./room/c2s/2683-room-remove-all-rights.md) | Remove rights from all users in the room | `session` |
| 2725 | `CANCEL_ROOM_EVENT` | [`room.cancel_room_event`](./room/c2s/2725-room-cancel-room-event.md) | Cancel room event | `session` |
| 2809 | `ROOM_AD_SEARCH` | [`room.room_ad_search`](./room/c2s/2809-room-room-ad-search.md) | Room ad search | `session` |
| 2996 | `ROOM_AMBASSADOR_ALERT` | [`room.ambassador_alert`](./room/c2s/2996-room-ambassador-alert.md) | Send an ambassador alert in the current room | `session` |
| 3001 | `ROOM_FILTER_WORDS_MODIFY` | [`room.room_filter_words_modify`](./room/c2s/3001-room-room-filter-words-modify.md) | Room filter words modify | `session` |
| 3093 | `CHANGE_QUEUE` | [`room.change_queue`](./room/c2s/3093-room-change-queue.md) | Change the user's position in the room queue | `session` |
| 3129 | `ROOM_SETTINGS` | [`room.get_settings`](./room/c2s/3129-room-get-settings.md) | Request the full room settings record | `session` |
| 3182 | `ROOM_RIGHTS_REMOVE_OWN` | [`room.remove_own_rights`](./room/c2s/3182-room-remove-own-rights.md) | Relinquish the user's own room rights | `session` |
| 3305 | `SET_ROOM_SESSION_TAGS` | [`room.room_session_tags`](./room/c2s/3305-room-room-session-tags.md) | Set room session tags | `session` |
| 3323 | `BOT_PICKUP` | [`room.pickup_bot`](./room/c2s/3323-room-pickup-bot.md) | Remove a bot from the room into inventory | `session` |
| 3385 | `ROOM_RIGHTS_LIST` | [`room.get_rights_list`](./room/c2s/3385-room-get-rights-list.md) | Request the list of users with room rights | `session` |
| 3485 | `ROOM_MUTE_USER` | [`room.mute_user`](./room/c2s/3485-room-mute-user.md) | Mute a specific user in the room | `session` |
| 3559 | `GET_ROOM_ENTRY_TILE` | [`room.get_entry_tile`](./room/c2s/3559-room-get-entry-tile.md) | Request the room entry tile position | `session` |
| 3582 | `ROOM_LIKE` | [`room.like`](./room/c2s/3582-room-like.md) | Like the current room | `session` |
| 3608 | `SET_OBJECT_DATA` | [`room.set_object_data`](./room/c2s/3608-room-set-object-data.md) | Set extra data on a room object | `session` |
| 3637 | `ROOM_MUTE` | [`room.toggle_mute`](./room/c2s/3637-room-toggle-mute.md) | Toggle room-wide mute for all users | `session` |
| 3666 | `SET_ITEM_DATA` | [`room.set_item_data`](./room/c2s/3666-room-set-item-data.md) | Update the data of a floor item | `session` |
| 3736 | `ROOM_DIRECTORY_ROOM_NETWORK_OPEN_CONNECTION` | [`room.room_directory_room_network_open_connection`](./room/c2s/3736-room-room-directory-room-network-open-connection.md) | Room directory room network open connection | `session` |
| 3964 | `GET_ITEM_DATA` | [`room.get_item_data`](./room/c2s/3964-room-get-item-data.md) | Request extra data for a specific room item | `session` |
| 3991 | `EDIT_ROOM_EVENT` | [`room.edit_room_event`](./room/c2s/3991-room-edit-room-event.md) | Edit room event | `session` |

### Server to Client (s2c)

- **Packets**: 44

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 160 | `ROOM_FORWARD` | [`room.forward`](./room/s2c/0160-room-forward.md) | Forward the client to a different room | `session` |
| 339 | `ROOM_RIGHTS_OWNER` | [`room.rights_owner`](./room/s2c/0339-room-rights-owner.md) | Notify the user that they have room owner rights | `session` |
| 482 | `ROOM_SCORE` | [`room.score`](./room/s2c/0482-room-score.md) | Deliver the room's current score | `session` |
| 558 | `ROOM_HEIGHT_MAP_UPDATE` | [`room.height_map_update`](./room/s2c/0558-room-height-map-update.md) | Update specific tiles in the room heightmap | `session` |
| 566 | `FLOOD_CONTROL` | [`room.flood_control`](./room/s2c/0566-room-flood-control.md) | Flood control | `session` |
| 749 | `ROOM_INFO_OWNER` | [`room.owner_info`](./room/s2c/0749-room-owner-info.md) | Provide the room owner's display information | `session` |
| 758 | `ROOM_ENTER` | [`room.entered`](./room/s2c/0758-room-entered.md) | Confirm successful room entry | `session` |
| 780 | `ROOM_RIGHTS` | [`room.rights`](./room/s2c/0780-room-rights.md) | Deliver the user's rights level in the room | `session` |
| 826 | `ROOM_MUTE_USER` | [`room.user_muted`](./room/s2c/0826-room-user-muted.md) | Notify a user that they have been muted | `session` |
| 878 | `ROOM_DOORBELL_REJECTED` | [`room.doorbell_rejected`](./room/s2c/0878-room-doorbell-rejected.md) | Notify the visitor that doorbell access was denied | `session` |
| 899 | `ROOM_ENTER_ERROR` | [`room.entry_error`](./room/s2c/0899-room-entry-error.md) | Indicate that room entry has failed | `session` |
| 948 | `ROOM_SETTINGS_SAVE` | [`room.settings_saved`](./room/s2c/0948-room-settings-saved.md) | Confirm that room settings were saved successfully | `session` |
| 1033 | `ROOM_SPECTATOR` | [`room.spectator_mode`](./room/s2c/1033-room-spectator-mode.md) | Indicate the user is in spectator mode | `session` |
| 1191 | `ROOM_SETTINGS_CHAT` | [`room.chat_settings`](./room/s2c/1191-room-chat-settings.md) | Deliver the room chat configuration | `session` |
| 1284 | `ROOM_RIGHTS_LIST` | [`room.rights_list`](./room/s2c/1284-room-rights-list.md) | Deliver the full list of users with room rights | `session` |
| 1301 | `ROOM_MODEL` | [`room.model`](./room/s2c/1301-room-model.md) | Deliver the room layout model data | `session` |
| 1327 | `ROOM_RIGHTS_LIST_REMOVE` | [`room.rights_list_remove`](./room/s2c/1327-room-rights-list-remove.md) | Notify that a user was removed from the rights list | `session` |
| 1498 | `ROOM_SETTINGS` | [`room.settings`](./room/s2c/1498-room-settings.md) | Deliver the full room settings record | `session` |
| 1555 | `ROOM_SETTINGS_SAVE_ERROR` | [`room.settings_save_error`](./room/s2c/1555-room-settings-save-error.md) | Indicate that room settings could not be saved | `session` |
| 1664 | `ROOM_MODEL_DOOR` | [`room.door_settings`](./room/s2c/1664-room-door-settings.md) | Deliver the room entry door position and direction | `session` |
| 1759 | `ROOM_AD_ERROR` | [`room.room_ad_error`](./room/s2c/1759-room-room-ad-error.md) | Room ad error | `session` |
| 1840 | `ROOM_EVENT` | [`room.event_info`](./room/s2c/1840-room-event-info.md) | Deliver room event or advertisement information | `session` |
| 1869 | `ROOM_BAN_LIST` | [`room.ban_list`](./room/s2c/1869-room-ban-list.md) | Deliver the list of users banned from the room | `session` |
| 2012 | `ROOM_POPULAR_TAGS_RESULT` | [`room.room_popular_tags_result`](./room/s2c/2012-room-room-popular-tags-result.md) | Room popular tags result | `session` |
| 2031 | `ROOM_MODEL_NAME` | [`room.model_name`](./room/s2c/2031-room-model-name.md) | Deliver the room model identifier | `session` |
| 2088 | `ROOM_RIGHTS_LIST_ADD` | [`room.rights_list_add`](./room/s2c/2088-room-rights-list-add.md) | Notify that a user was added to the rights list | `session` |
| 2208 | `ROOM_QUEUE_STATUS` | [`room.queue_status`](./room/s2c/2208-room-queue-status.md) | Deliver the doorbell queue status | `session` |
| 2274 | `ROOM_PROMOTION` | [`room.event`](./room/s2c/2274-room-event.md) | Deliver room event or promotion data | `session` |
| 2309 | `ROOM_DOORBELL` | [`room.doorbell_ringing`](./room/s2c/2309-room-doorbell-ringing.md) | Notify the room owner that someone is at the door | `session` |
| 2392 | `ROOM_RIGHTS_CLEAR` | [`room.rights_cleared`](./room/s2c/2392-room-rights-cleared.md) | Notify that all room rights have been cleared | `session` |
| 2454 | `ROOM_PAINT` | [`room.paint`](./room/s2c/2454-room-paint.md) | Deliver the room decoration settings | `session` |
| 2468 | `ROOM_AD_PURCHASE` | [`room.room_ad_purchase`](./room/s2c/2468-room-room-ad-purchase.md) | Room ad purchase | `session` |
| 2533 | `ROOM_MUTED` | [`room.muted`](./room/s2c/2533-room-muted.md) | Notify that room-wide mute state has changed | `session` |
| 2599 | `CAN_CREATE_ROOM_EVENT` | [`room.can_create_room_event`](./room/s2c/2599-room-can-create-room-event.md) | Can create room event | `session` |
| 2753 | `ROOM_HEIGHT_MAP` | [`room.height_map`](./room/s2c/2753-room-height-map.md) | Deliver the full room tile heightmap | `session` |
| 2897 | `ROOM_SETTINGS_ERROR` | [`room.room_settings_error`](./room/s2c/2897-room-room-settings-error.md) | Room settings error | `session` |
| 2937 | `ROOM_GET_FILTER_WORDS` | [`room.filter_words`](./room/s2c/2937-room-filter-words.md) | Deliver the room custom filter word list | `session` |
| 3297 | `ROOM_INFO_UPDATED` | [`room.info_updated`](./room/s2c/3297-room-info-updated.md) | Notify that room metadata has been updated | `session` |
| 3429 | `ROOM_BAN_REMOVE` | [`room.ban_removed`](./room/s2c/3429-room-ban-removed.md) | Notify that a ban has been removed | `session` |
| 3479 | `ROOM_EVENT_CANCEL` | [`room.event_cancelled`](./room/s2c/3479-room-event-cancelled.md) | Notify that the active room event was cancelled | `session` |
| 3547 | `ROOM_THICKNESS` | [`room.visualization_settings`](./room/s2c/3547-room-visualization-settings.md) | Deliver room visualization settings | `session` |
| 3783 | `ROOM_DOORBELL_ACCEPTED` | [`room.doorbell_accepted`](./room/s2c/3783-room-doorbell-accepted.md) | Notify the visitor that doorbell access was granted | `session` |
| 3896 | `SHOW_ENFORCE_ROOM_CATEGORY` | [`room.show_enforce_room_category`](./room/s2c/3896-room-show-enforce-room-category.md) | Show enforce room category | `session` |
| 3990 | `ROOM_MODEL_BLOCKED_TILES` | [`room.blocked_tiles`](./room/s2c/3990-room-blocked-tiles.md) | Deliver the set of blocked tiles in the room | `session` |

## Room Entities

### Client to Server (c2s)

- **Packets**: 14

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 1030 | `USER_SETTINGS_CHAT_STYLE` | [`room_entities.set_chat_style`](./room-entities/c2s/1030-room-entities-set-chat-style.md) | Set the user's preferred chat bubble style | `session` |
| 1314 | `UNIT_CHAT` | [`room_entities.say`](./room-entities/c2s/1314-room-entities-say.md) | Send a normal chat message in the room | `session` |
| 1474 | `UNIT_TYPING_STOP` | [`room_entities.typing_stop`](./room-entities/c2s/1474-room-entities-typing-stop.md) | Indicate the user has stopped typing | `session` |
| 1543 | `UNIT_CHAT_WHISPER` | [`room_entities.whisper`](./room-entities/c2s/1543-room-entities-whisper.md) | Send a private whisper to a specific user | `session` |
| 1597 | `UNIT_TYPING` | [`room_entities.typing_start`](./room-entities/c2s/1597-room-entities-typing-start.md) | Indicate the user has started typing | `session` |
| 1975 | `UNIT_SIGN` | [`room_entities.hold_sign`](./room-entities/c2s/1975-room-entities-hold-sign.md) | Hold up a sign with a number or symbol | `session` |
| 2080 | `UNIT_DANCE` | [`room_entities.dance`](./room-entities/c2s/2080-room-entities-dance.md) | Set the avatar's dance animation | `session` |
| 2085 | `UNIT_CHAT_SHOUT` | [`room_entities.shout`](./room-entities/c2s/2085-room-entities-shout.md) | Send a shout message visible to the whole room | `session` |
| 2235 | `UNIT_POSTURE` | [`room_entities.set_posture`](./room-entities/c2s/2235-room-entities-set-posture.md) | Set the avatar's posture (sit or stand) | `session` |
| 2456 | `UNIT_ACTION` | [`room_entities.action`](./room-entities/c2s/2456-room-entities-action.md) | Perform an avatar action or expression | `session` |
| 2814 | `UNIT_DROP_HAND_ITEM` | [`room_entities.drop_hand_item`](./room-entities/c2s/2814-room-entities-drop-hand-item.md) | Drop the currently held hand item | `session` |
| 2941 | `UNIT_GIVE_HANDITEM` | [`room_entities.give_hand_item`](./room-entities/c2s/2941-room-entities-give-hand-item.md) | Give the hand item to another user | `session` |
| 3301 | `UNIT_LOOK` | [`room_entities.look_at`](./room-entities/c2s/3301-room-entities-look-at.md) | Make the avatar look toward a target | `session` |
| 3320 | `UNIT_WALK` | [`room_entities.walk`](./room-entities/c2s/3320-room-entities-walk.md) | Walk the user's avatar to a tile | `session` |

### Server to Client (s2c)

- **Packets**: 20

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 69 | `BOT_SKILL_LIST_UPDATE` | [`room.bot_skill_list_update`](./room-entities/s2c/0069-room-bot-skill-list-update.md) | Bot skill list update | `session` |
| 296 | `BOT_FORCE_OPEN_CONTEXT_MENU` | [`room.bot_force_open_context_menu`](./room-entities/s2c/0296-room-bot-force-open-context-menu.md) | Bot force open context menu | `session` |
| 354 | `HAND_ITEM_RECEIVED` | [`room.hand_item_received`](./room-entities/s2c/0354-room-hand-item-received.md) | Hand item received | `session` |
| 374 | `UNIT` | [`room_entities.units`](./room-entities/s2c/0374-room-entities-units.md) | Deliver a batch of room units (avatars, pets, bots) | `session` |
| 639 | `BOT_ERROR` | [`room.bot_error`](./room-entities/s2c/0639-room-bot-error.md) | Bot error | `session` |
| 1036 | `UNIT_CHAT_SHOUT` | [`room_entities.shout`](./room-entities/s2c/1036-room-entities-shout.md) | Deliver a shout message from a room unit | `session` |
| 1167 | `UNIT_EFFECT` | [`room_entities.effect`](./room-entities/s2c/1167-room-entities-effect.md) | Notify that a unit's avatar effect changed | `session` |
| 1446 | `UNIT_CHAT` | [`room_entities.chat`](./room-entities/s2c/1446-room-entities-chat.md) | Deliver a normal chat message from a room unit | `session` |
| 1474 | `UNIT_HAND_ITEM` | [`room_entities.hand_item`](./room-entities/s2c/1474-room-entities-hand-item.md) | Notify that a unit is carrying a hand item | `session` |
| 1618 | `BOT_COMMAND_CONFIGURATION` | [`room.bot_command_configuration`](./room-entities/s2c/1618-room-bot-command-configuration.md) | Bot command configuration | `session` |
| 1631 | `UNIT_EXPRESSION` | [`room_entities.expression`](./room-entities/s2c/1631-room-entities-expression.md) | Notify that a unit performed an expression or gesture | `session` |
| 1640 | `UNIT_STATUS` | [`room_entities.status`](./room-entities/s2c/1640-room-entities-status.md) | Update unit positions and action states in the room | `session` |
| 1717 | `UNIT_TYPING` | [`room_entities.typing`](./room-entities/s2c/1717-room-entities-typing.md) | Notify that a unit's typing status changed | `session` |
| 1797 | `UNIT_IDLE` | [`room_entities.idle`](./room-entities/s2c/1797-room-entities-idle.md) | Notify that a unit entered or left idle state | `session` |
| 2233 | `UNIT_DANCE` | [`room_entities.dance`](./room-entities/s2c/2233-room-entities-dance.md) | Notify that a unit's dance animation changed | `session` |
| 2324 | `UNIT_NUMBER` | [`room_entities.number`](./room-entities/s2c/2324-room-entities-number.md) | Assign or confirm the user's room index | `session` |
| 2661 | `UNIT_REMOVE` | [`room_entities.removed`](./room-entities/s2c/2661-room-entities-removed.md) | Notify that a unit was removed from the room | `session` |
| 2704 | `UNIT_CHAT_WHISPER` | [`room_entities.whisper`](./room-entities/s2c/2704-room-entities-whisper.md) | Deliver a private whisper to the recipient | `session` |
| 3684 | `BOT_RECEIVED` | [`room.bot_received`](./room-entities/s2c/3684-room-bot-received.md) | Bot received | `session` |
| 3920 | `UNIT_INFO` | [`room_entities.info`](./room-entities/s2c/3920-room-entities-info.md) | Update a unit's display information | `session` |

## Furniture & Items

### Client to Server (c2s)

- **Packets**: 52

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 99 | `FURNITURE_MULTISTATE` | [`furniture.toggle_multistate`](./furniture-items/c2s/0099-furniture-toggle-multistate.md) | Toggle the state of a multistate floor furniture item | `session` |
| 168 | `FURNITURE_WALL_UPDATE` | [`furniture.wall_update`](./furniture-items/c2s/0168-furniture-wall-update.md) | Move a wall item to a new position | `session` |
| 210 | `FURNITURE_WALL_MULTISTATE` | [`furniture.toggle_wall_multistate`](./furniture-items/c2s/0210-furniture-toggle-wall-multistate.md) | Toggle the state of a multistate wall furniture item | `session` |
| 248 | `FURNITURE_FLOOR_UPDATE` | [`furniture.floor_update`](./furniture-items/c2s/0248-furniture-floor-update.md) | Move or rotate a floor item in the room | `session` |
| 336 | `GET_YOUTUBE_DISPLAY_STATUS` | [`furniture.get_youtube_status`](./furniture-items/c2s/0336-furniture-get-youtube-status.md) | Request the current YouTube display status | `session` |
| 462 | `BUILDERS_CLUB_PLACE_WALL_ITEM` | [`furniture.builders_club_place_wall_item`](./furniture-items/c2s/0462-furniture-builders-club-place-wall-item.md) | Builders club place wall item | `session` |
| 711 | `ITEM_PAINT` | [`furniture.item_paint`](./furniture-items/c2s/0711-furniture-item-paint.md) | Item paint | `session` |
| 753 | `ADD_JUKEBOX_DISK` | [`furniture.add_jukebox_disk`](./furniture-items/c2s/0753-furniture-add-jukebox-disk.md) | Add jukebox disk | `session` |
| 768 | `WIRED_OPEN` | [`furniture.open_wired`](./furniture-items/c2s/0768-furniture-open-wired.md) | Open a wired furniture item for editing | `session` |
| 872 | `RENTABLE_SPACE_STATUS` | [`furniture.rentable_space_status`](./furniture-items/c2s/0872-furniture-rentable-space-status.md) | Rentable space status | `session` |
| 1051 | `BUILDERS_CLUB_PLACE_ROOM_ITEM` | [`furniture.builders_club_place_room_item`](./furniture-items/c2s/1051-furniture-builders-club-place-room-item.md) | Builders club place room item | `session` |
| 1071 | `RENTABLE_EXTEND_RENT_OR_BUYOUT_FURNI` | [`furniture.rentable_extend_rent_or_buyout_furni`](./furniture-items/c2s/1071-furniture-rentable-extend-rent-or-buyout-furni.md) | Rentable extend rent or buyout furni | `session` |
| 1258 | `FURNITURE_PLACE` | [`furniture.place`](./furniture-items/c2s/1258-furniture-place.md) | Place a furniture item from inventory into the room | `session` |
| 1325 | `GET_NOW_PLAYING` | [`furniture.now_playing`](./furniture-items/c2s/1325-furniture-now-playing.md) | Get now playing | `session` |
| 1435 | `GET_JUKEBOX_PLAYLIST` | [`furniture.jukebox_playlist`](./furniture-items/c2s/1435-furniture-jukebox-playlist.md) | Get jukebox playlist | `session` |
| 1520 | `WIRED_TRIGGER_SAVE` | [`furniture.save_wired_trigger`](./furniture-items/c2s/1520-furniture-save-wired-trigger.md) | Save wired trigger configuration | `session` |
| 1533 | `ITEM_DICE_CLOSE` | [`furniture.deactivate_dice`](./furniture-items/c2s/1533-furniture-deactivate-dice.md) | Stop or close a dice item | `session` |
| 1648 | `ITEM_DIMMER_SAVE` | [`furniture.save_dimmer`](./furniture-items/c2s/1648-furniture-save-dimmer.md) | Save a dimmer preset configuration | `session` |
| 1667 | `RENTABLE_SPACE_CANCEL_RENT` | [`furniture.rentable_space_cancel_rent`](./furniture-items/c2s/1667-furniture-rentable-space-cancel-rent.md) | Rentable space cancel rent | `session` |
| 1990 | `ITEM_DICE_CLICK` | [`furniture.activate_dice`](./furniture-items/c2s/1990-furniture-activate-dice.md) | Activate a dice item to roll it | `session` |
| 2069 | `SET_YOUTUBE_DISPLAY_PLAYLIST` | [`furniture.set_youtube_playlist`](./furniture-items/c2s/2069-furniture-set-youtube-playlist.md) | Set the active YouTube playlist | `session` |
| 2115 | `RENTABLE_EXTEND_RENT_OR_BUYOUT_STRIP_ITEM` | [`furniture.rentable_extend_rent_or_buyout_strip_item`](./furniture-items/c2s/2115-furniture-rentable-extend-rent-or-buyout-strip-item.md) | Rentable extend rent or buyout strip item | `session` |
| 2144 | `ITEM_COLOR_WHEEL_CLICK` | [`furniture.click_color_wheel`](./furniture-items/c2s/2144-furniture-click-color-wheel.md) | Interact with a color-wheel furniture item | `session` |
| 2209 | `MANNEQUIN_SAVE_LOOK` | [`furniture.save_mannequin_look`](./furniture-items/c2s/2209-furniture-save-mannequin-look.md) | Save the current avatar look to a mannequin | `session` |
| 2248 | `FURNITURE_POSTIT_PLACE` | [`furniture.place_postit`](./furniture-items/c2s/2248-furniture-place-postit.md) | Place a post-it note on the room wall | `session` |
| 2281 | `WIRED_ACTION_SAVE` | [`furniture.save_wired_action`](./furniture-items/c2s/2281-furniture-save-wired-action.md) | Save wired action configuration | `session` |
| 2296 | `ITEM_DIMMER_TOGGLE` | [`furniture.toggle_dimmer`](./furniture-items/c2s/2296-furniture-toggle-dimmer.md) | Toggle the dimmer on or off | `session` |
| 2304 | `GET_USER_SONG_DISKS` | [`furniture.user_song_disks`](./furniture-items/c2s/2304-furniture-user-song-disks.md) | Get user song disks | `session` |
| 2388 | `GET_SOUND_SETTINGS` | [`furniture.sound_settings`](./furniture-items/c2s/2388-furniture-sound-settings.md) | Get sound settings | `session` |
| 2518 | `RENTABLE_GET_RENT_OR_BUYOUT_OFFER` | [`furniture.rentable_get_rent_or_buyout_offer`](./furniture-items/c2s/2518-furniture-rentable-get-rent-or-buyout-offer.md) | Rentable get rent or buyout offer | `session` |
| 2638 | `WELCOME_OPEN_GIFT` | [`furniture.welcome_open_gift`](./furniture-items/c2s/2638-furniture-welcome-open-gift.md) | Welcome open gift | `session` |
| 2651 | `FURNITURE_GROUP_INFO` | [`furniture.furniture_group_info`](./furniture-items/c2s/2651-furniture-furniture-group-info.md) | Furniture group info | `session` |
| 2765 | `ONE_WAY_DOOR_CLICK` | [`furniture.click_one_way_door`](./furniture-items/c2s/2765-furniture-click-one-way-door.md) | Interact with a one-way door furniture item | `session` |
| 2813 | `ITEM_DIMMER_SETTINGS` | [`furniture.get_dimmer_settings`](./furniture-items/c2s/2813-furniture-get-dimmer-settings.md) | Request the dimmer preset configuration | `session` |
| 2850 | `MANNEQUIN_SAVE_NAME` | [`furniture.save_mannequin_name`](./furniture-items/c2s/2850-furniture-save-mannequin-name.md) | Save a name for a mannequin | `session` |
| 2880 | `ROOM_TONER_APPLY` | [`furniture.apply_toner`](./furniture-items/c2s/2880-furniture-apply-toner.md) | Apply background toner settings | `session` |
| 2946 | `RENTABLE_SPACE_RENT` | [`furniture.rentable_space_rent`](./furniture-items/c2s/2946-furniture-rentable-space-rent.md) | Rentable space rent | `session` |
| 3005 | `CONTROL_YOUTUBE_DISPLAY_PLAYBACK` | [`furniture.control_youtube`](./furniture-items/c2s/3005-furniture-control-youtube.md) | Control YouTube display playback | `session` |
| 3050 | `REMOVE_JUKEBOX_DISK` | [`furniture.remove_jukebox_disk`](./furniture-items/c2s/3050-furniture-remove-jukebox-disk.md) | Remove jukebox disk | `session` |
| 3082 | `GET_SONG_INFO` | [`furniture.song_info`](./furniture-items/c2s/3082-furniture-song-info.md) | Get song info | `session` |
| 3189 | `GET_OFFICIAL_SONG_ID` | [`furniture.official_song_id`](./furniture-items/c2s/3189-furniture-official-song-id.md) | Get official song id | `session` |
| 3203 | `WIRED_CONDITION_SAVE` | [`furniture.save_wired_condition`](./furniture-items/c2s/3203-furniture-save-wired-condition.md) | Save wired condition configuration | `session` |
| 3283 | `FURNITURE_POSTIT_SAVE_STICKY_POLE` | [`furniture.save_postit`](./furniture-items/c2s/3283-furniture-save-postit.md) | Save the content of a post-it note | `session` |
| 3336 | `REMOVE_WALL_ITEM` | [`furniture.remove_wall_item`](./furniture-items/c2s/3336-furniture-remove-wall-item.md) | Remove wall item | `session` |
| 3373 | `WIRED_APPLY_SNAPSHOT` | [`furniture.apply_wired_snapshot`](./furniture-items/c2s/3373-furniture-apply-wired-snapshot.md) | Apply a wired configuration snapshot to multiple items | `session` |
| 3456 | `FURNITURE_PICKUP` | [`furniture.pickup`](./furniture-items/c2s/3456-furniture-pickup.md) | Pick up a furniture item from the room | `session` |
| 3498 | `GET_SOUND_MACHINE_PLAYLIST` | [`furniture.sound_machine_playlist`](./furniture-items/c2s/3498-furniture-sound-machine-playlist.md) | Get sound machine playlist | `session` |
| 3558 | `PRESENT_OPEN_PRESENT` | [`furniture.present_open_present`](./furniture-items/c2s/3558-furniture-present-open-present.md) | Present open present | `session` |
| 3617 | `FURNITURE_RANDOMSTATE` | [`furniture.toggle_random_state`](./furniture-items/c2s/3617-furniture-toggle-random-state.md) | Trigger a random state change on a furniture item | `session` |
| 3775 | `FRIEND_FURNI_CONFIRM_LOCK` | [`furniture.friend_furni_confirm_lock`](./furniture-items/c2s/3775-furniture-friend-furni-confirm-lock.md) | Friend furni confirm lock | `session` |
| 3839 | `ITEM_STACK_HELPER` | [`furniture.set_stack_height`](./furniture-items/c2s/3839-furniture-set-stack-height.md) | Set the stack height of a stack-helper tile | `session` |
| 3898 | `FURNITURE_ALIASES` | [`furniture.furniture_aliases`](./furniture-items/c2s/3898-furniture-furniture-aliases.md) | Furniture aliases | `session` |

### Server to Client (s2c)

- **Packets**: 47

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 34 | `JUKEBOX_SONG_DISKS` | [`furniture.jukebox_song_disks`](./furniture-items/s2c/0034-furniture-jukebox-song-disks.md) | Jukebox song disks | `session` |
| 56 | `GIFT_OPENED` | [`furniture.gift_opened`](./furniture-items/s2c/0056-furniture-gift-opened.md) | Gift opened | `session` |
| 105 | `JUKEBOX_PLAYLIST_FULL` | [`furniture.jukebox_playlist_full`](./furniture-items/s2c/0105-furniture-jukebox-playlist-full.md) | Jukebox playlist full | `session` |
| 156 | `WIRED_ERROR` | [`furniture.wired_error`](./furniture-items/s2c/0156-furniture-wired-error.md) | Indicate a wired configuration validation error | `session` |
| 178 | `WIRED_REWARD` | [`furniture.wired_reward`](./furniture-items/s2c/0178-furniture-wired-reward.md) | Deliver a wired reward result to the user | `session` |
| 377 | `LIMITED_SOLD_OUT` | [`furniture.limited_sold_out`](./furniture-items/s2c/0377-furniture-limited-sold-out.md) | Limited sold out | `session` |
| 382 | `LOVELOCK_FURNI_FRIEND_COMFIRMED` | [`furniture.lovelock_friend_confirmed`](./furniture-items/s2c/0382-furniture-lovelock-friend-confirmed.md) | Notify that the second user confirmed the love lock | `session` |
| 383 | `WIRED_TRIGGER` | [`furniture.wired_trigger`](./furniture-items/s2c/0383-furniture-wired-trigger.md) | Deliver wired trigger configuration | `session` |
| 469 | `NOW_PLAYING` | [`furniture.now_playing`](./furniture-items/s2c/0469-furniture-now-playing.md) | Now playing | `session` |
| 770 | `LOVELOCK_FURNI_FINISHED` | [`furniture.lovelock_finished`](./furniture-items/s2c/0770-furniture-lovelock-finished.md) | Notify that the love lock sequence completed | `session` |
| 1108 | `WIRED_CONDITION` | [`furniture.wired_condition`](./furniture-items/s2c/1108-furniture-wired-condition.md) | Deliver wired condition configuration | `session` |
| 1112 | `YOUTUBE_DISPLAY_PLAYLISTS` | [`furniture.youtube_playlists`](./furniture-items/s2c/1112-furniture-youtube-playlists.md) | Deliver the available YouTube playlists | `session` |
| 1140 | `PLAYLIST_SONG_ADDED` | [`furniture.playlist_song_added`](./furniture-items/s2c/1140-furniture-playlist-song-added.md) | Playlist song added | `session` |
| 1155 | `WIRED_SAVE` | [`furniture.wired_saved`](./furniture-items/s2c/1155-furniture-wired-saved.md) | Confirm that wired configuration was saved | `session` |
| 1369 | `ITEM_WALL` | [`furniture.wall_items`](./furniture-items/s2c/1369-furniture-wall-items.md) | Deliver the full list of wall items in the room | `session` |
| 1381 | `OFFICIAL_SONG_ID` | [`furniture.official_song_id`](./furniture-items/s2c/1381-furniture-official-song-id.md) | Official song id | `session` |
| 1411 | `YOUTUBE_DISPLAY_VIDEO` | [`furniture.youtube_video`](./furniture-items/s2c/1411-furniture-youtube-video.md) | Deliver the currently playing YouTube video info | `session` |
| 1434 | `WIRED_ACTION` | [`furniture.wired_action`](./furniture-items/s2c/1434-furniture-wired-action.md) | Deliver wired action configuration | `session` |
| 1453 | `OBJECTS_DATA_UPDATE` | [`furniture.objects_data_update`](./furniture-items/s2c/1453-furniture-objects-data-update.md) | Objects data update | `session` |
| 1501 | `USER_FURNITURE_POSTIT_PLACED` | [`furniture.user_furniture_postit_placed`](./furniture-items/s2c/1501-furniture-user-furniture-postit-placed.md) | User furniture postit placed | `session` |
| 1534 | `FURNITURE_FLOOR_ADD` | [`furniture.floor_item_added`](./furniture-items/s2c/1534-furniture-floor-item-added.md) | Notify that a floor item was placed in the room | `session` |
| 1554 | `YOUTUBE_CONTROL_VIDEO` | [`furniture.youtube_control`](./furniture-items/s2c/1554-furniture-youtube-control.md) | Relay a YouTube playback control command | `session` |
| 1723 | `FURNITURE_ALIASES` | [`furniture.aliases`](./furniture-items/s2c/1723-furniture-aliases.md) | Deliver furniture alias name mappings | `session` |
| 1748 | `PLAYLIST` | [`furniture.playlist`](./furniture-items/s2c/1748-furniture-playlist.md) | Playlist | `session` |
| 1778 | `FURNITURE_FLOOR` | [`furniture.floor_items`](./furniture-items/s2c/1778-furniture-floor-items.md) | Deliver the full list of floor items in the room | `session` |
| 1830 | `WIRED_OPEN` | [`furniture.wired_opened`](./furniture-items/s2c/1830-furniture-wired-opened.md) | Confirm that a wired furniture item was opened | `session` |
| 1868 | `RENTABLE_SPACE_RENT_FAILED` | [`furniture.rentable_space_rent_failed`](./furniture-items/s2c/1868-furniture-rentable-space-rent-failed.md) | Indicate that rentable space rental failed | `session` |
| 2009 | `ITEM_WALL_UPDATE` | [`furniture.wall_item_updated`](./furniture-items/s2c/2009-furniture-wall-item-updated.md) | Notify that a wall item changed state | `session` |
| 2046 | `RENTABLE_SPACE_RENT_OK` | [`furniture.rentable_space_rented`](./furniture-items/s2c/2046-furniture-rentable-space-rented.md) | Confirm successful rentable space rental | `session` |
| 2187 | `ITEM_WALL_ADD` | [`furniture.wall_item_added`](./furniture-items/s2c/2187-furniture-wall-item-added.md) | Notify that a wall item was placed in the room | `session` |
| 2202 | `FURNITURE_ITEMDATA` | [`furniture.item_data_updated`](./furniture-items/s2c/2202-furniture-item-data-updated.md) | Notify that a single item's data changed | `session` |
| 2366 | `FURNITURE_POSTIT_STICKY_POLE_OPEN` | [`furniture.postit_open`](./furniture-items/s2c/2366-furniture-postit-open.md) | Notify that a post-it sticky pole is ready for writing | `session` |
| 2376 | `FURNITURE_STATE` | [`furniture.state`](./furniture-items/s2c/2376-furniture-state.md) | Deliver the state of a furniture item (one-way door) | `session` |
| 2547 | `FURNITURE_DATA` | [`furniture.data`](./furniture-items/s2c/2547-furniture-data.md) | Deliver interaction data for multiple furniture items | `session` |
| 2602 | `USER_SONG_DISKS_INVENTORY` | [`furniture.user_song_disks_inventory`](./furniture-items/s2c/2602-furniture-user-song-disks-inventory.md) | User song disks inventory | `session` |
| 2703 | `FURNITURE_FLOOR_REMOVE` | [`furniture.floor_item_removed`](./furniture-items/s2c/2703-furniture-floor-item-removed.md) | Notify that a floor item was removed from the room | `session` |
| 2710 | `ITEM_DIMMER_SETTINGS` | [`furniture.dimmer_presets`](./furniture-items/s2c/2710-furniture-dimmer-presets.md) | Deliver the dimmer preset configuration | `session` |
| 2816 | `ITEM_STACK_HELPER` | [`furniture.stack_height`](./furniture-items/s2c/2816-furniture-stack-height.md) | Deliver the effective stack height of a tile | `session` |
| 2833 | `MYSTERY_BOX_KEYS` | [`furniture.mystery_box_keys`](./furniture-items/s2c/2833-furniture-mystery-box-keys.md) | Mystery box keys | `session` |
| 3207 | `ROOM_ROLLING` | [`furniture.rolling`](./furniture-items/s2c/3207-furniture-rolling.md) | Animate items or units rolling across the floor | `session` |
| 3208 | `ITEM_WALL_REMOVE` | [`furniture.wall_item_removed`](./furniture-items/s2c/3208-furniture-wall-item-removed.md) | Notify that a wall item was removed from the room | `session` |
| 3365 | `TRAX_SONG_INFO` | [`furniture.trax_song_info`](./furniture-items/s2c/3365-furniture-trax-song-info.md) | Trax song info | `session` |
| 3431 | `FURNITURE_STATE_2` | [`furniture.dice_value`](./furniture-items/s2c/3431-furniture-dice-value.md) | Deliver a dice roll result | `session` |
| 3559 | `RENTABLE_SPACE_STATUS` | [`furniture.rentable_space_status`](./furniture-items/s2c/3559-furniture-rentable-space-status.md) | Deliver the current status of a rentable space | `session` |
| 3753 | `LOVELOCK_FURNI_START` | [`furniture.lovelock_start`](./furniture-items/s2c/3753-furniture-lovelock-start.md) | Initiate the love lock sequence | `session` |
| 3776 | `FURNITURE_FLOOR_UPDATE` | [`furniture.floor_item_updated`](./furniture-items/s2c/3776-furniture-floor-item-updated.md) | Notify that a floor item moved or changed state | `session` |
| 5210 | `FIREWORK_CHARGE_DATA` | [`furniture.firework_charge_data`](./furniture-items/s2c/5210-furniture-firework-charge-data.md) | Firework charge data | `session` |

## Catalog & Store

### Client to Server (c2s)

- **Packets**: 10

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 223 | `GET_BUNDLE_DISCOUNT_RULESET` | [`catalog.bundle_discount_ruleset`](./catalog-store/c2s/0223-catalog-bundle-discount-ruleset.md) | Get bundle discount ruleset | `session` |
| 339 | `CATALOG_REDEEM_VOUCHER` | [`catalog.redeem_voucher`](./catalog-store/c2s/0339-catalog-redeem-voucher.md) | Redeem a voucher code | `session` |
| 412 | `GET_CATALOG_PAGE` | [`catalog.get_page`](./catalog-store/c2s/0412-catalog-get-page.md) | Request a specific catalog page's content | `session` |
| 418 | `GET_GIFT_WRAPPING_CONFIG` | [`catalog.get_gift_wrapping_config`](./catalog-store/c2s/0418-catalog-get-gift-wrapping-config.md) | Request the available gift wrapping options | `session` |
| 1195 | `GET_CATALOG_INDEX` | [`catalog.get_index`](./catalog-store/c2s/1195-catalog-get-index.md) | Request the catalog page tree | `session` |
| 1347 | `GET_IS_OFFER_GIFTABLE` | [`catalog.check_giftable`](./catalog-store/c2s/1347-catalog-check-giftable.md) | Check whether a catalog offer can be purchased as a gift | `session` |
| 1411 | `CATALOG_PURCHASE_GIFT` | [`catalog.purchase_gift`](./catalog-store/c2s/1411-catalog-purchase-gift.md) | Purchase a catalog item as a gift for another user | `session` |
| 2150 | `MARK_CATALOG_NEW_ADDITIONS_PAGE_OPENED` | [`catalog.mark_catalog_new_additions_page_opened`](./catalog-store/c2s/2150-catalog-mark-catalog-new-additions-page-opened.md) | Mark catalog new additions page opened | `session` |
| 2436 | `GET_GIFT` | [`catalog.get_gift`](./catalog-store/c2s/2436-catalog-get-gift.md) | Request gift delivery details | `session` |
| 3492 | `CATALOG_PURCHASE` | [`catalog.purchase`](./catalog-store/c2s/3492-catalog-purchase.md) | Purchase an item from the catalog | `session` |

### Server to Client (s2c)

- **Packets**: 11

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 714 | `REDEEM_VOUCHER_ERROR` | [`catalog.voucher_error`](./catalog-store/s2c/0714-catalog-voucher-error.md) | Indicate that voucher redemption failed | `session` |
| 804 | `CATALOG_PAGE` | [`catalog.page`](./catalog-store/s2c/0804-catalog-page.md) | Deliver a catalog page's content | `session` |
| 869 | `CATALOG_PURCHASE_OK` | [`catalog.purchase_ok`](./catalog-store/s2c/0869-catalog-purchase-ok.md) | Confirm that a purchase was completed successfully | `session` |
| 1032 | `CATALOG_PAGE_LIST` | [`catalog.index`](./catalog-store/s2c/1032-catalog-index.md) | Deliver the catalog page tree | `session` |
| 1404 | `CATALOG_PURCHASE_ERROR` | [`catalog.purchase_error`](./catalog-store/s2c/1404-catalog-purchase-error.md) | Indicate that a purchase failed | `session` |
| 1517 | `GIFT_RECEIVER_NOT_FOUND` | [`catalog.gift_receiver_not_found`](./catalog-store/s2c/1517-catalog-gift-receiver-not-found.md) | Indicate that the gift recipient was not found | `session` |
| 1866 | `CATALOG_PUBLISHED` | [`catalog.published`](./catalog-store/s2c/1866-catalog-published.md) | Notify that the catalog has been updated | `session` |
| 2234 | `GIFT_WRAPPER_CONFIG` | [`catalog.gift_wrapping_config`](./catalog-store/s2c/2234-catalog-gift-wrapping-config.md) | Deliver available gift wrapping options | `session` |
| 2347 | `BUNDLE_DISCOUNT_RULESET` | [`catalog.bundle_discount_ruleset`](./catalog-store/s2c/2347-catalog-bundle-discount-ruleset.md) | Bundle discount ruleset | `session` |
| 3336 | `REDEEM_VOUCHER_OK` | [`catalog.voucher_ok`](./catalog-store/s2c/3336-catalog-voucher-ok.md) | Confirm successful voucher redemption | `session` |
| 3770 | `CATALOG_PURCHASE_NOT_ALLOWED` | [`catalog.purchase_not_allowed`](./catalog-store/s2c/3770-catalog-purchase-not-allowed.md) | Indicate that the user is not permitted to purchase | `session` |

## Subscription & Offers

### Client to Server (c2s)

- **Packets**: 26

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 271 | `GET_SECONDS_UNTIL` | [`subscription.seconds_until`](./subscription-offers/c2s/0271-subscription-seconds-until.md) | Get seconds until | `session` |
| 410 | `GET_LIMITED_OFFER_APPEARING_NEXT` | [`catalog.get_limited_offer_next`](./subscription-offers/c2s/0410-catalog-get-limited-offer-next.md) | Request the next limited offer appearance time | `session` |
| 487 | `GET_CLUB_GIFT_INFO` | [`catalog.get_club_gift_info`](./subscription-offers/c2s/0487-catalog-get-club-gift-info.md) | Request Habbo Club member gift information | `session` |
| 596 | `GET_NEXT_TARGETED_OFFER` | [`offer.get_next_targeted`](./subscription-offers/c2s/0596-offer-get-next-targeted.md) | Request the next available targeted offer | `session` |
| 603 | `GET_HABBO_BASIC_MEMBERSHIP_EXTEND_OFFER` | [`catalog.get_basic_extend_offer`](./subscription-offers/c2s/0603-catalog-get-basic-extend-offer.md) | Request the basic membership extension offer | `session` |
| 742 | `GET_CATALOG_PAGE_EXPIRATION` | [`catalog.get_page_expiration`](./subscription-offers/c2s/0742-catalog-get-page-expiration.md) | Request expiration time for a specific catalog page | `session` |
| 801 | `GET_DIRECT_CLUB_BUY_AVAILABLE` | [`catalog.get_direct_club_buy`](./subscription-offers/c2s/0801-catalog-get-direct-club-buy.md) | Check whether direct SMS Club purchase is available | `session` |
| 869 | `SCR_GET_KICKBACK_INFO` | [`user.get_kickback_info`](./subscription-offers/c2s/0869-user-get-kickback-info.md) | Request Habbo Club kickback (reward) information | `session` |
| 957 | `GET_BONUS_RARE_INFO` | [`subscription.bonus_rare_info`](./subscription-offers/c2s/0957-subscription-bonus-rare-info.md) | Get bonus rare info | `session` |
| 1697 | `START_CAMPAIGN` | [`subscription.start_campaign`](./subscription-offers/c2s/1697-subscription-start-campaign.md) | Start campaign | `session` |
| 1826 | `PURCHASE_TARGETED_OFFER` | [`offer.purchase_targeted`](./subscription-offers/c2s/1826-offer-purchase-targeted.md) | Purchase the currently displayed targeted offer | `session` |
| 2041 | `SET_TARGETTED_OFFER_STATE` | [`offer.set_targeted_state`](./subscription-offers/c2s/2041-offer-set-targeted-state.md) | Update the state of a targeted offer for the current user | `session` |
| 2257 | `OPEN_CAMPAIGN_CALENDAR_DOOR` | [`calendar.open_door`](./subscription-offers/c2s/2257-calendar-open-door.md) | Open a campaign calendar door for the current day | `session` |
| 2276 | `CATALOG_SELECT_VIP_GIFT` | [`catalog.select_club_gift`](./subscription-offers/c2s/2276-catalog-select-club-gift.md) | Select a Club gift from the available rewards | `session` |
| 2462 | `GET_HABBO_CLUB_EXTEND_OFFER` | [`catalog.get_hc_extend_offer`](./subscription-offers/c2s/2462-catalog-get-hc-extend-offer.md) | Request the Habbo Club extension offer | `session` |
| 2487 | `GET_TARGETED_OFFER` | [`offer.get_targeted`](./subscription-offers/c2s/2487-offer-get-targeted.md) | Request the current targeted offer | `session` |
| 2529 | `BUILDERS_CLUB_QUERY_FURNI_COUNT` | [`catalog.builders_club_query_furni_count`](./subscription-offers/c2s/2529-catalog-builders-club-query-furni-count.md) | Request the current Builders Club furniture placement count | `session` |
| 2594 | `GET_PRODUCT_OFFER` | [`catalog.get_product_offer`](./subscription-offers/c2s/2594-catalog-get-product-offer.md) | Request details for a specific product offer | `session` |
| 2735 | `PURCHASE_BASIC_MEMBERSHIP_EXTENSION` | [`catalog.purchase_basic_extension`](./subscription-offers/c2s/2735-catalog-purchase-basic-extension.md) | Purchase a basic Club membership extension | `session` |
| 3135 | `GET_CATALOG_PAGE_WITH_EARLIEST_EXP` | [`catalog.get_earliest_expiry`](./subscription-offers/c2s/3135-catalog-get-earliest-expiry.md) | Request the earliest expiring catalog page timestamp | `session` |
| 3166 | `USER_SUBSCRIPTION` | [`user.get_subscription`](./subscription-offers/c2s/3166-user-get-subscription.md) | Request subscription status for a named product | `session` |
| 3257 | `GET_SEASONAL_CALENDAR_DAILY_OFFER` | [`calendar.get_seasonal_daily_offer`](./subscription-offers/c2s/3257-calendar-get-seasonal-daily-offer.md) | Request the current seasonal calendar daily offer | `session` |
| 3285 | `GET_CLUB_OFFERS` | [`catalog.get_club_offers`](./subscription-offers/c2s/3285-catalog-get-club-offers.md) | Request available Habbo Club membership offers | `session` |
| 3407 | `PURCHASE_VIP_MEMBERSHIP_EXTENSION` | [`catalog.purchase_vip_extension`](./subscription-offers/c2s/3407-catalog-purchase-vip-extension.md) | Purchase a VIP Club membership extension | `session` |
| 3483 | `SHOP_TARGETED_OFFER_VIEWED` | [`offer.targeted_viewed`](./subscription-offers/c2s/3483-offer-targeted-viewed.md) | Notify that a targeted offer was viewed in the shop | `session` |
| 3889 | `OPEN_CAMPAIGN_CALENDAR_DOOR_STAFF` | [`calendar.open_door_staff`](./subscription-offers/c2s/3889-calendar-open-door-staff.md) | Force-open a campaign calendar door as a staff member | `session` |

### Server to Client (s2c)

- **Packets**: 24

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 35 | `RENTABLE_FURNI_RENT_OR_BUYOUT_OFFER` | [`furniture.rentable_furni_offer`](./subscription-offers/s2c/0035-furniture-rentable-furni-offer.md) | Deliver a rentable furniture rent or buyout offer | `session` |
| 44 | `LIMITED_OFFER_APPEARING_NEXT` | [`catalog.limited_offer_appearing_next`](./subscription-offers/s2c/0044-catalog-limited-offer-appearing-next.md) | Announce the next limited offer appearance | `session` |
| 119 | `TARGET_OFFER` | [`offer.targeted`](./subscription-offers/s2c/0119-offer-targeted.md) | Deliver a targeted offer to the player | `session` |
| 195 | `DIRECT_SMS_CLUB_BUY` | [`catalog.direct_sms_club_buy`](./subscription-offers/s2c/0195-catalog-direct-sms-club-buy.md) | Deliver direct SMS Club purchase availability | `session` |
| 619 | `CLUB_GIFT_INFO` | [`catalog.club_gift_info`](./subscription-offers/s2c/0619-catalog-club-gift-info.md) | Deliver Habbo Club member gift information | `session` |
| 659 | `CLUB_GIFT_SELECTED` | [`catalog.club_gift_selected`](./subscription-offers/s2c/0659-catalog-club-gift-selected.md) | Confirm a Club gift was claimed | `session` |
| 761 | `IS_OFFER_GIFTABLE` | [`catalog.is_offer_giftable`](./subscription-offers/s2c/0761-catalog-is-offer-giftable.md) | Indicate whether a catalog offer can be sent as a gift | `session` |
| 954 | `USER_SUBSCRIPTION` | [`user.subscription`](./subscription-offers/s2c/0954-user-subscription.md) | Deliver Pixels Club subscription state | `session` |
| 1237 | `TARGET_OFFER_NOT_FOUND` | [`offer.targeted_not_found`](./subscription-offers/s2c/1237-offer-targeted-not-found.md) | Indicate no targeted offer is available | `session` |
| 1452 | `BUILDERS_CLUB_EXPIRED` | [`catalog.builders_club_subscription`](./subscription-offers/s2c/1452-catalog-builders-club-subscription.md) | Deliver Builders Club subscription status | `session` |
| 1533 | `BONUS_RARE_INFO` | [`subscription.bonus_rare_info`](./subscription-offers/s2c/1533-subscription-bonus-rare-info.md) | Bonus rare info | `session` |
| 1889 | `SEASONAL_CALENDAR_OFFER` | [`calendar.seasonal_daily_offer`](./subscription-offers/s2c/1889-calendar-seasonal-daily-offer.md) | Deliver the seasonal calendar daily offer | `session` |
| 2405 | `CLUB_OFFERS` | [`catalog.club_offers`](./subscription-offers/s2c/2405-catalog-club-offers.md) | Deliver available Habbo Club membership offers | `session` |
| 2515 | `CATALOG_EARLIEST_EXPIRY` | [`catalog.earliest_expiry`](./subscription-offers/s2c/2515-catalog-earliest-expiry.md) | Deliver the earliest catalog page expiration | `session` |
| 2531 | `CAMPAIGN_CALENDAR_DATA` | [`calendar.data`](./subscription-offers/s2c/2531-calendar-data.md) | Deliver campaign calendar data | `session` |
| 2551 | `CAMPAIGN_CALENDAR_DOOR_OPENED` | [`calendar.door_opened`](./subscription-offers/s2c/2551-calendar-door-opened.md) | Confirm a calendar door was opened and deliver the reward | `session` |
| 2668 | `CATALOG_PAGE_EXPIRATION` | [`catalog.page_expiration`](./subscription-offers/s2c/2668-catalog-page-expiration.md) | Deliver a catalog page expiration timestamp | `session` |
| 3277 | `SCR_SEND_KICKBACK_INFO` | [`user.kickback_info`](./subscription-offers/s2c/3277-user-kickback-info.md) | Deliver Habbo Club credit kickback and streak information | `session` |
| 3388 | `PRODUCT_OFFER` | [`catalog.product_offer`](./subscription-offers/s2c/3388-catalog-product-offer.md) | Deliver details for a single product offer | `session` |
| 3575 | `NEW_USER_EXPERIENCE_GIFT_OFFER` | [`subscription.new_user_experience_gift_offer`](./subscription-offers/s2c/3575-subscription-new-user-experience-gift-offer.md) | New user experience gift offer | `session` |
| 3639 | `NEW_USER_EXPERIENCE_NOT_COMPLETE` | [`subscription.new_user_experience_not_complete`](./subscription-offers/s2c/3639-subscription-new-user-experience-not-complete.md) | New user experience not complete | `session` |
| 3828 | `BUILDERS_CLUB_FURNI_COUNT` | [`catalog.builders_club_furni_count`](./subscription-offers/s2c/3828-catalog-builders-club-furni-count.md) | Return the current Builders Club furniture count | `session` |
| 3914 | `NOT_ENOUGH_BALANCE` | [`catalog.not_enough_balance`](./subscription-offers/s2c/3914-catalog-not-enough-balance.md) | Indicate insufficient balance for a purchase | `session` |
| 3964 | `CLUB_EXTENDED_OFFER` | [`catalog.club_extend_offer`](./subscription-offers/s2c/3964-catalog-club-extend-offer.md) | Deliver a Club membership extension offer | `session` |

## Economy & Trading

### Client to Server (c2s)

- **Packets**: 28

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 90 | `REDEEM_COMMUNITY_GOAL_PRIZE` | [`economy.redeem_community_goal_prize`](./economy-trading/c2s/0090-economy-redeem-community-goal-prize.md) | Redeem community goal prize | `session` |
| 273 | `USER_CURRENCY` | [`user.get_currency`](./economy-trading/c2s/0273-user-get-currency.md) | Request the current activity-point currency balances | `session` |
| 434 | `MARKETPLACE_TAKE_BACK_ITEM` | [`marketplace.cancel_sale`](./economy-trading/c2s/0434-marketplace-cancel-sale.md) | Cancel a Marketplace listing and return the item | `session` |
| 848 | `REQUEST_SELL_ITEM` | [`marketplace.get_can_sell`](./economy-trading/c2s/0848-marketplace-get-can-sell.md) | Check whether the player can list an item on the Marketplace | `session` |
| 1145 | `GET_COMMUNITY_GOAL_PROGRESS` | [`economy.community_goal_progress`](./economy-trading/c2s/1145-economy-community-goal-progress.md) | Get community goal progress | `session` |
| 1263 | `TRADE_ITEMS` | [`trade.add_items`](./economy-trading/c2s/1263-trade-add-items.md) | Add multiple items to the trade offer at once | `session` |
| 1265 | `ROOM_SETTINGS_UPDATE_ROOM_CATEGORY_AND_TRADE` | [`room.update_category_trade`](./economy-trading/c2s/1265-room-update-category-trade.md) | Update room category and trade settings independently | `session` |
| 1343 | `GET_CONCURRENT_USERS_GOAL_PROGRESS` | [`economy.concurrent_users_goal_progress`](./economy-trading/c2s/1343-economy-concurrent-users-goal-progress.md) | Get concurrent users goal progress | `session` |
| 1444 | `TRADE_UNACCEPT` | [`trade.unaccept`](./economy-trading/c2s/1444-trade-unaccept.md) | Withdraw acceptance of the trade offer | `session` |
| 1481 | `TRADE` | [`trade.open`](./economy-trading/c2s/1481-trade-open.md) | Initiate a trade with another user in the room | `session` |
| 1603 | `MARKETPLACE_BUY_OFFER` | [`marketplace.buy_offer`](./economy-trading/c2s/1603-marketplace-buy-offer.md) | Purchase an item from the Marketplace | `session` |
| 1866 | `MARKETPLACE_BUY_TOKENS` | [`marketplace.buy_tokens`](./economy-trading/c2s/1866-marketplace-buy-tokens.md) | Purchase Marketplace listing tokens | `session` |
| 2105 | `MARKETPLACE_REQUEST_OWN_ITEMS` | [`marketplace.get_own_items`](./economy-trading/c2s/2105-marketplace-get-own-items.md) | Request the player's own Marketplace listings | `session` |
| 2167 | `GET_COMMUNITY_GOAL_HALL_OF_FAME` | [`economy.community_goal_hall_of_fame`](./economy-trading/c2s/2167-economy-community-goal-hall-of-fame.md) | Get community goal hall of fame | `session` |
| 2341 | `TRADE_CANCEL` | [`trade.cancel`](./economy-trading/c2s/2341-trade-cancel.md) | Cancel the trade before confirmation | `session` |
| 2407 | `MARKETPLACE_REQUEST_OFFERS` | [`marketplace.search_offers`](./economy-trading/c2s/2407-marketplace-search-offers.md) | Search for items on the Marketplace | `session` |
| 2551 | `TRADE_CLOSE` | [`trade.close`](./economy-trading/c2s/2551-trade-close.md) | Close the trade window | `session` |
| 2597 | `MARKETPLACE_CONFIG` | [`marketplace.get_config`](./economy-trading/c2s/2597-marketplace-get-config.md) | Request the Marketplace configuration | `session` |
| 2650 | `MARKETPLACE_REDEEM_CREDITS` | [`marketplace.redeem_credits`](./economy-trading/c2s/2650-marketplace-redeem-credits.md) | Redeem accumulated credits from completed Marketplace sales | `session` |
| 2688 | `GET_COMMUNITY_GOAL_EARNED_PRIZES` | [`economy.community_goal_earned_prizes`](./economy-trading/c2s/2688-economy-community-goal-earned-prizes.md) | Get community goal earned prizes | `session` |
| 2760 | `TRADE_CONFIRM` | [`trade.confirm`](./economy-trading/c2s/2760-trade-confirm.md) | Confirm the trade after both parties accepted | `session` |
| 3107 | `TRADE_ITEM` | [`trade.add_item`](./economy-trading/c2s/3107-trade-add-item.md) | Add a single item to the trade offer | `session` |
| 3288 | `REQUEST_MARKETPLACE_ITEM_STATS` | [`marketplace.get_item_stats`](./economy-trading/c2s/3288-marketplace-get-item-stats.md) | Request price statistics for a Marketplace item | `session` |
| 3447 | `MARKETPLACE_SELL_ITEM` | [`marketplace.sell_item`](./economy-trading/c2s/3447-marketplace-sell-item.md) | List an item for sale on the Marketplace | `session` |
| 3536 | `COMMUNITY_GOAL_VOTE_COMPOSER` | [`economy.community_goal_vote_composer`](./economy-trading/c2s/3536-economy-community-goal-vote-composer.md) | Community goal vote composer | `session` |
| 3845 | `TRADE_ITEM_REMOVE` | [`trade.remove_item`](./economy-trading/c2s/3845-trade-remove-item.md) | Remove an item from the trade offer | `session` |
| 3863 | `TRADE_ACCEPT` | [`trade.accept`](./economy-trading/c2s/3863-trade-accept.md) | Accept the current trade offer | `session` |
| 3872 | `GET_CONCURRENT_USERS_REWARD` | [`economy.concurrent_users_reward`](./economy-trading/c2s/3872-economy-concurrent-users-reward.md) | Get concurrent users reward | `session` |

### Server to Client (s2c)

- **Packets**: 26

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 54 | `MARKETPLACE_SELL_ITEM` | [`marketplace.can_sell`](./economy-trading/s2c/0054-marketplace-can-sell.md) | Indicate whether the player can create Marketplace listings | `session` |
| 217 | `TRADE_OPEN_FAILED` | [`trade.open_failed`](./economy-trading/s2c/0217-trade-open-failed.md) | Indicate that the trade could not be opened | `session` |
| 680 | `MARKETPLACE_ITEMS_SEARCHED` | [`marketplace.items_searched`](./economy-trading/s2c/0680-marketplace-items-searched.md) | Deliver Marketplace search results | `session` |
| 725 | `MARKETPLACE_ITEM_STATS` | [`marketplace.item_stats`](./economy-trading/s2c/0725-marketplace-item-stats.md) | Deliver price statistics for a Marketplace item | `session` |
| 1001 | `TRADE_COMPLETED` | [`trade.completed`](./economy-trading/s2c/1001-trade-completed.md) | Notify that the trade was successfully completed | `session` |
| 1254 | `TRADE_OTHER_NOT_ALLOWED` | [`trade.other_not_allowed`](./economy-trading/s2c/1254-trade-other-not-allowed.md) | Indicate that the other user is not allowed to trade | `session` |
| 1359 | `MARKETPLACE_ITEM_POSTED` | [`marketplace.item_posted`](./economy-trading/s2c/1359-marketplace-item-posted.md) | Confirm that an item was listed on the Marketplace | `session` |
| 1373 | `TRADE_CLOSED` | [`trade.closed`](./economy-trading/s2c/1373-trade-closed.md) | Notify that the trade session was closed | `session` |
| 1435 | `COMMUNITY_GOAL_VOTE_EVENT` | [`economy.community_goal_vote_event`](./economy-trading/s2c/1435-economy-community-goal-vote-event.md) | Community goal vote event | `session` |
| 1823 | `MARKETPLACE_CONFIG` | [`marketplace.config`](./economy-trading/s2c/1823-marketplace-config.md) | Deliver the Marketplace configuration | `session` |
| 2018 | `USER_CURRENCY` | [`user.currency`](./economy-trading/s2c/2018-user-currency.md) | Deliver the authenticated user's activity-point currency balances | `session` |
| 2024 | `TRADE_LIST_ITEM` | [`trade.list_item`](./economy-trading/s2c/2024-trade-list-item.md) | Update the trade item lists for both users | `session` |
| 2032 | `MARKETPLACE_AFTER_ORDER_STATUS` | [`marketplace.buy_result`](./economy-trading/s2c/2032-marketplace-buy-result.md) | Deliver the result of a Marketplace purchase | `session` |
| 2505 | `TRADE_OPEN` | [`trade.opened`](./economy-trading/s2c/2505-trade-opened.md) | Notify that a trade session has been opened | `session` |
| 2525 | `COMMUNITY_GOAL_PROGRESS` | [`economy.community_goal_progress`](./economy-trading/s2c/2525-economy-community-goal-progress.md) | Community goal progress | `session` |
| 2568 | `TRADE_ACCEPTED` | [`trade.accepted`](./economy-trading/s2c/2568-trade-accepted.md) | Notify that a user accepted the trade offer | `session` |
| 2720 | `TRADE_CONFIRMATION` | [`trade.confirmation`](./economy-trading/s2c/2720-trade-confirmation.md) | Show the final trade confirmation dialog | `session` |
| 2737 | `CONCURRENT_USERS_GOAL_PROGRESS` | [`economy.concurrent_users_goal_progress`](./economy-trading/s2c/2737-economy-concurrent-users-goal-progress.md) | Concurrent users goal progress | `session` |
| 2873 | `TRADE_NO_SUCH_ITEM` | [`trade.no_such_item`](./economy-trading/s2c/2873-trade-no-such-item.md) | Indicate that a traded item no longer exists | `session` |
| 3005 | `COMMUNITY_GOAL_HALL_OF_FAME` | [`economy.community_goal_hall_of_fame`](./economy-trading/s2c/3005-economy-community-goal-hall-of-fame.md) | Community goal hall of fame | `session` |
| 3058 | `TRADE_YOU_NOT_ALLOWED` | [`trade.you_not_allowed`](./economy-trading/s2c/3058-trade-you-not-allowed.md) | Indicate that the current user is not allowed to trade | `session` |
| 3128 | `TRADE_NOT_OPEN` | [`trade.not_open`](./economy-trading/s2c/3128-trade-not-open.md) | Indicate that no trade session is currently open | `session` |
| 3264 | `MARKETPLACE_CANCEL_SALE` | [`marketplace.cancel_sale_result`](./economy-trading/s2c/3264-marketplace-cancel-sale-result.md) | Confirm a Marketplace listing cancellation | `session` |
| 3319 | `COMMUNITY_GOAL_EARNED_PRIZES` | [`economy.community_goal_earned_prizes`](./economy-trading/s2c/3319-economy-community-goal-earned-prizes.md) | Community goal earned prizes | `session` |
| 3475 | `USER_CREDITS` | [`user.credits`](./economy-trading/s2c/3475-user-credits.md) | Deliver the authenticated user's credit balance | `session` |
| 3884 | `MARKETPLACE_OWN_ITEMS` | [`marketplace.own_items`](./economy-trading/s2c/3884-marketplace-own-items.md) | Deliver the player's own Marketplace listings | `session` |

## Inventory

### Client to Server (c2s)

- **Packets**: 13

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 21 | `GROUP_BADGES` | [`user.get_group_badges`](./inventory/c2s/0021-user-get-group-badges.md) | Request badge codes for groups the user has joined | `session` |
| 367 | `GROUP_MEMBERSHIPS` | [`user.get_group_memberships`](./inventory/c2s/0367-user-get-group-memberships.md) | Request the full list of groups the user belongs to | `session` |
| 644 | `USER_BADGES_CURRENT_UPDATE` | [`user.update_badges`](./inventory/c2s/0644-user-update-badges.md) | Save the current badge slot assignments | `session` |
| 2091 | `USER_BADGES_CURRENT` | [`user.get_current_badges`](./inventory/c2s/2091-user-get-current-badges.md) | Request the equipped badges of a user | `session` |
| 2343 | `UNSEEN_RESET_ITEMS` | [`user.unseen_reset_items`](./inventory/c2s/2343-user-unseen-reset-items.md) | Mark specific unseen items as seen | `session` |
| 2769 | `USER_BADGES` | [`user.get_badges`](./inventory/c2s/2769-user-get-badges.md) | Request the full badge inventory for the authenticated user | `session` |
| 2959 | `USER_EFFECT_ACTIVATE` | [`user.effect_activate`](./inventory/c2s/2959-user-effect-activate.md) | Activate an avatar effect in the inventory | `session` |
| 3095 | `USER_PETS` | [`user.get_pets`](./inventory/c2s/3095-user-get-pets.md) | Request the pet inventory | `session` |
| 3150 | `USER_FURNITURE` | [`user.get_furniture`](./inventory/c2s/3150-user-get-furniture.md) | Request the furniture inventory while inside a room | `session` |
| 3374 | `ITEM_CLOTHING_REDEEM` | [`user.clothing_redeem`](./inventory/c2s/3374-user-clothing-redeem.md) | Redeem a clothing item from furniture | `session` |
| 3493 | `UNSEEN_RESET_CATEGORY` | [`user.unseen_reset_category`](./inventory/c2s/3493-user-unseen-reset-category.md) | Mark all unseen items in a category as seen | `session` |
| 3500 | `REQUESTFURNIINVENTORYWHENNOTINROOM` | [`user.get_furniture_not_in_room`](./inventory/c2s/3500-user-get-furniture-not-in-room.md) | Request the furniture inventory while not in a room | `session` |
| 3848 | `USER_BOTS` | [`user.get_bots`](./inventory/c2s/3848-user-get-bots.md) | Request the bot inventory | `session` |

### Server to Client (s2c)

- **Packets**: 20

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 104 | `USER_FURNITURE_ADD` | [`user.furniture_add`](./inventory/s2c/0104-user-furniture-add.md) | Add or update a single item in the furniture inventory | `session` |
| 159 | `USER_FURNITURE_REMOVE` | [`user.furniture_remove`](./inventory/s2c/0159-user-furniture-remove.md) | Remove a furniture item from inventory | `session` |
| 233 | `USER_BOT_REMOVE` | [`user.bot_removed`](./inventory/s2c/0233-user-bot-removed.md) | Remove a bot from the inventory | `session` |
| 340 | `USER_EFFECTS` | [`user.effects`](./inventory/s2c/0340-user-effects.md) | Deliver the full avatar effect inventory | `session` |
| 717 | `USER_BADGES` | [`user.badges`](./inventory/s2c/0717-user-badges.md) | Deliver the full badge inventory and current slot assignments | `session` |
| 994 | `USER_FURNITURE` | [`user.furniture`](./inventory/s2c/0994-user-furniture.md) | Deliver a fragment of the player's furniture inventory | `session` |
| 1087 | `USER_BADGES_CURRENT` | [`user.current_badges`](./inventory/s2c/1087-user-current-badges.md) | Deliver the equipped badge slots for a user | `session` |
| 1352 | `ADD_BOT_TO_INVENTORY` | [`user.bot_added`](./inventory/s2c/1352-user-bot-added.md) | Add a bot to the inventory | `session` |
| 1450 | `USER_CLOTHING` | [`user.clothing`](./inventory/s2c/1450-user-clothing.md) | Deliver the player's unlocked clothing sets | `session` |
| 1959 | `USER_EFFECT_ACTIVATE` | [`user.effect_activated`](./inventory/s2c/1959-user-effect-activated.md) | Confirm that an avatar effect has been activated in the room | `session` |
| 2101 | `USER_PET_ADD` | [`user.pet_added`](./inventory/s2c/2101-user-pet-added.md) | Add a pet to the inventory | `session` |
| 2103 | `UNSEEN_ITEMS` | [`user.unseen_items`](./inventory/s2c/2103-user-unseen-items.md) | Deliver the list of new unseen items in the inventory | `session` |
| 2228 | `USER_EFFECT_LIST_REMOVE` | [`user.effect_removed`](./inventory/s2c/2228-user-effect-removed.md) | Notify that an avatar effect has expired and been removed | `session` |
| 2493 | `USER_BADGES_ADD` | [`user.badge_received`](./inventory/s2c/2493-user-badge-received.md) | Notify that the user has received a new badge | `session` |
| 2867 | `USER_EFFECT_LIST_ADD` | [`user.effect_added`](./inventory/s2c/2867-user-effect-added.md) | Notify that a new avatar effect has been added to inventory | `session` |
| 3086 | `USER_BOTS` | [`user.bots`](./inventory/s2c/3086-user-bots.md) | Deliver the player's bot inventory | `session` |
| 3151 | `USER_FURNITURE_REFRESH` | [`user.furniture_refresh`](./inventory/s2c/3151-user-furniture-refresh.md) | Invalidate the cached furniture inventory | `session` |
| 3253 | `USER_PET_REMOVE` | [`user.pet_removed`](./inventory/s2c/3253-user-pet-removed.md) | Remove a pet from the inventory | `session` |
| 3473 | `AVATAR_EFFECT_SELECTED` | [`user.effect_selected`](./inventory/s2c/3473-user-effect-selected.md) | Confirm the currently selected avatar effect | `session` |
| 3522 | `USER_PETS` | [`user.pets`](./inventory/s2c/3522-user-pets.md) | Deliver the player's pet inventory | `session` |

## Groups & Forums

### Client to Server (c2s)

- **Packets**: 36

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 230 | `GROUP_BUY` | [`group.buy`](./groups-forums/c2s/0230-group-buy.md) | Purchase and create a new group | `session` |
| 232 | `GET_FORUM_MESSAGES` | [`forum.get_messages`](./groups-forums/c2s/0232-forum-get-messages.md) | Request messages within a forum thread | `session` |
| 286 | `FORUM_MODERATE_MESSAGE` | [`forum.moderate_message`](./groups-forums/c2s/0286-forum-moderate-message.md) | Moderate a forum message | `session` |
| 312 | `GROUP_MEMBERS` | [`group.get_members`](./groups-forums/c2s/0312-group-get-members.md) | Request a paginated list of group members | `session` |
| 436 | `GET_FORUMS_LIST` | [`forum.get_list`](./groups-forums/c2s/0436-forum-get-list.md) | Request a list of group forums | `session` |
| 534 | `CALL_FOR_HELP_FROM_FORUM_THREAD` | [`groups.call_for_help_from_forum_thread`](./groups-forums/c2s/0534-groups-call-for-help-from-forum-thread.md) | Call for help from forum thread | `session` |
| 593 | `GROUP_MEMBER_REMOVE` | [`group.remove_member`](./groups-forums/c2s/0593-group-remove-member.md) | Remove a member from the group | `session` |
| 722 | `GROUP_ADMIN_REMOVE` | [`group.admin_remove`](./groups-forums/c2s/0722-group-admin-remove.md) | Demote a group admin to regular member | `session` |
| 798 | `GROUP_CREATE_OPTIONS` | [`group.get_create_options`](./groups-forums/c2s/0798-group-get-create-options.md) | Request data needed to create a new group | `session` |
| 813 | `GROUP_PARTS` | [`group.get_badge_parts`](./groups-forums/c2s/0813-group-get-badge-parts.md) | Request all available group badge parts | `session` |
| 873 | `GET_FORUM_THREADS` | [`forum.get_threads`](./groups-forums/c2s/0873-forum-get-threads.md) | Request a page of forum threads | `session` |
| 882 | `APPROVE_ALL_MEMBERSHIP_REQUESTS` | [`group.approve_all_requests`](./groups-forums/c2s/0882-group-approve-all-requests.md) | Accept all pending membership requests | `session` |
| 998 | `GROUP_REQUEST` | [`group.request`](./groups-forums/c2s/0998-group-request.md) | Request to join a group | `session` |
| 1004 | `GROUP_SETTINGS` | [`group.get_settings`](./groups-forums/c2s/1004-group-get-settings.md) | Request the editable settings of a group | `session` |
| 1134 | `GROUP_DELETE` | [`group.delete`](./groups-forums/c2s/1134-group-delete.md) | Delete a group permanently | `session` |
| 1397 | `FORUM_MODERATE_THREAD` | [`forum.moderate_thread`](./groups-forums/c2s/1397-forum-moderate-thread.md) | Moderate a forum thread | `session` |
| 1412 | `CALL_FOR_HELP_FROM_FORUM_MESSAGE` | [`groups.call_for_help_from_forum_message`](./groups-forums/c2s/1412-groups-call-for-help-from-forum-message.md) | Call for help from forum message | `session` |
| 1764 | `GROUP_SAVE_COLORS` | [`group.save_colors`](./groups-forums/c2s/1764-group-save-colors.md) | Update the group badge colors | `session` |
| 1820 | `GROUP_UNFAVORITE` | [`group.unfavorite`](./groups-forums/c2s/1820-group-unfavorite.md) | Remove the favorite group designation | `session` |
| 1855 | `UPDATE_FORUM_READ_MARKER` | [`forum.update_read_marker`](./groups-forums/c2s/1855-forum-update-read-marker.md) | Update the read position in forum threads | `session` |
| 1894 | `GROUP_REQUEST_DECLINE` | [`group.decline_request`](./groups-forums/c2s/1894-group-decline-request.md) | Decline a pending membership request | `session` |
| 1991 | `GROUP_SAVE_BADGE` | [`group.save_badge`](./groups-forums/c2s/1991-group-save-badge.md) | Update the group badge design | `session` |
| 2214 | `UPDATE_FORUM_SETTINGS` | [`forum.update_settings`](./groups-forums/c2s/2214-forum-update-settings.md) | Update the forum permission settings | `session` |
| 2864 | `GROUP_UNBLOCK_MEMBER` | [`group.unblock_member`](./groups-forums/c2s/2864-group-unblock-member.md) | Unblock a previously blocked group member | `session` |
| 2894 | `GROUP_ADMIN_ADD` | [`group.admin_add`](./groups-forums/c2s/2894-group-admin-add.md) | Promote a group member to admin | `session` |
| 2908 | `GET_UNREAD_FORUMS_COUNT` | [`forum.get_unread_count`](./groups-forums/c2s/2908-forum-get-unread-count.md) | Request the total count of unread forum messages | `session` |
| 2991 | `GROUP_INFO` | [`group.get_info`](./groups-forums/c2s/2991-group-get-info.md) | Request information about a group | `session` |
| 3045 | `FORUM_UPDATE_THREAD` | [`forum.update_thread`](./groups-forums/c2s/3045-forum-update-thread.md) | Update a forum thread's pinned and locked state | `session` |
| 3137 | `GROUP_SAVE_INFORMATION` | [`group.save_information`](./groups-forums/c2s/3137-group-save-information.md) | Update the group name and description | `session` |
| 3149 | `GET_FORUM_STATS` | [`forum.get_stats`](./groups-forums/c2s/3149-forum-get-stats.md) | Request statistics and settings for a group forum | `session` |
| 3386 | `GROUP_REQUEST_ACCEPT` | [`group.accept_request`](./groups-forums/c2s/3386-group-accept-request.md) | Accept a pending membership request | `session` |
| 3435 | `GROUP_SAVE_PREFERENCES` | [`group.save_preferences`](./groups-forums/c2s/3435-group-save-preferences.md) | Update the group membership preferences | `session` |
| 3529 | `FORUM_POST_MESSAGE` | [`forum.post_message`](./groups-forums/c2s/3529-forum-post-message.md) | Post a message in a forum thread | `session` |
| 3549 | `GROUP_FAVORITE` | [`group.favorite`](./groups-forums/c2s/3549-group-favorite.md) | Set a group as the player's favorite | `session` |
| 3593 | `GROUP_MEMBER_REMOVE_CONFIRM` | [`group.remove_member_confirm`](./groups-forums/c2s/3593-group-remove-member-confirm.md) | Confirm member removal and get furniture impact | `session` |
| 3900 | `GET_FORUM_THREAD` | [`forum.get_thread`](./groups-forums/c2s/3900-forum-get-thread.md) | Request a specific forum thread | `session` |

### Server to Client (s2c)

- **Packets**: 28

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 265 | `GROUP_MEMBER` | [`group.member`](./groups-forums/s2c/0265-group-member.md) | Deliver information about a single group member | `session` |
| 324 | `GROUP_FORUM_UPDATE_MESSAGE` | [`forum.update_message`](./groups-forums/s2c/0324-forum-update-message.md) | Deliver an updated forum message | `session` |
| 420 | `GROUP_LIST` | [`group.list`](./groups-forums/s2c/0420-group-list.md) | Deliver a list of groups for a user | `session` |
| 509 | `GROUP_FORUM_THREAD_MESSAGES` | [`forum.messages`](./groups-forums/s2c/0509-forum-messages.md) | Deliver a page of messages within a thread | `session` |
| 762 | `GROUP_HABBO_JOIN_FAILED` | [`group.join_failed`](./groups-forums/s2c/0762-group-join-failed.md) | Indicate that a group join attempt failed | `session` |
| 818 | `GUILD_MEMBER_MGMT_FAILED` | [`user.guild_member_mgmt_failed`](./groups-forums/s2c/0818-user-guild-member-mgmt-failed.md) | Report that a guild member management action failed | `session` |
| 1073 | `GROUP_FORUM_THREADS` | [`forum.threads`](./groups-forums/s2c/1073-forum-threads.md) | Deliver a page of forum threads | `session` |
| 1180 | `GROUP_MEMBERSHIP_REQUESTED` | [`user.group_membership_requested`](./groups-forums/s2c/1180-user-group-membership-requested.md) | Notify that a user has requested to join a group | `session` |
| 1200 | `GROUP_MEMBERS` | [`group.members`](./groups-forums/s2c/1200-group-members.md) | Deliver a page of group members | `session` |
| 1459 | `GROUP_DETAILS_CHANGED` | [`group.details_changed`](./groups-forums/s2c/1459-group-details-changed.md) | Notify that group details have been updated | `session` |
| 1702 | `GROUP_INFO` | [`group.info`](./groups-forums/s2c/1702-group-info.md) | Deliver group information | `session` |
| 1862 | `GROUP_FORUM_POST_THREAD` | [`forum.post_thread`](./groups-forums/s2c/1862-forum-post-thread.md) | Deliver a newly created forum thread | `session` |
| 1876 | `GROUP_MEMBER_REMOVE_CONFIRM` | [`group.member_remove_confirm`](./groups-forums/s2c/1876-group-member-remove-confirm.md) | Show furniture impact before removing a member | `session` |
| 2049 | `GROUP_FORUM_POST` | [`forum.post`](./groups-forums/s2c/2049-forum-post.md) | Deliver a single forum message | `session` |
| 2159 | `GROUP_CREATE_OPTIONS` | [`group.create_options`](./groups-forums/s2c/2159-group-create-options.md) | Deliver group creation options | `session` |
| 2238 | `GROUP_BADGE_PARTS` | [`group.badge_parts`](./groups-forums/s2c/2238-group-badge-parts.md) | Deliver all available group badge parts | `session` |
| 2379 | `GROUP_FORUM_UNREAD_COUNT` | [`forum.unread_count`](./groups-forums/s2c/2379-forum-unread-count.md) | Deliver the total unread forum message count | `session` |
| 2402 | `GROUP_BADGES` | [`group.badges`](./groups-forums/s2c/2402-group-badges.md) | Deliver group badge codes for room display | `session` |
| 2445 | `GROUP_MEMBERS_REFRESH` | [`group.members_refresh`](./groups-forums/s2c/2445-group-members-refresh.md) | Signal that the group member list should be refreshed | `session` |
| 2528 | `GROUP_FORUM_UPDATE_THREAD` | [`forum.update_thread`](./groups-forums/s2c/2528-forum-update-thread.md) | Deliver an updated forum thread | `session` |
| 2808 | `GROUP_PURCHASED` | [`group.purchased`](./groups-forums/s2c/2808-group-purchased.md) | Confirm that a group was created | `session` |
| 3001 | `GROUP_FORUM_LIST` | [`forum.list`](./groups-forums/s2c/3001-forum-list.md) | Deliver a list of group forums | `session` |
| 3011 | `GROUP_FORUM_DATA` | [`forum.stats`](./groups-forums/s2c/3011-forum-stats.md) | Deliver forum statistics and permission data | `session` |
| 3129 | `GROUP_DEACTIVATE` | [`group.deactivated`](./groups-forums/s2c/3129-group-deactivated.md) | Notify that a group was deactivated or deleted | `session` |
| 3293 | `FURNITURE_GROUP_CONTEXT_MENU_INFO` | [`furniture.group_context_menu`](./groups-forums/s2c/3293-furniture-group-context-menu.md) | Deliver group context menu information for furniture | `session` |
| 3403 | `FAVORITE_GROUP_UDPATE` | [`group.favorite_update`](./groups-forums/s2c/3403-group-favorite-update.md) | Notify that a player's favorite group changed | `session` |
| 3965 | `GROUP_SETTINGS` | [`group.settings`](./groups-forums/s2c/3965-group-settings.md) | Deliver editable group settings | `session` |
| 3988 | `GUILD_EDIT_FAILED` | [`user.guild_edit_failed`](./groups-forums/s2c/3988-user-guild-edit-failed.md) | Report that a guild edit operation failed | `session` |

## Pets

### Client to Server (c2s)

- **Packets**: 21

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 186 | `REMOVE_PET_SADDLE` | [`room.remove_pet_saddle`](./pets/c2s/0186-room-remove-pet-saddle.md) | Remove a saddle from a pet | `session` |
| 549 | `PET_SELECTED` | [`room.select_pet`](./pets/c2s/0549-room-select-pet.md) | Select a pet in the room | `session` |
| 749 | `PET_SUPPLEMENT` | [`user.pet_supplement`](./pets/c2s/0749-user-pet-supplement.md) | Give a supplement item to a pet | `session` |
| 1036 | `PET_RIDE` | [`room.mount_pet`](./pets/c2s/1036-room-mount-pet.md) | Mount or unmount a rideable pet | `session` |
| 1328 | `USE_PET_PRODUCT` | [`room.use_pet_product`](./pets/c2s/1328-room-use-pet-product.md) | Use a product item on a pet | `session` |
| 1472 | `TOGGLE_PET_RIDING` | [`room.toggle_pet_riding`](./pets/c2s/1472-room-toggle-pet-riding.md) | Toggle pet riding permission | `session` |
| 1521 | `HARVEST_PET` | [`room.harvest_pet`](./pets/c2s/1521-room-harvest-pet.md) | Harvest from a pet-grown plant | `session` |
| 1581 | `PET_PICKUP` | [`room.pickup_pet`](./pets/c2s/1581-room-pickup-pet.md) | Remove a pet from the room into inventory | `session` |
| 1638 | `PETS_BREED` | [`room.breed_pets`](./pets/c2s/1638-room-breed-pets.md) | Initiate breeding between two pets | `session` |
| 1756 | `CATALOG_REQUESET_PET_BREEDS` | [`catalog.get_pet_breeds`](./pets/c2s/1756-catalog-get-pet-breeds.md) | Request available pet breed palettes for a pet type | `session` |
| 2161 | `GET_PET_TRAINING_PANEL` | [`room.get_pet_commands`](./pets/c2s/2161-room-get-pet-commands.md) | Request the pet training command panel | `session` |
| 2647 | `PET_PLACE` | [`room.place_pet`](./pets/c2s/2647-room-place-pet.md) | Place a pet from inventory into the room | `session` |
| 2713 | `PET_CANCEL_BREEDING` | [`pet.cancel_breeding`](./pets/c2s/2713-pet-cancel-breeding.md) | Cancel an in-progress pet breeding session | `session` |
| 2768 | `UNIT_GIVE_HANDITEM_PET` | [`room_entities.give_hand_item_pet`](./pets/c2s/2768-room-entities-give-hand-item-pet.md) | Give the hand item to a pet | `session` |
| 2934 | `PET_INFO` | [`room.request_pet_info`](./pets/c2s/2934-room-request-pet-info.md) | Request detailed information about a pet | `session` |
| 3202 | `PET_RESPECT` | [`room_entities.respect_pet`](./pets/c2s/3202-room-entities-respect-pet.md) | Show affection to a pet | `session` |
| 3379 | `TOGGLE_PET_BREEDING` | [`room.toggle_pet_breeding`](./pets/c2s/3379-room-toggle-pet-breeding.md) | Toggle pet breeding mode | `session` |
| 3382 | `PET_CONFIRM_BREEDING` | [`pet.confirm_breeding`](./pets/c2s/3382-pet-confirm-breeding.md) | Confirm a pet breeding request | `session` |
| 3449 | `PET_MOVE` | [`room.move_pet`](./pets/c2s/3449-room-move-pet.md) | Move a pet to a new tile in the room | `session` |
| 3698 | `PET_OPEN_PACKAGE` | [`room.open_pet_package`](./pets/c2s/3698-room-open-pet-package.md) | Open a pet package to reveal a pet | `session` |
| 3835 | `COMPOST_PLANT` | [`pet.compost`](./pets/c2s/3835-pet-compost.md) | Compost a plant pet | `session` |

### Server to Client (s2c)

- **Packets**: 20

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 546 | `PET_OPEN_PACKAGE_RESULT` | [`pet.open_package_result`](./pets/s2c/0546-pet-open-package-result.md) | Deliver the result of naming a pet from a package | `session` |
| 634 | `PET_CONFIRM_BREEDING_REQUEST` | [`pet.confirm_breeding_request`](./pets/s2c/0634-pet-confirm-breeding-request.md) | Show the breeding confirmation dialog | `session` |
| 1111 | `PET_RECEIVED` | [`pet.received`](./pets/s2c/1111-pet-received.md) | Notify that the player received a pet | `session` |
| 1130 | `PET_SCRATCH_FAILED` | [`pet.scratch_failed`](./pets/s2c/1130-pet-scratch-failed.md) | Indicate that a pet scratch (respect) failed due to age | `session` |
| 1164 | `PET_TRAINING_PANEL` | [`pet.training_panel`](./pets/s2c/1164-pet-training-panel.md) | Deliver the pet training command panel | `session` |
| 1553 | `PET_BREEDING_RESULT` | [`pet.breeding_result`](./pets/s2c/1553-pet-breeding-result.md) | Deliver the result of a completed pet breeding | `session` |
| 1625 | `PET_CONFIRM_BREEDING_RESULT` | [`pet.confirm_breeding_result`](./pets/s2c/1625-pet-confirm-breeding-result.md) | Deliver the breeding nest confirmation result | `session` |
| 1746 | `PET_BREEDING` | [`pet.breeding`](./pets/s2c/1746-pet-breeding.md) | Notify about a pet breeding state change | `session` |
| 1907 | `PET_STATUS` | [`pet.status`](./pets/s2c/1907-pet-status.md) | Update a pet's breeding and harvest status | `session` |
| 1924 | `PET_FIGURE_UPDATE` | [`pet.figure_update`](./pets/s2c/1924-pet-figure-update.md) | Update a pet's visual figure in the room | `session` |
| 2156 | `PET_EXPERIENCE` | [`pet.experience`](./pets/s2c/2156-pet-experience.md) | Show experience gained by a pet | `session` |
| 2380 | `PET_OPEN_PACKAGE_REQUESTED` | [`pet.open_package_requested`](./pets/s2c/2380-pet-open-package-requested.md) | Show the pet package opening dialog | `session` |
| 2527 | `PET_NEST_BREEDING_SUCCESS` | [`pet.nest_breeding_success`](./pets/s2c/2527-pet-nest-breeding-success.md) | Confirm that breeding nest assignment succeeded | `session` |
| 2621 | `PET_GO_TO_BREEDING_NEST_FAILURE` | [`pet.go_to_breeding_nest_failure`](./pets/s2c/2621-pet-go-to-breeding-nest-failure.md) | Indicate that a pet could not reach the breeding nest | `session` |
| 2788 | `PET_RESPECTED` | [`user.pet_respected`](./pets/s2c/2788-user-pet-respected.md) | Notify that a pet has received a respect point | `session` |
| 2824 | `PET_LEVEL_UPDATE` | [`pet.level_update`](./pets/s2c/2824-pet-level-update.md) | Notify that a pet leveled up in the room | `session` |
| 2901 | `PET_INFO` | [`pet.info`](./pets/s2c/2901-pet-info.md) | Deliver detailed information about a pet | `session` |
| 2913 | `PET_PLACING_ERROR` | [`pet.placing_error`](./pets/s2c/2913-pet-placing-error.md) | Indicate a pet placement error | `session` |
| 3331 | `CATALOG_RECEIVE_PET_BREEDS` | [`catalog.pet_breeds`](./pets/s2c/3331-catalog-pet-breeds.md) | Deliver available pet breed palette data | `session` |
| 3441 | `PET_SUPPLEMENT` | [`user.pet_supplemented`](./pets/s2c/3441-user-pet-supplemented.md) | Notify that a pet has received a supplement | `session` |

## Achievements & Talents

### Client to Server (c2s)

- **Packets**: 10

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 196 | `HELPER_TALENT_TRACK` | [`moderation.helper_talent_track`](./achievements-talents/c2s/0196-moderation-helper-talent-track.md) | Helper talent track | `session` |
| 219 | `ACHIEVEMENT_LIST` | [`user.achievement_list`](./achievements-talents/c2s/0219-user-achievement-list.md) | Achievement list | `session` |
| 359 | `ACHIEVEMENT_RESOLUTION_OPEN` | [`user.achievement_resolution_open`](./achievements-talents/c2s/0359-user-achievement-resolution-open.md) | Achievement resolution open | `session` |
| 389 | `GETUSERGAMEACHIEVEMENTSMESSAGE` | [`games.getusergameachievementsmessage`](./achievements-talents/c2s/0389-games-getusergameachievementsmessage.md) | Getusergameachievementsmessage | `session` |
| 1364 | `GETISBADGEREQUESTFULFILLED` | [`user.check_badge_request`](./achievements-talents/c2s/1364-user-check-badge-request.md) | Check whether a badge request code has been fulfilled | `session` |
| 1371 | `GET_BADGE_POINTS_LIMITS` | [`user.get_badge_point_limits`](./achievements-talents/c2s/1371-user-get-badge-point-limits.md) | Request the point limits for badge achievement levels | `session` |
| 2127 | `TALENT_TRACK_GET_LEVEL` | [`user.talent_track_get_level`](./achievements-talents/c2s/2127-user-talent-track-get-level.md) | Talent track get level | `session` |
| 2399 | `GETGAMEACHIEVEMENTSMESSAGE` | [`games.getgameachievementsmessage`](./achievements-talents/c2s/2399-games-getgameachievementsmessage.md) | Getgameachievementsmessage | `session` |
| 3077 | `REQUESTABADGE` | [`user.request_badge`](./achievements-talents/c2s/3077-user-request-badge.md) | Request a specific promotional or achievement badge | `session` |
| 3144 | `RESETRESOLUTIONACHIEVEMENTMESSAGE` | [`user.resetresolutionachievementmessage`](./achievements-talents/c2s/3144-user-resetresolutionachievementmessage.md) | Resetresolutionachievementmessage | `session` |

### Server to Client (s2c)

- **Packets**: 14

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 66 | `ACHIEVEMENTRESOLUTIONS` | [`user.achievementresolutions`](./achievements-talents/s2c/0066-user-achievementresolutions.md) | Achievementresolutions | `session` |
| 305 | `ACHIEVEMENT_LIST` | [`user.achievement_list`](./achievements-talents/s2c/0305-user-achievement-list.md) | Achievement list | `session` |
| 638 | `TALENT_TRACK_LEVEL_UP` | [`user.talent_track_level_up`](./achievements-talents/s2c/0638-user-talent-track-level-up.md) | Talent track level up | `session` |
| 740 | `ACHIEVEMENTRESOLUTIONCOMPLETED` | [`user.achievementresolutioncompleted`](./achievements-talents/s2c/0740-user-achievementresolutioncompleted.md) | Achievementresolutioncompleted | `session` |
| 806 | `ACHIEVEMENT_NOTIFICATION` | [`user.achievement_notification`](./achievements-talents/s2c/0806-user-achievement-notification.md) | Achievement notification | `session` |
| 1203 | `TALENT_TRACK_LEVEL` | [`user.talent_track_level`](./achievements-talents/s2c/1203-user-talent-track-level.md) | Talent track level | `session` |
| 1689 | `GAMEACHIEVEMENTS` | [`games.gameachievements`](./achievements-talents/s2c/1689-games-gameachievements.md) | Gameachievements | `session` |
| 1968 | `USER_ACHIEVEMENT_SCORE` | [`user.user_achievement_score`](./achievements-talents/s2c/1968-user-user-achievement-score.md) | User achievement score | `session` |
| 2107 | `ACHIEVEMENT_PROGRESSED` | [`user.achievement_progressed`](./achievements-talents/s2c/2107-user-achievement-progressed.md) | Achievement progressed | `session` |
| 2265 | `GAME_CENTER_ACHIEVEMENTS` | [`games.game_center_achievements`](./achievements-talents/s2c/2265-games-game-center-achievements.md) | Game center achievements | `session` |
| 2501 | `BADGE_POINT_LIMITS` | [`user.badge_point_limits`](./achievements-talents/s2c/2501-user-badge-point-limits.md) | Deliver point thresholds for badge achievement levels | `session` |
| 2998 | `BADGE_REQUEST_FULFILLED` | [`user.badge_request_fulfilled`](./achievements-talents/s2c/2998-user-badge-request-fulfilled.md) | Report whether a promotional badge request was fulfilled | `session` |
| 3370 | `ACHIEVEMENTRESOLUTIONPROGRESS` | [`user.achievementresolutionprogress`](./achievements-talents/s2c/3370-user-achievementresolutionprogress.md) | Achievementresolutionprogress | `session` |
| 3406 | `HELPER_TALENT_TRACK` | [`moderation.helper_talent_track`](./achievements-talents/s2c/3406-moderation-helper-talent-track.md) | Helper talent track | `session` |

## Quests & Campaigns

### Client to Server (c2s)

- **Packets**: 15

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 793 | `ACTIVATE_QUEST` | [`quests.activate_quest`](./quests-campaigns/c2s/0793-quests-activate-quest.md) | Activate quest | `session` |
| 1190 | `GET_SEASONAL_QUESTS_ONLY` | [`quests.get_seasonal_quests_only`](./quests-campaigns/c2s/1190-quests-get-seasonal-quests-only.md) | Get seasonal quests only | `session` |
| 1296 | `GET_QUIZ_QUESTIONS` | [`quests.get_quiz_questions`](./quests-campaigns/c2s/1296-quests-get-quiz-questions.md) | Get quiz questions | `session` |
| 1334 | `ROOM_COMPETITION_INIT` | [`quests.room_competition_init`](./quests-campaigns/c2s/1334-quests-room-competition-init.md) | Room competition init | `session` |
| 1782 | `GET_USER_EVENT_CATS` | [`quests.get_user_event_cats`](./quests-campaigns/c2s/1782-quests-get-user-event-cats.md) | Get user event cats | `session` |
| 2077 | `GET_IS_USER_PART_OF_COMPETITION` | [`quests.get_is_user_part_of_competition`](./quests-campaigns/c2s/2077-quests-get-is-user-part-of-competition.md) | Get is user part of competition | `session` |
| 2397 | `REJECT_QUEST` | [`quests.reject_quest`](./quests-campaigns/c2s/2397-quests-reject-quest.md) | Reject quest | `session` |
| 2486 | `GET_DAILY_QUEST` | [`quests.get_daily_quest`](./quests-campaigns/c2s/2486-quests-get-daily-quest.md) | Get daily quest | `session` |
| 2595 | `SUBMIT_ROOM_TO_COMPETITION` | [`quests.submit_room_to_competition`](./quests-campaigns/c2s/2595-quests-submit-room-to-competition.md) | Submit room to competition | `session` |
| 2750 | `OPEN_QUEST_TRACKER` | [`quests.open_quest_tracker`](./quests-campaigns/c2s/2750-quests-open-quest-tracker.md) | Open quest tracker | `session` |
| 2912 | `GET_CURRENT_TIMING_CODE` | [`quests.get_current_timing_code`](./quests-campaigns/c2s/2912-quests-get-current-timing-code.md) | Get current timing code | `session` |
| 3133 | `CANCEL_QUEST` | [`quests.cancel_quest`](./quests-campaigns/c2s/3133-quests-cancel-quest.md) | Cancel quest | `session` |
| 3333 | `GET_QUESTS` | [`quests.get_quests`](./quests-campaigns/c2s/3333-quests-get-quests.md) | Get quests | `session` |
| 3604 | `ACCEPT_QUEST` | [`quests.accept_quest`](./quests-campaigns/c2s/3604-quests-accept-quest.md) | Accept quest | `session` |
| 3720 | `POST_QUIZ_ANSWERS` | [`quests.post_quiz_answers`](./quests-campaigns/c2s/3720-quests-post-quiz-answers.md) | Post quiz answers | `session` |

### Server to Client (s2c)

- **Packets**: 18

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 133 | `COMPETITION_STATUS` | [`quests.competition_status`](./quests-campaigns/s2c/0133-quests-competition-status.md) | Competition status | `session` |
| 230 | `QUEST` | [`quests.quest`](./quests-campaigns/s2c/0230-quests-quest.md) | Quest | `session` |
| 949 | `QUEST_COMPLETED` | [`quests.quest_completed`](./quests-campaigns/s2c/0949-quests-quest-completed.md) | Quest completed | `session` |
| 1066 | `QUESTION_FINISHED` | [`quests.question_finished`](./quests-campaigns/s2c/1066-quests-question-finished.md) | Question finished | `session` |
| 1122 | `SEASONAL_QUESTS` | [`quests.seasonal_quests`](./quests-campaigns/s2c/1122-quests-seasonal-quests.md) | Seasonal quests | `session` |
| 1177 | `COMPETITION_ENTRY_SUBMIT` | [`quests.competition_entry_submit`](./quests-campaigns/s2c/1177-quests-competition-entry-submit.md) | Competition entry submit | `session` |
| 1745 | `DESKTOP_CAMPAIGN` | [`quests.competition_timing_code`](./quests-campaigns/s2c/1745-quests-competition-timing-code.md) | Competition timing code | `session` |
| 1878 | `QUEST_DAILY` | [`quests.quest_daily`](./quests-campaigns/s2c/1878-quests-quest-daily.md) | Quest daily | `session` |
| 2589 | `QUESTION_ANSWERED` | [`quests.question_answered`](./quests-campaigns/s2c/2589-quests-question-answered.md) | Question answered | `session` |
| 2665 | `QUESTION` | [`quests.question`](./quests-campaigns/s2c/2665-quests-question.md) | Question | `session` |
| 2772 | `QUIZ_RESULTS` | [`quests.quiz_results`](./quests-campaigns/s2c/2772-quests-quiz-results.md) | Quiz results | `session` |
| 2927 | `QUIZ_DATA` | [`quests.quiz_data`](./quests-campaigns/s2c/2927-quests-quiz-data.md) | Quiz data | `session` |
| 3027 | `QUEST_CANCELLED` | [`quests.quest_cancelled`](./quests-campaigns/s2c/3027-quests-quest-cancelled.md) | Quest cancelled | `session` |
| 3506 | `COMPETITION_VOTING_INFO` | [`quests.competition_voting_info`](./quests-campaigns/s2c/3506-quests-competition-voting-info.md) | Competition voting info | `session` |
| 3625 | `QUESTS` | [`quests.quests`](./quests-campaigns/s2c/3625-quests-quests.md) | Quests | `session` |
| 3841 | `COMPETITION_USER_PART_OF` | [`quests.competition_user_part_of`](./quests-campaigns/s2c/3841-quests-competition-user-part-of.md) | Competition user part of | `session` |
| 3926 | `COMPETITION_SECONDS_UNTIL` | [`quests.competition_seconds_until`](./quests-campaigns/s2c/3926-quests-competition-seconds-until.md) | Competition seconds until | `session` |
| 3954 | `COMPETITION_ROOMS_DATA` | [`quests.competition_rooms_data`](./quests-campaigns/s2c/3954-quests-competition-rooms-data.md) | Competition rooms data | `session` |

## Games & Entertainment

### Client to Server (c2s)

- **Packets**: 21

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 11 | `GAME2GETACCOUNTGAMESTATUSMESSAGE` | [`games.game2getaccountgamestatusmessage`](./games-entertainment/c2s/0011-games-game2getaccountgamestatusmessage.md) | Game2getaccountgamestatusmessage | `session` |
| 109 | `POLL_START` | [`games.poll_start`](./games-entertainment/c2s/0109-games-poll-start.md) | Poll start | `session` |
| 741 | `GAMES_LIST` | [`games.games_list`](./games-entertainment/c2s/0741-games-games-list.md) | Games list | `session` |
| 1054 | `GETWEEKLYGAMEREWARDWINNERS` | [`games.getweeklygamerewardwinners`](./games-entertainment/c2s/1054-games-getweeklygamerewardwinners.md) | Getweeklygamerewardwinners | `session` |
| 1232 | `GAME2GETWEEKLYFRIENDSLEADERBOARD` | [`games.game2getweeklyfriendsleaderboard`](./games-entertainment/c2s/1232-games-game2getweeklyfriendsleaderboard.md) | Game2getweeklyfriendsleaderboard | `session` |
| 1445 | `GAME2EXITGAMEMESSAGE` | [`games.game2exitgamemessage`](./games-entertainment/c2s/1445-games-game2exitgamemessage.md) | Game2exitgamemessage | `session` |
| 1458 | `JOINQUEUEMESSAGE` | [`games.joinqueuemessage`](./games-entertainment/c2s/1458-games-joinqueuemessage.md) | Joinqueuemessage | `session` |
| 1598 | `GAME2REQUESTFULLSTATUSUPDATEMESSAGE` | [`games.game2requestfullstatusupdatemessage`](./games-entertainment/c2s/1598-games-game2requestfullstatusupdatemessage.md) | Game2requestfullstatusupdatemessage | `session` |
| 1773 | `POLL_REJECT` | [`games.poll_reject`](./games-entertainment/c2s/1773-games-poll-reject.md) | Poll reject | `session` |
| 2384 | `LEAVEQUEUEMESSAGE` | [`games.leavequeuemessage`](./games-entertainment/c2s/2384-games-leavequeuemessage.md) | Leavequeuemessage | `session` |
| 2415 | `GAME2LOADSTAGEREADYMESSAGE` | [`games.game2loadstagereadymessage`](./games-entertainment/c2s/2415-games-game2loadstagereadymessage.md) | Game2loadstagereadymessage | `session` |
| 2502 | `GAME2GAMECHATMESSAGE` | [`games.game2gamechatmessage`](./games-entertainment/c2s/2502-games-game2gamechatmessage.md) | Game2gamechatmessage | `session` |
| 2565 | `GAME2GETWEEKLYLEADERBOARD` | [`games.game2getweeklyleaderboard`](./games-entertainment/c2s/2565-games-game2getweeklyleaderboard.md) | Game2getweeklyleaderboard | `session` |
| 2914 | `GAMES_INIT` | [`games.games_init`](./games-entertainment/c2s/2914-games-games-init.md) | Games init | `session` |
| 3171 | `GETGAMESTATUSMESSAGE` | [`games.getgamestatusmessage`](./games-entertainment/c2s/3171-games-getgamestatusmessage.md) | Getgamestatusmessage | `session` |
| 3196 | `GAME2PLAYAGAINMESSAGE` | [`games.game2playagainmessage`](./games-entertainment/c2s/3196-games-game2playagainmessage.md) | Game2playagainmessage | `session` |
| 3207 | `GAMEUNLOADEDMESSAGE` | [`games.gameunloadedmessage`](./games-entertainment/c2s/3207-games-gameunloadedmessage.md) | Gameunloadedmessage | `session` |
| 3259 | `GAME2CHECKGAMEDIRECTORYSTATUSMESSAGE` | [`games.game2checkgamedirectorystatusmessage`](./games-entertainment/c2s/3259-games-game2checkgamedirectorystatusmessage.md) | Game2checkgamedirectorystatusmessage | `session` |
| 3505 | `POLL_ANSWER` | [`games.poll_answer`](./games-entertainment/c2s/3505-games-poll-answer.md) | Poll answer | `session` |
| 3802 | `ACCEPTGAMEINVITE` | [`games.acceptgameinvite`](./games-entertainment/c2s/3802-games-acceptgameinvite.md) | Acceptgameinvite | `session` |
| 6200 | `POLL_VOTE_COUNTER` | [`games.poll_vote_counter`](./games-entertainment/c2s/6200-games-poll-vote-counter.md) | Poll vote counter | `session` |

### Server to Client (s2c)

- **Packets**: 28

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 222 | `GAME_CENTER_GAME_LIST` | [`games.game_center_game_list`](./games-entertainment/s2c/0222-games-game-center-game-list.md) | Game center game list | `session` |
| 448 | `PLAYING_GAME` | [`games.playing_game`](./games-entertainment/s2c/0448-games-playing-game.md) | Playing game | `session` |
| 662 | `POLL_ERROR` | [`games.poll_error`](./games-entertainment/s2c/0662-games-poll-error.md) | Poll error | `session` |
| 872 | `GAME_CENTER_IN_ARENA_QUEUE` | [`games.game_center_in_arena_queue`](./games-entertainment/s2c/0872-games-game-center-in-arena-queue.md) | Game center in arena queue | `session` |
| 904 | `GAMEINVITE` | [`games.gameinvite`](./games-entertainment/s2c/0904-games-gameinvite.md) | Gameinvite | `session` |
| 1477 | `LEFTQUEUE` | [`games.leftqueue`](./games-entertainment/s2c/1477-games-leftqueue.md) | Leftqueue | `session` |
| 1715 | `UNLOADGAME` | [`games.unloadgame`](./games-entertainment/s2c/1715-games-unloadgame.md) | Unloadgame | `session` |
| 1730 | `GAME_CENTER_JOINING_FAILED` | [`games.game_center_joining_failed`](./games-entertainment/s2c/1730-games-game-center-joining-failed.md) | Game center joining failed | `session` |
| 2142 | `GAME_CENTER_STARTING_GAME_FAILED` | [`games.game_center_starting_game_failed`](./games-entertainment/s2c/2142-games-game-center-starting-game-failed.md) | Game center starting game failed | `session` |
| 2196 | `WEEKLY_GAME2_LEADERBOARD` | [`games.weekly_game2_leaderboard`](./games-entertainment/s2c/2196-games-weekly-game2-leaderboard.md) | Weekly game2 leaderboard | `session` |
| 2246 | `GAME_CENTER_DIRECTORY_STATUS` | [`games.game_center_directory_status`](./games-entertainment/s2c/2246-games-game-center-directory-status.md) | Game center directory status | `session` |
| 2260 | `JOINEDQUEUEMESSAGE` | [`games.joinedqueuemessage`](./games-entertainment/s2c/2260-games-joinedqueuemessage.md) | Joinedqueuemessage | `session` |
| 2270 | `WEEKLY_GAME2_FRIENDS_LEADERBOARD` | [`games.weekly_game2_friends_leaderboard`](./games-entertainment/s2c/2270-games-weekly-game2-friends-leaderboard.md) | Weekly game2 friends leaderboard | `session` |
| 2624 | `LOAD_GAME_URL` | [`games.load_game_url`](./games-entertainment/s2c/2624-games-load-game-url.md) | Load game url | `session` |
| 2641 | `WEEKLY_GAME_REWARD` | [`games.weekly_game_reward`](./games-entertainment/s2c/2641-games-weekly-game-reward.md) | Weekly game reward | `session` |
| 2893 | `GAME_CENTER_STATUS` | [`games.game_center_status`](./games-entertainment/s2c/2893-games-game-center-status.md) | Game center status | `session` |
| 2997 | `POLL_CONTENTS` | [`games.poll_contents`](./games-entertainment/s2c/2997-games-poll-contents.md) | Poll contents | `session` |
| 3035 | `JOININGQUEUEFAILED` | [`games.joiningqueuefailed`](./games-entertainment/s2c/3035-games-joiningqueuefailed.md) | Joiningqueuefailed | `session` |
| 3097 | `WEEKLY_GAME_REWARD_WINNERS` | [`games.weekly_game_reward_winners`](./games-entertainment/s2c/3097-games-weekly-game-reward-winners.md) | Weekly game reward winners | `session` |
| 3138 | `GAME_CENTER_USER_LEFT_GAME` | [`games.game_center_user_left_game`](./games-entertainment/s2c/3138-games-game-center-user-left-game.md) | Game center user left game | `session` |
| 3191 | `GAME_CENTER_STOP_COUNTER` | [`games.game_center_stop_counter`](./games-entertainment/s2c/3191-games-game-center-stop-counter.md) | Game center stop counter | `session` |
| 3512 | `WEEKLY_COMPETITIVE_LEADERBOARD` | [`games.weekly_competitive_leaderboard`](./games-entertainment/s2c/3512-games-weekly-competitive-leaderboard.md) | Weekly competitive leaderboard | `session` |
| 3560 | `WEEKLY_COMPETITIVE_FRIENDS_LEADERBOARD` | [`games.weekly_competitive_friends_leaderboard`](./games-entertainment/s2c/3560-games-weekly-competitive-friends-leaderboard.md) | Weekly competitive friends leaderboard | `session` |
| 3654 | `LOADGAME` | [`games.loadgame`](./games-entertainment/s2c/3654-games-loadgame.md) | Loadgame | `session` |
| 3785 | `POLL_OFFER` | [`games.poll_offer`](./games-entertainment/s2c/3785-games-poll-offer.md) | Poll offer | `session` |
| 3805 | `GAMESTATUSMESSAGE` | [`games.gamestatusmessage`](./games-entertainment/s2c/3805-games-gamestatusmessage.md) | Gamestatusmessage | `session` |
| 5200 | `POLL_START_ROOM` | [`games.poll_start_room`](./games-entertainment/s2c/5200-games-poll-start-room.md) | Poll start room | `session` |
| 5201 | `POLL_ROOM_RESULT` | [`games.poll_room_result`](./games-entertainment/s2c/5201-games-poll-room-result.md) | Poll room result | `session` |

## Moderation & Safety

### Client to Server (c2s)

- **Packets**: 43

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 15 | `PICK_ISSUES` | [`moderation.pick_issues`](./moderation-safety/c2s/0015-moderation-pick-issues.md) | Pick moderation issues for review | `session` |
| 31 | `MODTOOL_PREFERENCES` | [`moderation.modtool_preferences`](./moderation-safety/c2s/0031-moderation-modtool-preferences.md) | Modtool preferences | `session` |
| 211 | `GET_CFH_CHATLOG` | [`moderation.get_cfh_chatlog`](./moderation-safety/c2s/0211-moderation-get-cfh-chatlog.md) | Request the chat log associated with a call-for-help issue | `session` |
| 229 | `MODTOOL_SANCTION_ALERT` | [`moderation.modtool_sanction_alert`](./moderation-safety/c2s/0229-moderation-modtool-sanction-alert.md) | Modtool sanction alert | `session` |
| 234 | `GUIDE_SESSION_INVITE_REQUESTER` | [`moderation.guide_session_invite_requester`](./moderation-safety/c2s/0234-moderation-guide-session-invite-requester.md) | Guide session invite requester | `session` |
| 291 | `GUIDE_SESSION_REQUESTER_CANCELS` | [`moderation.guide_session_requester_cancels`](./moderation-safety/c2s/0291-moderation-guide-session-requester-cancels.md) | Guide session requester cancels | `session` |
| 477 | `GUIDE_SESSION_FEEDBACK` | [`moderation.guide_session_feedback`](./moderation-safety/c2s/0477-moderation-guide-session-feedback.md) | Guide session feedback | `session` |
| 519 | `GUIDE_SESSION_IS_TYPING` | [`moderation.guide_session_is_typing`](./moderation-safety/c2s/0519-moderation-guide-session-is-typing.md) | Guide session is typing | `session` |
| 707 | `MODTOOL_REQUEST_ROOM_INFO` | [`moderation.modtool_request_room_info`](./moderation-safety/c2s/0707-moderation-modtool-request-room-info.md) | Modtool request room info | `session` |
| 887 | `GUIDE_SESSION_RESOLVED` | [`moderation.guide_session_resolved`](./moderation-safety/c2s/0887-moderation-guide-session-resolved.md) | Guide session resolved | `session` |
| 1052 | `GUIDE_SESSION_GET_REQUESTER_ROOM` | [`moderation.guide_session_get_requester_room`](./moderation-safety/c2s/1052-moderation-guide-session-get-requester-room.md) | Guide session get requester room | `session` |
| 1391 | `MODTOOL_REQUEST_USER_CHATLOG` | [`moderation.modtool_request_user_chatlog`](./moderation-safety/c2s/1391-moderation-modtool-request-user-chatlog.md) | Modtool request user chatlog | `session` |
| 1392 | `MODTOOL_SANCTION` | [`moderation.modtool_sanction`](./moderation-safety/c2s/1392-moderation-modtool-sanction.md) | Modtool sanction | `session` |
| 1424 | `GUIDE_SESSION_GUIDE_DECIDES` | [`moderation.guide_session_guide_decides`](./moderation-safety/c2s/1424-moderation-guide-session-guide-decides.md) | Guide session guide decides | `session` |
| 1572 | `RELEASE_ISSUES` | [`moderation.release_issues`](./moderation-safety/c2s/1572-moderation-release-issues.md) | Release issues | `session` |
| 1681 | `DEFAULT_SANCTION` | [`moderation.default_sanction`](./moderation-safety/c2s/1681-moderation-default-sanction.md) | Default sanction | `session` |
| 1691 | `CALL_FOR_HELP` | [`moderation.call_for_help`](./moderation-safety/c2s/1691-moderation-call-for-help.md) | Submit a call-for-help report | `session` |
| 1840 | `MODTOOL_ALERTEVENT` | [`moderation.modtool_alertevent`](./moderation-safety/c2s/1840-moderation-modtool-alertevent.md) | Modtool alertevent | `session` |
| 1922 | `GUIDE_SESSION_ON_DUTY_UPDATE` | [`moderation.guide_session_on_duty_update`](./moderation-safety/c2s/1922-moderation-guide-session-on-duty-update.md) | Guide session on duty update | `session` |
| 1945 | `MODTOOL_SANCTION_MUTE` | [`moderation.modtool_sanction_mute`](./moderation-safety/c2s/1945-moderation-modtool-sanction-mute.md) | Modtool sanction mute | `session` |
| 2067 | `CLOSE_ISSUES` | [`moderation.close_issues`](./moderation-safety/c2s/2067-moderation-close-issues.md) | Close one or more moderation issues with a resolution | `session` |
| 2501 | `CHAT_REVIEW_GUIDE_DETACHED` | [`moderation.chat_review_guide_detached`](./moderation-safety/c2s/2501-moderation-chat-review-guide-detached.md) | Chat review guide detached | `session` |
| 2582 | `MODTOOL_SANCTION_KICK` | [`moderation.modtool_sanction_kick`](./moderation-safety/c2s/2582-moderation-modtool-sanction-kick.md) | Modtool sanction kick | `session` |
| 2587 | `MODTOOL_REQUEST_ROOM_CHATLOG` | [`moderation.modtool_request_room_chatlog`](./moderation-safety/c2s/2587-moderation-modtool-request-room-chatlog.md) | Modtool request room chatlog | `session` |
| 2717 | `CLOSE_ISSUE_DEFAULT_ACTION` | [`moderation.close_issue_default_action`](./moderation-safety/c2s/2717-moderation-close-issue-default-action.md) | Close issue default action | `session` |
| 2746 | `GET_CFH_STATUS` | [`moderation.get_cfh_status`](./moderation-safety/c2s/2746-moderation-get-cfh-status.md) | Get cfh status | `session` |
| 2755 | `CALL_FOR_HELP_FROM_SELFIE` | [`moderation.call_for_help_from_selfie`](./moderation-safety/c2s/2755-moderation-call-for-help-from-selfie.md) | Call for help from selfie | `session` |
| 2766 | `MODTOOL_SANCTION_BAN` | [`moderation.modtool_sanction_ban`](./moderation-safety/c2s/2766-moderation-modtool-sanction-ban.md) | Modtool sanction ban | `session` |
| 2950 | `CALL_FOR_HELP_FROM_IM` | [`moderation.call_for_help_from_im`](./moderation-safety/c2s/2950-moderation-call-for-help-from-im.md) | Call for help from im | `session` |
| 3060 | `CHAT_REVIEW_SESSION_CREATE` | [`moderation.chat_review_session_create`](./moderation-safety/c2s/3060-moderation-chat-review-session-create.md) | Chat review session create | `session` |
| 3260 | `MODTOOL_CHANGE_ROOM_SETTINGS` | [`moderation.modtool_change_room_settings`](./moderation-safety/c2s/3260-moderation-modtool-change-room-settings.md) | Modtool change room settings | `session` |
| 3267 | `GET_PENDING_CALLS_FOR_HELP` | [`moderation.get_pending_calls_for_help`](./moderation-safety/c2s/3267-moderation-get-pending-calls-for-help.md) | Get pending calls for help | `session` |
| 3295 | `MOD_TOOL_USER_INFO` | [`moderation.mod_tool_user_info`](./moderation-safety/c2s/3295-moderation-mod-tool-user-info.md) | Mod tool user info | `session` |
| 3338 | `GUIDE_SESSION_CREATE` | [`moderation.guide_session_create`](./moderation-safety/c2s/3338-moderation-guide-session-create.md) | Guide session create | `session` |
| 3365 | `CHAT_REVIEW_GUIDE_DECIDES` | [`moderation.chat_review_guide_decides`](./moderation-safety/c2s/3365-moderation-chat-review-guide-decides.md) | Chat review guide decides | `session` |
| 3526 | `MODTOOL_REQUEST_USER_ROOMS` | [`moderation.modtool_request_user_rooms`](./moderation-safety/c2s/3526-moderation-modtool-request-user-rooms.md) | Modtool request user rooms | `session` |
| 3605 | `DELETE_PENDING_CALLS_FOR_HELP` | [`moderation.delete_pending_calls_for_help`](./moderation-safety/c2s/3605-moderation-delete-pending-calls-for-help.md) | Delete pending calls for help | `session` |
| 3742 | `MODTOOL_SANCTION_TRADELOCK` | [`moderation.modtool_sanction_tradelock`](./moderation-safety/c2s/3742-moderation-modtool-sanction-tradelock.md) | Modtool sanction tradelock | `session` |
| 3786 | `GET_GUIDE_REPORTING_STATUS` | [`moderation.get_guide_reporting_status`](./moderation-safety/c2s/3786-moderation-get-guide-reporting-status.md) | Get guide reporting status | `session` |
| 3842 | `MODTOOL_ROOM_ALERT` | [`moderation.modtool_room_alert`](./moderation-safety/c2s/3842-moderation-modtool-room-alert.md) | Modtool room alert | `session` |
| 3899 | `GUIDE_SESSION_MESSAGE` | [`moderation.guide_session_message`](./moderation-safety/c2s/3899-moderation-guide-session-message.md) | Guide session message | `session` |
| 3961 | `CHAT_REVIEW_GUIDE_VOTE` | [`moderation.chat_review_guide_vote`](./moderation-safety/c2s/3961-moderation-chat-review-guide-vote.md) | Chat review guide vote | `session` |
| 3969 | `GUIDE_SESSION_REPORT` | [`moderation.guide_session_report`](./moderation-safety/c2s/3969-moderation-guide-session-report.md) | Guide session report | `session` |

### Server to Client (s2c)

- **Packets**: 40

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 30 | `CHAT_REVIEW_SESSION_DETACHED` | [`moderation.chat_review_session_detached`](./moderation-safety/s2c/0030-moderation-chat-review-session-detached.md) | Chat review session detached | `session` |
| 77 | `CFH_PENDING_CALLS_DELETED` | [`moderation.cfh_pending_calls_deleted`](./moderation-safety/s2c/0077-moderation-cfh-pending-calls-deleted.md) | Cfh pending calls deleted | `session` |
| 138 | `GUIDE_SESSION_DETACHED` | [`moderation.guide_session_detached`](./moderation-safety/s2c/0138-moderation-guide-session-detached.md) | Guide session detached | `session` |
| 143 | `CHAT_REVIEW_SESSION_STARTED` | [`moderation.chat_review_session_started`](./moderation-safety/s2c/0143-moderation-chat-review-session-started.md) | Chat review session started | `session` |
| 219 | `GUIDE_SESSION_INVITED_TO_GUIDE_ROOM` | [`moderation.guide_session_invited_to_guide_room`](./moderation-safety/s2c/0219-moderation-guide-session-invited-to-guide-room.md) | Guide session invited to guide room | `session` |
| 325 | `CFH_TOPICS` | [`moderation.cfh_topics`](./moderation-safety/s2c/0325-moderation-cfh-topics.md) | Cfh topics | `session` |
| 607 | `CFH_CHATLOG` | [`moderation.cfh_chatlog`](./moderation-safety/s2c/0607-moderation-cfh-chatlog.md) | Cfh chatlog | `session` |
| 673 | `GUIDE_SESSION_ERROR` | [`moderation.guide_session_error`](./moderation-safety/s2c/0673-moderation-guide-session-error.md) | Guide session error | `session` |
| 735 | `CHAT_REVIEW_SESSION_OFFERED_TO_GUIDE` | [`moderation.chat_review_session_offered_to_guide`](./moderation-safety/s2c/0735-moderation-chat-review-session-offered-to-guide.md) | Chat review session offered to guide | `session` |
| 841 | `GUIDE_SESSION_MESSAGE` | [`moderation.guide_session_message`](./moderation-safety/s2c/0841-moderation-guide-session-message.md) | Guide session message | `session` |
| 1016 | `GUIDE_SESSION_PARTNER_IS_TYPING` | [`moderation.guide_session_partner_is_typing`](./moderation-safety/s2c/1016-moderation-guide-session-partner-is-typing.md) | Guide session partner is typing | `session` |
| 1121 | `CFH_PENDING_CALLS` | [`moderation.cfh_pending_calls`](./moderation-safety/s2c/1121-moderation-cfh-pending-calls.md) | Cfh pending calls | `session` |
| 1333 | `MODTOOL_ROOM_INFO` | [`moderation.modtool_room_info`](./moderation-safety/s2c/1333-moderation-modtool-room-info.md) | Modtool room info | `session` |
| 1456 | `GUIDE_SESSION_ENDED` | [`moderation.guide_session_ended`](./moderation-safety/s2c/1456-moderation-guide-session-ended.md) | Guide session ended | `session` |
| 1548 | `GUIDE_ON_DUTY_STATUS` | [`moderation.guide_on_duty_status`](./moderation-safety/s2c/1548-moderation-guide-on-duty-status.md) | Guide on duty status | `session` |
| 1576 | `MODERATOR_TOOL_PREFERENCES` | [`moderation.moderator_tool_preferences`](./moderation-safety/s2c/1576-moderation-moderator-tool-preferences.md) | Moderator tool preferences | `session` |
| 1591 | `GUIDE_SESSION_ATTACHED` | [`moderation.guide_session_attached`](./moderation-safety/s2c/1591-moderation-guide-session-attached.md) | Guide session attached | `session` |
| 1651 | `MODERATION_REPORT_DISABLED` | [`moderation.cfh_disabled_notify`](./moderation-safety/s2c/1651-moderation-cfh-disabled-notify.md) | Cfh disabled notify | `session` |
| 1752 | `MODTOOL_VISITED_ROOMS_USER` | [`moderation.modtool_visited_rooms_user`](./moderation-safety/s2c/1752-moderation-modtool-visited-rooms-user.md) | Modtool visited rooms user | `session` |
| 1829 | `CHAT_REVIEW_SESSION_VOTING_STATUS` | [`moderation.chat_review_session_voting_status`](./moderation-safety/s2c/1829-moderation-chat-review-session-voting-status.md) | Chat review session voting status | `session` |
| 1847 | `GUIDE_SESSION_REQUESTER_ROOM` | [`moderation.guide_session_requester_room`](./moderation-safety/s2c/1847-moderation-guide-session-requester-room.md) | Guide session requester room | `session` |
| 2030 | `MODERATOR_MESSAGE` | [`moderation.moderator_message`](./moderation-safety/s2c/2030-moderation-moderator-message.md) | Moderator message | `session` |
| 2221 | `CFH_SANCTION_STATUS` | [`moderation.cfh_sanction_status`](./moderation-safety/s2c/2221-moderation-cfh-sanction-status.md) | Cfh sanction status | `session` |
| 2335 | `MODERATOR_ACTION_RESULT` | [`moderation.moderator_action_result`](./moderation-safety/s2c/2335-moderation-moderator-action-result.md) | Moderator action result | `session` |
| 2674 | `GUIDE_TICKET_RESOLUTION` | [`moderation.guide_ticket_resolution`](./moderation-safety/s2c/2674-moderation-guide-ticket-resolution.md) | Guide ticket resolution | `session` |
| 2696 | `MODERATION_TOOL` | [`moderation.moderation_tool`](./moderation-safety/s2c/2696-moderation-moderation-tool.md) | Moderation tool | `session` |
| 2782 | `CFH_SANCTION` | [`moderation.cfh_sanction`](./moderation-safety/s2c/2782-moderation-cfh-sanction.md) | Cfh sanction | `session` |
| 2866 | `MODERATION_USER_INFO` | [`moderation.moderation_user_info`](./moderation-safety/s2c/2866-moderation-moderation-user-info.md) | Moderation user info | `session` |
| 3150 | `ISSUE_PICK_FAILED` | [`moderation.issue_pick_failed`](./moderation-safety/s2c/3150-moderation-issue-pick-failed.md) | Issue pick failed | `session` |
| 3192 | `ISSUE_DELETED` | [`moderation.issue_deleted`](./moderation-safety/s2c/3192-moderation-issue-deleted.md) | Issue deleted | `session` |
| 3209 | `GUIDE_SESSION_STARTED` | [`moderation.guide_session_started`](./moderation-safety/s2c/3209-moderation-guide-session-started.md) | Guide session started | `session` |
| 3276 | `CHAT_REVIEW_SESSION_RESULTS` | [`moderation.chat_review_session_results`](./moderation-safety/s2c/3276-moderation-chat-review-session-results.md) | Chat review session results | `session` |
| 3285 | `GUIDE_TICKET_CREATION_RESULT` | [`moderation.guide_ticket_creation_result`](./moderation-safety/s2c/3285-moderation-guide-ticket-creation-result.md) | Guide ticket creation result | `session` |
| 3377 | `MODTOOL_USER_CHATLOG` | [`moderation.modtool_user_chatlog`](./moderation-safety/s2c/3377-moderation-modtool-user-chatlog.md) | Modtool user chatlog | `session` |
| 3434 | `MODTOOL_ROOM_CHATLOG` | [`moderation.modtool_room_chatlog`](./moderation-safety/s2c/3434-moderation-modtool-room-chatlog.md) | Modtool room chatlog | `session` |
| 3463 | `GUIDE_REPORTING_STATUS` | [`moderation.guide_reporting_status`](./moderation-safety/s2c/3463-moderation-guide-reporting-status.md) | Guide reporting status | `session` |
| 3609 | `ISSUE_INFO` | [`moderation.issue_info`](./moderation-safety/s2c/3609-moderation-issue-info.md) | Issue info | `session` |
| 3635 | `CFH_RESULT_MESSAGE` | [`moderation.cfh_result_message`](./moderation-safety/s2c/3635-moderation-cfh-result-message.md) | Cfh result message | `session` |
| 3679 | `USER_SANCTION_STATUS` | [`moderation.user_sanction_status`](./moderation-safety/s2c/3679-moderation-user-sanction-status.md) | User sanction status | `session` |
| 3796 | `CFH_REPLY` | [`moderation.cfh_reply`](./moderation-safety/s2c/3796-moderation-cfh-reply.md) | Cfh reply | `session` |

## Camera & Photos

### Client to Server (c2s)

- **Packets**: 8

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 796 | `REQUEST_CAMERA_CONFIGURATION` | [`session.request_camera_configuration`](./camera-photos/c2s/0796-session-request-camera-configuration.md) | Request camera configuration | `session` |
| 1461 | `USER_SETTINGS_CAMERA` | [`user.settings_camera`](./camera-photos/c2s/1461-user-settings-camera.md) | Toggle camera-follow-avatar mode | `session` |
| 1982 | `RENDER_ROOM_THUMBNAIL` | [`session.render_room_thumbnail`](./camera-photos/c2s/1982-session-render-room-thumbnail.md) | Render room thumbnail | `session` |
| 2068 | `PUBLISH_PHOTO` | [`session.publish_photo`](./camera-photos/c2s/2068-session-publish-photo.md) | Publish photo | `session` |
| 2408 | `PURCHASE_PHOTO` | [`session.purchase_photo`](./camera-photos/c2s/2408-session-purchase-photo.md) | Purchase photo | `session` |
| 2468 | `UPDATE_ROOM_THUMBNAIL` | [`room.update_room_thumbnail`](./camera-photos/c2s/2468-room-update-room-thumbnail.md) | Update room thumbnail | `session` |
| 2492 | `CALL_FOR_HELP_FROM_PHOTO` | [`moderation.call_for_help_from_photo`](./camera-photos/c2s/2492-moderation-call-for-help-from-photo.md) | Call for help from photo | `session` |
| 3959 | `PHOTO_COMPETITION` | [`session.photo_competition`](./camera-photos/c2s/3959-session-photo-competition.md) | Photo competition | `session` |

### Server to Client (s2c)

- **Packets**: 7

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 463 | `CAMERA_SNAPSHOT` | [`session.camera_snapshot`](./camera-photos/s2c/0463-session-camera-snapshot.md) | Camera snapshot | `session` |
| 1927 | `THUMBNAIL_UPDATE_RESULT` | [`session.thumbnail_update_result`](./camera-photos/s2c/1927-session-thumbnail-update-result.md) | Thumbnail update result | `session` |
| 2057 | `CAMERA_PUBLISH_STATUS` | [`session.camera_publish_status`](./camera-photos/s2c/2057-session-camera-publish-status.md) | Camera publish status | `session` |
| 2783 | `CAMERA_PURCHASE_OK` | [`session.camera_purchase_ok`](./camera-photos/s2c/2783-session-camera-purchase-ok.md) | Camera purchase ok | `session` |
| 3595 | `THUMBNAIL_STATUS` | [`session.thumbnail_status`](./camera-photos/s2c/3595-session-thumbnail-status.md) | Thumbnail status | `session` |
| 3696 | `CAMERA_STORAGE_URL` | [`session.camera_storage_url`](./camera-photos/s2c/3696-session-camera-storage-url.md) | Camera storage url | `session` |
| 3878 | `INIT_CAMERA` | [`session.init_camera`](./camera-photos/s2c/3878-session-init-camera.md) | Init camera | `session` |

## Notifications & Landing

### Client to Server (c2s)

- **Packets**: 6

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 10 | `FORWARD_TO_RANDOM_PROMOTED_ROOM` | [`navigator.forward_to_random_promoted_room`](./notifications-landing/c2s/0010-navigator-forward-to-random-promoted-room.md) | Forward to random promoted room | `session` |
| 1109 | `INTERSTITIAL_SHOWN` | [`session.interstitial_shown`](./notifications-landing/c2s/1109-session-interstitial-shown.md) | Interstitial shown | `session` |
| 1827 | `DESKTOP_NEWS` | [`subscription.promo_articles`](./notifications-landing/c2s/1827-subscription-promo-articles.md) | Get promo articles | `session` |
| 2012 | `MYSTERYBOXWAITINGCANCELEDMESSAGE` | [`furniture.mysteryboxwaitingcanceledmessage`](./notifications-landing/c2s/2012-furniture-mysteryboxwaitingcanceledmessage.md) | Mysteryboxwaitingcanceledmessage | `session` |
| 2519 | `GET_INTERSTITIAL` | [`other.get_interstitial`](./notifications-landing/c2s/2519-other-get-interstitial.md) | Get interstitial | `session` |
| 3074 | `MYSTERYBOX_OPEN_TROPHY` | [`furniture.mysterybox_open_trophy`](./notifications-landing/c2s/3074-furniture-mysterybox-open-trophy.md) | Mysterybox open trophy | `session` |

### Server to Client (s2c)

- **Packets**: 16

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 286 | `DESKTOP_NEWS` | [`subscription.promo_articles`](./notifications-landing/s2c/0286-subscription-promo-articles.md) | Promo articles | `session` |
| 596 | `CANCELMYSTERYBOXWAITMESSAGE` | [`furniture.cancelmysteryboxwaitmessage`](./notifications-landing/s2c/0596-furniture-cancelmysteryboxwaitmessage.md) | Cancelmysteryboxwaitmessage | `session` |
| 859 | `PET_LEVEL_NOTIFICATION` | [`pet.level_notification`](./notifications-landing/s2c/0859-pet-level-notification.md) | Notify the owner that a pet leveled up | `session` |
| 909 | `CUSTOM_USER_NOTIFICATION` | [`furniture.custom_notification`](./notifications-landing/s2c/0909-furniture-custom-notification.md) | Deliver a custom notification message from furniture | `session` |
| 934 | `ISSUE_CLOSE_NOTIFICATION` | [`moderation.issue_close_notification`](./notifications-landing/s2c/0934-moderation-issue-close-notification.md) | Issue close notification | `session` |
| 1634 | `ROOM_MESSAGE_NOTIFICATION` | [`room.room_message_notification`](./notifications-landing/s2c/1634-room-room-message-notification.md) | Room message notification | `session` |
| 1787 | `NOTIFICATION_ELEMENT_POINTER` | [`session.notification_element_pointer`](./notifications-landing/s2c/1787-session-notification-element-pointer.md) | Notification element pointer | `session` |
| 1808 | `INTERSTITIAL_MESSAGE` | [`session.interstitial_message`](./notifications-landing/s2c/1808-session-interstitial-message.md) | Interstitial message | `session` |
| 1992 | `NOTIFICATION_LIST` | [`session.notification_list`](./notifications-landing/s2c/1992-session-notification-list.md) | Notification list | `session` |
| 2125 | `NOTIFICATION_OFFER_REWARD_DELIVERED` | [`session.notification_offer_reward_delivered`](./notifications-landing/s2c/2125-session-notification-offer-reward-delivered.md) | Notification offer reward delivered | `session` |
| 2188 | `CLUB_GIFT_NOTIFICATION` | [`catalog.club_gift_notification`](./notifications-landing/s2c/2188-catalog-club-gift-notification.md) | Notify the player that Club gifts are available | `session` |
| 2275 | `ACTIVITY_POINT_NOTIFICATION` | [`user.activity_point_notification`](./notifications-landing/s2c/2275-user-activity-point-notification.md) | Notify the client of an activity-point currency change | `session` |
| 3082 | `MESSENGER_FRIEND_NOTIFICATION` | [`messenger.friend_notification`](./notifications-landing/s2c/3082-messenger-friend-notification.md) | Push a friend-related state notification to the client | `session` |
| 3201 | `SHOWMYSTERYBOXWAITMESSAGE` | [`furniture.showmysteryboxwaitmessage`](./notifications-landing/s2c/3201-furniture-showmysteryboxwaitmessage.md) | Showmysteryboxwaitmessage | `session` |
| 3712 | `GOTMYSTERYBOXPRIZEMESSAGE` | [`furniture.gotmysteryboxprizemessage`](./notifications-landing/s2c/3712-furniture-gotmysteryboxprizemessage.md) | Gotmysteryboxprizemessage | `session` |
| 5100 | `NOTIFICATION_SIMPLE_ALERT` | [`session.notification_simple_alert`](./notifications-landing/s2c/5100-session-notification-simple-alert.md) | Notification simple alert | `session` |

## Crafting & Recycling

### Client to Server (c2s)

- **Packets**: 9

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 398 | `RECYCLER_PRIZES` | [`economy.recycler_prizes`](./crafting-recycling/c2s/0398-economy-recycler-prizes.md) | Recycler prizes | `session` |
| 633 | `GET_CRAFTABLE_PRODUCTS` | [`economy.craftable_products`](./crafting-recycling/c2s/0633-economy-craftable-products.md) | Get craftable products | `session` |
| 1173 | `GET_CRAFTING_RECIPE` | [`economy.crafting_recipe`](./crafting-recycling/c2s/1173-economy-crafting-recipe.md) | Get crafting recipe | `session` |
| 1251 | `CRAFT_SECRET` | [`economy.craft_secret`](./crafting-recycling/c2s/1251-economy-craft-secret.md) | Craft secret | `session` |
| 1342 | `RECYCLER_STATUS` | [`economy.recycler_status`](./crafting-recycling/c2s/1342-economy-recycler-status.md) | Recycler status | `session` |
| 2771 | `RECYCLER_ITEMS` | [`economy.recycler_items`](./crafting-recycling/c2s/2771-economy-recycler-items.md) | Recycler items | `session` |
| 3086 | `GET_CRAFTING_RECIPES_AVAILABLE` | [`economy.crafting_recipes_available`](./crafting-recycling/c2s/3086-economy-crafting-recipes-available.md) | Get crafting recipes available | `session` |
| 3115 | `ITEM_EXCHANGE_REDEEM` | [`furniture.item_exchange_redeem`](./crafting-recycling/c2s/3115-furniture-item-exchange-redeem.md) | Item exchange redeem | `session` |
| 3591 | `CRAFT` | [`economy.craft`](./crafting-recycling/c2s/3591-economy-craft.md) | Craft | `session` |

### Server to Client (s2c)

- **Packets**: 7

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 468 | `RECYCLER_FINISHED` | [`economy.recycler_finished`](./crafting-recycling/s2c/0468-economy-recycler-finished.md) | Recycler finished | `session` |
| 618 | `CRAFTING_RESULT` | [`economy.crafting_result`](./crafting-recycling/s2c/0618-economy-crafting-result.md) | Crafting result | `session` |
| 1000 | `CRAFTABLE_PRODUCTS` | [`economy.craftable_products`](./crafting-recycling/s2c/1000-economy-craftable-products.md) | Craftable products | `session` |
| 2124 | `CRAFTING_RECIPES_AVAILABLE` | [`economy.crafting_recipes_available`](./crafting-recycling/s2c/2124-economy-crafting-recipes-available.md) | Crafting recipes available | `session` |
| 2774 | `CRAFTING_RECIPE` | [`economy.crafting_recipe`](./crafting-recycling/s2c/2774-economy-crafting-recipe.md) | Crafting recipe | `session` |
| 3164 | `RECYCLER_PRIZES` | [`economy.recycler_prizes`](./crafting-recycling/s2c/3164-economy-recycler-prizes.md) | Recycler prizes | `session` |
| 3433 | `RECYCLER_STATUS` | [`economy.recycler_status`](./crafting-recycling/s2c/3433-economy-recycler-status.md) | Recycler status | `session` |

## Other

### Client to Server (c2s)

- **Packets**: 7

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 790 | `TRY_PHONE_NUMBER` | [`other.try_phone_number`](./other/c2s/0790-other-try-phone-number.md) | Try phone number | `session` |
| 1379 | `SET_PHONE_NUMBER_VERIFICATION_STATUS` | [`other.set_phone_number_verification_status`](./other/c2s/1379-other-set-phone-number-verification-status.md) | Set phone number verification status | `session` |
| 1849 | `GET_FAQ_TEXT` | [`other.get_faq_text`](./other/c2s/1849-other-get-faq-text.md) | Get faq text | `session` |
| 2031 | `SEARCH_FAQS` | [`other.search_faqs`](./other/c2s/2031-other-search-faqs.md) | Search faqs | `session` |
| 2721 | `VERIFY_CODE` | [`other.verify_code`](./other/c2s/2721-other-verify-code.md) | Verify code | `session` |
| 2741 | `RESET_PHONE_NUMBER_STATE` | [`other.reset_phone_number_state`](./other/c2s/2741-other-reset-phone-number-state.md) | Reset phone number state | `session` |
| 3445 | `GET_FAQ_CATEGORY` | [`other.get_faq_category`](./other/c2s/3445-other-get-faq-category.md) | Get faq category | `session` |

### Server to Client (s2c)

- **Packets**: 3

| ID | Header | Packet | Summary | Phase |
| --- | --- | --- | --- | --- |
| 91 | `PHONE_TRY_VERIFICATION_CODE_RESULT` | [`other.phone_try_verification_code_result`](./other/s2c/0091-other-phone-try-verification-code-result.md) | Phone try verification code result | `session` |
| 800 | `PHONE_TRY_NUMBER_RESULT` | [`other.phone_try_number_result`](./other/s2c/0800-other-phone-try-number-result.md) | Phone try number result | `session` |
| 2890 | `PHONE_COLLECTION_STATE` | [`other.phone_collection_state`](./other/s2c/2890-other-phone-collection-state.md) | Phone collection state | `session` |



---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Groups & Forums
- **Total packets**: 36

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 230 | `GROUP_BUY` | [`group.buy`](./0230-group-buy.md) | Purchase and create a new group | `session` | `nitro-1.6.6` |
| 232 | `GET_FORUM_MESSAGES` | [`forum.get_messages`](./0232-forum-get-messages.md) | Request messages within a forum thread | `session` | `nitro-1.6.6` |
| 286 | `FORUM_MODERATE_MESSAGE` | [`forum.moderate_message`](./0286-forum-moderate-message.md) | Moderate a forum message | `session` | `nitro-1.6.6` |
| 312 | `GROUP_MEMBERS` | [`group.get_members`](./0312-group-get-members.md) | Request a paginated list of group members | `session` | `nitro-1.6.6` |
| 436 | `GET_FORUMS_LIST` | [`forum.get_list`](./0436-forum-get-list.md) | Request a list of group forums | `session` | `nitro-1.6.6` |
| 534 | `CALL_FOR_HELP_FROM_FORUM_THREAD` | [`groups.call_for_help_from_forum_thread`](./0534-groups-call-for-help-from-forum-thread.md) | Call for help from forum thread | `session` | `nitro-1.6.6` |
| 593 | `GROUP_MEMBER_REMOVE` | [`group.remove_member`](./0593-group-remove-member.md) | Remove a member from the group | `session` | `nitro-1.6.6` |
| 722 | `GROUP_ADMIN_REMOVE` | [`group.admin_remove`](./0722-group-admin-remove.md) | Demote a group admin to regular member | `session` | `nitro-1.6.6` |
| 798 | `GROUP_CREATE_OPTIONS` | [`group.get_create_options`](./0798-group-get-create-options.md) | Request data needed to create a new group | `session` | `nitro-1.6.6` |
| 813 | `GROUP_PARTS` | [`group.get_badge_parts`](./0813-group-get-badge-parts.md) | Request all available group badge parts | `session` | `nitro-1.6.6` |
| 873 | `GET_FORUM_THREADS` | [`forum.get_threads`](./0873-forum-get-threads.md) | Request a page of forum threads | `session` | `nitro-1.6.6` |
| 882 | `APPROVE_ALL_MEMBERSHIP_REQUESTS` | [`group.approve_all_requests`](./0882-group-approve-all-requests.md) | Accept all pending membership requests | `session` | `nitro-1.6.6` |
| 998 | `GROUP_REQUEST` | [`group.request`](./0998-group-request.md) | Request to join a group | `session` | `nitro-1.6.6` |
| 1004 | `GROUP_SETTINGS` | [`group.get_settings`](./1004-group-get-settings.md) | Request the editable settings of a group | `session` | `nitro-1.6.6` |
| 1134 | `GROUP_DELETE` | [`group.delete`](./1134-group-delete.md) | Delete a group permanently | `session` | `nitro-1.6.6` |
| 1397 | `FORUM_MODERATE_THREAD` | [`forum.moderate_thread`](./1397-forum-moderate-thread.md) | Moderate a forum thread | `session` | `nitro-1.6.6` |
| 1412 | `CALL_FOR_HELP_FROM_FORUM_MESSAGE` | [`groups.call_for_help_from_forum_message`](./1412-groups-call-for-help-from-forum-message.md) | Call for help from forum message | `session` | `nitro-1.6.6` |
| 1764 | `GROUP_SAVE_COLORS` | [`group.save_colors`](./1764-group-save-colors.md) | Update the group badge colors | `session` | `nitro-1.6.6` |
| 1820 | `GROUP_UNFAVORITE` | [`group.unfavorite`](./1820-group-unfavorite.md) | Remove the favorite group designation | `session` | `nitro-1.6.6` |
| 1855 | `UPDATE_FORUM_READ_MARKER` | [`forum.update_read_marker`](./1855-forum-update-read-marker.md) | Update the read position in forum threads | `session` | `nitro-1.6.6` |
| 1894 | `GROUP_REQUEST_DECLINE` | [`group.decline_request`](./1894-group-decline-request.md) | Decline a pending membership request | `session` | `nitro-1.6.6` |
| 1991 | `GROUP_SAVE_BADGE` | [`group.save_badge`](./1991-group-save-badge.md) | Update the group badge design | `session` | `nitro-1.6.6` |
| 2214 | `UPDATE_FORUM_SETTINGS` | [`forum.update_settings`](./2214-forum-update-settings.md) | Update the forum permission settings | `session` | `nitro-1.6.6` |
| 2864 | `GROUP_UNBLOCK_MEMBER` | [`group.unblock_member`](./2864-group-unblock-member.md) | Unblock a previously blocked group member | `session` | `nitro-1.6.6` |
| 2894 | `GROUP_ADMIN_ADD` | [`group.admin_add`](./2894-group-admin-add.md) | Promote a group member to admin | `session` | `nitro-1.6.6` |
| 2908 | `GET_UNREAD_FORUMS_COUNT` | [`forum.get_unread_count`](./2908-forum-get-unread-count.md) | Request the total count of unread forum messages | `session` | `nitro-1.6.6` |
| 2991 | `GROUP_INFO` | [`group.get_info`](./2991-group-get-info.md) | Request information about a group | `session` | `nitro-1.6.6` |
| 3045 | `FORUM_UPDATE_THREAD` | [`forum.update_thread`](./3045-forum-update-thread.md) | Update a forum thread's pinned and locked state | `session` | `nitro-1.6.6` |
| 3137 | `GROUP_SAVE_INFORMATION` | [`group.save_information`](./3137-group-save-information.md) | Update the group name and description | `session` | `nitro-1.6.6` |
| 3149 | `GET_FORUM_STATS` | [`forum.get_stats`](./3149-forum-get-stats.md) | Request statistics and settings for a group forum | `session` | `nitro-1.6.6` |
| 3386 | `GROUP_REQUEST_ACCEPT` | [`group.accept_request`](./3386-group-accept-request.md) | Accept a pending membership request | `session` | `nitro-1.6.6` |
| 3435 | `GROUP_SAVE_PREFERENCES` | [`group.save_preferences`](./3435-group-save-preferences.md) | Update the group membership preferences | `session` | `nitro-1.6.6` |
| 3529 | `FORUM_POST_MESSAGE` | [`forum.post_message`](./3529-forum-post-message.md) | Post a message in a forum thread | `session` | `nitro-1.6.6` |
| 3549 | `GROUP_FAVORITE` | [`group.favorite`](./3549-group-favorite.md) | Set a group as the player's favorite | `session` | `nitro-1.6.6` |
| 3593 | `GROUP_MEMBER_REMOVE_CONFIRM` | [`group.remove_member_confirm`](./3593-group-remove-member-confirm.md) | Confirm member removal and get furniture impact | `session` | `nitro-1.6.6` |
| 3900 | `GET_FORUM_THREAD` | [`forum.get_thread`](./3900-forum-get-thread.md) | Request a specific forum thread | `session` | `nitro-1.6.6` |

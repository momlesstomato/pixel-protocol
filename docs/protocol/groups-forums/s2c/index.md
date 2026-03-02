---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Groups & Forums
- **Total packets**: 28

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 265 | `GROUP_MEMBER` | [`group.member`](./0265-group-member.md) | Deliver information about a single group member | `session` | `nitro-1.6.6` |
| 324 | `GROUP_FORUM_UPDATE_MESSAGE` | [`forum.update_message`](./0324-forum-update-message.md) | Deliver an updated forum message | `session` | `nitro-1.6.6` |
| 420 | `GROUP_LIST` | [`group.list`](./0420-group-list.md) | Deliver a list of groups for a user | `session` | `nitro-1.6.6` |
| 509 | `GROUP_FORUM_THREAD_MESSAGES` | [`forum.messages`](./0509-forum-messages.md) | Deliver a page of messages within a thread | `session` | `nitro-1.6.6` |
| 762 | `GROUP_HABBO_JOIN_FAILED` | [`group.join_failed`](./0762-group-join-failed.md) | Indicate that a group join attempt failed | `session` | `nitro-1.6.6` |
| 818 | `GUILD_MEMBER_MGMT_FAILED` | [`user.guild_member_mgmt_failed`](./0818-user-guild-member-mgmt-failed.md) | Report that a guild member management action failed | `session` | `nitro-1.6.6` |
| 1073 | `GROUP_FORUM_THREADS` | [`forum.threads`](./1073-forum-threads.md) | Deliver a page of forum threads | `session` | `nitro-1.6.6` |
| 1180 | `GROUP_MEMBERSHIP_REQUESTED` | [`user.group_membership_requested`](./1180-user-group-membership-requested.md) | Notify that a user has requested to join a group | `session` | `nitro-1.6.6` |
| 1200 | `GROUP_MEMBERS` | [`group.members`](./1200-group-members.md) | Deliver a page of group members | `session` | `nitro-1.6.6` |
| 1459 | `GROUP_DETAILS_CHANGED` | [`group.details_changed`](./1459-group-details-changed.md) | Notify that group details have been updated | `session` | `nitro-1.6.6` |
| 1702 | `GROUP_INFO` | [`group.info`](./1702-group-info.md) | Deliver group information | `session` | `nitro-1.6.6` |
| 1862 | `GROUP_FORUM_POST_THREAD` | [`forum.post_thread`](./1862-forum-post-thread.md) | Deliver a newly created forum thread | `session` | `nitro-1.6.6` |
| 1876 | `GROUP_MEMBER_REMOVE_CONFIRM` | [`group.member_remove_confirm`](./1876-group-member-remove-confirm.md) | Show furniture impact before removing a member | `session` | `nitro-1.6.6` |
| 2049 | `GROUP_FORUM_POST` | [`forum.post`](./2049-forum-post.md) | Deliver a single forum message | `session` | `nitro-1.6.6` |
| 2159 | `GROUP_CREATE_OPTIONS` | [`group.create_options`](./2159-group-create-options.md) | Deliver group creation options | `session` | `nitro-1.6.6` |
| 2238 | `GROUP_BADGE_PARTS` | [`group.badge_parts`](./2238-group-badge-parts.md) | Deliver all available group badge parts | `session` | `nitro-1.6.6` |
| 2379 | `GROUP_FORUM_UNREAD_COUNT` | [`forum.unread_count`](./2379-forum-unread-count.md) | Deliver the total unread forum message count | `session` | `nitro-1.6.6` |
| 2402 | `GROUP_BADGES` | [`group.badges`](./2402-group-badges.md) | Deliver group badge codes for room display | `session` | `nitro-1.6.6` |
| 2445 | `GROUP_MEMBERS_REFRESH` | [`group.members_refresh`](./2445-group-members-refresh.md) | Signal that the group member list should be refreshed | `session` | `nitro-1.6.6` |
| 2528 | `GROUP_FORUM_UPDATE_THREAD` | [`forum.update_thread`](./2528-forum-update-thread.md) | Deliver an updated forum thread | `session` | `nitro-1.6.6` |
| 2808 | `GROUP_PURCHASED` | [`group.purchased`](./2808-group-purchased.md) | Confirm that a group was created | `session` | `nitro-1.6.6` |
| 3001 | `GROUP_FORUM_LIST` | [`forum.list`](./3001-forum-list.md) | Deliver a list of group forums | `session` | `nitro-1.6.6` |
| 3011 | `GROUP_FORUM_DATA` | [`forum.stats`](./3011-forum-stats.md) | Deliver forum statistics and permission data | `session` | `nitro-1.6.6` |
| 3129 | `GROUP_DEACTIVATE` | [`group.deactivated`](./3129-group-deactivated.md) | Notify that a group was deactivated or deleted | `session` | `nitro-1.6.6` |
| 3293 | `FURNITURE_GROUP_CONTEXT_MENU_INFO` | [`furniture.group_context_menu`](./3293-furniture-group-context-menu.md) | Deliver group context menu information for furniture | `session` | `nitro-1.6.6` |
| 3403 | `FAVORITE_GROUP_UDPATE` | [`group.favorite_update`](./3403-group-favorite-update.md) | Notify that a player's favorite group changed | `session` | `nitro-1.6.6` |
| 3965 | `GROUP_SETTINGS` | [`group.settings`](./3965-group-settings.md) | Deliver editable group settings | `session` | `nitro-1.6.6` |
| 3988 | `GUILD_EDIT_FAILED` | [`user.guild_edit_failed`](./3988-user-guild-edit-failed.md) | Report that a guild edit operation failed | `session` | `nitro-1.6.6` |

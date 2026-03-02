---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Messenger & Social
- **Total packets**: 16

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 280 | `MESSENGER_REQUESTS` | [`messenger.friend_requests`](./0280-messenger-friend-requests.md) | Deliver the full list of pending incoming friend requests | `session` | `nitro-1.6.6` |
| 462 | `MESSENGER_INVITE_ERROR` | [`messenger.room_invite_error`](./0462-messenger-room-invite-error.md) | Report recipients that could not be reached by a room invitation | `session` | `nitro-1.6.6` |
| 892 | `MESSENGER_MESSAGE_ERROR` | [`messenger.message_error`](./0892-messenger-message-error.md) | Report a failure when sending a private message or friend request | `session` | `nitro-1.6.6` |
| 896 | `MESSENGER_ACCEPT_FRIENDS` | [`messenger.accept_result`](./0896-messenger-accept-result.md) | Report failures encountered while processing friend-request acceptances | `session` | `nitro-1.6.6` |
| 973 | `MESSENGER_SEARCH` | [`messenger.search_result`](./0973-messenger-search-result.md) | Deliver user-search results split into friends and others | `session` | `nitro-1.6.6` |
| 1210 | `MESSENGER_FIND_FRIENDS` | [`messenger.find_friends_result`](./1210-messenger-find-friends-result.md) | Report the outcome of the automated friend-finder process | `session` | `nitro-1.6.6` |
| 1587 | `MESSENGER_CHAT` | [`messenger.chat`](./1587-messenger-chat.md) | Deliver an incoming private message from a friend | `session` | `nitro-1.6.6` |
| 1605 | `MESSENGER_INIT` | [`messenger.init`](./1605-messenger-init.md) | Deliver messenger configuration and friend categories to the client | `session` | `nitro-1.6.6` |
| 1911 | `MESSENGER_MINIMAIL_NEW` | [`messenger.minimail_new`](./1911-messenger-minimail-new.md) | Notify the client that a new minimail message has arrived | `session` | `nitro-1.6.6` |
| 2219 | `MESSENGER_REQUEST` | [`messenger.friend_request`](./2219-messenger-friend-request.md) | Notify the client of a new incoming friend request | `session` | `nitro-1.6.6` |
| 2800 | `MESSENGER_UPDATE` | [`messenger.update`](./2800-messenger-update.md) | Push incremental changes to the friend list | `session` | `nitro-1.6.6` |
| 2803 | `MESSENGER_MINIMAIL_COUNT` | [`messenger.minimail_count`](./2803-messenger-minimail-count.md) | Deliver the current count of unread minimail messages | `session` | `nitro-1.6.6` |
| 3048 | `MESSENGER_FOLLOW_FAILED` | [`messenger.follow_failed`](./3048-messenger-follow-failed.md) | Notify the client that following a friend to their room failed | `session` | `nitro-1.6.6` |
| 3130 | `MESSENGER_FRIENDS` | [`messenger.friends`](./3130-messenger-friends.md) | Deliver one fragment of the user's friend list | `session` | `nitro-1.6.6` |
| 3359 | `MESSENGER_INSTANCE_MESSAGE_ERROR` | [`messenger.instant_message_error`](./3359-messenger-instant-message-error.md) | Report a delivery failure for a specific private message | `session` | `nitro-1.6.6` |
| 3870 | `MESSENGER_INVITE` | [`messenger.room_invite`](./3870-messenger-room-invite.md) | Deliver a room invitation sent by a friend | `session` | `nitro-1.6.6` |

---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Messenger & Social
- **Total packets**: 14

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 137 | `ACCEPT_FRIEND` | [`messenger.accept_friend`](./0137-messenger-accept-friend.md) | Accept one or more pending friend requests | `session` | `nitro-1.6.6` |
| 516 | `FIND_NEW_FRIENDS` | [`messenger.find_new_friends`](./0516-messenger-find-new-friends.md) | Trigger the automated friend-finder process | `session` | `nitro-1.6.6` |
| 1148 | `FRIEND_REQUEST_QUEST_COMPLETE` | [`messenger.friend_request_quest_complete`](./1148-messenger-friend-request-quest-complete.md) | Friend request quest complete | `session` | `nitro-1.6.6` |
| 1210 | `HABBO_SEARCH` | [`messenger.search`](./1210-messenger-search.md) | Search for users by name fragment | `session` | `nitro-1.6.6` |
| 1276 | `SEND_ROOM_INVITE` | [`messenger.room_invite`](./1276-messenger-room-invite.md) | Send a room invitation to one or more friends | `session` | `nitro-1.6.6` |
| 1419 | `FRIEND_LIST_UPDATE` | [`messenger.refresh`](./1419-messenger-refresh.md) | Request a full refresh of the friend list | `session` | `nitro-1.6.6` |
| 1523 | `MESSENGER_FRIENDS` | [`messenger.messenger_friends`](./1523-messenger-messenger-friends.md) | Messenger friends | `session` | `nitro-1.6.6` |
| 1689 | `REMOVE_FRIEND` | [`messenger.remove_friend`](./1689-messenger-remove-friend.md) | Remove one or more users from the friend list | `session` | `nitro-1.6.6` |
| 2448 | `GET_FRIEND_REQUESTS` | [`messenger.get_requests`](./2448-messenger-get-requests.md) | Request the full list of pending friend requests | `session` | `nitro-1.6.6` |
| 2781 | `MESSENGER_INIT` | [`messenger.init`](./2781-messenger-init.md) | Initialize the friend list and messenger subsystem | `session` | `nitro-1.6.6` |
| 2890 | `DECLINE_FRIEND` | [`messenger.decline_friend`](./2890-messenger-decline-friend.md) | Decline one or more pending friend requests, or clear all | `session` | `nitro-1.6.6` |
| 3157 | `REQUEST_FRIEND` | [`messenger.request_friend`](./3157-messenger-request-friend.md) | Send a friend request to another user by username | `session` | `nitro-1.6.6` |
| 3567 | `MESSENGER_CHAT` | [`messenger.chat`](./3567-messenger-chat.md) | Send a private message to a friend | `session` | `nitro-1.6.6` |
| 3997 | `FOLLOW_FRIEND` | [`messenger.follow_friend`](./3997-messenger-follow-friend.md) | Follow a friend to their current room | `session` | `nitro-1.6.6` |

---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Notifications & Landing
- **Total packets**: 16

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 286 | `DESKTOP_NEWS` | [`subscription.promo_articles`](./0286-subscription-promo-articles.md) | Promo articles | `session` | `nitro-1.6.6` |
| 596 | `CANCELMYSTERYBOXWAITMESSAGE` | [`furniture.cancelmysteryboxwaitmessage`](./0596-furniture-cancelmysteryboxwaitmessage.md) | Cancelmysteryboxwaitmessage | `session` | `nitro-1.6.6` |
| 859 | `PET_LEVEL_NOTIFICATION` | [`pet.level_notification`](./0859-pet-level-notification.md) | Notify the owner that a pet leveled up | `session` | `nitro-1.6.6` |
| 909 | `CUSTOM_USER_NOTIFICATION` | [`furniture.custom_notification`](./0909-furniture-custom-notification.md) | Deliver a custom notification message from furniture | `session` | `nitro-1.6.6` |
| 934 | `ISSUE_CLOSE_NOTIFICATION` | [`moderation.issue_close_notification`](./0934-moderation-issue-close-notification.md) | Issue close notification | `session` | `nitro-1.6.6` |
| 1634 | `ROOM_MESSAGE_NOTIFICATION` | [`room.room_message_notification`](./1634-room-room-message-notification.md) | Room message notification | `session` | `nitro-1.6.6` |
| 1787 | `NOTIFICATION_ELEMENT_POINTER` | [`session.notification_element_pointer`](./1787-session-notification-element-pointer.md) | Notification element pointer | `session` | `nitro-1.6.6` |
| 1808 | `INTERSTITIAL_MESSAGE` | [`session.interstitial_message`](./1808-session-interstitial-message.md) | Interstitial message | `session` | `nitro-1.6.6` |
| 1992 | `NOTIFICATION_LIST` | [`session.notification_list`](./1992-session-notification-list.md) | Notification list | `session` | `nitro-1.6.6` |
| 2125 | `NOTIFICATION_OFFER_REWARD_DELIVERED` | [`session.notification_offer_reward_delivered`](./2125-session-notification-offer-reward-delivered.md) | Notification offer reward delivered | `session` | `nitro-1.6.6` |
| 2188 | `CLUB_GIFT_NOTIFICATION` | [`catalog.club_gift_notification`](./2188-catalog-club-gift-notification.md) | Notify the player that Club gifts are available | `session` | `nitro-1.6.6` |
| 2275 | `ACTIVITY_POINT_NOTIFICATION` | [`user.activity_point_notification`](./2275-user-activity-point-notification.md) | Notify the client of an activity-point currency change | `session` | `nitro-1.6.6` |
| 3082 | `MESSENGER_FRIEND_NOTIFICATION` | [`messenger.friend_notification`](./3082-messenger-friend-notification.md) | Push a friend-related state notification to the client | `session` | `nitro-1.6.6` |
| 3201 | `SHOWMYSTERYBOXWAITMESSAGE` | [`furniture.showmysteryboxwaitmessage`](./3201-furniture-showmysteryboxwaitmessage.md) | Showmysteryboxwaitmessage | `session` | `nitro-1.6.6` |
| 3712 | `GOTMYSTERYBOXPRIZEMESSAGE` | [`furniture.gotmysteryboxprizemessage`](./3712-furniture-gotmysteryboxprizemessage.md) | Gotmysteryboxprizemessage | `session` | `nitro-1.6.6` |
| 5100 | `NOTIFICATION_SIMPLE_ALERT` | [`session.notification_simple_alert`](./5100-session-notification-simple-alert.md) | Notification simple alert | `session` | `nitro-1.6.6` |

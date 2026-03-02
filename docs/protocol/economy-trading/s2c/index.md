---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Economy & Trading
- **Total packets**: 26

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 54 | `MARKETPLACE_SELL_ITEM` | [`marketplace.can_sell`](./0054-marketplace-can-sell.md) | Indicate whether the player can create Marketplace listings | `session` | `nitro-1.6.6` |
| 217 | `TRADE_OPEN_FAILED` | [`trade.open_failed`](./0217-trade-open-failed.md) | Indicate that the trade could not be opened | `session` | `nitro-1.6.6` |
| 680 | `MARKETPLACE_ITEMS_SEARCHED` | [`marketplace.items_searched`](./0680-marketplace-items-searched.md) | Deliver Marketplace search results | `session` | `nitro-1.6.6` |
| 725 | `MARKETPLACE_ITEM_STATS` | [`marketplace.item_stats`](./0725-marketplace-item-stats.md) | Deliver price statistics for a Marketplace item | `session` | `nitro-1.6.6` |
| 1001 | `TRADE_COMPLETED` | [`trade.completed`](./1001-trade-completed.md) | Notify that the trade was successfully completed | `session` | `nitro-1.6.6` |
| 1254 | `TRADE_OTHER_NOT_ALLOWED` | [`trade.other_not_allowed`](./1254-trade-other-not-allowed.md) | Indicate that the other user is not allowed to trade | `session` | `nitro-1.6.6` |
| 1359 | `MARKETPLACE_ITEM_POSTED` | [`marketplace.item_posted`](./1359-marketplace-item-posted.md) | Confirm that an item was listed on the Marketplace | `session` | `nitro-1.6.6` |
| 1373 | `TRADE_CLOSED` | [`trade.closed`](./1373-trade-closed.md) | Notify that the trade session was closed | `session` | `nitro-1.6.6` |
| 1435 | `COMMUNITY_GOAL_VOTE_EVENT` | [`economy.community_goal_vote_event`](./1435-economy-community-goal-vote-event.md) | Community goal vote event | `session` | `nitro-1.6.6` |
| 1823 | `MARKETPLACE_CONFIG` | [`marketplace.config`](./1823-marketplace-config.md) | Deliver the Marketplace configuration | `session` | `nitro-1.6.6` |
| 2018 | `USER_CURRENCY` | [`user.currency`](./2018-user-currency.md) | Deliver the authenticated user's activity-point currency balances | `session` | `nitro-1.6.6` |
| 2024 | `TRADE_LIST_ITEM` | [`trade.list_item`](./2024-trade-list-item.md) | Update the trade item lists for both users | `session` | `nitro-1.6.6` |
| 2032 | `MARKETPLACE_AFTER_ORDER_STATUS` | [`marketplace.buy_result`](./2032-marketplace-buy-result.md) | Deliver the result of a Marketplace purchase | `session` | `nitro-1.6.6` |
| 2505 | `TRADE_OPEN` | [`trade.opened`](./2505-trade-opened.md) | Notify that a trade session has been opened | `session` | `nitro-1.6.6` |
| 2525 | `COMMUNITY_GOAL_PROGRESS` | [`economy.community_goal_progress`](./2525-economy-community-goal-progress.md) | Community goal progress | `session` | `nitro-1.6.6` |
| 2568 | `TRADE_ACCEPTED` | [`trade.accepted`](./2568-trade-accepted.md) | Notify that a user accepted the trade offer | `session` | `nitro-1.6.6` |
| 2720 | `TRADE_CONFIRMATION` | [`trade.confirmation`](./2720-trade-confirmation.md) | Show the final trade confirmation dialog | `session` | `nitro-1.6.6` |
| 2737 | `CONCURRENT_USERS_GOAL_PROGRESS` | [`economy.concurrent_users_goal_progress`](./2737-economy-concurrent-users-goal-progress.md) | Concurrent users goal progress | `session` | `nitro-1.6.6` |
| 2873 | `TRADE_NO_SUCH_ITEM` | [`trade.no_such_item`](./2873-trade-no-such-item.md) | Indicate that a traded item no longer exists | `session` | `nitro-1.6.6` |
| 3005 | `COMMUNITY_GOAL_HALL_OF_FAME` | [`economy.community_goal_hall_of_fame`](./3005-economy-community-goal-hall-of-fame.md) | Community goal hall of fame | `session` | `nitro-1.6.6` |
| 3058 | `TRADE_YOU_NOT_ALLOWED` | [`trade.you_not_allowed`](./3058-trade-you-not-allowed.md) | Indicate that the current user is not allowed to trade | `session` | `nitro-1.6.6` |
| 3128 | `TRADE_NOT_OPEN` | [`trade.not_open`](./3128-trade-not-open.md) | Indicate that no trade session is currently open | `session` | `nitro-1.6.6` |
| 3264 | `MARKETPLACE_CANCEL_SALE` | [`marketplace.cancel_sale_result`](./3264-marketplace-cancel-sale-result.md) | Confirm a Marketplace listing cancellation | `session` | `nitro-1.6.6` |
| 3319 | `COMMUNITY_GOAL_EARNED_PRIZES` | [`economy.community_goal_earned_prizes`](./3319-economy-community-goal-earned-prizes.md) | Community goal earned prizes | `session` | `nitro-1.6.6` |
| 3475 | `USER_CREDITS` | [`user.credits`](./3475-user-credits.md) | Deliver the authenticated user's credit balance | `session` | `nitro-1.6.6` |
| 3884 | `MARKETPLACE_OWN_ITEMS` | [`marketplace.own_items`](./3884-marketplace-own-items.md) | Deliver the player's own Marketplace listings | `session` | `nitro-1.6.6` |

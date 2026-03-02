---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Economy & Trading
- **Total packets**: 28

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 90 | `REDEEM_COMMUNITY_GOAL_PRIZE` | [`economy.redeem_community_goal_prize`](./0090-economy-redeem-community-goal-prize.md) | Redeem community goal prize | `session` | `nitro-1.6.6` |
| 273 | `USER_CURRENCY` | [`user.get_currency`](./0273-user-get-currency.md) | Request the current activity-point currency balances | `session` | `nitro-1.6.6` |
| 434 | `MARKETPLACE_TAKE_BACK_ITEM` | [`marketplace.cancel_sale`](./0434-marketplace-cancel-sale.md) | Cancel a Marketplace listing and return the item | `session` | `nitro-1.6.6` |
| 848 | `REQUEST_SELL_ITEM` | [`marketplace.get_can_sell`](./0848-marketplace-get-can-sell.md) | Check whether the player can list an item on the Marketplace | `session` | `nitro-1.6.6` |
| 1145 | `GET_COMMUNITY_GOAL_PROGRESS` | [`economy.community_goal_progress`](./1145-economy-community-goal-progress.md) | Get community goal progress | `session` | `nitro-1.6.6` |
| 1263 | `TRADE_ITEMS` | [`trade.add_items`](./1263-trade-add-items.md) | Add multiple items to the trade offer at once | `session` | `nitro-1.6.6` |
| 1265 | `ROOM_SETTINGS_UPDATE_ROOM_CATEGORY_AND_TRADE` | [`room.update_category_trade`](./1265-room-update-category-trade.md) | Update room category and trade settings independently | `session` | `nitro-1.6.6` |
| 1343 | `GET_CONCURRENT_USERS_GOAL_PROGRESS` | [`economy.concurrent_users_goal_progress`](./1343-economy-concurrent-users-goal-progress.md) | Get concurrent users goal progress | `session` | `nitro-1.6.6` |
| 1444 | `TRADE_UNACCEPT` | [`trade.unaccept`](./1444-trade-unaccept.md) | Withdraw acceptance of the trade offer | `session` | `nitro-1.6.6` |
| 1481 | `TRADE` | [`trade.open`](./1481-trade-open.md) | Initiate a trade with another user in the room | `session` | `nitro-1.6.6` |
| 1603 | `MARKETPLACE_BUY_OFFER` | [`marketplace.buy_offer`](./1603-marketplace-buy-offer.md) | Purchase an item from the Marketplace | `session` | `nitro-1.6.6` |
| 1866 | `MARKETPLACE_BUY_TOKENS` | [`marketplace.buy_tokens`](./1866-marketplace-buy-tokens.md) | Purchase Marketplace listing tokens | `session` | `nitro-1.6.6` |
| 2105 | `MARKETPLACE_REQUEST_OWN_ITEMS` | [`marketplace.get_own_items`](./2105-marketplace-get-own-items.md) | Request the player's own Marketplace listings | `session` | `nitro-1.6.6` |
| 2167 | `GET_COMMUNITY_GOAL_HALL_OF_FAME` | [`economy.community_goal_hall_of_fame`](./2167-economy-community-goal-hall-of-fame.md) | Get community goal hall of fame | `session` | `nitro-1.6.6` |
| 2341 | `TRADE_CANCEL` | [`trade.cancel`](./2341-trade-cancel.md) | Cancel the trade before confirmation | `session` | `nitro-1.6.6` |
| 2407 | `MARKETPLACE_REQUEST_OFFERS` | [`marketplace.search_offers`](./2407-marketplace-search-offers.md) | Search for items on the Marketplace | `session` | `nitro-1.6.6` |
| 2551 | `TRADE_CLOSE` | [`trade.close`](./2551-trade-close.md) | Close the trade window | `session` | `nitro-1.6.6` |
| 2597 | `MARKETPLACE_CONFIG` | [`marketplace.get_config`](./2597-marketplace-get-config.md) | Request the Marketplace configuration | `session` | `nitro-1.6.6` |
| 2650 | `MARKETPLACE_REDEEM_CREDITS` | [`marketplace.redeem_credits`](./2650-marketplace-redeem-credits.md) | Redeem accumulated credits from completed Marketplace sales | `session` | `nitro-1.6.6` |
| 2688 | `GET_COMMUNITY_GOAL_EARNED_PRIZES` | [`economy.community_goal_earned_prizes`](./2688-economy-community-goal-earned-prizes.md) | Get community goal earned prizes | `session` | `nitro-1.6.6` |
| 2760 | `TRADE_CONFIRM` | [`trade.confirm`](./2760-trade-confirm.md) | Confirm the trade after both parties accepted | `session` | `nitro-1.6.6` |
| 3107 | `TRADE_ITEM` | [`trade.add_item`](./3107-trade-add-item.md) | Add a single item to the trade offer | `session` | `nitro-1.6.6` |
| 3288 | `REQUEST_MARKETPLACE_ITEM_STATS` | [`marketplace.get_item_stats`](./3288-marketplace-get-item-stats.md) | Request price statistics for a Marketplace item | `session` | `nitro-1.6.6` |
| 3447 | `MARKETPLACE_SELL_ITEM` | [`marketplace.sell_item`](./3447-marketplace-sell-item.md) | List an item for sale on the Marketplace | `session` | `nitro-1.6.6` |
| 3536 | `COMMUNITY_GOAL_VOTE_COMPOSER` | [`economy.community_goal_vote_composer`](./3536-economy-community-goal-vote-composer.md) | Community goal vote composer | `session` | `nitro-1.6.6` |
| 3845 | `TRADE_ITEM_REMOVE` | [`trade.remove_item`](./3845-trade-remove-item.md) | Remove an item from the trade offer | `session` | `nitro-1.6.6` |
| 3863 | `TRADE_ACCEPT` | [`trade.accept`](./3863-trade-accept.md) | Accept the current trade offer | `session` | `nitro-1.6.6` |
| 3872 | `GET_CONCURRENT_USERS_REWARD` | [`economy.concurrent_users_reward`](./3872-economy-concurrent-users-reward.md) | Get concurrent users reward | `session` | `nitro-1.6.6` |

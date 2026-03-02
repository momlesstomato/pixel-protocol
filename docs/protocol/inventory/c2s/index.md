---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Inventory
- **Total packets**: 13

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 21 | `GROUP_BADGES` | [`user.get_group_badges`](./0021-user-get-group-badges.md) | Request badge codes for groups the user has joined | `session` | `nitro-1.6.6` |
| 367 | `GROUP_MEMBERSHIPS` | [`user.get_group_memberships`](./0367-user-get-group-memberships.md) | Request the full list of groups the user belongs to | `session` | `nitro-1.6.6` |
| 644 | `USER_BADGES_CURRENT_UPDATE` | [`user.update_badges`](./0644-user-update-badges.md) | Save the current badge slot assignments | `session` | `nitro-1.6.6` |
| 2091 | `USER_BADGES_CURRENT` | [`user.get_current_badges`](./2091-user-get-current-badges.md) | Request the equipped badges of a user | `session` | `nitro-1.6.6` |
| 2343 | `UNSEEN_RESET_ITEMS` | [`user.unseen_reset_items`](./2343-user-unseen-reset-items.md) | Mark specific unseen items as seen | `session` | `nitro-1.6.6` |
| 2769 | `USER_BADGES` | [`user.get_badges`](./2769-user-get-badges.md) | Request the full badge inventory for the authenticated user | `session` | `nitro-1.6.6` |
| 2959 | `USER_EFFECT_ACTIVATE` | [`user.effect_activate`](./2959-user-effect-activate.md) | Activate an avatar effect in the inventory | `session` | `nitro-1.6.6` |
| 3095 | `USER_PETS` | [`user.get_pets`](./3095-user-get-pets.md) | Request the pet inventory | `session` | `nitro-1.6.6` |
| 3150 | `USER_FURNITURE` | [`user.get_furniture`](./3150-user-get-furniture.md) | Request the furniture inventory while inside a room | `session` | `nitro-1.6.6` |
| 3374 | `ITEM_CLOTHING_REDEEM` | [`user.clothing_redeem`](./3374-user-clothing-redeem.md) | Redeem a clothing item from furniture | `session` | `nitro-1.6.6` |
| 3493 | `UNSEEN_RESET_CATEGORY` | [`user.unseen_reset_category`](./3493-user-unseen-reset-category.md) | Mark all unseen items in a category as seen | `session` | `nitro-1.6.6` |
| 3500 | `REQUESTFURNIINVENTORYWHENNOTINROOM` | [`user.get_furniture_not_in_room`](./3500-user-get-furniture-not-in-room.md) | Request the furniture inventory while not in a room | `session` | `nitro-1.6.6` |
| 3848 | `USER_BOTS` | [`user.get_bots`](./3848-user-get-bots.md) | Request the bot inventory | `session` | `nitro-1.6.6` |

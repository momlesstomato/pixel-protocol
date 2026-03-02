---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Inventory
- **Total packets**: 20

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 104 | `USER_FURNITURE_ADD` | [`user.furniture_add`](./0104-user-furniture-add.md) | Add or update a single item in the furniture inventory | `session` | `nitro-1.6.6` |
| 159 | `USER_FURNITURE_REMOVE` | [`user.furniture_remove`](./0159-user-furniture-remove.md) | Remove a furniture item from inventory | `session` | `nitro-1.6.6` |
| 233 | `USER_BOT_REMOVE` | [`user.bot_removed`](./0233-user-bot-removed.md) | Remove a bot from the inventory | `session` | `nitro-1.6.6` |
| 340 | `USER_EFFECTS` | [`user.effects`](./0340-user-effects.md) | Deliver the full avatar effect inventory | `session` | `nitro-1.6.6` |
| 717 | `USER_BADGES` | [`user.badges`](./0717-user-badges.md) | Deliver the full badge inventory and current slot assignments | `session` | `nitro-1.6.6` |
| 994 | `USER_FURNITURE` | [`user.furniture`](./0994-user-furniture.md) | Deliver a fragment of the player's furniture inventory | `session` | `nitro-1.6.6` |
| 1087 | `USER_BADGES_CURRENT` | [`user.current_badges`](./1087-user-current-badges.md) | Deliver the equipped badge slots for a user | `session` | `nitro-1.6.6` |
| 1352 | `ADD_BOT_TO_INVENTORY` | [`user.bot_added`](./1352-user-bot-added.md) | Add a bot to the inventory | `session` | `nitro-1.6.6` |
| 1450 | `USER_CLOTHING` | [`user.clothing`](./1450-user-clothing.md) | Deliver the player's unlocked clothing sets | `session` | `nitro-1.6.6` |
| 1959 | `USER_EFFECT_ACTIVATE` | [`user.effect_activated`](./1959-user-effect-activated.md) | Confirm that an avatar effect has been activated in the room | `session` | `nitro-1.6.6` |
| 2101 | `USER_PET_ADD` | [`user.pet_added`](./2101-user-pet-added.md) | Add a pet to the inventory | `session` | `nitro-1.6.6` |
| 2103 | `UNSEEN_ITEMS` | [`user.unseen_items`](./2103-user-unseen-items.md) | Deliver the list of new unseen items in the inventory | `session` | `nitro-1.6.6` |
| 2228 | `USER_EFFECT_LIST_REMOVE` | [`user.effect_removed`](./2228-user-effect-removed.md) | Notify that an avatar effect has expired and been removed | `session` | `nitro-1.6.6` |
| 2493 | `USER_BADGES_ADD` | [`user.badge_received`](./2493-user-badge-received.md) | Notify that the user has received a new badge | `session` | `nitro-1.6.6` |
| 2867 | `USER_EFFECT_LIST_ADD` | [`user.effect_added`](./2867-user-effect-added.md) | Notify that a new avatar effect has been added to inventory | `session` | `nitro-1.6.6` |
| 3086 | `USER_BOTS` | [`user.bots`](./3086-user-bots.md) | Deliver the player's bot inventory | `session` | `nitro-1.6.6` |
| 3151 | `USER_FURNITURE_REFRESH` | [`user.furniture_refresh`](./3151-user-furniture-refresh.md) | Invalidate the cached furniture inventory | `session` | `nitro-1.6.6` |
| 3253 | `USER_PET_REMOVE` | [`user.pet_removed`](./3253-user-pet-removed.md) | Remove a pet from the inventory | `session` | `nitro-1.6.6` |
| 3473 | `AVATAR_EFFECT_SELECTED` | [`user.effect_selected`](./3473-user-effect-selected.md) | Confirm the currently selected avatar effect | `session` | `nitro-1.6.6` |
| 3522 | `USER_PETS` | [`user.pets`](./3522-user-pets.md) | Deliver the player's pet inventory | `session` | `nitro-1.6.6` |

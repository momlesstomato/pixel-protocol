---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Room Entities
- **Total packets**: 20

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 69 | `BOT_SKILL_LIST_UPDATE` | [`room.bot_skill_list_update`](./0069-room-bot-skill-list-update.md) | Bot skill list update | `session` | `nitro-1.6.6` |
| 296 | `BOT_FORCE_OPEN_CONTEXT_MENU` | [`room.bot_force_open_context_menu`](./0296-room-bot-force-open-context-menu.md) | Bot force open context menu | `session` | `nitro-1.6.6` |
| 354 | `HAND_ITEM_RECEIVED` | [`room.hand_item_received`](./0354-room-hand-item-received.md) | Hand item received | `session` | `nitro-1.6.6` |
| 374 | `UNIT` | [`room_entities.units`](./0374-room-entities-units.md) | Deliver a batch of room units (avatars, pets, bots) | `session` | `nitro-1.6.6` |
| 639 | `BOT_ERROR` | [`room.bot_error`](./0639-room-bot-error.md) | Bot error | `session` | `nitro-1.6.6` |
| 1036 | `UNIT_CHAT_SHOUT` | [`room_entities.shout`](./1036-room-entities-shout.md) | Deliver a shout message from a room unit | `session` | `nitro-1.6.6` |
| 1167 | `UNIT_EFFECT` | [`room_entities.effect`](./1167-room-entities-effect.md) | Notify that a unit's avatar effect changed | `session` | `nitro-1.6.6` |
| 1446 | `UNIT_CHAT` | [`room_entities.chat`](./1446-room-entities-chat.md) | Deliver a normal chat message from a room unit | `session` | `nitro-1.6.6` |
| 1474 | `UNIT_HAND_ITEM` | [`room_entities.hand_item`](./1474-room-entities-hand-item.md) | Notify that a unit is carrying a hand item | `session` | `nitro-1.6.6` |
| 1618 | `BOT_COMMAND_CONFIGURATION` | [`room.bot_command_configuration`](./1618-room-bot-command-configuration.md) | Bot command configuration | `session` | `nitro-1.6.6` |
| 1631 | `UNIT_EXPRESSION` | [`room_entities.expression`](./1631-room-entities-expression.md) | Notify that a unit performed an expression or gesture | `session` | `nitro-1.6.6` |
| 1640 | `UNIT_STATUS` | [`room_entities.status`](./1640-room-entities-status.md) | Update unit positions and action states in the room | `session` | `nitro-1.6.6` |
| 1717 | `UNIT_TYPING` | [`room_entities.typing`](./1717-room-entities-typing.md) | Notify that a unit's typing status changed | `session` | `nitro-1.6.6` |
| 1797 | `UNIT_IDLE` | [`room_entities.idle`](./1797-room-entities-idle.md) | Notify that a unit entered or left idle state | `session` | `nitro-1.6.6` |
| 2233 | `UNIT_DANCE` | [`room_entities.dance`](./2233-room-entities-dance.md) | Notify that a unit's dance animation changed | `session` | `nitro-1.6.6` |
| 2324 | `UNIT_NUMBER` | [`room_entities.number`](./2324-room-entities-number.md) | Assign or confirm the user's room index | `session` | `nitro-1.6.6` |
| 2661 | `UNIT_REMOVE` | [`room_entities.removed`](./2661-room-entities-removed.md) | Notify that a unit was removed from the room | `session` | `nitro-1.6.6` |
| 2704 | `UNIT_CHAT_WHISPER` | [`room_entities.whisper`](./2704-room-entities-whisper.md) | Deliver a private whisper to the recipient | `session` | `nitro-1.6.6` |
| 3684 | `BOT_RECEIVED` | [`room.bot_received`](./3684-room-bot-received.md) | Bot received | `session` | `nitro-1.6.6` |
| 3920 | `UNIT_INFO` | [`room_entities.info`](./3920-room-entities-info.md) | Update a unit's display information | `session` | `nitro-1.6.6` |

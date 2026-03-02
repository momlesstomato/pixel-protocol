---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Room Entities
- **Total packets**: 14

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 1030 | `USER_SETTINGS_CHAT_STYLE` | [`room_entities.set_chat_style`](./1030-room-entities-set-chat-style.md) | Set the user's preferred chat bubble style | `session` | `nitro-1.6.6` |
| 1314 | `UNIT_CHAT` | [`room_entities.say`](./1314-room-entities-say.md) | Send a normal chat message in the room | `session` | `nitro-1.6.6` |
| 1474 | `UNIT_TYPING_STOP` | [`room_entities.typing_stop`](./1474-room-entities-typing-stop.md) | Indicate the user has stopped typing | `session` | `nitro-1.6.6` |
| 1543 | `UNIT_CHAT_WHISPER` | [`room_entities.whisper`](./1543-room-entities-whisper.md) | Send a private whisper to a specific user | `session` | `nitro-1.6.6` |
| 1597 | `UNIT_TYPING` | [`room_entities.typing_start`](./1597-room-entities-typing-start.md) | Indicate the user has started typing | `session` | `nitro-1.6.6` |
| 1975 | `UNIT_SIGN` | [`room_entities.hold_sign`](./1975-room-entities-hold-sign.md) | Hold up a sign with a number or symbol | `session` | `nitro-1.6.6` |
| 2080 | `UNIT_DANCE` | [`room_entities.dance`](./2080-room-entities-dance.md) | Set the avatar's dance animation | `session` | `nitro-1.6.6` |
| 2085 | `UNIT_CHAT_SHOUT` | [`room_entities.shout`](./2085-room-entities-shout.md) | Send a shout message visible to the whole room | `session` | `nitro-1.6.6` |
| 2235 | `UNIT_POSTURE` | [`room_entities.set_posture`](./2235-room-entities-set-posture.md) | Set the avatar's posture (sit or stand) | `session` | `nitro-1.6.6` |
| 2456 | `UNIT_ACTION` | [`room_entities.action`](./2456-room-entities-action.md) | Perform an avatar action or expression | `session` | `nitro-1.6.6` |
| 2814 | `UNIT_DROP_HAND_ITEM` | [`room_entities.drop_hand_item`](./2814-room-entities-drop-hand-item.md) | Drop the currently held hand item | `session` | `nitro-1.6.6` |
| 2941 | `UNIT_GIVE_HANDITEM` | [`room_entities.give_hand_item`](./2941-room-entities-give-hand-item.md) | Give the hand item to another user | `session` | `nitro-1.6.6` |
| 3301 | `UNIT_LOOK` | [`room_entities.look_at`](./3301-room-entities-look-at.md) | Make the avatar look toward a target | `session` | `nitro-1.6.6` |
| 3320 | `UNIT_WALK` | [`room_entities.walk`](./3320-room-entities-walk.md) | Walk the user's avatar to a tile | `session` | `nitro-1.6.6` |

---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Notifications & Landing
- **Total packets**: 6

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 10 | `FORWARD_TO_RANDOM_PROMOTED_ROOM` | [`navigator.forward_to_random_promoted_room`](./0010-navigator-forward-to-random-promoted-room.md) | Forward to random promoted room | `session` | `nitro-1.6.6` |
| 1109 | `INTERSTITIAL_SHOWN` | [`session.interstitial_shown`](./1109-session-interstitial-shown.md) | Interstitial shown | `session` | `nitro-1.6.6` |
| 1827 | `DESKTOP_NEWS` | [`subscription.promo_articles`](./1827-subscription-promo-articles.md) | Get promo articles | `session` | `nitro-1.6.6` |
| 2012 | `MYSTERYBOXWAITINGCANCELEDMESSAGE` | [`furniture.mysteryboxwaitingcanceledmessage`](./2012-furniture-mysteryboxwaitingcanceledmessage.md) | Mysteryboxwaitingcanceledmessage | `session` | `nitro-1.6.6` |
| 2519 | `GET_INTERSTITIAL` | [`other.get_interstitial`](./2519-other-get-interstitial.md) | Get interstitial | `session` | `nitro-1.6.6` |
| 3074 | `MYSTERYBOX_OPEN_TROPHY` | [`furniture.mysterybox_open_trophy`](./3074-furniture-mysterybox-open-trophy.md) | Mysterybox open trophy | `session` | `nitro-1.6.6` |

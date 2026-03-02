---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Achievements & Talents
- **Total packets**: 10

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 196 | `HELPER_TALENT_TRACK` | [`moderation.helper_talent_track`](./0196-moderation-helper-talent-track.md) | Helper talent track | `session` | `nitro-1.6.6` |
| 219 | `ACHIEVEMENT_LIST` | [`user.achievement_list`](./0219-user-achievement-list.md) | Achievement list | `session` | `nitro-1.6.6` |
| 359 | `ACHIEVEMENT_RESOLUTION_OPEN` | [`user.achievement_resolution_open`](./0359-user-achievement-resolution-open.md) | Achievement resolution open | `session` | `nitro-1.6.6` |
| 389 | `GETUSERGAMEACHIEVEMENTSMESSAGE` | [`games.getusergameachievementsmessage`](./0389-games-getusergameachievementsmessage.md) | Getusergameachievementsmessage | `session` | `nitro-1.6.6` |
| 1364 | `GETISBADGEREQUESTFULFILLED` | [`user.check_badge_request`](./1364-user-check-badge-request.md) | Check whether a badge request code has been fulfilled | `session` | `nitro-1.6.6` |
| 1371 | `GET_BADGE_POINTS_LIMITS` | [`user.get_badge_point_limits`](./1371-user-get-badge-point-limits.md) | Request the point limits for badge achievement levels | `session` | `nitro-1.6.6` |
| 2127 | `TALENT_TRACK_GET_LEVEL` | [`user.talent_track_get_level`](./2127-user-talent-track-get-level.md) | Talent track get level | `session` | `nitro-1.6.6` |
| 2399 | `GETGAMEACHIEVEMENTSMESSAGE` | [`games.getgameachievementsmessage`](./2399-games-getgameachievementsmessage.md) | Getgameachievementsmessage | `session` | `nitro-1.6.6` |
| 3077 | `REQUESTABADGE` | [`user.request_badge`](./3077-user-request-badge.md) | Request a specific promotional or achievement badge | `session` | `nitro-1.6.6` |
| 3144 | `RESETRESOLUTIONACHIEVEMENTMESSAGE` | [`user.resetresolutionachievementmessage`](./3144-user-resetresolutionachievementmessage.md) | Resetresolutionachievementmessage | `session` | `nitro-1.6.6` |

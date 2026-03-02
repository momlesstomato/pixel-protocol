---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Achievements & Talents
- **Total packets**: 14

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 66 | `ACHIEVEMENTRESOLUTIONS` | [`user.achievementresolutions`](./0066-user-achievementresolutions.md) | Achievementresolutions | `session` | `nitro-1.6.6` |
| 305 | `ACHIEVEMENT_LIST` | [`user.achievement_list`](./0305-user-achievement-list.md) | Achievement list | `session` | `nitro-1.6.6` |
| 638 | `TALENT_TRACK_LEVEL_UP` | [`user.talent_track_level_up`](./0638-user-talent-track-level-up.md) | Talent track level up | `session` | `nitro-1.6.6` |
| 740 | `ACHIEVEMENTRESOLUTIONCOMPLETED` | [`user.achievementresolutioncompleted`](./0740-user-achievementresolutioncompleted.md) | Achievementresolutioncompleted | `session` | `nitro-1.6.6` |
| 806 | `ACHIEVEMENT_NOTIFICATION` | [`user.achievement_notification`](./0806-user-achievement-notification.md) | Achievement notification | `session` | `nitro-1.6.6` |
| 1203 | `TALENT_TRACK_LEVEL` | [`user.talent_track_level`](./1203-user-talent-track-level.md) | Talent track level | `session` | `nitro-1.6.6` |
| 1689 | `GAMEACHIEVEMENTS` | [`games.gameachievements`](./1689-games-gameachievements.md) | Gameachievements | `session` | `nitro-1.6.6` |
| 1968 | `USER_ACHIEVEMENT_SCORE` | [`user.user_achievement_score`](./1968-user-user-achievement-score.md) | User achievement score | `session` | `nitro-1.6.6` |
| 2107 | `ACHIEVEMENT_PROGRESSED` | [`user.achievement_progressed`](./2107-user-achievement-progressed.md) | Achievement progressed | `session` | `nitro-1.6.6` |
| 2265 | `GAME_CENTER_ACHIEVEMENTS` | [`games.game_center_achievements`](./2265-games-game-center-achievements.md) | Game center achievements | `session` | `nitro-1.6.6` |
| 2501 | `BADGE_POINT_LIMITS` | [`user.badge_point_limits`](./2501-user-badge-point-limits.md) | Deliver point thresholds for badge achievement levels | `session` | `nitro-1.6.6` |
| 2998 | `BADGE_REQUEST_FULFILLED` | [`user.badge_request_fulfilled`](./2998-user-badge-request-fulfilled.md) | Report whether a promotional badge request was fulfilled | `session` | `nitro-1.6.6` |
| 3370 | `ACHIEVEMENTRESOLUTIONPROGRESS` | [`user.achievementresolutionprogress`](./3370-user-achievementresolutionprogress.md) | Achievementresolutionprogress | `session` | `nitro-1.6.6` |
| 3406 | `HELPER_TALENT_TRACK` | [`moderation.helper_talent_track`](./3406-moderation-helper-talent-track.md) | Helper talent track | `session` | `nitro-1.6.6` |

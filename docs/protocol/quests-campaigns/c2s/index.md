---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Quests & Campaigns
- **Total packets**: 15

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 793 | `ACTIVATE_QUEST` | [`quests.activate_quest`](./0793-quests-activate-quest.md) | Activate quest | `session` | `nitro-1.6.6` |
| 1190 | `GET_SEASONAL_QUESTS_ONLY` | [`quests.get_seasonal_quests_only`](./1190-quests-get-seasonal-quests-only.md) | Get seasonal quests only | `session` | `nitro-1.6.6` |
| 1296 | `GET_QUIZ_QUESTIONS` | [`quests.get_quiz_questions`](./1296-quests-get-quiz-questions.md) | Get quiz questions | `session` | `nitro-1.6.6` |
| 1334 | `ROOM_COMPETITION_INIT` | [`quests.room_competition_init`](./1334-quests-room-competition-init.md) | Room competition init | `session` | `nitro-1.6.6` |
| 1782 | `GET_USER_EVENT_CATS` | [`quests.get_user_event_cats`](./1782-quests-get-user-event-cats.md) | Get user event cats | `session` | `nitro-1.6.6` |
| 2077 | `GET_IS_USER_PART_OF_COMPETITION` | [`quests.get_is_user_part_of_competition`](./2077-quests-get-is-user-part-of-competition.md) | Get is user part of competition | `session` | `nitro-1.6.6` |
| 2397 | `REJECT_QUEST` | [`quests.reject_quest`](./2397-quests-reject-quest.md) | Reject quest | `session` | `nitro-1.6.6` |
| 2486 | `GET_DAILY_QUEST` | [`quests.get_daily_quest`](./2486-quests-get-daily-quest.md) | Get daily quest | `session` | `nitro-1.6.6` |
| 2595 | `SUBMIT_ROOM_TO_COMPETITION` | [`quests.submit_room_to_competition`](./2595-quests-submit-room-to-competition.md) | Submit room to competition | `session` | `nitro-1.6.6` |
| 2750 | `OPEN_QUEST_TRACKER` | [`quests.open_quest_tracker`](./2750-quests-open-quest-tracker.md) | Open quest tracker | `session` | `nitro-1.6.6` |
| 2912 | `GET_CURRENT_TIMING_CODE` | [`quests.get_current_timing_code`](./2912-quests-get-current-timing-code.md) | Get current timing code | `session` | `nitro-1.6.6` |
| 3133 | `CANCEL_QUEST` | [`quests.cancel_quest`](./3133-quests-cancel-quest.md) | Cancel quest | `session` | `nitro-1.6.6` |
| 3333 | `GET_QUESTS` | [`quests.get_quests`](./3333-quests-get-quests.md) | Get quests | `session` | `nitro-1.6.6` |
| 3604 | `ACCEPT_QUEST` | [`quests.accept_quest`](./3604-quests-accept-quest.md) | Accept quest | `session` | `nitro-1.6.6` |
| 3720 | `POST_QUIZ_ANSWERS` | [`quests.post_quiz_answers`](./3720-quests-post-quiz-answers.md) | Post quiz answers | `session` | `nitro-1.6.6` |

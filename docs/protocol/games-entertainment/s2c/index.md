---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Games & Entertainment
- **Total packets**: 28

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 222 | `GAME_CENTER_GAME_LIST` | [`games.game_center_game_list`](./0222-games-game-center-game-list.md) | Game center game list | `session` | `nitro-1.6.6` |
| 448 | `PLAYING_GAME` | [`games.playing_game`](./0448-games-playing-game.md) | Playing game | `session` | `nitro-1.6.6` |
| 662 | `POLL_ERROR` | [`games.poll_error`](./0662-games-poll-error.md) | Poll error | `session` | `nitro-1.6.6` |
| 872 | `GAME_CENTER_IN_ARENA_QUEUE` | [`games.game_center_in_arena_queue`](./0872-games-game-center-in-arena-queue.md) | Game center in arena queue | `session` | `nitro-1.6.6` |
| 904 | `GAMEINVITE` | [`games.gameinvite`](./0904-games-gameinvite.md) | Gameinvite | `session` | `nitro-1.6.6` |
| 1477 | `LEFTQUEUE` | [`games.leftqueue`](./1477-games-leftqueue.md) | Leftqueue | `session` | `nitro-1.6.6` |
| 1715 | `UNLOADGAME` | [`games.unloadgame`](./1715-games-unloadgame.md) | Unloadgame | `session` | `nitro-1.6.6` |
| 1730 | `GAME_CENTER_JOINING_FAILED` | [`games.game_center_joining_failed`](./1730-games-game-center-joining-failed.md) | Game center joining failed | `session` | `nitro-1.6.6` |
| 2142 | `GAME_CENTER_STARTING_GAME_FAILED` | [`games.game_center_starting_game_failed`](./2142-games-game-center-starting-game-failed.md) | Game center starting game failed | `session` | `nitro-1.6.6` |
| 2196 | `WEEKLY_GAME2_LEADERBOARD` | [`games.weekly_game2_leaderboard`](./2196-games-weekly-game2-leaderboard.md) | Weekly game2 leaderboard | `session` | `nitro-1.6.6` |
| 2246 | `GAME_CENTER_DIRECTORY_STATUS` | [`games.game_center_directory_status`](./2246-games-game-center-directory-status.md) | Game center directory status | `session` | `nitro-1.6.6` |
| 2260 | `JOINEDQUEUEMESSAGE` | [`games.joinedqueuemessage`](./2260-games-joinedqueuemessage.md) | Joinedqueuemessage | `session` | `nitro-1.6.6` |
| 2270 | `WEEKLY_GAME2_FRIENDS_LEADERBOARD` | [`games.weekly_game2_friends_leaderboard`](./2270-games-weekly-game2-friends-leaderboard.md) | Weekly game2 friends leaderboard | `session` | `nitro-1.6.6` |
| 2624 | `LOAD_GAME_URL` | [`games.load_game_url`](./2624-games-load-game-url.md) | Load game url | `session` | `nitro-1.6.6` |
| 2641 | `WEEKLY_GAME_REWARD` | [`games.weekly_game_reward`](./2641-games-weekly-game-reward.md) | Weekly game reward | `session` | `nitro-1.6.6` |
| 2893 | `GAME_CENTER_STATUS` | [`games.game_center_status`](./2893-games-game-center-status.md) | Game center status | `session` | `nitro-1.6.6` |
| 2997 | `POLL_CONTENTS` | [`games.poll_contents`](./2997-games-poll-contents.md) | Poll contents | `session` | `nitro-1.6.6` |
| 3035 | `JOININGQUEUEFAILED` | [`games.joiningqueuefailed`](./3035-games-joiningqueuefailed.md) | Joiningqueuefailed | `session` | `nitro-1.6.6` |
| 3097 | `WEEKLY_GAME_REWARD_WINNERS` | [`games.weekly_game_reward_winners`](./3097-games-weekly-game-reward-winners.md) | Weekly game reward winners | `session` | `nitro-1.6.6` |
| 3138 | `GAME_CENTER_USER_LEFT_GAME` | [`games.game_center_user_left_game`](./3138-games-game-center-user-left-game.md) | Game center user left game | `session` | `nitro-1.6.6` |
| 3191 | `GAME_CENTER_STOP_COUNTER` | [`games.game_center_stop_counter`](./3191-games-game-center-stop-counter.md) | Game center stop counter | `session` | `nitro-1.6.6` |
| 3512 | `WEEKLY_COMPETITIVE_LEADERBOARD` | [`games.weekly_competitive_leaderboard`](./3512-games-weekly-competitive-leaderboard.md) | Weekly competitive leaderboard | `session` | `nitro-1.6.6` |
| 3560 | `WEEKLY_COMPETITIVE_FRIENDS_LEADERBOARD` | [`games.weekly_competitive_friends_leaderboard`](./3560-games-weekly-competitive-friends-leaderboard.md) | Weekly competitive friends leaderboard | `session` | `nitro-1.6.6` |
| 3654 | `LOADGAME` | [`games.loadgame`](./3654-games-loadgame.md) | Loadgame | `session` | `nitro-1.6.6` |
| 3785 | `POLL_OFFER` | [`games.poll_offer`](./3785-games-poll-offer.md) | Poll offer | `session` | `nitro-1.6.6` |
| 3805 | `GAMESTATUSMESSAGE` | [`games.gamestatusmessage`](./3805-games-gamestatusmessage.md) | Gamestatusmessage | `session` | `nitro-1.6.6` |
| 5200 | `POLL_START_ROOM` | [`games.poll_start_room`](./5200-games-poll-start-room.md) | Poll start room | `session` | `nitro-1.6.6` |
| 5201 | `POLL_ROOM_RESULT` | [`games.poll_room_result`](./5201-games-poll-room-result.md) | Poll room result | `session` | `nitro-1.6.6` |

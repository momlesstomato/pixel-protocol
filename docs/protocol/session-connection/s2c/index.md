---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Session & Connection
- **Total packets**: 20

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 10 | `CLIENT_LATENCY` | [`client.latency_response`](./0010-client-latency-response.md) | Echo request id in response to latency test | `session` | `nitro-1.6.6` |
| 122 | `DESKTOP_VIEW` | [`session.desktop_view`](./0122-session-desktop-view.md) | Desktop view | `session` | `nitro-1.6.6` |
| 426 | `RESTORE_CLIENT` | [`session.restore_client`](./0426-session-restore-client.md) | Restore client | `session` | `nitro-1.6.6` |
| 600 | `AVAILABILITY_TIME` | [`availability.time`](./0600-availability-time.md) | Report scheduled open/close time information | `session` | `nitro-1.6.6` |
| 793 | `FIRST_LOGIN_OF_DAY` | [`session.first_login_of_day`](./0793-session-first-login-of-day.md) | First login of day | `session` | `nitro-1.6.6` |
| 1004 | `CONNECTION_ERROR` | [`connection.error`](./1004-connection-error.md) | Report a connection-level error | `session` | `nitro-1.6.6` |
| 1050 | `HOTEL_WILL_CLOSE_MINUTES` | [`hotel.will_close`](./1050-hotel-will-close.md) | Warn the client that the hotel will close soon | `session` | `nitro-1.6.6` |
| 1350 | `HOTEL_MAINTENANCE` | [`hotel.maintenance`](./1350-hotel-maintenance.md) | Report current maintenance mode status | `session` | `nitro-1.6.6` |
| 1600 | `GENERIC_ERROR` | [`session.generic_error`](./1600-session-generic-error.md) | Generic error | `session` | `nitro-1.6.6` |
| 1663 | `HOTEL_MERGE_NAME_CHANGE` | [`session.hotel_merge_name_change`](./1663-session-hotel-merge-name-change.md) | Hotel merge name change | `session` | `nitro-1.6.6` |
| 1890 | `MODERATION_CAUTION` | [`session.moderation_caution`](./1890-session-moderation-caution.md) | Moderation caution | `session` | `nitro-1.6.6` |
| 2033 | `AVAILABILITY_STATUS` | [`availability.status`](./2033-availability-status.md) | Report hotel availability and shutdown state | `session` | `nitro-1.6.6` |
| 2035 | `MOTD_MESSAGES` | [`session.motd_messages`](./2035-session-motd-messages.md) | Motd messages | `session` | `nitro-1.6.6` |
| 2771 | `HOTEL_CLOSES_AND_OPENS_AT` | [`hotel.closes_and_opens_at`](./2771-hotel-closes-and-opens-at.md) | Announce upcoming close and reopen schedule | `session` | `nitro-1.6.6` |
| 3284 | `INFO_FEED_ENABLE` | [`session.info_feed_enable`](./3284-session-info-feed-enable.md) | Info feed enable | `session` | `nitro-1.6.6` |
| 3728 | `HOTEL_CLOSED_AND_OPENS` | [`hotel.closed_and_opens`](./3728-hotel-closed-and-opens.md) | Inform the client when the hotel will reopen | `session` | `nitro-1.6.6` |
| 3801 | `GENERIC_ALERT` | [`session.generic_alert`](./3801-session-generic-alert.md) | Generic alert | `session` | `nitro-1.6.6` |
| 3928 | `CLIENT_PING` | [`client.ping`](./3928-client-ping.md) | Keepalive ping sent by server | `session` | `nitro-1.6.6` |
| 3945 | `EPIC_POPUP` | [`session.epic_popup`](./3945-session-epic-popup.md) | Epic popup | `session` | `nitro-1.6.6` |
| 4000 | `DISCONNECT_REASON` | [`disconnect.reason`](./4000-disconnect-reason.md) | Inform the client why it is being disconnected | `session` | `nitro-1.6.6` |

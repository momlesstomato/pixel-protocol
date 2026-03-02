---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Session & Connection
- **Total packets**: 10

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 105 | `DESKTOP_VIEW` | [`session.desktop_view`](./0105-session-desktop-view.md) | Desktop view | `session` | `nitro-1.6.6` |
| 295 | `CLIENT_LATENCY` | [`client.latency_test`](./0295-client-latency-test.md) | Send latency probe id to measure round-trip time | `session` | `nitro-1.6.6` |
| 1160 | `PEER_USERS_CLASSIFICATION` | [`session.peer_users_classification`](./1160-session-peer-users-classification.md) | Peer users classification | `session` | `nitro-1.6.6` |
| 2313 | `CLIENT_TOOLBAR_TOGGLE` | [`session.client_toolbar_toggle`](./2313-session-client-toolbar-toggle.md) | Client toolbar toggle | `session` | `nitro-1.6.6` |
| 2445 | `DISCONNECT` | [`client.disconnect`](./2445-client-disconnect.md) | Client-initiated graceful disconnect | `session` | `nitro-1.6.6` |
| 2596 | `CLIENT_PONG` | [`client.pong`](./2596-client-pong.md) | Keepalive response to server ping | `session` | `nitro-1.6.6` |
| 3226 | `RENDER_ROOM` | [`session.render_room`](./3226-session-render-room.md) | Render room | `session` | `nitro-1.6.6` |
| 3230 | `TRACKING_PERFORMANCE_LOG` | [`session.tracking_performance_log`](./3230-session-tracking-performance-log.md) | Tracking performance log | `session` | `nitro-1.6.6` |
| 3457 | `EVENT_TRACKER` | [`session.event_tracker`](./3457-session-event-tracker.md) | Event tracker | `session` | `nitro-1.6.6` |
| 3847 | `TRACKING_LAG_WARNING_REPORT` | [`session.tracking_lag_warning_report`](./3847-session-tracking-lag-warning-report.md) | Tracking lag warning report | `session` | `nitro-1.6.6` |

---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Camera & Photos
- **Total packets**: 8

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 796 | `REQUEST_CAMERA_CONFIGURATION` | [`session.request_camera_configuration`](./0796-session-request-camera-configuration.md) | Request camera configuration | `session` | `nitro-1.6.6` |
| 1461 | `USER_SETTINGS_CAMERA` | [`user.settings_camera`](./1461-user-settings-camera.md) | Toggle camera-follow-avatar mode | `session` | `nitro-1.6.6` |
| 1982 | `RENDER_ROOM_THUMBNAIL` | [`session.render_room_thumbnail`](./1982-session-render-room-thumbnail.md) | Render room thumbnail | `session` | `nitro-1.6.6` |
| 2068 | `PUBLISH_PHOTO` | [`session.publish_photo`](./2068-session-publish-photo.md) | Publish photo | `session` | `nitro-1.6.6` |
| 2408 | `PURCHASE_PHOTO` | [`session.purchase_photo`](./2408-session-purchase-photo.md) | Purchase photo | `session` | `nitro-1.6.6` |
| 2468 | `UPDATE_ROOM_THUMBNAIL` | [`room.update_room_thumbnail`](./2468-room-update-room-thumbnail.md) | Update room thumbnail | `session` | `nitro-1.6.6` |
| 2492 | `CALL_FOR_HELP_FROM_PHOTO` | [`moderation.call_for_help_from_photo`](./2492-moderation-call-for-help-from-photo.md) | Call for help from photo | `session` | `nitro-1.6.6` |
| 3959 | `PHOTO_COMPETITION` | [`session.photo_competition`](./3959-session-photo-competition.md) | Photo competition | `session` | `nitro-1.6.6` |

---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Moderation & Safety
- **Total packets**: 40

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 30 | `CHAT_REVIEW_SESSION_DETACHED` | [`moderation.chat_review_session_detached`](./0030-moderation-chat-review-session-detached.md) | Chat review session detached | `session` | `nitro-1.6.6` |
| 77 | `CFH_PENDING_CALLS_DELETED` | [`moderation.cfh_pending_calls_deleted`](./0077-moderation-cfh-pending-calls-deleted.md) | Cfh pending calls deleted | `session` | `nitro-1.6.6` |
| 138 | `GUIDE_SESSION_DETACHED` | [`moderation.guide_session_detached`](./0138-moderation-guide-session-detached.md) | Guide session detached | `session` | `nitro-1.6.6` |
| 143 | `CHAT_REVIEW_SESSION_STARTED` | [`moderation.chat_review_session_started`](./0143-moderation-chat-review-session-started.md) | Chat review session started | `session` | `nitro-1.6.6` |
| 219 | `GUIDE_SESSION_INVITED_TO_GUIDE_ROOM` | [`moderation.guide_session_invited_to_guide_room`](./0219-moderation-guide-session-invited-to-guide-room.md) | Guide session invited to guide room | `session` | `nitro-1.6.6` |
| 325 | `CFH_TOPICS` | [`moderation.cfh_topics`](./0325-moderation-cfh-topics.md) | Cfh topics | `session` | `nitro-1.6.6` |
| 607 | `CFH_CHATLOG` | [`moderation.cfh_chatlog`](./0607-moderation-cfh-chatlog.md) | Cfh chatlog | `session` | `nitro-1.6.6` |
| 673 | `GUIDE_SESSION_ERROR` | [`moderation.guide_session_error`](./0673-moderation-guide-session-error.md) | Guide session error | `session` | `nitro-1.6.6` |
| 735 | `CHAT_REVIEW_SESSION_OFFERED_TO_GUIDE` | [`moderation.chat_review_session_offered_to_guide`](./0735-moderation-chat-review-session-offered-to-guide.md) | Chat review session offered to guide | `session` | `nitro-1.6.6` |
| 841 | `GUIDE_SESSION_MESSAGE` | [`moderation.guide_session_message`](./0841-moderation-guide-session-message.md) | Guide session message | `session` | `nitro-1.6.6` |
| 1016 | `GUIDE_SESSION_PARTNER_IS_TYPING` | [`moderation.guide_session_partner_is_typing`](./1016-moderation-guide-session-partner-is-typing.md) | Guide session partner is typing | `session` | `nitro-1.6.6` |
| 1121 | `CFH_PENDING_CALLS` | [`moderation.cfh_pending_calls`](./1121-moderation-cfh-pending-calls.md) | Cfh pending calls | `session` | `nitro-1.6.6` |
| 1333 | `MODTOOL_ROOM_INFO` | [`moderation.modtool_room_info`](./1333-moderation-modtool-room-info.md) | Modtool room info | `session` | `nitro-1.6.6` |
| 1456 | `GUIDE_SESSION_ENDED` | [`moderation.guide_session_ended`](./1456-moderation-guide-session-ended.md) | Guide session ended | `session` | `nitro-1.6.6` |
| 1548 | `GUIDE_ON_DUTY_STATUS` | [`moderation.guide_on_duty_status`](./1548-moderation-guide-on-duty-status.md) | Guide on duty status | `session` | `nitro-1.6.6` |
| 1576 | `MODERATOR_TOOL_PREFERENCES` | [`moderation.moderator_tool_preferences`](./1576-moderation-moderator-tool-preferences.md) | Moderator tool preferences | `session` | `nitro-1.6.6` |
| 1591 | `GUIDE_SESSION_ATTACHED` | [`moderation.guide_session_attached`](./1591-moderation-guide-session-attached.md) | Guide session attached | `session` | `nitro-1.6.6` |
| 1651 | `MODERATION_REPORT_DISABLED` | [`moderation.cfh_disabled_notify`](./1651-moderation-cfh-disabled-notify.md) | Cfh disabled notify | `session` | `nitro-1.6.6` |
| 1752 | `MODTOOL_VISITED_ROOMS_USER` | [`moderation.modtool_visited_rooms_user`](./1752-moderation-modtool-visited-rooms-user.md) | Modtool visited rooms user | `session` | `nitro-1.6.6` |
| 1829 | `CHAT_REVIEW_SESSION_VOTING_STATUS` | [`moderation.chat_review_session_voting_status`](./1829-moderation-chat-review-session-voting-status.md) | Chat review session voting status | `session` | `nitro-1.6.6` |
| 1847 | `GUIDE_SESSION_REQUESTER_ROOM` | [`moderation.guide_session_requester_room`](./1847-moderation-guide-session-requester-room.md) | Guide session requester room | `session` | `nitro-1.6.6` |
| 2030 | `MODERATOR_MESSAGE` | [`moderation.moderator_message`](./2030-moderation-moderator-message.md) | Moderator message | `session` | `nitro-1.6.6` |
| 2221 | `CFH_SANCTION_STATUS` | [`moderation.cfh_sanction_status`](./2221-moderation-cfh-sanction-status.md) | Cfh sanction status | `session` | `nitro-1.6.6` |
| 2335 | `MODERATOR_ACTION_RESULT` | [`moderation.moderator_action_result`](./2335-moderation-moderator-action-result.md) | Moderator action result | `session` | `nitro-1.6.6` |
| 2674 | `GUIDE_TICKET_RESOLUTION` | [`moderation.guide_ticket_resolution`](./2674-moderation-guide-ticket-resolution.md) | Guide ticket resolution | `session` | `nitro-1.6.6` |
| 2696 | `MODERATION_TOOL` | [`moderation.moderation_tool`](./2696-moderation-moderation-tool.md) | Moderation tool | `session` | `nitro-1.6.6` |
| 2782 | `CFH_SANCTION` | [`moderation.cfh_sanction`](./2782-moderation-cfh-sanction.md) | Cfh sanction | `session` | `nitro-1.6.6` |
| 2866 | `MODERATION_USER_INFO` | [`moderation.moderation_user_info`](./2866-moderation-moderation-user-info.md) | Moderation user info | `session` | `nitro-1.6.6` |
| 3150 | `ISSUE_PICK_FAILED` | [`moderation.issue_pick_failed`](./3150-moderation-issue-pick-failed.md) | Issue pick failed | `session` | `nitro-1.6.6` |
| 3192 | `ISSUE_DELETED` | [`moderation.issue_deleted`](./3192-moderation-issue-deleted.md) | Issue deleted | `session` | `nitro-1.6.6` |
| 3209 | `GUIDE_SESSION_STARTED` | [`moderation.guide_session_started`](./3209-moderation-guide-session-started.md) | Guide session started | `session` | `nitro-1.6.6` |
| 3276 | `CHAT_REVIEW_SESSION_RESULTS` | [`moderation.chat_review_session_results`](./3276-moderation-chat-review-session-results.md) | Chat review session results | `session` | `nitro-1.6.6` |
| 3285 | `GUIDE_TICKET_CREATION_RESULT` | [`moderation.guide_ticket_creation_result`](./3285-moderation-guide-ticket-creation-result.md) | Guide ticket creation result | `session` | `nitro-1.6.6` |
| 3377 | `MODTOOL_USER_CHATLOG` | [`moderation.modtool_user_chatlog`](./3377-moderation-modtool-user-chatlog.md) | Modtool user chatlog | `session` | `nitro-1.6.6` |
| 3434 | `MODTOOL_ROOM_CHATLOG` | [`moderation.modtool_room_chatlog`](./3434-moderation-modtool-room-chatlog.md) | Modtool room chatlog | `session` | `nitro-1.6.6` |
| 3463 | `GUIDE_REPORTING_STATUS` | [`moderation.guide_reporting_status`](./3463-moderation-guide-reporting-status.md) | Guide reporting status | `session` | `nitro-1.6.6` |
| 3609 | `ISSUE_INFO` | [`moderation.issue_info`](./3609-moderation-issue-info.md) | Issue info | `session` | `nitro-1.6.6` |
| 3635 | `CFH_RESULT_MESSAGE` | [`moderation.cfh_result_message`](./3635-moderation-cfh-result-message.md) | Cfh result message | `session` | `nitro-1.6.6` |
| 3679 | `USER_SANCTION_STATUS` | [`moderation.user_sanction_status`](./3679-moderation-user-sanction-status.md) | User sanction status | `session` | `nitro-1.6.6` |
| 3796 | `CFH_REPLY` | [`moderation.cfh_reply`](./3796-moderation-cfh-reply.md) | Cfh reply | `session` | `nitro-1.6.6` |

---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Moderation & Safety
- **Total packets**: 43

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 15 | `PICK_ISSUES` | [`moderation.pick_issues`](./0015-moderation-pick-issues.md) | Pick moderation issues for review | `session` | `nitro-1.6.6` |
| 31 | `MODTOOL_PREFERENCES` | [`moderation.modtool_preferences`](./0031-moderation-modtool-preferences.md) | Modtool preferences | `session` | `nitro-1.6.6` |
| 211 | `GET_CFH_CHATLOG` | [`moderation.get_cfh_chatlog`](./0211-moderation-get-cfh-chatlog.md) | Request the chat log associated with a call-for-help issue | `session` | `nitro-1.6.6` |
| 229 | `MODTOOL_SANCTION_ALERT` | [`moderation.modtool_sanction_alert`](./0229-moderation-modtool-sanction-alert.md) | Modtool sanction alert | `session` | `nitro-1.6.6` |
| 234 | `GUIDE_SESSION_INVITE_REQUESTER` | [`moderation.guide_session_invite_requester`](./0234-moderation-guide-session-invite-requester.md) | Guide session invite requester | `session` | `nitro-1.6.6` |
| 291 | `GUIDE_SESSION_REQUESTER_CANCELS` | [`moderation.guide_session_requester_cancels`](./0291-moderation-guide-session-requester-cancels.md) | Guide session requester cancels | `session` | `nitro-1.6.6` |
| 477 | `GUIDE_SESSION_FEEDBACK` | [`moderation.guide_session_feedback`](./0477-moderation-guide-session-feedback.md) | Guide session feedback | `session` | `nitro-1.6.6` |
| 519 | `GUIDE_SESSION_IS_TYPING` | [`moderation.guide_session_is_typing`](./0519-moderation-guide-session-is-typing.md) | Guide session is typing | `session` | `nitro-1.6.6` |
| 707 | `MODTOOL_REQUEST_ROOM_INFO` | [`moderation.modtool_request_room_info`](./0707-moderation-modtool-request-room-info.md) | Modtool request room info | `session` | `nitro-1.6.6` |
| 887 | `GUIDE_SESSION_RESOLVED` | [`moderation.guide_session_resolved`](./0887-moderation-guide-session-resolved.md) | Guide session resolved | `session` | `nitro-1.6.6` |
| 1052 | `GUIDE_SESSION_GET_REQUESTER_ROOM` | [`moderation.guide_session_get_requester_room`](./1052-moderation-guide-session-get-requester-room.md) | Guide session get requester room | `session` | `nitro-1.6.6` |
| 1391 | `MODTOOL_REQUEST_USER_CHATLOG` | [`moderation.modtool_request_user_chatlog`](./1391-moderation-modtool-request-user-chatlog.md) | Modtool request user chatlog | `session` | `nitro-1.6.6` |
| 1392 | `MODTOOL_SANCTION` | [`moderation.modtool_sanction`](./1392-moderation-modtool-sanction.md) | Modtool sanction | `session` | `nitro-1.6.6` |
| 1424 | `GUIDE_SESSION_GUIDE_DECIDES` | [`moderation.guide_session_guide_decides`](./1424-moderation-guide-session-guide-decides.md) | Guide session guide decides | `session` | `nitro-1.6.6` |
| 1572 | `RELEASE_ISSUES` | [`moderation.release_issues`](./1572-moderation-release-issues.md) | Release issues | `session` | `nitro-1.6.6` |
| 1681 | `DEFAULT_SANCTION` | [`moderation.default_sanction`](./1681-moderation-default-sanction.md) | Default sanction | `session` | `nitro-1.6.6` |
| 1691 | `CALL_FOR_HELP` | [`moderation.call_for_help`](./1691-moderation-call-for-help.md) | Submit a call-for-help report | `session` | `nitro-1.6.6` |
| 1840 | `MODTOOL_ALERTEVENT` | [`moderation.modtool_alertevent`](./1840-moderation-modtool-alertevent.md) | Modtool alertevent | `session` | `nitro-1.6.6` |
| 1922 | `GUIDE_SESSION_ON_DUTY_UPDATE` | [`moderation.guide_session_on_duty_update`](./1922-moderation-guide-session-on-duty-update.md) | Guide session on duty update | `session` | `nitro-1.6.6` |
| 1945 | `MODTOOL_SANCTION_MUTE` | [`moderation.modtool_sanction_mute`](./1945-moderation-modtool-sanction-mute.md) | Modtool sanction mute | `session` | `nitro-1.6.6` |
| 2067 | `CLOSE_ISSUES` | [`moderation.close_issues`](./2067-moderation-close-issues.md) | Close one or more moderation issues with a resolution | `session` | `nitro-1.6.6` |
| 2501 | `CHAT_REVIEW_GUIDE_DETACHED` | [`moderation.chat_review_guide_detached`](./2501-moderation-chat-review-guide-detached.md) | Chat review guide detached | `session` | `nitro-1.6.6` |
| 2582 | `MODTOOL_SANCTION_KICK` | [`moderation.modtool_sanction_kick`](./2582-moderation-modtool-sanction-kick.md) | Modtool sanction kick | `session` | `nitro-1.6.6` |
| 2587 | `MODTOOL_REQUEST_ROOM_CHATLOG` | [`moderation.modtool_request_room_chatlog`](./2587-moderation-modtool-request-room-chatlog.md) | Modtool request room chatlog | `session` | `nitro-1.6.6` |
| 2717 | `CLOSE_ISSUE_DEFAULT_ACTION` | [`moderation.close_issue_default_action`](./2717-moderation-close-issue-default-action.md) | Close issue default action | `session` | `nitro-1.6.6` |
| 2746 | `GET_CFH_STATUS` | [`moderation.get_cfh_status`](./2746-moderation-get-cfh-status.md) | Get cfh status | `session` | `nitro-1.6.6` |
| 2755 | `CALL_FOR_HELP_FROM_SELFIE` | [`moderation.call_for_help_from_selfie`](./2755-moderation-call-for-help-from-selfie.md) | Call for help from selfie | `session` | `nitro-1.6.6` |
| 2766 | `MODTOOL_SANCTION_BAN` | [`moderation.modtool_sanction_ban`](./2766-moderation-modtool-sanction-ban.md) | Modtool sanction ban | `session` | `nitro-1.6.6` |
| 2950 | `CALL_FOR_HELP_FROM_IM` | [`moderation.call_for_help_from_im`](./2950-moderation-call-for-help-from-im.md) | Call for help from im | `session` | `nitro-1.6.6` |
| 3060 | `CHAT_REVIEW_SESSION_CREATE` | [`moderation.chat_review_session_create`](./3060-moderation-chat-review-session-create.md) | Chat review session create | `session` | `nitro-1.6.6` |
| 3260 | `MODTOOL_CHANGE_ROOM_SETTINGS` | [`moderation.modtool_change_room_settings`](./3260-moderation-modtool-change-room-settings.md) | Modtool change room settings | `session` | `nitro-1.6.6` |
| 3267 | `GET_PENDING_CALLS_FOR_HELP` | [`moderation.get_pending_calls_for_help`](./3267-moderation-get-pending-calls-for-help.md) | Get pending calls for help | `session` | `nitro-1.6.6` |
| 3295 | `MOD_TOOL_USER_INFO` | [`moderation.mod_tool_user_info`](./3295-moderation-mod-tool-user-info.md) | Mod tool user info | `session` | `nitro-1.6.6` |
| 3338 | `GUIDE_SESSION_CREATE` | [`moderation.guide_session_create`](./3338-moderation-guide-session-create.md) | Guide session create | `session` | `nitro-1.6.6` |
| 3365 | `CHAT_REVIEW_GUIDE_DECIDES` | [`moderation.chat_review_guide_decides`](./3365-moderation-chat-review-guide-decides.md) | Chat review guide decides | `session` | `nitro-1.6.6` |
| 3526 | `MODTOOL_REQUEST_USER_ROOMS` | [`moderation.modtool_request_user_rooms`](./3526-moderation-modtool-request-user-rooms.md) | Modtool request user rooms | `session` | `nitro-1.6.6` |
| 3605 | `DELETE_PENDING_CALLS_FOR_HELP` | [`moderation.delete_pending_calls_for_help`](./3605-moderation-delete-pending-calls-for-help.md) | Delete pending calls for help | `session` | `nitro-1.6.6` |
| 3742 | `MODTOOL_SANCTION_TRADELOCK` | [`moderation.modtool_sanction_tradelock`](./3742-moderation-modtool-sanction-tradelock.md) | Modtool sanction tradelock | `session` | `nitro-1.6.6` |
| 3786 | `GET_GUIDE_REPORTING_STATUS` | [`moderation.get_guide_reporting_status`](./3786-moderation-get-guide-reporting-status.md) | Get guide reporting status | `session` | `nitro-1.6.6` |
| 3842 | `MODTOOL_ROOM_ALERT` | [`moderation.modtool_room_alert`](./3842-moderation-modtool-room-alert.md) | Modtool room alert | `session` | `nitro-1.6.6` |
| 3899 | `GUIDE_SESSION_MESSAGE` | [`moderation.guide_session_message`](./3899-moderation-guide-session-message.md) | Guide session message | `session` | `nitro-1.6.6` |
| 3961 | `CHAT_REVIEW_GUIDE_VOTE` | [`moderation.chat_review_guide_vote`](./3961-moderation-chat-review-guide-vote.md) | Chat review guide vote | `session` | `nitro-1.6.6` |
| 3969 | `GUIDE_SESSION_REPORT` | [`moderation.guide_session_report`](./3969-moderation-guide-session-report.md) | Guide session report | `session` | `nitro-1.6.6` |

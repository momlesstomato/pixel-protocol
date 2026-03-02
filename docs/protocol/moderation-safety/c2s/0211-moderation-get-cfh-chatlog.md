---
title: moderation.get_cfh_chatlog
sidebar_position: 13
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `211`
- **Header**: `GET_CFH_CHATLOG`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Moderation & Safety
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Request the chat log associated with a call-for-help issue

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `issueId` | `int32` | required | The identifier of the call-for-help issue whose chat log is requested. |

## Behavior

### Sender
The client sends this when a moderator opens the chat log viewer for a particular call-for-help issue.


### Receiver
The server looks up the stored chat records for the given issue and responds with the CFH chat log packet (s2c 607).

## Notes

- No additional notes

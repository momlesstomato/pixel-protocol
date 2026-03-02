---
title: user.in_client_link
sidebar_position: 26
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `2023`
- **Header**: `IN_CLIENT_LINK`
- **Direction**: Server to Client (`s2c`)
- **Realm**: User & Profile
- **Phase**: `session`
- **Since**: `nitro-1.6.6`
- **Summary**: Deliver a link string for the client to dispatch as an event

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `link` | `string` | required | Server-defined link string dispatched as a client event |

## Behavior

### Sender
Sent by the server to push a link string to the client. The client passes the string directly to `Nitro.createLinkEvent`, which dispatches it as an in-client link event. The format and meaning of the link string are server-defined.


### Receiver
The client calls `Nitro.createLinkEvent` with the received string, triggering whatever handler is registered for that link type.

## Notes

- No additional notes

---
title: handshake.release_version
sidebar_position: 17
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Overview

- **ID**: `4000`
- **Header**: `RELEASE_VERSION`
- **Direction**: Client to Server (`c2s`)
- **Realm**: Handshake & Security
- **Phase**: `pre-auth`
- **Since**: `nitro-1.6.6`
- **Summary**: Advertise Nitro release and client platform metadata

## Payload fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `releaseVersion` | `string` | required | Nitro release string, e.g. `NITRO-1-6-6` |
| `clientType` | `string` | required | Client runtime marker, e.g. `HTML5` |
| `platform` | `int32` | required | Client platform enum: 0 = unknown, 1 = Flash, 2 = HTML5 |
| `deviceCategory` | `int32` | required | Client device category enum: 0 = unknown, 1 = browser |

## Behavior

### Sender
The client sends this packet immediately after the WebSocket connection opens, before any other message. It advertises the client build string (e.g. `NITRO-1-6-6`), the runtime type (`HTML5`), and numeric platform and device-category identifiers. This allows the server to gate features or reject incompatible client versions.


### Receiver
The server may read the release string and compare it against a list of supported revisions. If the version is unrecognized the server may disconnect the client. In many implementations the payload is read and silently discarded. No response packet is required.

## Notes

- No additional notes

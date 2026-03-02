---
title: Packet Composition
sidebar_position: 10
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

## Transport and framing

- **Transport**: `websocket`
- **Length prefix**: `length` as `uint32` (big-endian)
- **Encryption mode**: default=disabled, algorithm=rc4, activation=after diffie handshake completion
- **Length includes header**: yes
- **Length includes payload**: yes

## Frame segment order

| Segment | Wire type | Description |
| --- | --- | --- |
| `length` | `uint32` (big-endian) | Message size in bytes, excluding this 4-byte length field |
| `messageId` | `uint16` (big-endian) | Packet header identifier |
| `payload` | `bytes` | Field data serialized in declaration order |

## Notes

- The framing behaviour has been confirmed across four independent implementations (Nitro client, GLADIATOR, GALAXY, and SODIUM).
- All implementations use big-endian primitives.
- String values are encoded as uint16 length prefix followed by UTF-8 bytes.
- Multiple packets can be concatenated inside a single WebSocket frame.
- Diffie-Hellman handshake packets are always sent unencrypted; RC4 encryption may be activated after the handshake completes.

## Primitive types

| Name | Wire representation | Description |
| --- | --- | --- |
| `boolean` | `uint8` | 0=false, 1=true |
| `int32` | `int32` (big-endian) | Signed 32-bit integer |
| `uint16` | `uint16` (big-endian) | Unsigned 16-bit integer |
| `uint32` | `uint32` (big-endian) | Unsigned 32-bit integer |
| `bytes` | `bytes` | Raw byte sequence |

## Composite types

| Name | Description |
| --- | --- |
| `string` | UTF-8 text with uint16 length prefix |
| `list&lt;T&gt;` | Ordered sequence with explicit count prefix |

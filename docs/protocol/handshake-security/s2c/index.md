---
title: Server Packets (s2c)
sidebar_position: 2
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Handshake & Security
- **Total packets**: 5

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 1347 | `HANDSHAKE_INIT_DIFFIE` | [`handshake.init_diffie`](./1347-handshake-init-diffie.md) | Provide signed prime and generator for Diffie-Hellman | `crypto` | `nitro-1.6.6` |
| 1488 | `SECURITY_MACHINE` | [`security.machine_id`](./1488-security-machine-id.md) | Send normalized machine id back to client for storage | `auth` | `nitro-1.6.6` |
| 2491 | `AUTHENTICATED` | [`authentication.ok`](./2491-authentication-ok.md) | Confirm successful SSO authentication | `auth` | `nitro-1.6.6` |
| 3523 | `HANDSHAKE_IDENTITY_ACCOUNT` | [`handshake.identity_accounts`](./3523-handshake-identity-accounts.md) | Provide linked account identities associated with the session | `auth` | `nitro-1.6.6` |
| 3885 | `HANDSHAKE_COMPLETE_DIFFIE` | [`handshake.complete_diffie`](./3885-handshake-complete-diffie.md) | Return server public key and optional encryption flag | `crypto` | `nitro-1.6.6` |

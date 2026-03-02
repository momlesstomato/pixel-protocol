---
title: Client Packets (c2s)
sidebar_position: 1
---

> Generated from `spec/protocol.yaml`. Do not edit by hand.

- **Realm**: Handshake & Security
- **Total packets**: 8

| ID | Header | Packet | Summary | Phase | Since |
| --- | --- | --- | --- | --- | --- |
| 96 | `CLIENT_LATENCY_MEASURE` | [`handshake.client_latency_measure`](./0096-handshake-client-latency-measure.md) | Client latency measure | `session` | `nitro-1.6.6` |
| 773 | `HANDSHAKE_COMPLETE_DIFFIE` | [`handshake.complete_diffie`](./0773-handshake-complete-diffie.md) | Send client public key and complete key exchange | `crypto` | `nitro-1.6.6` |
| 1053 | `CLIENT_VARIABLES` | [`handshake.client_variables`](./1053-handshake-client-variables.md) | Send client resource metadata required by some server revisions | `pre-auth` | `nitro-1.6.6` |
| 2419 | `SECURITY_TICKET` | [`security.sso_ticket`](./2419-security-sso-ticket.md) | Authenticate using the SSO ticket | `auth` | `nitro-1.6.6` |
| 2490 | `SECURITY_MACHINE` | [`security.machine_id`](./2490-security-machine-id.md) | Send machine and fingerprint identifiers | `pre-auth` | `nitro-1.6.6` |
| 3110 | `HANDSHAKE_INIT_DIFFIE` | [`handshake.init_diffie`](./3110-handshake-init-diffie.md) | Request signed Diffie-Hellman parameters from server | `crypto` | `nitro-1.6.6` |
| 4000 | `RELEASE_VERSION` | [`handshake.release_version`](./4000-handshake-release-version.md) | Advertise Nitro release and client platform metadata | `pre-auth` | `nitro-1.6.6` |
| 26979 | `CLIENT_POLICY` | [`handshake.client_policy`](./26979-handshake-client-policy.md) | Client policy | `session` | `nitro-1.6.6` |

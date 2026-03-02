# AGENTS

1. Always use single quotes when possible in JavaScript/TypeScript.
2. Do not use semicolons in JavaScript/TypeScript unless syntax requires it.
3. Packet names follow the convention `realm_prefix.snake_case_name`:
   - Exactly **one dot** separates the realm prefix from the packet name.
   - Both the realm prefix and the packet name use `snake_case` (underscores, no dots inside).
   - Examples: `handshake.client_latency_measure`, `navigator.forward_to_random_promoted_room`, `user.achievement_list`.
   - Multi-word segments within the packet name are joined with underscores, never dots.
   - The realm prefix matches the realm slug (with hyphens replaced by underscores where applicable).
   - This convention applies to every packet `name` field in `spec/protocol.yaml` and must be preserved in all generated docs.

## Analysis sources

Pixel Protocol was built by cross-referencing the **Nitro client** (the primary
packet authority) with three independent server implementations:

| Codename | Original project | Language |
|-----------|-----------------|----------|
| **GLADIATOR** | Private disclosure | Java |
| **GALAXY** | Private disclosure | Java |
| **SODIUM** | Private disclosure | C# |

When the documentation mentions GLADIATOR, GALAXY or SODIUM it refers to these
implementations respectively.

## Workflow rules

- Treat `spec/protocol.yaml` as the protocol source of truth.
- Packet source priority is Nitro client first (`vendor/nitro-renderer`), then vendor server implementations for compatibility notes.
- Every packet must have both a definition in `spec/protocol.yaml` and a generated Markdown page in docs.
- Regenerate protocol docs with `npm run generate` after spec changes.
- Keep generated files deterministic and reviewable in git.

## Documentation rules

- Use only `Pixels` or `Nitro` terminology in user-facing documentation.
- Do not use legacy platform branding terms in user-facing documentation.
- Do not reference legacy emulator project names in user-facing documentation.
- Analysis methodology is internal and should stay in agent workflow only, not in public docs/spec.
- Keep packet docs self-contained and implementation-agnostic.
- **Every packet must document sender and receiver behavior**: describe what the
  sender communicates (intent and trigger) and what the receiver is expected to
  do (validation, state changes, response packets). Use the `sender` and
  `receiver` YAML fields for this.
- **Never reference source code paths or files** in user-facing documentation.
  End users do not have access to the `vendor/` folder or any source code;
  the specification itself is the only deliverable.
- Do not link to Java/C#/TypeScript files, class names or line numbers.
  When crediting a behaviour observation, use the server codename
  (e.g. "confirmed in GLADIATOR") instead of a file path.
- Keep documentation self-contained: every concept needed to implement a
  packet must be fully described in the spec without requiring external code.

## No assumptions in protocol definitions

Every field description, enum value, sender/receiver behavior, and note in
`spec/protocol.yaml` must be derived from verified source code in
`vendor/nitro-renderer` and at least one server implementation. Never invent
or infer information that is not directly confirmed by reading the code.

Violations that are explicitly forbidden:
- Inventing enum values (e.g. "0 = pet, 1 = room, etc.") without reading the
  actual constant definitions.
- Using vague phrases like "e.g.", "such as", "like", "etc." for field values
  or protocol structures unless the examples are read directly from the code.
- Explaining a concept by restating the field name differently without
  describing its actual function (e.g. "Room unit ID of the target user" tells
  the reader nothing about why a room unit ID is used instead of a user ID).
- Writing sender/receiver descriptions that say "may" when the behavior is
  deterministic and observable in the code.
- Assuming a server-side behavior (e.g. "a verification email may be sent")
  that is not confirmed by reading all three server implementations.
- Leaving field descriptions that do not answer "what does this field control
  in the receiver's state machine?"

For every packet, before writing the spec entry:
1. Read the nitro-renderer parser (for S2C) or composer (for C2S) to get the
   exact wire field order and types.
2. Read the event handler or call site to understand what the client does with
   the data.
3. Read the corresponding handler in at least one server implementation to
   confirm receiver behavior.
4. Only then write the description, using only facts confirmed by the code.

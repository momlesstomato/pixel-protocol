# Pixel Protocol

Public Docusaurus-backed specification for the Pixels packet protocol.

## Objective

- Publish a human-readable protocol spec website.
- Keep packet definitions in `spec/protocol.yaml` as source of truth.
- Generate deterministic docs from the same spec.
- Use Nitro behavior as the primary packet reference.

## Project structure

```text
pixel-protocol/
├─ spec/
│  ├─ protocol.yaml
│  └─ protocol.schema.json
├─ tools/
│  └─ generator/
├─ docs/
│  └─ protocol/
│     ├─ client/
│     └─ server/
└─ .github/workflows/deploy.yml
```

## Quick start

```bash
npm install
npm run generate
npm run start
```

## Commands

- `npm run generate`: Generate protocol docs from `spec/protocol.yaml`.
- `npm run start`: Start the local Docusaurus site.
- `npm run build`: Build static site output in `build/`.

## Packet rules

- Every packet must be defined in `spec/protocol.yaml`.
- Every packet gets its own generated Markdown file in docs.
- Regenerate docs after any spec update.

## Deploy

GitHub Pages deploy is configured in `.github/workflows/deploy.yml`.

Before enabling deployment, update:

- `GH_ORG` and `GH_REPO` env vars if your GitHub org/repo differs from defaults.

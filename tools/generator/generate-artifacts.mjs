import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises'
import {parse} from 'yaml'

const filePath = fileURLToPath(import.meta.url)
const toolsDir = path.dirname(filePath)
const rootDir = path.resolve(toolsDir, '../..')

const specPath = path.join(rootDir, 'spec/protocol.yaml')
const packetCompositionDocPath = path.join(rootDir, 'docs/reference/packet-composition.md')
const dataTypesDocPath = path.join(rootDir, 'docs/reference/data-types.md')
const packetCatalogDocPath = path.join(rootDir, 'docs/protocol/packet-catalog.md')
const protocolDir = path.join(rootDir, 'docs/protocol')

function assertArray(value, fieldName) {
  if (!Array.isArray(value)) {
    throw new Error(`Expected ${fieldName} to be an array`)
  }
}

function assertObject(value, fieldName) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error(`Expected ${fieldName} to be an object`)
  }
}

function toDisplay(value) {
  if (value === undefined || value === null || value === '') {
    return '-'
  }

  if (typeof value === 'string') {
    return value
      .replaceAll('|', '\\|')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('\n', '<br/>')
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  return JSON.stringify(value).replaceAll('|', '\\|')
}

function markdownTable(headers, rows) {
  const headerLine = `| ${headers.join(' | ')} |`
  const separatorLine = `| ${headers.map(() => '---').join(' | ')} |`
  const safeRows = rows.length ? rows : [headers.map(() => '-')]
  const bodyLines = safeRows.map((row) => `| ${row.map((cell) => toDisplay(cell)).join(' | ')} |`)

  return [headerLine, separatorLine, ...bodyLines].join('\n')
}

function slugify(value) {
  const normalized = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '')

  return normalized || 'packet'
}

function directionMeta(direction) {
  if (direction === 'c2s') {
    return {
      label: 'Client to Server',
      shortLabel: 'c2s',
      folder: 'c2s',
      title: 'Client Packets (c2s)',
    }
  }

  return {
    label: 'Server to Client',
    shortLabel: 's2c',
    folder: 's2c',
    title: 'Server Packets (s2c)',
  }
}

function normalizePackets(spec) {
  const packets = []

  for (const direction of ['c2s', 's2c']) {
    const directionPackets = spec.packets[direction] ?? []
    assertArray(directionPackets, `packets.${direction}`)

    for (const packet of directionPackets) {
      assertObject(packet, `${direction} packet`)

      const fields = packet.fields ?? []
      assertArray(fields, `${packet.name}.fields`)

      const normalizedFields = fields.map((field, index) => {
        assertObject(field, `${packet.name}.fields[${index}]`)

        return {
          name: field.name,
          type: field.type,
          required: Boolean(field.required),
          description: field.description ?? '-',
        }
      })

      packets.push({
        ...packet,
        id: Number(packet.id),
        direction,
        realm: packet.realm ?? 'uncategorized',
        fields: normalizedFields,
        sender: packet.sender ?? null,
        receiver: packet.receiver ?? null,
      })
    }
  }

  packets.sort((a, b) => {
    if (a.direction !== b.direction) {
      return a.direction === 'c2s' ? -1 : 1
    }

    if (a.id !== b.id) {
      return a.id - b.id
    }

    return String(a.name).localeCompare(String(b.name))
  })

  return packets.map((packet) => ({
    ...packet,
    fileName: `${String(packet.id).padStart(4, '0')}-${slugify(packet.name)}.md`,
  }))
}

function renderEncryptionMode(encrypted) {
  if (typeof encrypted === 'boolean') {
    return encrypted ? 'yes' : 'no'
  }

  if (typeof encrypted === 'string') {
    return encrypted
  }

  if (typeof encrypted === 'object' && encrypted) {
    const details = []

    if (encrypted.default !== undefined) {
      details.push(`default=${encrypted.default ? 'enabled' : 'disabled'}`)
    }

    if (encrypted.algorithm) {
      details.push(`algorithm=${encrypted.algorithm}`)
    }

    if (encrypted.activation) {
      details.push(`activation=${encrypted.activation}`)
    }

    return details.length ? details.join(', ') : 'custom'
  }

  return '-'
}

function generatePacketCompositionDoc(spec) {
  const composition = spec.packetComposition
  const frameRows = (composition.packet ?? []).map((segment) => [
    `\`${segment.name}\``,
    `\`${segment.type}\`${segment.endian ? ` (${segment.endian}-endian)` : ''}`,
    segment.description ?? '-',
  ])

  const noteLines = (composition.notes ?? []).map((note) => `- ${note}`)

  const primitiveRows = (spec.primitiveTypes ?? []).map((entry) => [
    `\`${entry.name}\``,
    `\`${entry.wireType ?? '-'}\`${entry.endian ? ` (${entry.endian}-endian)` : ''}`,
    entry.description ?? '-',
  ])

  const compositeRows = (spec.compositeTypes ?? []).map((entry) => [
    `\`${entry.name}\``,
    entry.description ?? '-',
  ])

  return `---
title: Packet Composition
sidebar_position: 10
---

> Generated from \`spec/protocol.yaml\`. Do not edit by hand.

## Transport and framing

- **Transport**: \`${composition.transport}\`
- **Length prefix**: \`${composition.framing.lengthPrefix.name}\` as \`${composition.framing.lengthPrefix.type}\` (${composition.framing.lengthPrefix.endian}-endian)
- **Encryption mode**: ${renderEncryptionMode(composition.framing.encrypted)}
- **Length includes header**: ${composition.framing.lengthPrefix.includesHeader ? 'yes' : 'no'}
- **Length includes payload**: ${composition.framing.lengthPrefix.includesPayload ? 'yes' : 'no'}

## Frame segment order

${markdownTable(['Segment', 'Wire type', 'Description'], frameRows)}

## Notes

${noteLines.length ? noteLines.join('\n') : '- No notes'}

## Primitive types

${markdownTable(['Name', 'Wire representation', 'Description'], primitiveRows)}

## Composite types

${markdownTable(['Name', 'Description'], compositeRows)}
`
}

function fieldTable(fields) {
  if (!fields.length) {
    return 'No payload fields (header-only packet).'
  }

  const rows = fields.map((field) => [
    `\`${field.name}\``,
    `\`${field.type}\``,
    field.required ? 'required' : 'optional',
    field.description ?? '-',
  ])

  return markdownTable(['Field', 'Type', 'Required', 'Description'], rows)
}

function generatePacketDoc(packet, indexInDirection, realmName) {
  const meta = directionMeta(packet.direction)
  const notes = Array.isArray(packet.notes) && packet.notes.length
    ? packet.notes.map((note) => `- ${note}`).join('\n')
    : '- No additional notes'

  const behaviorSection = (packet.sender || packet.receiver)
    ? `## Behavior

### Sender
${packet.sender ?? '_Not documented._'}

### Receiver
${packet.receiver ?? '_Not documented._'}
`
    : ''

  return `---
title: ${packet.name}
sidebar_position: ${indexInDirection + 10}
---

> Generated from \`spec/protocol.yaml\`. Do not edit by hand.

## Overview

- **ID**: \`${packet.id}\`${packet.header ? `\n- **Header**: \`${packet.header}\`` : ''}
- **Direction**: ${meta.label} (\`${meta.shortLabel}\`)
- **Realm**: ${realmName}
- **Phase**: \`${packet.phase ?? '-'}\`
- **Since**: \`${packet.since}\`
- **Summary**: ${packet.summary}

## Payload fields

${fieldTable(packet.fields)}

${behaviorSection}## Notes

${notes}
`
}

function generateDirectionIndexDoc(direction, packets, realmName) {
  const meta = directionMeta(direction)

  const rows = packets.map((packet) => [
    packet.id,
    packet.header ? `\`${packet.header}\`` : '-',
    `[\`${packet.name}\`](./${packet.fileName})`,
    packet.summary,
    `\`${packet.phase ?? '-'}\``,
    `\`${packet.since}\``,
  ])

  return `---
title: ${meta.title}
sidebar_position: ${direction === 'c2s' ? 1 : 2}
---

> Generated from \`spec/protocol.yaml\`. Do not edit by hand.

- **Realm**: ${realmName}
- **Total packets**: ${packets.length}

${markdownTable(['ID', 'Header', 'Packet', 'Summary', 'Phase', 'Since'], rows)}
`
}

function generatePacketCatalogDoc(packets, realms) {
  const grouped = groupByRealm(packets, realms)

  const sections = Object.entries(grouped)
    .sort(([, a], [, b]) => a.position - b.position)
    .map(([realmSlug, {name, c2s, s2c}]) => {
      const c2sRows = c2s.map((packet) => [
        packet.id,
        packet.header ? `\`${packet.header}\`` : '-',
        `[\`${packet.name}\`](./${realmSlug}/c2s/${packet.fileName})`,
        packet.summary,
        `\`${packet.phase ?? '-'}\``,
      ])

      const s2cRows = s2c.map((packet) => [
        packet.id,
        packet.header ? `\`${packet.header}\`` : '-',
        `[\`${packet.name}\`](./${realmSlug}/s2c/${packet.fileName})`,
        packet.summary,
        `\`${packet.phase ?? '-'}\``,
      ])

      let section = `## ${name}\n\n`

      if (c2s.length) {
        section += `### Client to Server (c2s)\n\n`
        section += `- **Packets**: ${c2s.length}\n\n`
        section += markdownTable(['ID', 'Header', 'Packet', 'Summary', 'Phase'], c2sRows) + '\n\n'
      }

      if (s2c.length) {
        section += `### Server to Client (s2c)\n\n`
        section += `- **Packets**: ${s2c.length}\n\n`
        section += markdownTable(['ID', 'Header', 'Packet', 'Summary', 'Phase'], s2cRows) + '\n\n'
      }

      return section
    })
    .join('')

  const totalC2s = packets.filter((p) => p.direction === 'c2s').length
  const totalS2c = packets.filter((p) => p.direction === 's2c').length

  return `---
title: Packet Catalog
sidebar_position: 1
---

> Generated from \`spec/protocol.yaml\`. Do not edit by hand.

- **Total packets**: ${packets.length} (${totalC2s} c2s, ${totalS2c} s2c)

${sections}
`
}

function groupByRealm(packets, realms) {
  const grouped = {}

  for (const [slug, meta] of Object.entries(realms)) {
    grouped[slug] = {
      name: meta.name,
      description: meta.description ?? '',
      position: meta.position ?? 99,
      c2s: [],
      s2c: [],
    }
  }

  // Fallback realm for packets without a realm
  if (!grouped['uncategorized']) {
    grouped['uncategorized'] = {
      name: 'Uncategorized',
      description: 'Packets without a realm assignment',
      position: 999,
      c2s: [],
      s2c: [],
    }
  }

  for (const packet of packets) {
    const realmSlug = packet.realm ?? 'uncategorized'

    if (!grouped[realmSlug]) {
      grouped[realmSlug] = {
        name: realmSlug,
        description: '',
        position: 99,
        c2s: [],
        s2c: [],
      }
    }

    grouped[realmSlug][packet.direction].push(packet)
  }

  // Remove empty realms
  for (const [slug, data] of Object.entries(grouped)) {
    if (!data.c2s.length && !data.s2c.length) {
      delete grouped[slug]
    }
  }

  return grouped
}

async function cleanRealmDirs(realms) {
  // Remove old flat client/server dirs
  const oldClientDir = path.join(protocolDir, 'client')
  const oldServerDir = path.join(protocolDir, 'server')
  await rm(oldClientDir, {recursive: true, force: true})
  await rm(oldServerDir, {recursive: true, force: true})

  // Remove old packet-realms doc
  const oldPacketRealmsPath = path.join(protocolDir, 'packet-realms.md')
  await rm(oldPacketRealmsPath, {force: true})

  // Remove existing realm directories
  let entries = []
  try {
    entries = await readdir(protocolDir, {withFileTypes: true})
  } catch {
    // directory may not exist yet
  }

  for (const entry of entries) {
    if (entry.isDirectory() && Object.keys(realms).includes(entry.name)) {
      await rm(path.join(protocolDir, entry.name), {recursive: true, force: true})
    }
  }
}

async function writeRealmDocs(packets, realms) {
  const grouped = groupByRealm(packets, realms)

  for (const [realmSlug, data] of Object.entries(grouped)) {
    const realmDir = path.join(protocolDir, realmSlug)
    await mkdir(realmDir, {recursive: true})

    // Write _category_.json for realm
    await writeFile(
      path.join(realmDir, '_category_.json'),
      JSON.stringify({label: data.name, position: data.position}, null, 2) + '\n',
    )

    for (const direction of ['c2s', 's2c']) {
      const dirPackets = data[direction]
      if (!dirPackets.length) continue

      const meta = directionMeta(direction)
      const dirDir = path.join(realmDir, meta.folder)
      await mkdir(dirDir, {recursive: true})

      // Write _category_.json for direction
      await writeFile(
        path.join(dirDir, '_category_.json'),
        JSON.stringify({
          label: meta.title,
          position: direction === 'c2s' ? 1 : 2,
        }, null, 2) + '\n',
      )

      // Write index doc
      const indexPath = path.join(dirDir, 'index.md')
      await writeFile(indexPath, generateDirectionIndexDoc(direction, dirPackets, data.name))

      // Write individual packet docs
      for (const [index, packet] of dirPackets.entries()) {
        const packetPath = path.join(dirDir, packet.fileName)
        await writeFile(packetPath, generatePacketDoc(packet, index + 1, data.name))
      }
    }
  }
}

async function main() {
  const content = await readFile(specPath, 'utf8')
  const spec = parse(content)

  assertObject(spec, 'spec')
  assertObject(spec.packetComposition, 'packetComposition')
  assertObject(spec.packetComposition.framing, 'packetComposition.framing')
  assertObject(spec.packetComposition.framing.lengthPrefix, 'packetComposition.framing.lengthPrefix')
  assertArray(spec.packetComposition.packet, 'packetComposition.packet')
  assertArray(spec.primitiveTypes, 'primitiveTypes')
  assertArray(spec.compositeTypes, 'compositeTypes')
  assertObject(spec.packets, 'packets')
  assertObject(spec.realms, 'realms')

  const packets = normalizePackets(spec)
  const realms = spec.realms

  await mkdir(path.dirname(packetCompositionDocPath), {recursive: true})
  await mkdir(protocolDir, {recursive: true})

  await writeFile(packetCompositionDocPath, generatePacketCompositionDoc(spec))
  await writeFile(packetCatalogDocPath, generatePacketCatalogDoc(packets, realms))

  await cleanRealmDirs(realms)
  await writeRealmDocs(packets, realms)

  console.log('Generated protocol docs from spec/protocol.yaml')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

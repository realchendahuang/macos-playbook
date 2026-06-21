import { readFile, writeFile } from 'node:fs/promises'

const sourcePath = new URL('../docs/index.md', import.meta.url)
const readmePath = new URL('../README.md', import.meta.url)

const readmeIntro = `# macOS Playbook

个人 macOS 使用经验记录。从零上手到用顺手——一份写给普通人的 macOS 实战指南。

在线阅读：[macos-playbook.chendahuang.top](https://macos-playbook.chendahuang.top/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[macOS Playbook] --> B[软件推荐]
  A --> C[macOS 上手]
  A --> D[跨设备协作]
  A --> E[效率工具链]
  A --> F[开发与 AI]
  A --> G[系统维护与排查]
  A --> H[安全与备份]
  A --> I[换机与迁移]
\`\`\`
`

const toc = `## 目录

- [1. 软件推荐](#1-软件推荐)
- [2. macOS 上手](#2-macos-上手)
- [3. 跨设备协作](#3-跨设备协作)
- [4. 效率工具链](#4-效率工具链)
- [5. 开发与 AI](#5-开发与-ai)
- [6. 系统维护与故障排查](#6-系统维护与故障排查)
- [7. 安全与备份](#7-安全与备份)
- [8. 换机与迁移](#8-换机与迁移)
`

const source = await readFile(sourcePath, 'utf8')
const body = source
  // 去掉 VitePress frontmatter。
  .replace(/^---\n[\s\S]*?\n---\n+/, '')
  // 去掉 Vue 图标 import。
  .replace(/<script setup>[\s\S]*?<\/script>\n+/g, '')
  // README 只保留完整正文，网页首屏和快捷入口交给 VitePress 渲染。
  .replace(/<!-- README:START_HIDDEN -->[\s\S]*?<!-- README:END_HIDDEN -->\n+/g, '')
  // GitHub README 不渲染 Vue 组件，把标题里的图标组件去掉。
  .replace(/^(#{3,4})\s+<[^>]+class="cat-icon"[^>]*\/>\s+/gm, '$1 ')
  // GitHub 不需要 VitePress 的自定义标题锚点。
  .replace(/[ \t]+\{#[^}]+}[ \t]*$/gm, '')
  // VitePress 自定义容器转成 GitHub blockquote。
  // ::: tip / ::: info → > **提示**
  // ::: warning → > **注意**
  // ::: danger → > **警告**
  // ::: details → > **详情**
  .replace(/::: tip\n([\s\S]*?)\n:::/g, (_, content) => `> **提示**\n>\n> ${content.replace(/\n/g, '\n> ')}`)
  .replace(/::: info\n([\s\S]*?)\n:::/g, (_, content) => `> **说明**\n>\n> ${content.replace(/\n/g, '\n> ')}`)
  .replace(/::: warning\n([\s\S]*?)\n:::/g, (_, content) => `> **注意**\n>\n> ${content.replace(/\n/g, '\n> ')}`)
  .replace(/::: danger\n([\s\S]*?)\n:::/g, (_, content) => `> **警告**\n>\n> ${content.replace(/\n/g, '\n> ')}`)
  .replace(/::: details\n([\s\S]*?)\n:::/g, (_, content) => `> **详情**\n>\n> ${content.replace(/\n/g, '\n> ')}`)
  .trim()

await writeFile(readmePath, `${readmeIntro}\n${toc}\n${body}\n`, 'utf8')

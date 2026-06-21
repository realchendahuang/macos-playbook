import { readFile, writeFile } from 'node:fs/promises'

const sourcePath = new URL('../docs/index.md', import.meta.url)
const readmePath = new URL('../README.md', import.meta.url)

const readmeIntro = `# macOS 高效使用手册

别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。

在线阅读：[macos-best-practices.chendahuang.top](https://macos-best-practices.chendahuang.top/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[macOS 高效使用] --> B[迁移心智]
  A --> C[系统模型]
  A --> D[快捷键]
  A --> E[日常效率]
  A --> F[开发与 AI Coding]
  A --> G[工具与排障]
\`\`\`
`

const toc = `## 目录

- [1. 从 Windows 切到 macOS](#1-从-windows-切到-macos)
- [2. macOS 心智模型](#2-macos-心智模型)
- [3. 快捷键基础](#3-快捷键基础)
- [4. 日常效率](#4-日常效率)
- [5. 终端、开发与 AI Coding](#5-终端开发与-ai-coding)
- [6. 软件选择与常见问题](#6-软件选择与常见问题)
- [官方资料](#官方资料)
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
  .trim()

await writeFile(readmePath, `${readmeIntro}\n${toc}\n${body}\n`, 'utf8')

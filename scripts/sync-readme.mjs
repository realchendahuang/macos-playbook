import { readFile, writeFile } from 'node:fs/promises'

const sourcePath = new URL('../docs/index.md', import.meta.url)
const readmePath = new URL('../README.md', import.meta.url)

const readmeIntro = `# macOS Playbook

别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。

在线阅读：[macos-playbook.chendahuang.top](https://macos-playbook.chendahuang.top/)

## 全景图

\`\`\`mermaid
flowchart TD
  A[macOS Playbook] --> B[迁移心智]
  A --> C[系统模型]
  A --> D[日常效率]
  A --> E[开发与 AI Coding]
  A --> F[安全备份]
  A --> G[工具边界]
\`\`\`
`

const toc = `## 目录

- [1. 新手路线图](#1-新手路线图)
- [2. 从 Windows 切到 macOS](#2-从-windows-切到-macos)
- [3. macOS 心智模型](#3-macos-心智模型)
- [4. 初次设置清单](#4-初次设置清单)
- [5. 快捷键体系](#5-快捷键体系)
- [6. Finder 与文件管理](#6-finder-与文件管理)
- [7. 窗口、桌面空间与多任务](#7-窗口桌面空间与多任务)
- [8. Spotlight 与搜索启动](#8-spotlight-与搜索启动)
- [9. 截图、录屏、输入与文本](#9-截图录屏输入与文本)
- [10. 终端、开发与 AI Coding](#10-终端开发与-ai-coding)
- [11. 安全、隐私、备份与存储](#11-安全隐私备份与存储)
- [12. 软件选择边界](#12-软件选择边界)
- [13. 常见问题排查](#13-常见问题排查)
- [14. 官方资料与延伸阅读](#14-官方资料与延伸阅读)
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

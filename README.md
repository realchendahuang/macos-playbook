# macOS Playbook

个人 macOS 使用经验记录。从零上手到用顺手——踩过的坑、用顺手的工具、形成的习惯都在这。

在线阅读：[chendahuang.com/playbook/macos](https://chendahuang.com/playbook/macos/)

## 全景图

```mermaid
flowchart TD
  A[macOS Playbook] --> B[软件推荐]
  A --> C[macOS 上手]
  A --> D[跨设备协作]
  A --> E[效率工具链]
  A --> F[开发与 AI]
  A --> G[系统维护与排查]
  A --> H[安全与备份]
  A --> I[换机与迁移]
```

## 目录

- [1. 软件推荐](#1-软件推荐)
- [2. macOS 上手](#2-macos-上手)
- [3. 跨设备协作](#3-跨设备协作)
- [4. 效率工具链](#4-效率工具链)
- [5. 开发与 AI](#5-开发与-ai)
- [6. 系统维护与故障排查](#6-系统维护与故障排查)
- [7. 安全与备份](#7-安全与备份)
- [8. 换机与迁移](#8-换机与迁移)

<main class="playbook-home">
  <section class="playbook-hero">
    <div>
      <h1>macOS 使用手册</h1>
      <p>从软件选择到维护换机，把 Mac 用顺、用稳、用得更久。</p>
    </div>
    <div class="playbook-actions">
      <a class="playbook-action primary" href="./chapters/01-software"><span>开始阅读</span><svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      <a class="playbook-action" href="#chapters"><span>查看全部章节</span><svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
    </div>
  </section>

  <section class="playbook-section" id="chapters">
    <div class="playbook-section-head">
      <h2>按任务开始</h2>
      <p>选择当前最需要解决的问题，直接进入对应章节。</p>
    </div>
    <div class="chapter-list">
  <a class="chapter-link" href="./chapters/01-software">
    <span class="chapter-number">01</span>
    <span class="chapter-copy"><strong class="chapter-title">## 1. 软件推荐</strong><span class="chapter-description">按用途挑选真正值得安装的软件和工具。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/02-getting-started">
    <span class="chapter-number">02</span>
    <span class="chapter-copy"><strong class="chapter-title">## 2. macOS 上手</strong><span class="chapter-description">完成 Windows 转换、系统设置与日常操作。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/03-ecosystem">
    <span class="chapter-number">03</span>
    <span class="chapter-copy"><strong class="chapter-title">## 3. 跨设备协作</strong><span class="chapter-description">用接力、剪贴板、随航、AirDrop 和安卓联动跨设备工作。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/04-productivity">
    <span class="chapter-number">04</span>
    <span class="chapter-copy"><strong class="chapter-title">## 4. 效率工具链</strong><span class="chapter-description">组合 Raycast、快捷指令与窗口管理提升效率。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/05-development-ai">
    <span class="chapter-number">05</span>
    <span class="chapter-copy"><strong class="chapter-title">## 5. 开发与 AI</strong><span class="chapter-description">配置终端、Git、SSH、本地 AI 与 AI Coding。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/06-maintenance">
    <span class="chapter-number">06</span>
    <span class="chapter-copy"><strong class="chapter-title">## 6. 系统维护与故障排查</strong><span class="chapter-description">处理活动监视器、磁盘、网络、更新与常见故障。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/07-security-backup">
    <span class="chapter-number">07</span>
    <span class="chapter-copy"><strong class="chapter-title">## 7. 安全与备份</strong><span class="chapter-description">管理权限、加密、密码与 3-2-1 备份。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
  <a class="chapter-link" href="./chapters/08-migration">
    <span class="chapter-number">08</span>
    <span class="chapter-copy"><strong class="chapter-title">## 8. 换机与迁移</strong><span class="chapter-description">完成新机设置、旧机迁移、重装与出二手。</span></span>
    <svg class="chapter-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </a>
    </div>
  </section>

  <section class="playbook-section">
    <div class="playbook-section-head">
      <h2>全部 Playbook</h2>
      <p>同一套阅读系统，各自保留一个清晰主题。</p>
    </div>
    <nav class="playbook-family" aria-label="全部 Playbook">
      <a class="playbook-family-link" href="https://chendahuang.com/playbook/cloudflare/"><strong>Cloudflare</strong><span>开发、部署与生产运维</span></a>
      <a class="playbook-family-link" href="https://chendahuang.com/playbook/codex/"><strong>Codex</strong><span>长期协作与可靠交付</span></a>
      <a class="playbook-family-link" href="https://chendahuang.com/playbook/feishu/"><strong>飞书</strong><span>协作、AI 与 Agent 工作流</span></a>
      <a class="playbook-family-link" href="https://chendahuang.com/playbook/macos/"><strong>macOS</strong><span>软件、效率与系统维护</span></a>
    </nav>
  </section>
</main>

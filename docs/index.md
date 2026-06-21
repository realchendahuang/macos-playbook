---
title: macOS Playbook
outline: deep
---

<script setup>
import { Code, Command, Compass, Folder, Keyboard, Monitor, Search, Settings, Shield } from 'lucide-vue-next'
</script>

<!-- README:START_HIDDEN -->
<section class="onepage-hero">
  <p class="onepage-kicker">macOS Playbook</p>
  <h1 class="onepage-title">macOS 高效使用手册</h1>
  <p class="onepage-subtitle">别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。先理解系统，再形成自己的工作流。</p>
</section>

<div class="quick-grid">
  <a href="#roadmap"><div class="card-icon"><Compass /></div><div class="card-body"><strong>路线图</strong><span>先学什么、后学什么</span></div></a>
  <a href="#windows-to-macos"><div class="card-icon"><Monitor /></div><div class="card-body"><strong>迁移心智</strong><span>从 Windows 习惯切到 Mac 逻辑</span></div></a>
  <a href="#mental-model"><div class="card-icon"><Settings /></div><div class="card-body"><strong>系统模型</strong><span>应用、窗口、菜单栏、Dock</span></div></a>
  <a href="#shortcuts"><div class="card-icon"><Keyboard /></div><div class="card-body"><strong>快捷键</strong><span>按场景掌握高频操作</span></div></a>
  <a href="#finder"><div class="card-icon"><Folder /></div><div class="card-body"><strong>Finder</strong><span>文件、路径、预览、标签</span></div></a>
  <a href="#window-spaces"><div class="card-icon"><Monitor /></div><div class="card-body"><strong>多任务</strong><span>窗口、桌面空间、外接屏</span></div></a>
  <a href="#spotlight"><div class="card-icon"><Search /></div><div class="card-body"><strong>搜索启动</strong><span>Spotlight、设置、文件</span></div></a>
  <a href="#capture-input"><div class="card-icon"><Command /></div><div class="card-body"><strong>输入与截图</strong><span>截图、录屏、文本编辑</span></div></a>
  <a href="#terminal-ai-coding"><div class="card-icon"><Code /></div><div class="card-body"><strong>开发与 AI</strong><span>终端、Git、SSH、路径</span></div></a>
  <a href="#security-backup"><div class="card-icon"><Shield /></div><div class="card-body"><strong>安全备份</strong><span>权限、FileVault、Time Machine</span></div></a>
</div>
<!-- README:END_HIDDEN -->

> 别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。

这不是软件合集，而是一份单页版 macOS 使用最佳实践手册。它解决的问题是：一个人买了 Mac 之后，如何理解 macOS，如何从 Windows 心智切换过来，如何掌握快捷键、Finder、窗口、Spotlight、终端、安全、备份和 AI Coding 工作流。

## 1. 新手路线图 {#roadmap}

macOS 不难，但它不是换了皮的 Windows。先把常用入口和系统模型弄顺，再慢慢补工具。

| 阶段 | 目标 | 先练什么 |
| --- | --- | --- |
| 前 30 分钟 | 能正常打开、切换、关闭和查找 | `Command + Space`、`Command + Tab`、`Command + Q`、Finder、截图 |
| 第 1 天 | 不再用 Windows 习惯硬套 Mac | App/窗口区别、菜单栏、Dock、Spotlight、触控板手势 |
| 第 1 周 | 建立自己的日常工作流 | Finder 路径、桌面空间、文本编辑快捷键、截图分享、备份 |
| 第 1 个月 | 进入稳定生产状态 | 终端、Homebrew、Git、SSH、权限管理、AI Coding |

最小学习顺序：

1. 先学 `Command`、`Option`、`Control` 这三个键的角色。
2. 再学 Finder、Spotlight、菜单栏、Dock 各自负责什么。
3. 然后学窗口和桌面空间，不要一上来装窗口管理软件。
4. 最后再补终端、Homebrew、Git、SSH 和 AI Coding。

## 2. 从 Windows 切到 macOS {#windows-to-macos}

很多人刚换 Mac 难受，不是因为 macOS 难用，而是还在用 Windows 的习惯解释它。先把下面这些概念换掉，后面的操作都会顺很多。

| Windows 习惯 | macOS 对应理解 |
| --- | --- |
| `Ctrl` 是主操作键 | `Command` 是主操作键 |
| `Alt` 是替代操作 | `Option` 是隐藏能力键 |
| 开始菜单是启动入口 | `Spotlight` 是默认启动入口 |
| 资源管理器负责文件 | `Finder` 负责文件、预览、搜索、标签和拖拽 |
| 任务栏代表窗口 | `Dock` 主要代表 App、常驻入口和运行状态 |
| `Alt + Tab` 切所有窗口 | `Command + Tab` 切 App，`Command + 反引号` 切同一 App 窗口 |
| 关闭窗口就是结束 | 关窗口不一定退出 App，退出是 `Command + Q` |
| 系统设置只是开关集合 | 系统设置是权限、输入、显示、触控板、隐私的总控制台 |

最先改掉这 10 个习惯：

1. 不要总去 Dock 点图标，先练 `Command + Space` 打开 App。
2. 不要把 `Command + Tab` 当成 Windows 的 `Alt + Tab`，它切的是 App。
3. 不要以为点红色关闭按钮就退出软件，真正退出是 `Command + Q`。
4. 不要把所有文件扔桌面，先用 Finder 的“下载、文稿、桌面、标签”分区。
5. 不要在 App 里乱找功能，先看屏幕顶部菜单栏。
6. 不要死记快捷键大全，先记高频场景里的 30 个。
7. 不要每次截图都找工具，先用系统截图面板 `Command + Shift + 5`。
8. 不要把全屏当成唯一多任务方式，先理解 Mission Control 和桌面空间。
9. 不要盲目装一堆增强软件，先确认系统能力够不够。
10. 不要忽视终端、路径和 Git，它们是 AI Coding 的底层语言。

## 3. macOS 心智模型 {#mental-model}

macOS 的核心不是“窗口”，而是“应用 + 文档 + 系统服务”。把这个想清楚，你会知道为什么菜单栏一直在屏幕顶部，为什么 Finder 不只是资源管理器，为什么 Spotlight 是最舒服的启动方式。

| 对象 | 它是什么 | 正确用法 |
| --- | --- | --- |
| App | 一个正在运行或可启动的软件 | 用 `Command + Tab` 切换，用 `Command + Q` 退出 |
| 窗口 | App 打开的某个工作界面 | 用 `Command + W` 关闭，用 `Command + 反引号` 切换 |
| 文档 | App 正在编辑或查看的对象 | 保存、另存、导出、分享通常都在菜单栏 |
| 菜单栏 | 当前 App 的功能地图 | 找命令、看快捷键、进入偏好设置 |
| Dock | 常用 App 和正在运行 App 的入口 | 放少量固定 App，不把它当开始菜单 |
| Spotlight | 系统级启动器和搜索入口 | 启动 App、搜文件、查设置、计算 |
| Finder | 文件系统入口 | 管文件、预览、搜索、标签、拖拽 |
| Mission Control | 工作上下文管理器 | 管窗口、桌面空间、全屏 App |
| 系统设置 | 系统行为和权限入口 | 键盘、触控板、显示器、隐私、安全都在这里 |

常用判断：

| 你想做什么 | 用什么 |
| --- | --- |
| 关掉当前文档或窗口 | `Command + W` |
| 隐藏当前 App | `Command + H` |
| 最小化当前窗口 | `Command + M` |
| 完全退出当前 App | `Command + Q` |
| 强制退出卡死的 App | `Option + Command + Esc` |
| 找不到某个功能 | 看屏幕顶部菜单栏 |
| 找不到某个文件 | Finder 搜索或 Spotlight |
| 想切换工作上下文 | Mission Control 或桌面空间 |

## 4. 初次设置清单 {#first-setup}

新 Mac 不需要一上来装很多软件。先把系统设置调顺，后面会少很多别扭。

| 设置项 | 建议 | 为什么 |
| --- | --- | --- |
| Apple ID / iCloud | 登录，但按需打开同步项 | 先保证钥匙串、照片、桌面文稿、查找设备这些边界清楚 |
| 触控板 | 打开轻点点按、三指拖移按需开启 | 触控板是 Mac 交互核心，先适应手势 |
| 键盘 | 检查输入法、修饰键、功能键行为 | 外接键盘常见 `Command` / `Option` 位置不顺 |
| Dock | 只保留高频 App，关闭不必要放大效果 | Dock 是入口，不是软件仓库 |
| Finder | 显示路径栏、状态栏、侧边栏、扩展名 | 文件路径、空间占用、后缀名对日常和开发都很重要 |
| 截图 | 设置保存位置，确认 `Command + Shift + 5` 可用 | 截图是沟通、教程和 AI 协作的基础 |
| 安全 | 设置锁屏密码、Touch ID、FileVault | 先保护设备和本地数据 |
| 备份 | 配 Time Machine 或明确云同步边界 | iCloud 不是完整备份，Time Machine 才是回滚机制 |

最容易忽略的三件事：

1. 外接键盘不顺时，先去系统设置里改修饰键，不要硬适应。
2. 触控板手势不会时，先在系统设置里逐项看动画说明。
3. Finder 不显示路径和扩展名时，很多文件问题会被隐藏起来。

## 5. 快捷键体系 {#shortcuts}

macOS 快捷键不要背成大全，要按场景记。先掌握修饰键的分工，再把高频操作练成肌肉记忆。

| 键 | 核心角色 | 典型例子 |
| --- | --- | --- |
| `Command` | 主操作键 | 复制、粘贴、保存、切换、退出 |
| `Option` | 隐藏能力键 | 按词移动、显示替代菜单、复制路径 |
| `Control` | 系统和终端控制键 | 右键菜单、终端中断、部分文本编辑 |
| `Shift` | 反向、扩展、选择 | 反向切换、扩大选择范围 |
| `Fn` / `Globe` | 输入和系统功能键 | 表情、听写、功能键、输入法切换 |

必须先会的快捷键：

| 场景 | 快捷键 |
| --- | --- |
| 打开 Spotlight | `Command + Space` |
| 切换 App | `Command + Tab` |
| 切同一 App 的窗口 | `Command + 反引号` |
| 关闭当前窗口 | `Command + W` |
| 退出当前 App | `Command + Q` |
| 打开当前 App 设置 | `Command + ,` |
| 跳到行首 / 行尾 | `Command + 左/右箭头` |
| 按词移动 | `Option + 左/右箭头` |
| 按词选择 | `Shift + Option + 左/右箭头` |
| 删除左侧一个词 | `Option + Delete` |
| 截全屏 | `Command + Shift + 3` |
| 截区域 | `Command + Shift + 4` |
| 截图和录屏面板 | `Command + Shift + 5` |
| 前往文件夹 | `Command + Shift + G` |
| 显示隐藏文件 | `Command + Shift + .` |
| 预览文件 | `Space` |
| 复制文件路径 | `Option + Command + C` |

练习方式：

```text
今天只练 5 个：
Command + Space
Command + Tab
Command + W
Command + Q
Command + Shift + 5
```

## 6. Finder 与文件管理 {#finder}

Finder 是 macOS 文件工作流的中心。先打开路径栏、状态栏、侧边栏和预览栏。路径栏尤其重要，AI Coding、终端、截图教程都依赖准确路径。

| 场景 | 操作 |
| --- | --- |
| 预览文件 | 选中文件后按 `Space` |
| 重命名文件 | 选中文件后按 `Return` |
| 前往指定路径 | `Command + Shift + G` |
| 显示隐藏文件 | `Command + Shift + .` |
| 移动文件 | `Command + C` 后 `Option + Command + V` |
| 删除文件 | `Command + Delete` |
| 复制路径名 | `Option + Command + C` |
| 新建文件夹 | `Command + Shift + N` |
| 新开 Finder 窗口 | `Command + N` |
| 新开标签页 | `Command + T` |

建议这样组织文件：

| 区域 | 放什么 | 注意 |
| --- | --- | --- |
| 桌面 | 临时工作区 | 不要长期堆文件 |
| 下载 | 临时入口 | 每周清一次 |
| 文稿 | 长期文件 | 用项目或主题分文件夹 |
| iCloud Drive | 多设备同步文件 | 同步不是备份，要小心大文件 |
| 外接硬盘 | 归档、素材、备份 | 重要数据至少两份 |
| 项目目录 | 代码和可复现资料 | 给 AI 或终端时用绝对路径 |

文件名建议：

```text
2026-06-21-macos-playbook-outline.md
2026-06-21-client-feedback.pdf
project-name-meeting-notes.md
```

少用“最终版”“最终最终版”这种名字。日期、项目名、用途比情绪更可靠。

## 7. 窗口、桌面空间与多任务 {#window-spaces}

Mac 新用户最容易卡在窗口管理上。关键是先分清 App 和窗口，再决定什么时候用最小化、隐藏、全屏、分屏、桌面空间或第三方窗口管理工具。

| 操作 | 适合场景 | 快捷键或入口 |
| --- | --- | --- |
| 关闭窗口 | 关掉当前文档或页面 | `Command + W` |
| 隐藏 App | 暂时清屏但保留状态 | `Command + H` |
| 最小化窗口 | 临时收起单个窗口 | `Command + M` |
| 切换 App | 在 App 之间切换 | `Command + Tab` |
| 切同 App 窗口 | 同一个 App 有多个窗口 | `Command + 反引号` |
| Mission Control | 看全部窗口和桌面空间 | 触控板三/四指上滑 |
| 桌面空间 | 按任务分上下文 | Mission Control 顶部添加 |

推荐的桌面空间：

```text
桌面 1：浏览器 + 笔记
桌面 2：编辑器 + 终端 + AI Coding
桌面 3：会议 + 资料
全屏：需要专注的写作或演示
```

外接显示器时的原则：

1. 固定一个主工作屏，不要每个屏都放一点核心任务。
2. 浏览器、编辑器、终端尽量固定位置，减少寻找成本。
3. 如果每天都在手动拖窗口，再考虑 Rectangle、Loop、Magnet 这类工具。

## 8. Spotlight 与搜索启动 {#spotlight}

`Command + Space` 应该成为默认入口。它不是普通搜索框，而是系统级启动器。

Spotlight 可以做这些事：

| 需求 | 输入示例 |
| --- | --- |
| 打开 App | `safari`、`terminal`、`系统设置` |
| 搜文件 | 文件名、关键词、后缀 |
| 查设置 | `键盘`、`显示器`、`隐私` |
| 简单计算 | `128*7` |
| 单位换算 | `10 usd`、`20 cm` |
| 查词 | 英文单词或短语 |

什么时候用第三方启动器：

| 情况 | 先用 Spotlight | 可以考虑 Raycast / Alfred |
| --- | --- | --- |
| 打开 App | 足够 | 不需要 |
| 搜系统设置 | 足够 | 不需要 |
| 剪贴板历史 | 不够 | 可以 |
| 快速脚本 | 不够 | 可以 |
| 团队工作流 | 不够 | 可以 |
| 插件生态 | 不够 | 可以 |

原则很简单：如果你只是打开 App 和搜文件，Spotlight 先用熟。

## 9. 截图、录屏、输入与文本 {#capture-input}

截图、录屏和文本编辑是 Mac 日常沟通的基本功。教程、报错、AI 提问、会议记录都会用到。

### <Command class="cat-icon" /> 截图和录屏 {#screenshot-recording}

| 场景 | 快捷键 |
| --- | --- |
| 截全屏 | `Command + Shift + 3` |
| 截区域 | `Command + Shift + 4` |
| 截窗口 | `Command + Shift + 4` 后按 `Space` |
| 打开截图和录屏面板 | `Command + Shift + 5` |
| 复制截图到剪贴板 | 在截图快捷键里加按 `Control` |

给 AI 看截图时，最好补三句话：

```text
我现在在哪个 App：Safari
我想完成什么：把页面导出成 PDF
异常是什么：菜单里找不到导出选项
```

### <Keyboard class="cat-icon" /> 输入法、听写和文本替换 {#input-text}

| 需求 | 系统能力 | 什么时候加工具 |
| --- | --- | --- |
| 中英文输入 | 系统输入法 | 特定词库、语音输入、专业输入习惯 |
| 表情符号 | `Fn` / `Globe` 或 `Control + Command + Space` | 不需要 |
| 听写 | 系统听写 | 大量长文本口述时再考虑专门工具 |
| 常用短语 | 文本替换 | 需要复杂模板时再上剪贴板或启动器 |
| 光标移动 | `Command` / `Option` + 方向键 | 不需要 |

文本编辑快捷键：

| 场景 | 快捷键 |
| --- | --- |
| 跳到行首 / 行尾 | `Command + 左/右箭头` |
| 跳到文档开头 / 结尾 | `Command + 上/下箭头` |
| 按词移动 | `Option + 左/右箭头` |
| 按词选择 | `Shift + Option + 左/右箭头` |
| 删除左侧一个词 | `Option + Delete` |
| 删除到行首 | `Command + Delete` |

## 10. 终端、开发与 AI Coding {#terminal-ai-coding}

终端不是黑客玩具，它是 macOS 和开发工具之间的命令入口。只要开始用 AI Coding，就应该理解路径、Shell、Homebrew、PATH、Git 和 SSH。

| 词 | 普通解释 |
| --- | --- |
| Terminal | 打开命令行的 App |
| Shell | 接收命令并执行的程序，macOS 默认常见是 zsh |
| 当前目录 | 命令现在所在的位置 |
| PATH | 系统查找命令的位置列表 |
| Homebrew | macOS 常用包管理器 |
| Git | 代码版本管理工具 |
| SSH | 远程登录和代码平台认证常用协议 |

最小命令集：

```bash
# 查看当前目录
pwd

# 列出当前目录文件
ls

# 进入某个目录
cd /Users/kim/code/macos-playbook

# 查看当前 Git 状态
git status
```

AI Coding 的稳定闭环：

```text
描述目标
  ↓
AI 读文件
  ↓
AI 修改
  ↓
运行验证
  ↓
你看 diff
  ↓
提交
```

给 AI 的信息越具体，结果越稳：

```text
项目目录：/Users/kim/code/macos-playbook
目标：把本站改成 macOS 单页手册
限制：不要拆二级页面
验证：最后运行 pnpm run build
```

报错时优先复制文本，不要只发截图：

```text
我运行的命令：
pnpm run build

报错内容：
粘贴完整错误

我期望：
构建通过
```

开发环境最小清单：

| 能力 | 工具 | 判断 |
| --- | --- | --- |
| 包管理 | Homebrew | 安装 CLI 和开发工具 |
| 版本管理 | Git | 所有代码项目都应该进 Git |
| 代码编辑 | VS Code / Cursor | AI Coding 主要工作区 |
| 远程认证 | SSH key | GitHub、服务器、自动化常用 |
| 运行验证 | 项目自己的脚本 | `pnpm run build`、`pnpm test`、`npm run lint` |

## 11. 安全、隐私、备份与存储 {#security-backup}

Mac 很多安全能力是系统级的，不需要靠清理软件和管家软件堆出来。先把系统自带能力用好。

| 目标 | 系统能力 | 建议 |
| --- | --- | --- |
| 防止别人打开电脑 | 锁屏密码、Touch ID、Apple Watch 解锁 | 离开座位自动锁屏 |
| 保护磁盘数据 | FileVault | 笔记本建议开启 |
| 控制 App 权限 | 隐私与安全性 | 摄像头、麦克风、屏幕录制、辅助功能要逐项看 |
| 防止乱装软件 | Gatekeeper、公证、隐私提示 | 不随便绕过安全提示 |
| 找回设备 | Find My | 登录 Apple ID 后确认打开 |
| 回滚文件 | Time Machine | 重要机器一定要有备份 |

备份要分清三件事：

| 类型 | 解决什么 | 不能解决什么 |
| --- | --- | --- |
| iCloud 同步 | 多设备访问同一份文件 | 误删、误覆盖、项目依赖回滚 |
| Time Machine | 整机或文件历史回滚 | 异地灾备 |
| 手动归档 | 大文件、项目交付、冷资料 | 自动化回滚 |

空间不够时先看这几个地方：

1. 下载目录。
2. 废纸篓。
3. 视频、录屏、截图。
4. 旧安装包。
5. Xcode、Docker、项目依赖缓存。
6. iPhone / iPad 备份。

不要把“清理软件一扫”当成空间治理。先知道空间被谁占了，再决定删什么。

## 12. 软件选择边界 {#tools-boundary}

软件推荐可以有，但不能喧宾夺主。先理解系统能力，再选择工具。第三方软件只负责补足系统短板，不负责替你理解 macOS。

| 类型 | 系统自带能力 | 什么时候需要第三方 |
| --- | --- | --- |
| 启动器 | Spotlight | 需要剪贴板、脚本、扩展和团队工作流 |
| 窗口管理 | Mission Control、分屏、平铺 | 高频外接屏、固定窗口布局 |
| 剪贴板 | 基础复制粘贴 | 需要历史记录和多段复用 |
| 终端 | Terminal | 需要更强主题、标签、配置和 AI 特性 |
| 编辑器 | TextEdit、Xcode 命令行工具 | 写代码、AI Coding、项目管理 |
| 包管理 | 系统无统一方案 | 需要安装开发工具和 CLI |
| 截图录屏 | 系统截图面板 | 高频标注、滚动截图、云分享 |
| 笔记同步 | Apple Notes | 本地优先、双链、Markdown、团队协作 |
| 远程访问 | 屏幕共享、SSH | 跨网络访问、移动设备管理、组网 |
| 清理卸载 | 系统存储管理、Finder | 大量试用软件、卸载残留排查 |

判断一个工具该不该装：

1. 系统自带能力已经试过了吗？
2. 这个工具解决的是高频问题，还是新鲜感？
3. 它会不会常驻后台、抢快捷键、申请过多权限？
4. 卸载后工作流会不会彻底崩掉？
5. 它能不能让你少操作，而不是多维护一个工具？

## 13. 常见问题排查 {#faq}

| 问题 | 先看哪里 |
| --- | --- |
| 快捷键冲突 | 当前 App 菜单栏、系统键盘快捷键、输入法、启动器、截图工具 |
| 外接键盘 `Command` / `Option` 反了 | 系统设置里的键盘修饰键 |
| Spotlight 搜不到文件 | 文件是否在本机、iCloud 是否同步、Spotlight 隐私列表 |
| 截图快捷键失效 | `Command + Shift + 5` 是否可用、系统截图快捷键是否关闭 |
| 软件打不开 | 隐私与安全性、系统版本、辅助功能或屏幕录制权限 |
| 麦克风/摄像头不能用 | 隐私与安全性里对应权限 |
| 不能录屏或共享屏幕 | 屏幕录制权限、辅助功能权限 |
| 终端 `command not found` | 是否安装、命令是否拼错、PATH 是否正确 |
| GitHub SSH 失败 | SSH key 是否生成、是否加入 GitHub、remote 是否用 SSH 地址 |
| Mac 空间不够 | 废纸篓、下载目录、大视频、旧安装包、项目依赖缓存 |
| 外接显示器字体糊 | 分辨率、缩放、线材、显示器 HiDPI 支持 |
| AI 工具不理解项目 | 给绝对路径、目标文件、完整报错和验证命令 |

通用排查顺序：

```text
现象是什么
  ↓
在哪个 App / 设置里发生
  ↓
最近改过什么
  ↓
能不能复现
  ↓
复制文本报错和截图
  ↓
再找资料或问 AI
```

## 14. 官方资料与延伸阅读 {#resources}

- [Apple Mac User Guide](https://support.apple.com/guide/mac-help/welcome/mac)
- [Apple: Mac keyboard shortcuts](https://support.apple.com/en-us/102650)
- [Apple: Take a screenshot on your Mac](https://support.apple.com/en-us/102646)
- [Apple: Search with Spotlight](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac)
- [Apple: Work in multiple spaces](https://support.apple.com/guide/mac-help/work-in-multiple-spaces-mh14112/mac)
- [Apple: Use trackpad and mouse gestures](https://support.apple.com/guide/mac-help/use-trackpad-and-mouse-gestures-mh35869/mac)
- [Apple: Back up files with Time Machine](https://support.apple.com/guide/mac-help/back-up-files-mh35860/mac)
- [Apple: Protect your Mac from malware](https://support.apple.com/guide/mac-help/protect-your-mac-from-malware-mh40596/mac)
- [Apple: Optimize storage space](https://support.apple.com/guide/mac-help/optimize-storage-space-sysp4ee93ca4/mac)
- [Homebrew Documentation: Installation](https://docs.brew.sh/Installation)
- [Git: First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [GitHub Docs: Generate a new SSH key and add it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

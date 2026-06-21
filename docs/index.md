---
title: macOS 高效使用手册
outline: deep
---

<script setup>
import { AlertTriangle, Code, Command, Compass, Folder, Keyboard, Monitor, Package, Search } from 'lucide-vue-next'
</script>

<!-- README:START_HIDDEN -->
<section class="onepage-hero">
  <p class="onepage-kicker">macOS Playbook</p>
  <h1 class="onepage-title">macOS 高效使用手册</h1>
  <p class="onepage-subtitle">别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。这里是一份单页版 macOS 使用最佳实践手册。</p>
</section>

<div class="quick-grid">
  <a href="#windows-to-macos"><div class="card-icon"><Monitor /></div><div class="card-body"><strong>迁移心智</strong><span>从 Windows 习惯切到 macOS 逻辑</span></div></a>
  <a href="#mental-model"><div class="card-icon"><Compass /></div><div class="card-body"><strong>系统模型</strong><span>理解应用、窗口、菜单栏和 Dock</span></div></a>
  <a href="#shortcuts"><div class="card-icon"><Keyboard /></div><div class="card-body"><strong>快捷键</strong><span>按场景掌握高频操作</span></div></a>
  <a href="#daily-efficiency"><div class="card-icon"><Folder /></div><div class="card-body"><strong>日常效率</strong><span>Finder、窗口、Spotlight 和截图</span></div></a>
  <a href="#terminal-ai-coding"><div class="card-icon"><Code /></div><div class="card-body"><strong>开发与 AI</strong><span>终端、Git、SSH 和 AI Coding</span></div></a>
  <a href="#tools-faq"><div class="card-icon"><Package /></div><div class="card-body"><strong>工具与排障</strong><span>先理解系统能力，再补工具</span></div></a>
</div>
<!-- README:END_HIDDEN -->

> 别人告诉你 Mac 装什么软件，我告诉你 Mac 到底应该怎么用。

这不是软件合集，而是一份单页版 macOS 使用最佳实践手册。它解决的问题是：一个人买了 Mac 之后，如何理解 macOS，如何从 Windows 心智切换过来，如何掌握快捷键、Finder、窗口、Spotlight、终端和 AI Coding 工作流。

## 1. 从 Windows 切到 macOS {#windows-to-macos}

很多人刚换 Mac 难受，不是因为 macOS 难用，而是还在用 Windows 的习惯解释它。先把下面这些概念换掉，后面的操作都会顺很多。

| Windows 习惯 | macOS 对应理解 |
| --- | --- |
| `Ctrl` 是主操作键 | `Command` 是主操作键 |
| `Alt` 是替代操作 | `Option` 是隐藏能力键 |
| 开始菜单是启动入口 | `Spotlight` 是默认启动入口 |
| 资源管理器负责文件 | `Finder` 负责文件、预览、搜索、标签和拖拽 |
| 任务栏代表窗口 | `Dock` 主要代表 App 和常驻入口 |
| 切换的是窗口 | `Command + Tab` 切换的是 App |
| 关闭窗口就是结束 | 关窗口不一定退出 App |

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

## 2. macOS 心智模型 {#mental-model}

macOS 的核心不是“窗口”，而是“应用 + 系统服务”。把这个想清楚，你会知道为什么菜单栏一直在屏幕顶部，为什么 Finder 不只是资源管理器，为什么 Spotlight 是最舒服的启动方式。

| 对象 | 它是什么 | 正确用法 |
| --- | --- | --- |
| App | 一个正在运行或可启动的软件 | 用 `Command + Tab` 切换，用 `Command + Q` 退出 |
| 窗口 | App 打开的某个工作界面 | 用 `Command + W` 关闭，用 `Command + 反引号` 切换 |
| 菜单栏 | 当前 App 的功能地图 | 找命令、看快捷键、设置自定义快捷键 |
| Dock | 常用 App 和正在运行 App 的入口 | 放少量固定 App，不把它当开始菜单 |
| Spotlight | 系统级启动器和搜索入口 | 启动 App、搜文件、查设置、计算 |
| Finder | 文件系统入口 | 管文件、预览、搜索、标签、拖拽 |
| Mission Control | 工作上下文管理器 | 管窗口、桌面空间、全屏 App |

常用判断：

| 你想做什么 | 用什么 |
| --- | --- |
| 关掉当前文档或窗口 | `Command + W` |
| 隐藏当前 App | `Command + H` |
| 最小化当前窗口 | `Command + M` |
| 完全退出当前 App | `Command + Q` |
| 强制退出卡死的 App | `Option + Command + Esc` |

## 3. 快捷键基础 {#shortcuts}

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
| 打开设置 | `Command + ,` |
| 跳到行首 / 行尾 | `Command + 左/右箭头` |
| 按词移动 | `Option + 左/右箭头` |
| 截全屏 | `Command + Shift + 3` |
| 截区域 | `Command + Shift + 4` |
| 截图和录屏面板 | `Command + Shift + 5` |
| 前往文件夹 | `Command + Shift + G` |
| 显示隐藏文件 | `Command + Shift + .` |
| 预览文件 | `Space` |
| 复制文件路径 | `Option + Command + C` |

## 4. 日常效率 {#daily-efficiency}

### <Folder class="cat-icon" /> Finder {#finder}

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

### <Monitor class="cat-icon" /> 窗口管理 {#window-management}

Mac 新用户最容易卡在窗口管理上。关键是先分清 App 和窗口，再决定什么时候用最小化、隐藏、全屏、分屏、桌面空间或第三方窗口管理工具。

```text
桌面 1：浏览器 + 笔记
桌面 2：编辑器 + 终端 + AI Coding
桌面 3：会议 + 资料
全屏：需要专注的写作或演示
```

如果你每天都在手动拖窗口，再考虑 Rectangle、Loop、Magnet 这类工具。

### <Search class="cat-icon" /> Spotlight {#spotlight}

`Command + Space` 应该成为你的默认入口。它不是普通搜索框，而是系统级启动器。

你可以用它打开 App、搜文件、打开系统设置项、做简单计算、查单词和联系人。如果 Spotlight 已经够用，不要急着换 Raycast 或 Alfred。

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

### <Keyboard class="cat-icon" /> 文本编辑 {#text-editing}

写文章、写代码、聊天、搜索、给 AI 提问，本质都在编辑文本。大范围用 `Command`，中范围用 `Option`，小范围用方向键。

| 场景 | 快捷键 |
| --- | --- |
| 跳到行首 / 行尾 | `Command + 左/右箭头` |
| 跳到文档开头 / 结尾 | `Command + 上/下箭头` |
| 按词移动 | `Option + 左/右箭头` |
| 按词选择 | `Shift + Option + 左/右箭头` |
| 删除左侧一个词 | `Option + Delete` |
| 删除到行首 | `Command + Delete` |

## 5. 终端、开发与 AI Coding {#terminal-ai-coding}

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

让 AI 开始前先给这些信息：

```text
项目目录：/Users/kim/code/macos-playbook
目标：把本站改成 macOS 单页手册
限制：不要引入新框架
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

## 6. 软件选择与常见问题 {#tools-faq}

软件推荐可以有，但不能喧宾夺主。先理解系统能力，再选择工具。第三方软件只负责补足系统短板，不负责替你理解 macOS。

| 类型 | 系统自带能力 | 什么时候需要第三方 |
| --- | --- | --- |
| 启动器 | Spotlight | 需要剪贴板、脚本、扩展和工作流 |
| 窗口管理 | Mission Control、分屏、平铺 | 高频外接屏、固定窗口布局 |
| 剪贴板 | 基础复制粘贴 | 需要历史记录和多段复用 |
| 终端 | Terminal | 需要更强主题、标签、配置和 AI 特性 |
| 编辑器 | TextEdit、Xcode 命令行工具 | 写代码、AI Coding、项目管理 |
| 包管理 | 系统无统一方案 | 需要安装开发工具和 CLI |
| 截图录屏 | 系统截图面板 | 高频标注、滚动截图、云分享 |
| 笔记同步 | Apple Notes | 本地优先、双链、Markdown、团队协作 |

原来的软件清单收敛成下面这张选择表：

| 软件 | 解决什么问题 | 什么人需要 |
| --- | --- | --- |
| QuickRecorder | 轻量录屏 | 经常录教程、复现问题、给 AI 看流程的人 |
| ClashParty / V2rayN | 网络代理客户端 | 有明确代理需求的人 |
| 豆包输入法 | 语音输入 | 大量口述、聊天、写初稿的人 |
| Brave | 隐私优先浏览器 | 想减少广告和追踪的人 |
| Mos | 鼠标滚动优化 | 外接鼠标滚动不顺的人 |
| Amphetamine | 防止睡眠 | 长时间编译、下载、远程和 AI Coding 的人 |
| UU 远程 | 远程桌面 | 需要手机或另一台设备看 Mac 的人 |
| Tencent Lemon / Mole | 清理和卸载 | 经常安装试用软件的人 |
| Tailscale | 异地组网 | 需要远程访问家里或服务器设备的人 |
| Obsidian | 本地优先知识库 | 重视 Markdown、双链和本地文件的人 |

### <AlertTriangle class="cat-icon" /> 高频问题 {#faq}

| 问题 | 先看哪里 |
| --- | --- |
| 快捷键冲突 | 当前 App 菜单栏、系统键盘快捷键、输入法、Raycast/Alfred/截图工具 |
| 外接键盘 `Command` / `Option` 反了 | 系统设置里的键盘修饰键 |
| Spotlight 搜不到文件 | 文件是否在本机、iCloud 是否同步、Spotlight 隐私列表 |
| 截图快捷键失效 | `Command + Shift + 5` 是否可用、系统截图快捷键是否关闭 |
| 软件打不开 | 隐私与安全性、系统版本、辅助功能或屏幕录制权限 |
| 终端 `command not found` | 是否安装、命令是否拼错、PATH 是否正确 |
| Mac 空间不够 | 废纸篓、下载目录、大视频、旧安装包、项目依赖缓存 |
| AI 工具不理解项目 | 给绝对路径、目标文件、完整报错和验证命令 |

## 官方资料 {#official-resources}

- [Apple Mac User Guide](https://support.apple.com/guide/mac-help/welcome/mac)
- [Apple: Mac keyboard shortcuts](https://support.apple.com/en-us/102650)
- [Apple: Take a screenshot on your Mac](https://support.apple.com/en-us/102646)
- [Homebrew Documentation: Installation](https://docs.brew.sh/Installation)
- [Git: First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [GitHub Docs: Generate a new SSH key and add it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [OpenAI Codex documentation](https://developers.openai.com/codex/)

# 项目说明

```bash
# 开发
pnpm dev

# 检查
pnpm check
pnpm types
pnpm preview

# 快速部署到 Cloudflare Workers
pnpm deploy:quick
pnpm deploy:quick -- --dry-run

# 原始部署命令
pnpm deploy

# 确认 Wrangler 登录
pnpm exec wrangler whoami
```

```txt
项目：macOS Playbook
Cloudflare Worker：macos-playbook
生产地址：https://chendahuang.com/playbook/macos/
旧地址：https://macos-playbook.chendahuang.top
构建目录：docs/.vitepress/dist
Worker 入口：src/index.ts
主文档：docs/index.md
README 同步：pnpm sync:readme
```

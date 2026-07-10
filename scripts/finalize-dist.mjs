#!/usr/bin/env node
import { renameSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'docs/.vitepress/dist');

// VitePress 把 public 文件放进 base；Workers Static Assets 只解析 assets 根目录的 _headers。
renameSync(resolve(dist, 'playbook/macos/_headers'), resolve(dist, '_headers'));

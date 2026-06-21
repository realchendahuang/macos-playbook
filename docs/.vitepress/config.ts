import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'macOS 高效使用手册',
  description: '一份帮助普通人真正把 macOS 用顺手的中文最佳实践手册',
  lang: 'zh-CN',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: { text: 'Mac' },
    nav: [
      { text: '手册', link: '/' },
      { text: 'GitHub', link: 'https://github.com/realchendahuang/macos-best-practices' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '目录'
    },
    footer: {
      message: 'macOS 高效使用手册',
      copyright: 'Released under CC BY-SA 4.0'
    }
  }
});

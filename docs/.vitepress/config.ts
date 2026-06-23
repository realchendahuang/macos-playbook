import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
  defineConfig({
    title: 'macOS Playbook',
    description: '一份帮助普通人真正把 macOS 用顺手的中文最佳实践手册',
    lang: 'zh-CN',
    // 子路径部署：让资源、搜索索引和内部链接都生成到正式品牌域路径下。
    base: '/playbook/macos/',
    outDir: './.vitepress/dist/playbook/macos',
    cleanUrls: true,
    sitemap: {
      hostname: 'https://chendahuang.com/playbook/macos/'
    },
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/playbook/macos/favicon.svg' }]
    ],
    mermaid: {
      static: true,
    },
    themeConfig: {
      logo: { text: 'Mac' },
      nav: [
        { text: '手册', link: '/' },
        { text: 'GitHub', link: 'https://github.com/realchendahuang/macos-playbook' }
      ],
      search: {
        provider: 'local'
      },
      outline: {
        level: [2, 3],
        label: '目录'
      },
      footer: {
        message: 'macOS Playbook',
        copyright: 'Released under CC BY-SA 4.0'
      }
    }
  })
);

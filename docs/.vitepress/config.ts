import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

const siteName = 'macOS Playbook';
const siteDescription = '一份帮助普通人真正把 macOS 用顺手的中文最佳实践手册';
const siteUrl = 'https://chendahuang.com/playbook/macos/';

function getPageUrl(relativePath: string) {
  const path = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '');

  return new URL(path, siteUrl).toString();
}

export default withMermaid(
  defineConfig({
    title: siteName,
    description: siteDescription,
    lang: 'zh-CN',
    // 子路径部署：让资源、搜索索引和内部链接都生成到正式品牌域路径下。
    base: '/playbook/macos/',
    outDir: './.vitepress/dist/playbook/macos',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
      hostname: siteUrl
    },
    markdown: {
      theme: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast'
      }
    },
    vite: {
      build: {
        // Mermaid's runtime and Wardley parser chunks are intentionally about 600 KB
        // uncompressed. Keep the warning close to that measured size so real growth
        // still shows up.
        chunkSizeWarningLimit: 700
      }
    },
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/playbook/macos/favicon.svg' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: siteName }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'theme-color', content: '#1d4ed8' }]
    ],
    transformPageData(pageData) {
      const canonicalUrl = getPageUrl(pageData.relativePath);
      const title = pageData.title === siteName ? siteName : `${pageData.title} | ${siteName}`;
      const description = String(pageData.frontmatter.description ?? siteDescription);

      pageData.frontmatter.head ??= [];
      pageData.frontmatter.head.push(
        ['link', { rel: 'canonical', href: canonicalUrl }],
        ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:description', content: description }],
        ['meta', { property: 'og:url', content: canonicalUrl }],
        ['meta', { name: 'twitter:title', content: title }],
        ['meta', { name: 'twitter:description', content: description }]
      );
    },
    themeConfig: {
      logo: '/favicon.svg',
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
      lastUpdated: {
        text: '最后更新于'
      },
      editLink: {
        pattern: 'https://github.com/realchendahuang/macos-playbook/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/realchendahuang/macos-playbook' }
      ],
      footer: {
        message: 'macOS Playbook',
        copyright: 'Content licensed under CC BY-SA 4.0'
      }
    }
  })
);

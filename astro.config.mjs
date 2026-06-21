// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// 文档站保持单页手册形态，所有核心内容都收敛到首页。
export default defineConfig({
	site: 'https://macos-best-practices.chendahuang.top',
	integrations: [
		starlight({
			title: 'macOS 高效使用手册',
			description: '一份帮助普通人真正把 macOS 用顺手的中文最佳实践手册。',
			routeMiddleware: ['./src/starlightRouteData.ts'],
			plugins: [
				lucode({
					navLinks: [
						{ label: '手册', link: '/' },
					],
				}),
			],
			// 当前内容以简体中文为主，根路径直接作为中文站点。
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/realchendahuang/macos-best-practices',
				},
			],
			sidebar: [
				{
					label: '手册',
					items: [
						{ label: 'macOS 高效使用手册', slug: 'index' },
					],
				},
			],
		}),
	],
});

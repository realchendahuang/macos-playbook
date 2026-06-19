// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import lucode from 'lucode-starlight';

// 文档站只保留软件清单，避免把帖子写成冗长说明书。
export default defineConfig({
	site: 'https://macos-best-practices.chendahuang.top',
	integrations: [
		starlight({
			title: 'macOS Best Practices',
			description: '陈大黄的 macOS 软件推荐清单。',
			routeMiddleware: ['./src/starlightRouteData.ts'],
			plugins: [
				lucode({
					navLinks: [
						{ label: '软件清单', link: '/software/' },
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
					label: '软件',
					items: [
						{ label: '画廊', slug: 'software' },
						{ label: 'QuickRecorder', slug: 'software/quickrecorder' },
						{ label: 'ClashParty', slug: 'software/clashparty' },
						{ label: 'V2rayN', slug: 'software/v2rayn' },
						{ label: '豆包输入法', slug: 'software/doubao-input' },
						{ label: 'Brave', slug: 'software/brave' },
						{ label: 'Mos', slug: 'software/mos' },
						{ label: 'Amphetamine', slug: 'software/amphetamine' },
						{ label: 'UU 远程', slug: 'software/uu-remote' },
						{ label: 'Tencent Lemon', slug: 'software/tencent-lemon' },
						{ label: 'Mole', slug: 'software/mole' },
						{ label: 'Tailscale', slug: 'software/tailscale' },
						{ label: 'Obsidian', slug: 'software/obsidian' },
					],
				},
			],
		}),
	],
});

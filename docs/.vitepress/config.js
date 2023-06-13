import { defineConfig } from "vitepress";

export default defineConfig({
  // title: 'my Blog',
  lastUpdated: true, // 开启最近更新时间
  themeConfig: {
    logo: '/avatar.jpg',
    description: '自定义的 description',   // meta 中的描述 用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ["link", { rel: "icon", href: "/avatar.jpg" }],
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
        },
      ],
      [
        "script",
        {
          src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
        },
      ]], //浏览器的标签栏的网页图标]],
    outDir: '../../dist', // 打包后输出目录配置
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/guide/', activeMatch: '/guide' },
      {
        text: 'selection',
        items: [
          { text: 'options-1', link: 'https://search.bilibili.com/all?from_source=webtop_search' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      }
    ],
    // 侧边导航栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // { text: 'guide_index', link: '/guide/' }, // /guide/index.md
            { text: 'HTML', link: '/guide/HTML' },
            { text: 'CSS', link: '/guide/CSS' },
            { text: 'JS', link: '/guide/JavaScript' },
            { text: 'TS', link: '/guide/TypeScript' },
            { text: 'Project', link: '/guide/Project' },
            { text: '工程化', link: '/guide/工程化' },
            { text: '手写代码', link: '/guide/手写代码' },
            { text: '性能优化', link: '/guide/性能优化' },
          ],
          collapsible: true, // 是否折叠
          collapsed: false // 是否可折叠
        }
      ]
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // github 编辑
    editLink: {
      pattern: 'https://github.com',
      text: 'Edit this page on GitHub'
    },
    // 最近更新时间
    lastUpdatedText: '最近更新时间',
    // 底部跳转
    docFooter: { prev: '上一篇', next: '下一篇' },
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com" }
    ],
  }
})
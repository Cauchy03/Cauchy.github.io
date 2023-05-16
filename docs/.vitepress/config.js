import { defineConfig } from "vitepress";

export default defineConfig({
  // title: 'my Blog',
  lastUpdated: true, // 开启最近更新时间
  themeConfig: {
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
            { text: 'JS', link: '/guide/JavaScript' }
          ],
          collapsible: true, // 是否折叠
          collapsed: false // 是否可折叠
        }
      ]
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
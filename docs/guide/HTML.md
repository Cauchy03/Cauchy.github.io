HTML notes
:tada: :100:

[[toc]]

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


```js
export default {
  name: 'MyComponent',
  // ...
}
```
{{ 1 + 1 }}
<span v-for="i in 3">{{ i }} </span>




<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre>



::: v-pre
`{{ This will be displayed as-is }}`
:::
### 1. src 和 href 的区别

> src和href都是来引入外部资源
>
> src一般用于加载页面的脚本、图片、音频、视频等资源。它将指向的文件内容嵌入到标签元素位置，比如js脚本，当浏览器解析到该元素的时候，后暂停其他元素的下载和处理，直接对该资源下载解析执行，所以一般将js脚本放在页面底部
>
> href表示超文本引用，一般指网络资源。当浏览器解析到该元素指向的文件时，就会并行下载资源，而不是暂替其他资源的下载和处理，常用在a、link标签上

### 2. 对 HTML 语义化的理解

**语义化是指** 根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。

语义化的优点如下：

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；
- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

常见的语义化标签：

```html
<header></header>  头部

<nav></nav>  导航栏

<section></section>  区块（有语义化的div）

<main></main>  主要区域

<article></article>  主要内容

<aside></aside>  侧边栏

<footer></footer>  底部
```

### 

### 3. DOCTYPE(文档类型) 的作用

DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是**告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义**来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在 HTML ⽂档的第⼀⾏。

浏览器渲染页面的两种模式（可通过 `document.compatMode` 获取，比如，语雀官网的文档类型是**CSS1Compat**）：

- **CSS1Compat：标准模式（Strick mode）**，默认模式，浏览器使用 W3C 的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- **BackCompat：怪异模式(混杂模式)(Quick mode)**，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

### 4. script 标签中 defer 和 async 的区别

如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

下图可以直观的看出三者之间的区别:

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.png)

其中蓝色代表 js 脚本网络加载时间，红色代表 js 脚本执行时间，绿色代表 html 解析。

**defer 和 async 属性都是去异步加载外部的 JS 脚本文件，它们都不会阻塞页面的解析**，其区别如下：

- **执行顺序**多个带 async 属性的标签，不能保证加载的顺序；多个带 defer 属性的标签，按照加载顺序执行；
- **脚本是否并行执行**async 属性，表示**后续文档的加载和执行与 js 脚本的加载和执行是并行进行的**，即异步执行；defer 属性，**加载后续文档的过程和 js 脚本的加载**(此时仅加载不执行)**是并行进行的**(异步)，js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。
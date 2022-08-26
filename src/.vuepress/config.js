const { description } = require('../../package')

module.exports = {
  head: [// 设置 favor.ico，html/head 标题中添加 style 标签
    ['link', { rel: 'icon', href: `/logo.png` }]
],
title: 'reGuard.js-前端性能监控解决方案', // 设置网站标题
description: 'reGuard',
base: '/', //默认路径
themeConfig: {// 主题设置
    nav: [{// 右上导航航条 src/.vuepress 文件夹下
        text: '首页',
        link: '/'
    }
 ]
},
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-mathjax',
  ]
}

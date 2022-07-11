import { defineConfig } from 'dumi';

const repo = 'react-gather'; // 项目名

export default defineConfig({
  title: 'react-gather',
  favicon:
    'https://ts1.cn.mm.bing.net/th/id/R-C.ba1aabac71f34b7d1c91531226fdc9a8?rik=LX7POg1KsS7uSw&riu=http%3a%2f%2fpic150.huitu.com%2fres%2f20201019%2f624073_20201019140017511060_1.jpg&ehk=Ohz3ty1stmjTDcHjjlmk7H2cY0uu7xtu%2bUvzYDIlQUc%3d&risl=&pid=ImgRaw&r=0',
  logo: 'https://ts1.cn.mm.bing.net/th/id/R-C.ba1aabac71f34b7d1c91531226fdc9a8?rik=LX7POg1KsS7uSw&riu=http%3a%2f%2fpic150.huitu.com%2fres%2f20201019%2f624073_20201019140017511060_1.jpg&ehk=Ohz3ty1stmjTDcHjjlmk7H2cY0uu7xtu%2bUvzYDIlQUc%3d&risl=&pid=ImgRaw&r=0',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: '组件',
      path: '/components',
    }, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  base: '/',
  publicPath: '/',
  hash: true,
  metas: [
    {
      name: 'keywords',
      content: 'react component, base on umi',
    },
    {
      name: 'description',
      content: 'base antd ui component',
    },
  ],
  theme: {
    // 修改 dumi 默认主题的主色，更多变量详见：https://github.com/umijs/dumi/blob/master/packages/theme-default/src/style/variables.less
    '@c-primary': '#81a838',
    // '@c-heading': '#81a838',
    // '@c-text': '#81a838',
    // '@c-secondary': '#81a838',
    // '@c-link': '#81a838',
    // '@c-border': '#81a838',
    // '@c-btn-border': '#81a838',
    // '@c-light-bg': '#81a838',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});

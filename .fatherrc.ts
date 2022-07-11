export default {
  esm: 'babel',
  lessLoader: {
    modifyVars: {
      hack: '@import "./node_modules/antd/es/style/themes/default.less";',
    },
  },
};

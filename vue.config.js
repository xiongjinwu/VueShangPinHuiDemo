module.exports = {
  productionSourceMap: false, //去掉产生的map文件
  lintOnSave: false, // 关闭ESLINT校验工具
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // target: "http://82.156.11.187",
      },
    },
  },
};

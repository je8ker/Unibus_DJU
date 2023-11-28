const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    proxy: {
      "/api/login": {
        target: "http://localhost:3000", // Express 서버 주소
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", // /api를 제거하고 요청을 전달
        },
      },
    },
  },
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});

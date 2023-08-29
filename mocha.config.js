// mocha.config.js
require("ts-node/register"); // 使用 ts-node 处理 TypeScript 文件
const path = require("path");

module.exports = {
  extension: ["ts"], // 配置测试文件扩展名为 .ts
  spec: "test/**/*.test.ts", // 设置测试文件路径
  // 其他 Mocha 配置...
};

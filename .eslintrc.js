module.exports = {
  // 解析器
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  // 继承的规则（扩展）
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  // 插件
  plugins: ["@typescript-eslint", "react"],
  // 规则
  rules: {},
  settings: {
    react: {
      version: 'detect'
    }
  }
}
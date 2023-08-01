module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/multi-word-component-names": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/no-setup-props-destructure": "warn",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};

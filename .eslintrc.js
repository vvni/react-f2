module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  env: {
    jest: true,
    node: true,
    browser: true
  },
  ignorePatterns: ["node_modules", "dist", "test", "jest.config.js", "typings"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn" // <--- THIS IS THE NEW RULE
  }
};

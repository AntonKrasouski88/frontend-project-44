module.exports = {
  extends: ["airbnb-base", "plugin:import/errors", "plugin:import/warnings"],
  plugins: ["import"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "always",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-console": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};

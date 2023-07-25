const atImport = require("postcss-import");
const presetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    atImport,
    presetEnv({
      stage: 2,
      features: {
        'nesting-rules': true
      }
    }),
    cssnano(),
  ],
};

import atImport from "postcss-import";
import presetEnv from "postcss-preset-env";
import cssnano from "cssnano";

export default {
  plugins: [
    atImport,
    presetEnv({
      stage: 2,
      features: {
        "nesting-rules": true,
      },
    }),
    cssnano(),
  ],
};

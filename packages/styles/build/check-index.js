import * as fs from "fs";

const indexFile = fs.readFileSync(
  new URL("../src/index.postcss", import.meta.url),
  "utf-8"
);

const files = fs.readdirSync(new URL("../src/components", import.meta.url));
files.forEach((file) => {
  const [name, ext] = file.split(".");
  if (ext !== "postcss") return;
  if (name.indexOf("_") === 0) return;

  if (indexFile.indexOf(`@import url("./components/${name}.postcss")`) === -1) {
    throw new Error(
      `Missing component "${name}" in index.postcss`
    );
  }
});

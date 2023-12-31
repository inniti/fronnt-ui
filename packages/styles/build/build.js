import * as fs from "fs";

const packageJson = fs.readFileSync(
  new URL("../package.json", import.meta.url),
  "utf-8"
);

const indexFile = fs.readFileSync(
  new URL("../src/index.postcss", import.meta.url),
  "utf-8"
);

const packageJsonContent = JSON.parse(packageJson);

const components = [];

const files = fs.readdirSync(new URL("../src/components", import.meta.url));
files.forEach((file) => {
  const [name, ext] = file.split(".");
  if (ext !== "postcss") return;
  components.push(name);
});

const exports = {
  ".": "./dist/index.css",
  "./index.css": "./dist/index.css",
  "./variables.css": "./dist/variables.css",
};

components.forEach((component) => {
  exports[`./components/${component}.css`] =
    `./dist/components/${component}.css`;
});

fs.writeFileSync(
  new URL("../package.json", import.meta.url),
  JSON.stringify(
    {
      ...packageJsonContent,
      exports,
    },
    null,
    2
  ),
  "utf-8"
);

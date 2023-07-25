import * as fs from "fs";

const packageJson = fs.readFileSync(
  new URL("./package.json", import.meta.url),
  "utf-8"
);
const files = fs.readdirSync(new URL("./svg", import.meta.url));

const content = JSON.parse(packageJson);
const exports = {};
const names = [];
files.forEach((file) => {
  const [name, ext] = file.split(".");
  if (ext !== "svg") return;
  names.push(name);
  exports[`./${name}`] = `./svg/${file}`;
});

fs.writeFileSync(
  new URL("./package.json", import.meta.url),
  JSON.stringify({
    ...content,
    exports,
  }, null, 2),
  "utf-8"
);

fs.writeFileSync(
  new URL("./index.d.ts", import.meta.url),
  `export type FronntIcon = ${names.map(n => `"${n}"`).join(' | ')} | string;`,
  "utf-8"
);

import * as fs from "fs";

const baseComponents = fs
  .readdirSync(new URL("../src/components/base", import.meta.url))
  .reduce((list, file) => {
    const [name, ext] = file.split(".");
    if (ext === "vue") {
      list.push(name);
    }

    return list;
  }, []);

const composables = fs
  .readdirSync(new URL("../src/composables", import.meta.url))
  .reduce((list, file) => {
    const [name, ext] = file.split(".");
    if (ext === "ts") {
      list.push(name);
    }

    return list;
  }, []);

const directives = fs
  .readdirSync(new URL("../src/directives", import.meta.url))
  .reduce((list, file) => {
    const [name, ext] = file.split(".");
    if (ext === "ts") {
      list.push(name);
    }

    return list;
  }, []);

const fileContent = `/*! @fronntui/vue */

// Components
${baseComponents
  .map((name) => `import NN${name} from "./components/base/${name}.vue";`)
  .join("\n")}

// Composables
${composables
  .map((name) => `import ${name} from "./composables/${name}";`)
  .join("\n")}

// Directives
${directives
  .map((name) => `import ${name}Directive from "./directives/${name}";`)
  .join("\n")}

export * from "./components/icons";
  
export { 
  ${baseComponents.map((name) => `NN${name}`).join(",\n  ")},

  ${composables.join(",\n  ")},

  ${directives.map((name) => `${name}Directive`).join(",\n  ")}
};
`;

fs.writeFileSync(
  new URL(`../src/lib.ts`, import.meta.url),
  fileContent,
  "utf-8"
);

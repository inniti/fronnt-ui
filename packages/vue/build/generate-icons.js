import * as fs from "fs";

const files = fs.readdirSync(new URL("../../icons/svg", import.meta.url));

const hyphensRegex = /-(?<char>.)/g;

const components = {};

files.forEach((file) => {
  const [name, ext] = file.split(".");
  if (ext !== "svg") return;

  const template = fs.readFileSync(
    new URL(`../../icons/svg/${file}`, import.meta.url),
    "utf-8"
  );

  let fileName = name[0].toUpperCase() + name.substring(1);
  let match;
  while ((match = hyphensRegex.exec(fileName)) !== null) {
    fileName =
      fileName.substring(0, match.index) +
      match.groups.char.toUpperCase() +
      fileName.substring(match.index + 2);
  }
  const componentName = `NNIcon${fileName}`;

  components[componentName] = { file: name };

  fileName = `Icon${fileName}.vue`;

  const fileContent = `<script lang="ts">
  export default {
    name: "${componentName}"
  };
</script>

<script lang="ts" setup>
  const props = defineProps<{ label?: string }>();
</script>

<template>
  <i class="nn-icon nn-icon--${name}" :aria-label="props.label">
    ${template}
  </i>
</template>`;

  fs.writeFileSync(
    new URL(`../src/components/icons/${fileName}`, import.meta.url),
    fileContent,
    "utf-8"
  );
});

fs.writeFileSync(
  new URL(`../src/components/icons/index.ts`, import.meta.url),
  `// This file is generated. Do not edit manually.
  
${Object.keys(components)
  .map(
    (componentName) =>
      `import ${componentName} from "./${componentName.substring(2)}.vue";`
  )
  .join("\n")}

export { 
  ${Object.keys(components).join(",\n  ")}
};

`,
  "utf-8"
);

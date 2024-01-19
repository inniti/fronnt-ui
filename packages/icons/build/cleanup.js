import * as fs from "fs";

const files = fs.readdirSync(new URL("../svg", import.meta.url));
files.forEach((file) => {
  const [name, ext] = file.split(".");
  if (ext !== "svg") return;

  let fileContent = fs.readFileSync(
    new URL(`../svg/${file}`, import.meta.url),
    "utf-8"
  );

  fileContent = fileContent.replace(
    /stroke="[^"]*"/gi,
    'stroke="currentColor"'
  );
  fileContent = fileContent.replace(/\s*stroke-width="[^"]*"/gi, "");
  fileContent = fileContent.replace(
    /viewBox="0 0 24 24">/,
    'viewBox="0 0 24 24" width="24" height="24">'
  );
  fileContent = fileContent.replace(/id="[^"]*"/gi, "");
  fileContent = fileContent.replace(/class="[^"]*"/gi, "");
  fileContent = fileContent.replace(
    /viewBox="/i,
    `class="nn-raw-icon nn-raw-icon--${name}" viewBox="`
  );
  fileContent = fileContent.replace(/^<\?xml(.*)\?>/, "");
  fileContent = fileContent.replace(/\s+/g, " ");

  fs.writeFileSync(
    new URL(`../svg/${file}`, import.meta.url),
    fileContent,
    "utf-8"
  );
});

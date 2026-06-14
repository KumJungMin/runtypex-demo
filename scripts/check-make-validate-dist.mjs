import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const assetsDir = new URL("../dist/assets/", import.meta.url);
const jsFiles = (await readdir(assetsDir)).filter((fileName) =>
  fileName.endsWith(".js"),
);

const checks = [
  /typeof \w+\.RESULT\.ACCOUNT_NUMBER=="string"/,
  /typeof \w+\.RESULT\.VERIFIED=="boolean"/,
];

for (const fileName of jsFiles) {
  const filePath = join(assetsDir.pathname, fileName);
  const source = await readFile(filePath, "utf8");

  if (checks.every((check) => check.test(source))) {
    console.log(`makeValidate runtime guard found in dist/assets/${fileName}`);
    process.exit(0);
  }
}

throw new Error(
  "makeValidate runtime guard was not found. Run npm run build before this check.",
);

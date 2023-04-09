import { runTests } from "@vscode/test-electron";
import path from "node:path";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const main = async () => {
  const extensionDevelopmentPath = path.resolve(__dirname, "..");
  const extensionTestsPath = path.resolve(__dirname, "extension.test.cjs");
  const workspace = path.resolve(__dirname, "..");
  await runTests({
    version: "1.77.1",
    extensionDevelopmentPath,
    extensionTestsPath,
    launchArgs: ["--disable-extensions", workspace],
  });
};

main();

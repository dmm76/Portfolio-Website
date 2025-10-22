import { cpSync, mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, "..");
const blogDistDir = join(projectRoot, "blog-app", "dist");
const siteDistDir = join(projectRoot, "dist");
const blogOutputDir = join(siteDistDir, "blog");
const staticEntries = [
  "assets",
  "src",
  "index.html",
  "index-us.html",
  "obrigado.html",
  "thanks.html",
];

rmSync(siteDistDir, { recursive: true, force: true });
mkdirSync(siteDistDir, { recursive: true });

for (const entry of staticEntries) {
  const sourcePath = join(projectRoot, entry);
  const targetPath = join(siteDistDir, entry);

  try {
    cpSync(sourcePath, targetPath, { recursive: true });
  } catch (error) {
    if (error.code === "ENOENT") {
      continue;
    }

    throw error;
  }
}

mkdirSync(blogOutputDir, { recursive: true });
cpSync(blogDistDir, blogOutputDir, { recursive: true });

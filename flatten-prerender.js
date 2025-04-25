const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "docs", "browser");

function walkAndFlatten(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      const indexPath = path.join(fullPath, "index.html");
      const subEntries = fs.readdirSync(fullPath, { withFileTypes: true });
      const hasSubfolders = subEntries.some((e) => e.isDirectory());

      if (fs.existsSync(indexPath) && !hasSubfolders) {
        // Flatten only if no subdirectories (i.e. it's a leaf route)
        const targetPath = path.join(currentDir, `${entry.name}.html`);

        fs.copyFileSync(indexPath, targetPath);
        console.log(`Copied: ${targetPath}`);

        fs.rmSync(fullPath, { recursive: true, force: true });
        console.log(`Deleted folder: ${fullPath}`);
      } else {
        // Go deeper
        walkAndFlatten(fullPath);
      }
    }
  }
}

walkAndFlatten(baseDir);

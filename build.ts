import { rm, cp } from "node:fs/promises";

console.log("🚀 Building OpenWorker Chinese site with native Bun...");

try {
  await rm("./dist", { recursive: true, force: true });
} catch {}

const result = await Bun.build({
  entrypoints: ["./src/main.tsx"],
  outdir: "./dist",
  target: "browser",
  minify: true,
  sourcemap: "external",
  naming: "[name].[hash].[ext]",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

if (!result.success) {
  console.error("❌ Build failed:", result.logs);
  process.exit(1);
}

let html = await Bun.file("./index.html").text();
const jsOutput = result.outputs.find((o) => o.kind === "entry-point");
const jsFileName = jsOutput ? jsOutput.path.split(/[\\/]/).pop() : "bundle.js";
const cssOutput = result.outputs.find((o) => o.path.endsWith(".css"));
const cssFileName = cssOutput ? cssOutput.path.split(/[\\/]/).pop() : null;

// In index.html, replace the script and css source with the generated files
html = html.replace(
  /<script type="module" src="[^"]*"><\/script>/,
  `<script type="module" src="/${jsFileName}"></script>`
);

if (cssFileName) {
  html = html.replace(
    /<link rel="stylesheet" href="[^"]*" \/>/,
    `<link rel="stylesheet" href="/${cssFileName}" />`
  );
}

await Bun.write("./dist/index.html", html);

// Copy CNAME for custom domain
try {
  const cname = await Bun.file("./CNAME").text();
  await Bun.write("./dist/CNAME", cname);
} catch {}

console.log("✅ Build finished successfully! Distribution files in ./dist");

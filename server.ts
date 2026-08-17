import { serve } from "bun";
import { join } from "node:path";
import { existsSync } from "node:fs";

const PORT = Number(process.env.PORT || 3000);
const IS_PROD = process.env.NODE_ENV === "production";

console.log(`⚡ [Native Bun Server] Running OpenWorker Chinese Site at http://localhost:${PORT} (Mode: ${IS_PROD ? "Production" : "Development"})`);

serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Handle development dynamic bundle
    if (!IS_PROD && (pathname === "/bundle.js" || pathname === "/src/main.js" || pathname === "/src/main.tsx")) {
      const result = await Bun.build({
        entrypoints: ["./src/main.tsx"],
        target: "browser",
        sourcemap: "inline",
        define: {
          "process.env.NODE_ENV": JSON.stringify("development"),
        },
      });

      if (!result.success) {
        console.error("Bundle errors:", result.logs);
        return new Response(
          `console.error("Build Error: " + ${JSON.stringify(result.logs.map((l) => l.message).join("\n"))});`,
          {
            headers: { "Content-Type": "application/javascript; charset=utf-8" },
          }
        );
      }

      const js = await result.outputs[0].text();
      return new Response(js, {
        headers: { "Content-Type": "application/javascript; charset=utf-8" },
      });
    }

    // Try serving from dist/ first in production or for hashed files
    const cleanPath = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    const candidatePaths = [
      join(".", cleanPath),
      join("./dist", cleanPath),
    ];

    for (const p of candidatePaths) {
      if (cleanPath && existsSync(p)) {
        const file = Bun.file(p);
        let contentType = "application/octet-stream";
        if (p.endsWith(".css")) contentType = "text/css; charset=utf-8";
        else if (p.endsWith(".js")) contentType = "application/javascript; charset=utf-8";
        else if (p.endsWith(".svg")) contentType = "image/svg+xml";
        else if (p.endsWith(".png")) contentType = "image/png";
        else if (p.endsWith(".jpg") || p.endsWith(".jpeg")) contentType = "image/jpeg";
        else if (p.endsWith(".ico")) contentType = "image/x-icon";
        else if (p.endsWith(".json")) contentType = "application/json";

        return new Response(file, {
          headers: { "Content-Type": contentType },
        });
      }
    }

    // Serve HTML (dist/index.html in prod if exists, else ./index.html)
    const targetHtml = IS_PROD && existsSync("./dist/index.html")
      ? Bun.file("./dist/index.html")
      : Bun.file("./index.html");

    if (await targetHtml.exists()) {
      return new Response(targetHtml, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

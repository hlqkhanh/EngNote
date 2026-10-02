const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..", "web");
const port = Number(process.env.PORT || 4173);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml"
};

http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.resolve(root, requested);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  fs.stat(filePath, (statError, stat) => {
    const target = !statError && stat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    fs.readFile(target, (error, content) => {
      if (error) {
        response.writeHead(error.code === "ENOENT" ? 404 : 500).end(error.code === "ENOENT" ? "Not found" : "Server error");
        return;
      }
      response.writeHead(200, { "Content-Type": types[path.extname(target)] || "application/octet-stream", "Cache-Control": "no-cache" });
      response.end(content);
    });
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`TOEIC Part 5: http://127.0.0.1:${port}`);
});

// Custom server for cPanel / LiteSpeed (lsnode) / Phusion Passenger Node.js App
const path = require("path");
const fs = require("fs");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

// Ensure working directory is the application root
process.chdir(__dirname);

const dev = process.env.NODE_ENV === "development";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT, 10) || 3000;

// Verify .next exists before attempting to prepare
const nextDir = path.join(__dirname, ".next");
if (!fs.existsSync(nextDir)) {
  console.error(
    `[CRITICAL] .next folder was not found at ${nextDir}. Please ensure the production build is uploaded.`
  );
}

const app = next({
  dev,
  dir: __dirname,
  hostname,
  port,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error("Error handling request:", req.url, err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    })
      .once("error", (err) => {
        console.error("Server error:", err);
        process.exit(1);
      })
      .listen(port, () => {
        console.log(`> Ready on http://${hostname}:${port} (Node ${process.version})`);
      });
  })
  .catch((err) => {
    console.error("Failed to prepare Next.js app:", err);
    process.exit(1);
  });

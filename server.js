const https = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const PORT = process.env.NEXT_PUBLIC_PORT;
const hostname = "localhost";
const app = next({ dev, hostname, PORT });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync("localhost-key.pem", "utf8"),
  cert: fs.readFileSync("localhost.pem", "utf8"),
};
app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedurl = parse(req.url, true);
      handle(req, res, parsedurl);
    })
    .listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${PORT}`);
    });
});

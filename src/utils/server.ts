import fs from "fs";
import http from "http";
import path from "path";

// 默认服务端口
const defaultServerPort = 5000;

async function startServer(str: string, port: number) {
  return new Promise<void>((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(__dirname, "../index.html");

      if (req.url === "/CSS/style.css") {
        filePath = path.join(__dirname, "../CSS/style.css");
        res.setHeader("Content-Type", "text/css;charset=utf-8");
      } else {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
      }

      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
          res.writeHead(500);
          res.end("服务错误");
          return;
        }

        if (req.url === "/CSS/style.css") {
          res.writeHead(200);
          res.end(data);
        } else {
          const modifiedHtml = data.replace(
            "<!-- REPLACE_WITH_JSON_DATA -->",
            `${str}`
          );
          res.writeHead(200);
          res.end(modifiedHtml);
        }
      });
    });

    server.on("error", (error: any) => {
      reject(error);
    });

    server.on("listening", () => {
      console.log("\x1b[32m%s\x1b[0m", `运行在 http://localhost:${port}`);
      resolve();
    });

    server.listen(port);
  });
}
// 启动服务
export default async function server(str: string) {
  let port = defaultServerPort;
  while (true) {
    try {
      await startServer(str, port);
      break;
    } catch (error) {
      // 端口冲突，尝试下一个端口
      console.log(
        "\x1b[33m%s\x1b[0m",
        `Port ${port} is unavailable. Try port ${port + 1}.\n`
      );
      port++;
    }
  }
}

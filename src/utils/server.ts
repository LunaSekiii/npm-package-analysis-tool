import fs from "fs";
import http from "http";
import path from "path";

// 默认服务端口
const defaultServerPort = 5000;

async function startServer(str: string, port: number) {
	return new Promise<void>((resolve, reject) => {
		const server = http.createServer((req, res) => {
			const filePath = path.join(__dirname, "../index.html");
			fs.readFile(filePath, "utf-8", (err, data) => {
				if (err) {
					console.log(err);
					res.writeHead(500, {
						"Content-Type": "text/html;charset=utf-8",
					});
					res.end("服务错误");
					return;
				}
				// 在HTML中插入分析结果的JSON字符串
				const modifiedHtml = data.replace(
					"<!-- REPLACE_WITH_JSON_DATA -->",
					`${str}`
				);

				res.writeHead(200, {
					"Content-Type": "text/html;charset=utf-8",
				});
				res.end(modifiedHtml);
			});
		});

		server.on("error", (error: any) => {
			// 端口冲突，尝试下一个端口
			reject(error);
		});

		server.on("listening", () => {
			console.log(
				"\x1b[32m%s\x1b[0m",
				`运行在 at http://localhost:${port}`
			);
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

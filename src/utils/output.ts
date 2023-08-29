import fs from "fs";
import path from "path";

/**
 * 写入Json文件
 */
export default async function writeJsonFile(filePath: string, data: string) {
	// 创建目录
	fs.mkdir(path.dirname(filePath), { recursive: true }, (err) => {
		if (err) console.error(err);
	});
	// 写入文件
	try {
		await fs.writeFileSync(filePath, data, "utf-8");
		console.log("\x1b[32m%s\x1b[0m", `已写入 ${filePath}\n`);
	} catch (err) {
		console.error(err);
	}
}

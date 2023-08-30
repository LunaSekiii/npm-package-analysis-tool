import fs from "fs";
import path from "path";
import writeJsonFile from "../src/utils/output";

describe("writeJsonFile", () => {
	test("should write JSON data to file", async () => {
		const filePath = path.resolve(process.cwd(), "test.json");
		const data = JSON.stringify({ key: "value" });
		// 使用 Jest 的 spy 来监视 console.log 函数的调用
		const consoleSpy = jest.spyOn(console, "log");

		// 调用 writeJsonFile 函数
		await writeJsonFile(filePath, data);

		// 检查文件是否被创建
		expect(fs.existsSync(filePath)).toBe(true);

		// 读取文件内容并验证是否与写入的数据一致
		const fileContent = fs.readFileSync(filePath, "utf-8");
		expect(fileContent).toBe(data);

		// 验证 console.log 是否被调用
		expect(consoleSpy).toHaveBeenCalledWith(
			"\x1b[32m%s\x1b[0m",
			expect.any(String)
		);

		// 清理测试文件
		fs.unlinkSync(filePath);
	});
});

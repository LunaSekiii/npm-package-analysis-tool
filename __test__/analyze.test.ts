import path from "path";
import analyze from "../src/utils/analyze";

// 当前工作目录
const basedir = process.cwd();

describe("analyze", () => {
	test("should correctly analyze package dependencies", async () => {
		const options = {
			depth: "=5",
			json: true,
		};

		// 使用 Jest 的 spy 来监视 console.log 函数的调用
		const consoleSpy = jest.spyOn(console, "log");

		// 调用 analyze 函数
		analyze(options);

		// 断言 analyze 函数是否在执行过程中输出了特定的日志消息
		expect(consoleSpy).toHaveBeenCalledWith(
			`\n----分析npm包依赖关系----\n深度:5\n${
				"输出到" + path.resolve(basedir, "./analyze/package.json")
			}\n-------------------------\n`
		);
	});
});

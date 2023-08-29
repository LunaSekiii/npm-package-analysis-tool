// analyze.test.js
import { expect } from "chai";
import { describe, it } from "mocha"; // 引入Mocha的描述和测试函数
import { sum } from "../src/utils/sum";
describe("Analyze function", () => {
  it("通过案例", () => {
    // 创建一个示例测试用例
    const input = 0; // 设置适当的输入
    const expectedOutput = 3; // 设置预期输出
    const result = sum(1, 2); // 调用待测试的函数
    expect(result).to.deep.equal(expectedOutput); // 使用Chai断言来验证结果
  });
  // 添加更多的测试用例...
});

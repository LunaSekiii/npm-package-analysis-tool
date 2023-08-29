module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "js"],
	testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],
	testPathIgnorePatterns: [
		"/node_modules/", // 忽略 node_modules 文件夹下的测试
		"/test/", // 忽略 test 文件夹及其子文件夹下的测试
	],
	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				/* ts-jest config goes here in Jest */
			},
		],
	},
};

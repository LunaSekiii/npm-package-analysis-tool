module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "js"],
	testMatch: ["**/__tests__/**/*.+(ts|js)", "**/?(*.)+(spec|test).+(ts|js)"],

	transform: {
		"^.+\\.tsx?$": [
			"ts-jest",
			{
				/* ts-jest config goes here in Jest */
			},
		],
	},
};

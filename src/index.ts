#!/usr/bin/env node

import { program } from "commander";
import analyze from "./utils/analyze";

program.version("1.0.0").description("npm package relationship analyzer");
// // 向下递归分析的层次深度
// .option("-d, --depth <n>", "depth of dependency tree")
// // 是否输出json文件（路径可选）
// .option("-j, --json [filename]", "output json file")
// .action(analyze);

program
	.command("analyze")
	.description("analyze npm package relationship")
	// 向下递归分析的层次深度
	.option("-d, --depth <n>", "depth of dependency tree")
	// 是否输出json文件（路径可选）
	.option("-j, --json [filename]", "output json file")
	.action(analyze);

program.parse(process.argv);

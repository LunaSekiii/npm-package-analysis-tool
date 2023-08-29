import path from "path";

export default function paramsProcess(
	paramType: string,
	paramValue?: string | boolean
) {
	if (!paramValue) {
		return undefined;
	}
	switch (paramType) {
		case "depth":
			return depthProcess(paramValue as string);
		case "json":
			return jsonPathCheck(paramValue);
		default:
			throw new Error("参数类型错误");
	}
}

/** 深度处理 */
function depthProcess(depthStr: string) {
	if (depthStr.split("=").length != 2) {
		throw new Error("depth参数格式错误");
	}
	try {
		const depth = parseInt(depthStr.split("=")[1]);
		return depth;
	} catch (e) {
		throw new Error("depth参数格式错误");
	}
}

/**
 * json输出地址合法性检查
 */
function jsonPathCheck(jsonPath: string | boolean) {
	if (jsonPath === true) return true;
	if (!jsonPath) {
		return false;
	}
	if (jsonPath.split("=").length != 2) {
		throw new Error("json参数格式错误");
	}
	let json = jsonPath.split("=")[1];
	if (!json) {
		throw new Error("json参数格式错误");
	}
	// 如果只有目录路径，自动补全文件名为 analyze.json 使用path模块拼接
	if (path.extname(json) === "") {
		json = path.resolve(json, "./analyze.json");
	}
	// 如果路径不合法，则报错
	if (!path.isAbsolute(json)) {
		throw new Error("json参数格式错误");
	}
	return json;
}

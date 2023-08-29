# suyou

![npm](https://img.shields.io/npm/v/suyou?label=npm%20version&logo=npm)
![pullrequest](https://img.shields.io/github/issues-pr/LunaSekiii/npm-package-analysis-tool)
![license](https://img.shields.io/npm/l/suyou)

This document is also available in [中文](./README.zh_CN.md).

<p align="center"> <img src="https://s2.loli.net/2023/08/29/Xcb4AKrTDE7gPfk.png" alt="icon" width="30%" /> </p>

suyou is an npm dependency visualization and analysis tool.

## Getting Started

### Installation

To globally install suyou, run the following command:

```shell
npm install -g suyou
```

Alternatively, you can use yarn:

```shell
yarn global add suyou
```

### Analyzing Dependencies

Use the following command to analyze dependencies:

```shell
npx suyou-cli analyze
```

Or with yarn:

```shell
yarn suyou-cli analyze
```

You can also use short commands:

```shell
npx analyze
```

Or with yarn:

```shell
yarn analyze
```

### Optional Parameters

You can use the following optional parameters to customize the analysis process:

-   Depth of recursive analysis:

    `-d=<n>`/`--depth=<n>`

    Example:

    `-d=3`/`--depth=3`

-   Output JSON file:

    `-j=[file-path]`/`--json=[file-path]`

    Example:

    `-j=./analyze/package.json`/`--json=./analyze/package.json`

    Note: `[file-path]` is optional and defaults to `./analyze/package.json`.

Please follow the instructions above to install suyou and start using the dependency analysis tool. If you have any questions or need further assistance, feel free to ask.

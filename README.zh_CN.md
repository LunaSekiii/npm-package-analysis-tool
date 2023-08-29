# 溯游

此文档还有[English](./README.md)版本

<p align="center"> <img src="https://s2.loli.net/2023/08/29/Xcb4AKrTDE7gPfk.png" alt="icon" width="30%" /> </p>

溯游 (suyou) 是一个 npm 依赖可视化分析工具。

## 开始使用

### 安装

全局安装 suyou：

```shell
Copy
npm install -g suyou
```

或者使用 yarn：

```shell
Copy
yarn global add suyou
```

### 分析依赖

使用以下命令进行依赖分析：

```shell
Copy
npx suyou-cli analyze
```

或者使用 yarn：

```shell
Copy
yarn suyou-cli analyze
```

### 可选参数

你可以使用以下可选参数来自定义分析过程：

-   向下递归分析的层次深度：

    ```shell
    Copy
    -d=<n>`/`--depth=<n>
    ```

    示例：

    ```shell
    -d=3`/`--depth=3
    ```

-   是否输出 JSON 文件：

    ```shell
    Copy
    -j=[file-path]`/`--json=[file-path]
    ```

    示例：

    ```shell
    -j=./analyze/package.json`/`--json=./analyze/package.json
    ```

    注意：`[file-path]` 是可选的，默认为 `./analyze/package.json`。

请根据上述说明安装 suyou 并开始使用依赖分析工具。如果有任何疑问或需要进一步的帮助，请随时提问。
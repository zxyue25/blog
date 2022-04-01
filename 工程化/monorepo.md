## monorepo
- 只需要在根目录下装包即可
  - 子包的相同依赖会被安装在根目录的node_modules下，这个过程也叫hoisting
  - 子包独有的依赖会被安装在子包路径的node_modules下
- 只需要在根目录下写代码规范**lint即可


### 实现方案——yarn workspaces
- 根目录package.json增加配置如下
```json
// 根目录package.json
{
    ...
    "private": true,
    // 表示packages下存放子包
    "workspaces": ["packages/*"],
    ...
}
```
- 包demo依赖了包tard，在demo的package.json下手动写入tard依赖即可，如下；yarn装包的时候会把 `"workspaces": ["packages/*"]`下的包都装在根node_modules下
> 为什么不能用yarn add；因为包还没有发布，可以去用lerna配置
```json
// demo package.json
{
    "dependencies": {
        "tard": "1.0.0"
    }
}
```
```json
// tard package.json
{
  "name": "tard",
  "version": "1.0.0",
}
```
- 在根目录安装包，`yarn add XX -w`，比如 `lint规范` 相关的包；需要加上`-w`，因为在 `monorepo` 模式下，`yarn` 会提示你是否是需要安装在子包下面，如果需要安装在根目录下，需要显示的声明 `-w`
- 不同子包依赖相同npm包，但是版本不一致，可以配置workspace，将依赖的npm包安装到子包路径下，而非全局路径下，如下配置
```json
{
    ...
    "private": true,
    // 配置为对象
    "workspaces": {
        "package": [
            "packages/*"
        ],
        "nohoist": [
            "**/bootstrap"
        ]
    },
    ...
}
```


### 实现方案——pnpm workspaces
新建 `pnpm-workspace.yaml` 文件

### monorepo的问题
- 隐式依赖更明显
- 
## 对tree-shaking的了解

### 作用：
它表示在打包的时候会去除一些无用的代码

> `tree shaking`和传统的`DCE（dead code elimination）`的方法又不太一样，传统的`DCE`消灭不可能执行的代码(利用**AST做死区分析**)，而`tree shaking`更关注宇消除没有用到的代码

> 

### 历史：
`tree shaking`在前端界由`rollup`首先提出并实现，后续`webpack`在`2.x`版本也借助于`UglifyJS`实现了

### 原理：
**ES module**，import/export

> ES6的模块引入是静态分析的，所以在编译时能正确判断到底加载了哪些模块，
分析程序流，判断哪些变量未被使用、引用，进而删除此代码

通过导入所有的包后再进行条件获取,如下：
```js
import foo from "foo";
import bar from "bar";

if(condition) {
    // foo.xxxx
} else {
    // bar.xxx
}
```
ES6的import语法完美可以使用tree shaking，因为可以在代码不运行的情况下就能分析出不需要的代码

`CommonJS`的动态特性模块意味着`tree shaking`不适用,因为它是不可能确定哪些模块实际运行之前是需要的或者是不需要的

### 注意：
但应注意的是，使用`tree shaking`不能完全解决未使用代码的问题

是因为经过babel编译全部模块被封装成IIFE，一些我们原本看似没有副作用的代码，便转化为了(可能)有副作用的，它存在**副作用**无法被`tree-shaking`掉

可以在`package.json`中配置`sideEffects`来指定哪些文件是有**副作用**的

> `sideEffects`配置：
> 它有两种值，一个是布尔类型，如果是false则表示所有文件都没有副作用；如果是一个数组的话，数组里的文件路径表示改文件有副作用

### 扩展：
`rollup`和`webpack`中`对tree-shaking`的层度不同，例如对babel转译后的class，如果babel的转译是宽松模式下的话(也就是loose为true)
- `webpack`依旧会认为它有副作用不会`tree-shaking`掉，`uglify`没有完善的程序流分析,它可以简单的判断变量后续是否被引用、修改，但是不能判断一个变量完整的修改过程，不知道它是否已经指向了外部变量，所以很多有可能会产生副作用的代码，都只能保守的不删除
- 而`rollup`会,这是因为`rollup`有程序流分析的功能，可以更好的判断代码是否真正会产生副作用

### 使用
#### 开启
在生产模式下它是默认开启的
```js
// webpack.production.config.js
module.exports = {
    ...,
    mode: "production",
    ...,
};
```

#### 副作用
配置`sideEffects`

有一些代码，是在`import`时执行了一些行为，这些行为不一定和任何导出相关。例如`polyfill` ，`polyfill`通常是在项目中全局引用，而不是在 index.js 中使用导入的方式引用

Tree Shaking 并不能自动判断哪些脚本是副作用，因此手动指定它们非常重要
```json
{
    ...,
    "sideEffects": [
        "./src/polyfill.js"
    ],
    ...,
}
```

比如组件库，排除样式文件副作用，以下为`antd`配置
```json
 "sideEffects": [
    "dist/*",
    "es/**/style/*",
    "lib/**/style/*",
    "*.less"
  ],
```
> `sideEffects`之前，通过`/*@__PURE__*/`这样的注释声明此函数无副作用


## 参考好文
https://zhuanlan.zhihu.com/p/32831172
https://juejin.cn/post/6844903544756109319
### 背景
JS的缺点：动态类型
from：微软设计的

### 定义
![img](./imgs/ts.jpg)
以JavaScript为基础构建的语言，是JavaScript的**超集**
- 可以在任何支持JavaScript的平台中执行
- TypeScript扩展了Javascript、并添加了类型
  
> 注意：TS不能被JS解析器直接执行，需要把TS编译成JS文件（利用**TS解析器**）

### TS增加了什么
- 增加了一些新类型；
- 支持ES的新特性；
- 添加ES不具备的新特性
- 丰富的配置选项（ts可以编译成任何版本的js，兼容）
- 强大的开发工具（VSCode提示）

### 环境搭建
TS解析器：是用node编写的，所以需要node

全局安装typescript，输入`tsc -v`看到版本，证明安装成功
```shell
npm i typescript -g

tsc -v
# Version 4.2.3
```

### 基本类型
#### 类型声明
通过类型声明可以指定以下的类型，指定类型后，变量只能储存某种类型的值
- 变量
- 函数入参
- 函数返回值

指定类型后，当为变量赋值时，TS编辑器会自动检查值是否符合类型声明，符合则赋值，不符合则报错

语法
```js
let 变量: 类型;

let 变量: 类型 = 值;

function fn(参数1: 类型, 参数2: 类型): 类型{
    ...
}
```

#### 自动类型判断
- TS拥有自动的类型判断机制
- 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型

```ts
// 声明一个变量a，同时指定它的类型为number
let a: number
// a的类型为number，在以后的使用过程中a的值只能是数字
a = 10
a = 33
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串

// 声明变量直接赋值
let b = ''
b = '124'
b = 'ee'

// 如果变量的声明跟赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false

c = true
// c = '' // 报错

// 函数入参类型声明
function sum(a: number, b: number) {
    return a + b + 's'
}

// 函数返回值类型声明
function add(a: number, b: number): number {
    // return a + b + '' 报错
    return a + b
}

console.log(sum(124, 45))
```
#### 类型(12中)
| 类型    | 描述                           | 例子          |
| ------- | ------------------------------ | ------------- |
| number  | 任意数字                       | 1,-22,2.5     |
| string  | 任意字符串                     | '', 'hello'   |
| boolean | 布尔值true或者false            | true, false   |
| 字面量  | 限制变量的值就是该字面量的值   | 其本身        |
| any     | 任意类型                       | *             |
| unknown | 类型安全的any                  | *             |
| void    | 没有值（或undefined）          | undefined     |
| never   | 不能是任何值                   | 没有值        |
| object  | 任意的js对象                   | {name: 'abc'} |
| any     | 任意js数组                     | [1,2,3]       |
| tuple   | 元组，TS新增类型，固定长度数组 | [4,5]         |
| enum    | 枚举，TS新增类型               | enum(A,B)     |

- 联合类型
  ｜

- 

> any跟unknown的区别
> 
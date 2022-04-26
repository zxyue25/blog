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
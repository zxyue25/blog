// -----------------字面量----------------------
// 直接使用字面量进行类型声明，只能为10
let num: 10
// num = 11 报错
// 像是定义了一个常量
// 使用场景：结合联合类型
let sex: "male" | 'female'


// -----------------any----------------------
let d: any
d = 10
d = 'hello'
d = false
// 一个变量设置为any后相当于对该变量关闭了TS的类型检测
// 不建议使用any
// 声明变量不指定类型，且不给初始值，则TS解析器会自动判断为any（隐式的any）
let s: string = ''
s = d // 不会报错，d是any类型，可以赋值给任意类型变量，any不仅祸害自己，还祸害被赋值的


// -----------------unknown----------------------
let n: unknown
n = 10
n = 'hello'
n = false
let s2: string = ''
// s2 = n // 报错，unknown类型不能赋值给其他类型
// 解决办法
// 1、类型断言
s2 = n as string
s2 = <string>n
// 2、if判断
if (typeof n === 'string') {
    s2 = n
}


// -----------------void----------------------
// 通常用来指定函数无返回值
function fn(): void {

}


// -----------------never----------------------
// never表示永远不会返回结果，用的很少
// 表示函数执行不完，报错
function fn2(): never {
    throw Error('err')
}

// -----------------object----------------------
// object不常用，因为js语言里面对象的概念并没有限制类型，比如下面的{}和function () {}都是对象
let obj: object
obj = {}
obj = function () { }

let obj2: {}
obj2 = { name: 'jona' }
obj2 = function () { }

// {}用来指定对象中可以包含哪些属性
// 语法: {属性名: 属性类型, 属性名: 属性类型}；在属性名后面加上?, 表示属性是可选的
let obj3: { name: string, age?: number }
obj3 = { name: "jona" }

// 实现：必须有name属性，其他属性不做要求
// [propName: string]: any表示任意类型属性
// propName属性名，一定是string类型，属性类型可以自定义，这里为any
let obj4: { name: string, [propName: string]: any }
obj4 = { name: 'jona', age: '24', sex: '' }

// 设置函数结构的类型声明，语法：(形参: 类型, 形参: 类型, ...) => 返回值
let func: (a: number, b: number) => number
func = (num1, num2) => {
    return num1 + num2
}


// -----------------array----------------------
// 有两种语法，类型[]; Array<类型>
// 字符串数组
let strArr: string[]
strArr = ['1', '2', '3']
// 数字数组
let numArr: number[]
numArr = [1, 2, 3]
// 另一种语法
let numArr2: Array<number>
numArr2 = [1, 2, 3]


// -----------------tuple----------------------
// 元组就是固定长度的数组
// 语法：[类型, 类型, ...]
let h: [string, string]
h = ['hello', 'ts']


// -----------------enum----------------------
enum Gender {
    MALE = "男",
    FEMALE = "女"
}

let student: { name: string, gender: Gender }
student = {
    name: 'jona',
    gender: Gender.FEMALE
}
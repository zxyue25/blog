```js
class Cat{
    say() {
        console.log('meow')
    }
}
```
上面class的写法，其实是一个**语法糖**，如下
```js
function cat(){}
Object.defineProperty(Cat.prototype, "say", {
    value: function(){console.log("meow")},
    enumerable: false,
    configurable: true,
    writable: true
})
```
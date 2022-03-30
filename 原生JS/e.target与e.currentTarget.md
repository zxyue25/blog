这两个方法都是监听事件触发的目标,区别是
#### event.currentTarget，父节点
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/currentTarget): Event 接口的只读属性 currentTarget 表示的，标识是当事件沿着 DOM 触发时事件的当前目标。它总是指向**事件绑定的元素**，而 Event.target 则是**事件触发的元素**

#### Event.target，当前节点
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target): 触发事件的对象 (某个DOM元素) 的引用。当事件处理程序在事件的冒泡或捕获阶段被调用时，它与event.currentTarget不同

总结：
- e.target指向的是触发事件的元素；
- e.currentTarget指向的是添加监听事件的元素；
- e.target可以实现事件委托，通过事件冒泡给父元素添加事件监听
- e.target指向引发事件触发的元素，在上面中，e.target指向的是p和i元素，由于事件冒泡机制，p和i的点击事件冒泡到了父元素button中，通过给button添加事件监听可以达到监听p和i元素的监听。
- 而e.currentTarget指向的是绑定监听事件的元素，即button元素，因此在p和i的点击事件中，e.currentTarget===this;而e.target！=this
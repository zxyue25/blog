function func1(a: number, b: number) {
    return a + b
}

function func2(this: Window) {
    alert(this)
}

let box = document.getElementById("box1")
box?.addEventListener('click', () => {
    alert('click')
})
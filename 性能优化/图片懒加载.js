
// 法一：getBoundingClientRect()
function isVisible (el) {
    const position = el.getBoundingClientRect()
    const windowHeight = document.documentElement.clientHeight
    const { top, bottom } = position
    // 顶部边缘可见
    const topVisible = top > 0 && top < windowHeight
    // 底部边缘可见
    const bottomVisible = bottom < windowHeight && bottom > 0
    return topVisible || bottomVisible
}

function imageLazyLoad () {
    const images = document.querySelectorAll('img[data-src]')
    for (let img of images) {
        const realSrc = img.dataset.src
        if (!realSrc) continue
        if (isVisible(img)) {
            img.src = realSrc
            img.dataset.src = ''
            item.removeAttribute('data-src')
        }
    }
}

window.addEventListener('load', imageLazyLoad)
window.addEventListener('scroll', throttle(imageLazyLoad, 1000))

// 法二：IntersectionObserver
const imgs = document.querySelectorAll('img[data-src]')
const config = {
  rootMargin: '0px',
  threshold: 0,
}
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      let src = img.dataset.src
      if (src) {
        img.src = src
        img.removeAttribute('data-src')
      }
      // 解除观察
      self.unobserve(entry.target)
    }
  })
}, config)

imgs.forEach((image) => {
  observer.observe(image)
})


var imgs = document.querySelectorAll('.new')
var btns = document.querySelectorAll("span")
var ul = document.querySelector(".points")
var lis = document.getElementsByTagName("li")
var timer
var current = 0 // 當前撥放圖片的索引
var flag = true //點擊房斗節流
var len = imgs.length //圖片長度
function loadFirst() {
    imgMove()
    bind()
    btnClick()
    getDot()
    showDot()
    autoPlay()
}
loadFirst()

function imgMove() {
    var mlen = Math.floor(len / 2)
    for (var i = 0; i < mlen; i++) {
        // 當前撥放圖片的索引
        var rimg = current + 1 + i
        var limg = len + current - 1 - i
        if (rimg >= len) {
            rimg -= len
        }
        if (limg >= len) {
            limg -= len
        }
        imgs[limg].style.transform = `translateX(${150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(-30deg)`
        imgs[rimg].style.transform = `translateX(${-150 * (i + 1)}px) translateZ(${200 - i * 100}px) rotateY(30deg)`
    }
    imgs[current].style.transform = `translateZ(300px)`
}
// 自動播放的函数
function autoPlay() {
    timer = setInterval(function () {
        if (current >= len - 1) {
            current = 0
        } else {
            current++
        }
        imgMove()
        autoLi()
    }, 3000)
}
// 點擊圖片進行播放
function bind() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function () {
            current = i
            imgMove()
            autoLi()
        }
        imgs[i].onmouseover = function () {
            clearInterval(timer)
        }
        imgs[i].onmouseout = function () {
            autoPlay()
        }
    }
}
// 点击左右按钮
function btnClick() {
    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            // 防止狂点击
            if (!flag) {
                return
            }
            flag = false
            if (i == 0) {
                // 上一张
                if (current <= 0) {
                    current = len - 1
                } else {
                    current--
                }
            } else {
                //下一张
                if (current >= len - 1) {
                    current = 0
                } else {
                    current++
                }
            }
            setTimeout(function () {
                flag = true
            }, 1000)

            imgMove()
            autoLi()

        }
        btns[i].onmouseenter = function () {
            clearInterval(timer)
        }
        btns[i].onmouseout = function () {
            autoPlay()
        }
    }
}
// 点
function getDot() {
    for (var i = 0; i < len; i++) {
        ul.innerHTML += `<li></li>`
    }
    lis[0].classList.add("current")
}

function showDot() {
    for (let i = 0; i < len; i++) {
        lis[i].onclick = function () {
            for (var j = 0; j < len; j++) {
                lis[j].classList.remove("current")
            }
            this.classList.add("current")
            current = i
            imgMove()
        }
    }
}

function autoLi() {
    for (var i = 0; i < len; i++) {
        if (i == current) {
            lis[i].classList.add("current")
        } else {
            lis[i].classList.remove("current")
        }
    }
}
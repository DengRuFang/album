
function getId(tag) {
    return document.getElementById(tag)
}
var box = getId("box");
var small = getId("small");
var mask1 = getId("mask");
var big = getId("big");
var pic = big.children[0];
console.log(pic);

small.onmouseover = function () {
    mask1.style.display = "block";
    big.style.display = "block";
}
small.onmouseout = function () {
    mask1.style.display = "none";
    big.style.display = "none"
}

small.onmousemove = function (e) {
    var marginL = box.offsetLeft;
    var marginT = box.offsetTop;
    var currentX = e.clientX;
    var currentY = e.clientY;
    var x = currentX - marginL - mask1.offsetWidth / 2;
    var y = currentY - marginT - mask1.offsetHeight / 2;


    if (x < 0) { x = 0; }
    if (x > small.offsetWidth - mask1.offsetWidth) { x = small.offsetWidth - mask1.offsetWidth };
    if (y < 0) { y = 0; }
    if (y > small.offsetHeight - mask1.offsetHeight) { y = small.offsetHeight - mask1.offsetHeight };
    mask1.style.left = x + "px";
    mask1.style.top = y + "px";


    var relativeX = mask1.offsetLeft;
    var relativeY = mask1.offsetTop;
    var proporationX = small.offsetWidth / pic.offsetWidth;
    var proporationY = small.offsetWidth / pic.offsetHeight;
    pic.style.marginLeft = -relativeX * proporationX + "px";
    pic.style.marginTop = -relativeY * proporationY + "px";
}

btn.onclick = function () {
    alert('已收到您的回覆囉！');

}

reset.onclick = function () {
    var textarea = document.getElementById("textarea").value = "";
    var name = document.getElementById("name").value = "";
    alert("已幫您清空囉！")
}



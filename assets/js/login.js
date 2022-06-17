/*登入註冊*/
var mask = document.getElementById("mask2");
var maskbtn = document.getElementById("maskbtn");
var user = document.getElementById("user");
var form = document.getElementById("loginform");
var x = document.getElementById("x");
var body = document.getElementById("body");
var outside = document.getElementById("outside");

/*點視窗以外就跳出*/
window.onclick = function (event) {
    if (event.target == outside) {
        close();
    }
}
/*左右換*/
var value = 1;
maskbtn.addEventListener('click', function () {
    if (value == 1 || value == 3) {
        leftrun();
        maskbtn.innerHTML = "已有帳號，要登入";
        mask.style.transition = "0.4s";
        value = 2;
    }
    else {
        rightrun();
        maskbtn.innerHTML = "沒有帳號，要註冊";
        mask.style.transition = "0.4s";
        value = 1;
    }
})
/*彈出*/
user.addEventListener('click', function () {
    show();
})
/*關閉*/
x.addEventListener('click', function () {
    mask.style.transition = "0s";
    close();
    value = 3;
})

/*往右跑*/
function rightrun() {
    mask.style = "left:965px";
    document.getElementsByClassName("input")[2].value="";
    document.getElementsByClassName("input")[3].value="";
    document.getElementsByClassName("input")[4].value="";
}

/*往左跑*/
function leftrun() {
    mask.style = "left:365px";
    document.getElementsByClassName("input")[0].value="";
    document.getElementsByClassName("input")[1].value="";
}

function show() {
    form.style.visibility = "visible";
    mask.classList.remove("hidden");
    mask.style.visibility = "visble";
    body.classList.add("scroll");
    outside.style.visibility = "visible"
}

function close() {
    form.style.visibility = "hidden";
    mask.classList.add("hidden");
    click_store = setTimeout(function (e) {
        maskbtn.innerHTML = "沒有帳號，要註冊";
        mask.style = "left:965px"
    }, 100);
    body.classList.remove("scroll");
    outside.style.visibility = "hidden"
    document.getElementsByClassName("input")[0].value="";
    document.getElementsByClassName("input")[1].value="";
    document.getElementsByClassName("input")[2].value="";
    document.getElementsByClassName("input")[3].value="";
    document.getElementsByClassName("input")[4].value="";
}

/*登出 */
var signout = document.getElementById("signout");
signout.addEventListener('click', function () {
    alert("您已登出囉！");
})
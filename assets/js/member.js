function inbtn() {
    // 獲取div元素
    var popBox = document.getElementById("inbtn");
    var popLayer = document.getElementById("member-btn");

    // 控制兩個div的顯示與隱藏
    popBox.style.display = "block";
    popLayer.style.display = "block";
}

function closePop() {
    // 獲取彈出視窗元素
    let inbtn = document.getElementById("inbtn");

    inbtn.style.display = "none";
}

function inbtn2() {
    // 獲取div元素
    var popBox = document.getElementById("inbtn2");
    var popLayer = document.getElementById("member-btn2");

    // 控制兩個div的顯示與隱藏
    popBox.style.display = "block";
    popLayer.style.display = "block";
}
function closePop2() {
    // 獲取彈出視窗元素
    let inbtn = document.getElementById("inbtn2");

    inbtn.style.display = "none";
}

function inbtn3() {
    // 獲取div元素
    var popBox = document.getElementById("inbtn3");
    var popLayer = document.getElementById("member-btn3");

    // 控制兩個div的顯示與隱藏
    popBox.style.display = "block";
    popLayer.style.display = "block";
}
function closePop3() {
    // 獲取彈出視窗元素
    let inbtn = document.getElementById("inbtn3");

    inbtn.style.display = "none";
}


btn1.onclick = function () {
    alert('已收到您的回覆囉！');

}

reset1.onclick = function () {
    var name = document.getElementById("name").value = "";
    var name2 = document.getElementById("name2").value = "";
    var phone = document.getElementById("phone").value = "";
    var address = document.getElementById("address").value = "";
    var email = document.getElementById("email").value = "";
    var bth = document.getElementById("bth").value = "";
    alert('已幫您清空囉！');
}
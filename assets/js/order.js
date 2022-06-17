var detail1 = document.getElementsByClassName("orderinsidebtn")[0];
var detail2 = document.getElementsByClassName("orderinsidebtn")[2];
var detail3 = document.getElementsByClassName("orderinsidebtn")[4];
var detail4 = document.getElementsByClassName("orderinsidebtn")[6];
var orderdetail = document.getElementById("orderdetail");
var orderdetailclose = document.getElementById("orderdetailclose");

detail1.addEventListener('click', function () {
    orderdetail.style.visibility = "visible";
});

detail2.addEventListener('click', function () {
    orderdetail.style.visibility = "visible";
});

detail3.addEventListener('click', function () {
    orderdetail.style.visibility = "visible";
});

detail4.addEventListener('click', function () {
    orderdetail.style.visibility = "visible";
});

orderdetailclose.addEventListener('click', function () {
    orderdetail.style.visibility = "hidden";
})

function del() {
    alert("已刪除商品");
}

function delorder() {
    alert("已刪除訂單");
}
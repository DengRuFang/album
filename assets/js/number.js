function down() {

    var num = parseInt(document.getElementById("num").value);
    num -= 1;
    if (num <= 0) {
        alert("只能輸入1以上哦!")
    }
    else {
        document.getElementById("num").value = num;
    }
}

function up() {
    var num = parseInt(document.getElementById("num").value);
    num += 1;
    document.getElementById("num").value = num;
}

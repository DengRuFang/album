var li1 = document.getElementById("li1");
var liup = document.getElementById("li1-uptalk");
var lidown = document.getElementById("li1-downtalk");
var li2up = document.getElementById("li1-2-uptalk");
var li2down = document.getElementById("li1-2-downtalk");
var li2 = document.getElementById("li2");
var li3 = document.getElementById("li3");
var li4 = document.getElementById("li4");
var li5 = document.getElementById("li5");
var img = document.getElementById("img");
var img1 = document.getElementById("img1");

li1.addEventListener('click', function () {
    img.src = "./assets/img/people1.png";
    img1.src = "./assets/img/people1.png";
    liup.innerHTML = "請問有退換貨服務嗎？";
    lidown.innerHTML = "有的唷<br>我們的產品適用七天猶豫期";
    li2up.innerHTML = "怎麼退換貨呢？";
    li2down.innerHTML = "只要留著收據並連絡我們就可以了";
})
li2.addEventListener('click', function () {
    img.src = "./assets/img/people3.png";
    img1.src = "./assets/img/people3.png";
    liup.innerHTML = "請問有運費嗎？";
    lidown.innerHTML = "我們運費統一60元唷";
    li2up.innerHTML = "有免運嗎？";
    li2down.innerHTML = "滿一千元就可以免運！！！";
})
li3.addEventListener('click', function () {
    img.src = "./assets/img/people4.png";
    img1.src = "./assets/img/people4.png";
    liup.innerHTML = "請問運送時間大概多久？";
    lidown.innerHTML = "若產品為現貨的話，大約兩天三送達。遇假日則順延";
    li2up.innerHTML = "為什麼我的貨還沒到？";
    li2down.innerHTML = "因為疫情期間發貨量大導致塞車，請再耐心稍後幾天";
})
li4.addEventListener('click', function () {
    img.src = "./assets/img/people5.png";
    img1.src = "./assets/img/people5.png";
    liup.innerHTML = "怎麼加入會員？";
    lidown.innerHTML = "在我們的網站註冊即可成為會員";
    li2up.innerHTML = "要怎麼看消費紀錄？";
    li2down.innerHTML = "在網站登入帳號後點擊會員資料即可看見";
})
li5.addEventListener('click', function () {
    img.src = "./assets/img/people6.png";
    img1.src = "./assets/img/people6.png";
    liup.innerHTML = "要怎麼聯絡你們？";
    lidown.innerHTML = "網站左下角有我們的連絡資訊哦";
    li2up.innerHTML = "你們假日有營業嗎？";
    li2down.innerHTML = "我們只有在平日營業哦！";
})

var text = document.getElementById("text");
var word = ['搭乘專機<br>&nbsp&nbsp&nbsp在音樂的世界翱翔',
    '搭起音樂的橋樑<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp與世界交流',
    '拋棄煩惱<br>&nbsp&nbsp&nbsp在音樂的宇宙中遨遊',
    '利用一首歌的時間<br>&nbsp&nbsp&nbsp讓音樂與我們的心緊緊連接'];
var search = document.getElementById("searchpic");
var user = document.getElementById("user");
var cart = document.getElementById("cart");
var signout = document.getElementById("signout");


(function () {
    let i = 0;
    setInterval(
        function () {
            clear();
            i++;
            i == word.length ? i = 0 : "";
            document.getElementsByClassName("content")[0].innerHTML = word[i];

        }, 3000
    );
})();

function clear() {
    text.addEventListener('webkitAnimationEnd', function () {
        text.css("animation", "animation: fade-in-bottom 1s");
    })
}

search.addEventListener('mouseenter', function () {
    search.src = "./assets/img/searchindex2.png";
})
search.addEventListener('mouseleave', function () {
    search.src = "./assets/img/searchindex.png";
})

user.addEventListener('mouseenter', function () {
    user.src = "./assets/img/userpicindex2.png";
})
user.addEventListener('mouseleave', function () {
    user.src = "./assets/img/userpicindex.png";
})

cart.addEventListener('mouseenter', function () {
    cart.src = "./assets/img/cartpicindex2.png";
})
cart.addEventListener('mouseleave', function () {
    cart.src = "./assets/img/cartpicindex.png";
})

signout.addEventListener('mouseenter', function () {
    signout.src = "./assets/img/signoutindex2.png";
})
signout.addEventListener('mouseleave', function () {
    signout.src = "./assets/img/signoutindex.png";
})


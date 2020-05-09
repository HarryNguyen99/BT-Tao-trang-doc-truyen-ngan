
let locImg1 = document.getElementById("click1")
let locImg2 = document.getElementById("click2")
let locImg3 = document.getElementById("click3")
let locImg4 = document.getElementById("click4")
let locImg5 = document.getElementById("click5")
let locImg6 = document.getElementById("click6")
let locImg7 = document.getElementById("clack7");
let locContent = $("#content");

locImg1.addEventListener("click", function () {
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/73-nam-cuoc-doi-toi-da-chet-tu-nam-30-tuoi.html");
},false);

locImg2.addEventListener("click", function () {
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/nghiep-la-gi.html")
},false);

locImg3.addEventListener("click", function () {
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/bong-troc-phan-son.html")
},false);

locImg4.addEventListener("click", function () {
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/hem-muoi-ba.html")
}, false);

locImg5.addEventListener("click", function () {
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/vu-tru-doi.html")
}, false);

locImg6.addEventListener("click", function () {
 locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/thang-he-phan-phuc.html")
}, false);

locImg7.addEventListener("click", function(){
    locContent.load("http://localhost:63342/Tao-trang-doc-truyen-ngan/nguoi-chien-thang-trong-coi-sinh-tu.html");
}, false);

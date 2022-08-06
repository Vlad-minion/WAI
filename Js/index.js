$(document).ready(function (){
$('.slider').slick({
    arrow: true,
    adaptiveHeight: true,
    dots: true,
})
})


const menuBtn = document.querySelector(".menu-btn");
const menuActive = document.querySelector(".menu_nav");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("menu-btn_active");
 menuActive.classList.toggle("menu_nav_active")
});


const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(author_page).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
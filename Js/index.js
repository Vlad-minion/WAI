$(document).ready(function (){
$('.slider').slick({
    arrow: true,
    adaptiveHeight: true
})
})


const menuBtn = document.querySelector(".menu-btn");
const menuActive = document.querySelector(".menu_nav");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("menu-btn_active");
 menuActive.classList.toggle("menu_nav_active")
});
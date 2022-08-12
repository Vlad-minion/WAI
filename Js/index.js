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





const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
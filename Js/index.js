$(document).ready(function (){
$('.slider').slick({
    arrow: true,
    adaptiveHeight: true
})
})


$(document).ready(function (){
$('.menu_btn'),on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
})
})
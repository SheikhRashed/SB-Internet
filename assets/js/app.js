$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('header').addClass('fixed-header');
        $('header nav').addClass('visible-title');
    } else {
        $('header').removeClass('fixed-header');
        $('header nav').removeClass('visible-title');
    }
});

$('.feed__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: false,
    prevArrow:
        '<button class="prevArrow"> <i class="fas fa-chevron-left"></i></button>',
    nextArrow:
        '<button class="nextArrow"> <i class="fas fa-chevron-right"></i></button>',
});
$('.tabs__slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: true,
});

const toggle = document.querySelector('.toggle');
const toggle2 = document.querySelector('.toggle2');
const sticky = document.querySelector('.sticky__sidebar');
const sticky2 = document.querySelector('.sticky__sidebar.social');

toggle.addEventListener('click', (e) => {
    sticky.classList.toggle('open');
});
toggle2.addEventListener('click', (e) => {
    sticky2.classList.toggle('open');
});

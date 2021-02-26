'use strict';

const toolsItem = [
    'Adobe Cloud',
    'AD Self Service',
    'All Employee Guide',
    'Access request form',
    'Access revoke form',
    'Axure RP Cloud',
    'Adobe Cloud Analytics',
    'ATM IT Incident​',
    'AD Self Service',
    'Access revoke form',
    'AML IT Incident Compliance',
    'ARIS Script IT Incident',
    'All Employee Guide',
    'Axure RP Cloud',
    'Assurance IT Incident',
    'Remedy',
    'New Account application',
    'Bond Calculator',
    'Pre-Approval bond application',
    'forms',
    'bond calculator',
    'forex form',
];

const alphabet = document.querySelector('#alphabet');
toolsItem.forEach((item) => {
    // create li element
    const li = document.createElement('li');
    // create link
    const link = document.createElement('a');
    link.textContent = item;
    li.appendChild(link);
    alphabet.appendChild(li);
    // console.log(item);
});

// const alphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//     '#',
// ];
// console.log(alpha);
// alphabet.forEach((alpha, i) => {
//     const capital = document.querySelector('.capital__Alphabet');
//     //    alpha.textContent = 'Hello'
//     // creaate li
//     const li = document.createElement('li');
//     li.className = 'capital__letter';
//     // capital.appendChild
//     li.innerHTML = `${alpha}`;
//     capital.appendChild(li);
//     console.log(li, i);
// });

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
$('#alphabet').listnav({
    includeAll: false,
    includeNums: false,
    showCounts: false,
});

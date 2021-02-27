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
    const li = document.createElement('li');
    // create link
    const link = document.createElement('a');
    link.textContent = item;
    li.appendChild(link);
    // console.log(item);
    alphabet.appendChild(li);
    // item.add
});

// let output = [];
// const selectItems = document.querySelectorAll('#alphabet li a');
let selectItem = [];

const select = document.querySelectorAll('#alphabet li a');
select.forEach((singleItem) => {
    singleItem.addEventListener('click', () => {
        selectItem.push(singleItem);
        // console.log(selectItem);
    });
});

const recomendDiv = document.querySelector('.business-Tools__reco');
// const cross = document.querySelector('.business-Tools__cross');
const appendDiv = document.querySelectorAll('.append');
console.log(appendDiv);

appendDiv.forEach((item) => {
    item.addEventListener('click', () => {
        recomendDiv.classList.toggle('d-none');
    });
});

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
// toggle2.addEventListener('click', (e) => {
//     sticky2.classList.toggle('open');
// });
$('#alphabet').listnav({
    includeAll: false,
    includeNums: false,
    showCounts: false,
});

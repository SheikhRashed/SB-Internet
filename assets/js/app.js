// @ts-nocheck
'use strict';
// UI Var
const recomendDiv = document.querySelector('.business-Tools__reco');
const appendDiv = document.querySelectorAll('.append');
const alphabet = document.querySelector('#alphabet');
const render = document.querySelector('.toolbox__render-item');
const recommendedList = document.querySelector('.business-Tools__tool-item');
const recommendItemList = document.querySelectorAll(
    '.business-Tools__tool-item li'
);
// Tools box datas
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
// recommended box datas

let recommendedItem = [
    'recommend-01',
    'recommend-02',
    'recommend-03',
    'recommend-04',
    'recommend-05',
];
// Render all data and append UI
toolsItem.forEach((item) => {
    const li = document.createElement('li');
    // create link
    const link = document.createElement('a');
    link.className = 'alphabet-link';
    link.textContent = item;
    li.appendChild(link);
    alphabet.appendChild(li);
});

// add toolsItem start
alphabet.addEventListener('click', function (e) {
    if (e.target.classList.contains('alphabet-link')) {
        let text = e.target.textContent;
        recommendedItem.push(text);
        let a = businessToolstoolitem.lastElementChild.cloneNode(true);
        a.children[0].innerHTML = `${text} <span class="delete">x</span>`;
        businessToolstoolitem.appendChild(a);
    }
});

recommendedItem.forEach((item) => {
    // create li element
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="#">
            ${item}
            <span class="delete">X</span>
        </a>
    `;
    let data = recommendedList.appendChild(li);

    // append Item on Modal
    const list2 = document.createElement('li');
    list2.innerHTML = `
    <span class="delete">✓</span>
        <a href="#">
            ${item}
        </a>
    `;
    render.appendChild(list2);
});

// remove recommended toolsItem start
let businessToolstoolitem = document.querySelector(
    '.business-Tools__tool-item'
);
businessToolstoolitem.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
// remove recommended toolsItem end

// Recommended Div adding removing action

appendDiv.forEach((item) => {
    item.addEventListener('click', () => {
        recomendDiv.classList.toggle('d-none');
    });
});

// Plugin Initalizations

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

$('#alphabet').listnav({
    includeAll: false,
    includeNums: false,
    showCounts: false,
});

// Business tool suggest form

// Sweetalert delete start
$('#sendRequest').on('click', function () {
    Swal.fire({
        title: 'Success',
        text: `Thank you for your Business tool suggestion. 
        Your request will be made available upon approval.`,
        showCloseButton: true,
        showConfirmButton: false,
    });
});

//Sweetalert delete end

// @ts-nocheck
'use strict';

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
  // item.add
  // console.log(item);
  // create li element

  const li = document.createElement('li');
  // create link
  const link = document.createElement('a');
  link.className = 'alphabet-link';
  link.textContent = item;
  li.appendChild(link);
  // console.log(item);
  alphabet.appendChild(li);
  // item.add
});

// add toolsItem start
alphabet.addEventListener('click', function (e) {
  if (e.target.classList.contains('alphabet-link')) {
    let text = e.target.textContent;
    // let a =  businessToolstoolitem.lastElementChild.cloneNode(true);
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.innerHTML = `${text} <span class="delete">x</span>`;
    li.appendChild(a);
    businessToolstoolitem.appendChild(li);
  }
});
// add toolsItem end

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

// Recommended success start
{
  let toolboxSuccess = document.getElementById('toolbox-success');
  let toolboxRenderItem = document.getElementById('toolbox__render-item');

  toolboxSuccess.addEventListener('click', function (e) {
    [...businessToolstoolitem.children].forEach((item) => {
      let text = item.innerText;
      let lastIndex = text.lastIndexOf(' ');
      text = text.substring(0, lastIndex);
      let li = liGenerator(text);
      toolboxRenderItem.appendChild(li);
    });

    // modal hidden remove item
    $('#exampleModalCenter').on('hidden.bs.modal', function () {
      [...toolboxRenderItem.children].forEach((item) => {
        item.remove();
      });
    });
  });

  function liGenerator(data) {
    let li = document.createElement('li');
    li.innerHTML = `
        <span>✓</span>
        <a href="#">${data}</a>
        `;
    return li;
  }
}
// Recommended success end

function insertData(data) {
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement('li');
    console.log(li);
  }
}

const recomendDiv = document.querySelector('.business-Tools__reco');
const appendDiv = document.querySelectorAll('.append');
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

$('.bannermwb').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1600,
});

$('.quickView__slider-1').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '.left',
  nextArrow: '.right',
});
$('.quickView__slider-2').slick({
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '.left.left-2',
  nextArrow: '.right.right-2',
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
$('.system__status-slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2900,
  dots: true,
  arrows: false,
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
$('#alphabet-sm').listnav({
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

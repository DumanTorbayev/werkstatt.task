const toggle = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-menu-wrap');
const searchButton = document.querySelector('.searchOpen-btn');
const searchField = document.querySelector('.mobile-search');

toggle.addEventListener('click', function () {
  toggle.classList.toggle('change')
})

$(document).ready(function(){
  $('.testimonials-carousel-wrap').slick({
    arrows: false,
    dots: true
  });
});
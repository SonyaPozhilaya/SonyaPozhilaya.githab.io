$(document).ready(function(){
  $('.top__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    swipe: false,
    pauseOnFocus: false
  });
});

$(document).ready(function(){
  $('.inner__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    swipe: false,
    pauseOnFocus: false
  });
});

const header = document.querySelector(".header");

window.onscroll = function() {
  var header = document.getElementById("#header");
  if (window.pageYOffset > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

const elements = document.querySelectorAll('.underline');

elements.forEach(element => {
  element.addEventListener('mouseover', function() {
    this.style.textDecoration = 'underline';
    this.style.transition = 'textDecoration 0.3s ease';
  });

  element.addEventListener('mouseout', function() {
    this.style.textDecoration = 'none';
  });
});

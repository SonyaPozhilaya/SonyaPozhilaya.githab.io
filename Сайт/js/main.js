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
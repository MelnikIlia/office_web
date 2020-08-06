$(document).ready(function () {
  let slider = $('.carousel'),
      filter = $('.projects-slider__filter .filters__item');

  function switcher(current, prev) {
    if(!current.classList.contains('active')) {
      prev.removeClass('active');
      current.classList.add('active');
    }
  }

  function changeSlider(index, slider, prev) {
    if(!slider[index].classList.contains("active")) {
      prev.removeClass('active');
      slider[index].classList.add('active');
    }
  }

  filter.each(function(i, item) {
    item.addEventListener('click', function() {
      switcher(item, $('.filters__item.active'));
      changeSlider(i, slider, $('.carousel.active'));
      $('.carousel.active').carousel();
    });
  });

  $('.carousel.active').carousel();

  $('#slider').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    dots: true,
    mouseDrag: false
  });
});
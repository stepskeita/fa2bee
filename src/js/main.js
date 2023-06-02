$(document).ready(function () {
  $(".about-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    slideTransition: "linear",
    margin: 10,
    responsive: {
      1450: {
        items: 4,
      },
      900: {
        items: 3,
      },
    },
  });
});

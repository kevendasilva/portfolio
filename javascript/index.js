// Configurações do carrossel

$('.owl-carousel').owlCarousel({
  dots: false,
  loop: true,
  margin: 100,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: true,
  slidesPerView: 1, // За замовчуванням 3 слайди
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Aдаптивність
  breakpoints: {
    // коли ширина екрану менша за 890px
    890: {
      slidesPerView: 3, // показувати 1 слайд
    },
  },
});

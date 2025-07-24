// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// initialise swiper

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  },
});

import Swiper from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperGallery = new Swiper(".swiper", {
  modules: [Navigation, Autoplay],
  speed: 1000,
  loop: true,
  wrapperClass: "list-gallery",
  slideClass: "item-gallery",
  spaceBetween: 20,

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
  slidesPerView: 1,
  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
});

const swiperTours = new Swiper(".swiper-tour", {
  modules: [Navigation],
  speed: 1000,
  resistanceRatio: 0,
  watchOverflow: true,

  wrapperClass: "list-upcoming",
  slideClass: "iteam-upcoming",
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  navigation: {
    enabled: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const modalToursSwiper = new Swiper(".modalSwiper", {
//   modules: [Pagination],
//   speed: 1000,
//   slidesPerView: 1,

//   wrapperClass: "modalSwiperWraper",
//   slideClass: "tour-block",
//   pagination: {
//     renderBullet: function (_, className) {
//       return '<span class="' + className + '">' + "</span>";
//     },
//     el: ".swiperPagination",
//     type: "bullets",
//     clickable: true,
//   },
// });

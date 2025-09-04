import MicroModal from "micromodal";
import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import { tours } from "./exportTours";

tours.forEach(({ id, slider, priceTour }) => {
  const slidesHTML = slider

    .map((slide) => {
      const firstImage = slide.images[0];
      return `
      <div class="tour-block">
        <picture>
          <source
            srcset="${firstImage.srcsetDesc.x1} x1, ${
        firstImage.srcsetDesc.x2
      } x2"
            media="${firstImage.mediaDesc}" />
          <source
            srcset="${firstImage.srcsetTab.x1} x1, ${
        firstImage.srcsetTab.x2
      } x2"
            media="(min-width: 768px)" />
          <source
            srcset="${firstImage.srcsetMob.x1} x1, ${
        firstImage.srcsetMob.x2
      } x2"
            media="${firstImage.mediaMob}" />
          <img
            class="bg-picture"
            src="${firstImage.src}"
            alt="${firstImage.alt}" />
        </picture>
        <div class="tour-content">
          <h4 class="tour-title">${slide.content.title}</h4>
          <span class="numDay">${slide.content.numDay}</span>
          <ul class="tours-modal-list">
            ${slide.content.items
              .map(
                (item) => `
              <li class="tours-modal-item">
                <p class="modal-tours-name">${item.name}</p>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      </div>
    `;
    })
    .join("");

  const modalHTML = `
    <div class="modal-overlay-tours" id="modal-${id}" aria-hidden="true" data-custom-close>
      <div class="overlay-tours">
        <div class="modal-tours-content">
          <button class="tours-close-btn" data-custom-close>
            <svg class="tours-modal-close-icon" width="15" height="15">
              <use href="/icon/symbol-defs.svg#icon-close-2"></use>
            </svg>
          </button>
          <div class="modalSwiper">
            <div class="modalSwiperWraper">
              ${slidesHTML}
            </div>
            <div class="swiperPagination"></div>
          </div>
        </div>
        <div class="price-block">
          <p class="price-tour-modal">UAH ${priceTour}/person</p>
          <button class="buy-tour">BOOK A TOUR</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
});

MicroModal.init({
  openTrigger: "data-custom-open",
  closeTrigger: "data-custom-close",
  disableScroll: true,
  awaitOpenAnimation: true,
  debugMode: false,
  disableOverlayClose: true,
});

const modalToursSwiper = new Swiper(".modalSwiper", {
  modules: [Pagination],
  speed: 1000,
  slidesPerView: 1,
  resistanceRatio: 0, // Вимкнути "тягнути" на останньому слайді
  watchOverflow: true, // Вимкнути навігацію якщо слайдів менше ніж потрібно
  wrapperClass: "modalSwiperWraper",
  slideClass: "tour-block",
  pagination: {
    renderBullet: function (_, className) {
      return '<span class="' + className + '">' + "</span>";
    },
    el: ".swiperPagination",
    type: "bullets",
    clickable: true,
  },
});

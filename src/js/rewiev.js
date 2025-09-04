import { items } from "./exportReview";

const list = document.querySelector(".list-review");

const createLi = items
  .map(
    ({
      usetFotoX1,
      usetFotoX2,
      altUser,
      userName,
      textReview,
      backFotoX1,
      backFotoX2,
      backFotoAlt,
      delay,
    }) => `<li class="iteam-review" data-aos="zoom-in-up" data-aos-delay="${delay}">
        <div class="card">
          <div class="content">
            <div class="front">
              <div class="reviews-foto">
                <img
                  class="back-graund"
                  srcset="/reviews/Review_desk-min.webp"
                  src="/reviews/Review_desk@2x-min.webp 2x"
                  alt="bg"
                  width="311" />
                <img
                  class="user-review"
                  srcset="${usetFotoX1}"
                  src="${usetFotoX2}"
                  alt="${altUser}"/>
              </div>
              <div class="block-text-review">
                <h3 class="name-review">${userName}</h3>
                <p class="text-review">
                ${textReview}
                </p>
              </div>
            </div>
            <div class="back">
              <img
                class="back-foto"
                src="${backFotoX2}"
                alt="${backFotoAlt}"
                srcset="${backFotoX1}" />
            </div>
          </div>
        </div>
      </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", createLi);

//

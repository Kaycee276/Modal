"use strict";

const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overLay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";
import FormValidator from "./FormValidator.js";
const buttonOpenPopupProfile = document.querySelector(
  ".profile__edit-button_type_profile"
);

const popupProfile = document.querySelector(".popup_type_profile");



const inputName = popupProfile.querySelector(".popup__input_type_name");
const inputJob = popupProfile.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__info-name_type_name");
const profileJob = document.querySelector(
  ".profile__info-activity_type_activity"
);

const editForm = document.forms["edit-form"];

// const closePopupWithEsc = (evt) => {
//   if (evt.key === "Escape") {
//     const popupOpened = document.querySelector(".popup_opened");
//     closePopup(popupOpened);
//   }
// };
// const closePopupWithOverlay = (evt) => {
//   if (evt.target.classList.contains("popup_opened")) {
//     closePopup(evt.target);
//   }
// };

// const openPopup = (popup) => {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupWithEsc);
//   // popup.addEventListener("click", closePopupWithOverlay);
// };
// const closePopup = (popup) => {
//   popup.classList.remove("popup_opened");
//   // document.removeEventListener("keydown", closePopupWithEsc);
//   // popup.removeEventListener("click", closePopupWithOverlay);
// };
// const popups = document.querySelectorAll(".popup");

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopup(popup);
//     }
//   });
// });

// // const closeButtons = document.querySelectorAll(".popup__close");

// // closeButtons.forEach((button) => {
// //   const popup = button.closest(".popup");
// //   button.addEventListener("click", () => closePopup(popup));
// // });

function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener("click", openPopupProfile);
function closePopupProfile() {
  closePopup(popupProfile);
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopupProfile();
}
editForm.addEventListener("submit", handleFormSubmitProfile);

const buttonOpenPopupPublication = document.querySelector(
  ".profile__add-button"
);
const popupPublication = document.querySelector(".popup_type_publication");


const openPopupPublication = () => openPopup(popupPublication);
const closePopupPublication = () => closePopup(popupPublication);
buttonOpenPopupPublication.addEventListener("click", openPopupPublication);

const elements = document.querySelector(".elements");
// const elementTemplate = document.querySelector(".elemet-template").content;

// const popupImageFullScreen = document.querySelector(".popup_type_full-screen");
// const imageFullScreen = popupImageFullScreen.querySelector(
//   ".popup__figure-image"
// );
// const tiitleFullScreen =
//   popupImageFullScreen.querySelector(".popup__figcaption");


// const createCard = (link, name) => {
//   const elementEl = elementTemplate.querySelector(".element").cloneNode(true);
//   const cardName = elementEl.querySelector(".element__place");
//   cardName.textContent = name;
//   const cardImage = elementEl.querySelector(".element__image");
//   cardImage.src = link;
//   cardImage.alt = `Изображение ${name}`;
//   elementEl
//     .querySelector(".element__like")
//     .addEventListener("click", function (evt) {
//       evt.target.classList.toggle("element__like_active");
//     });
//   elementEl.querySelector(".element__trash").addEventListener("click", () => {
//     elementEl.remove();
//   });

//   cardImage.addEventListener("click", () => {
//     imageFullScreen.alt = `Изображение ${name}`;
//     imageFullScreen.src = cardImage.src;
//     tiitleFullScreen.textContent = cardName.textContent;

//     openPopup(popupImageFullScreen);
//   });
//   return elementEl;
// };

initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link, ".elemet-template");
  const cardElement = card.generateCard();
  elements.append(cardElement);
});

const editFormPublication = popupPublication.querySelector(
  ".popup__form_type_publication"
);
const titlePublication = editFormPublication.querySelector(
  ".popup__input_type_title"
);
const linkPublication = editFormPublication.querySelector(
  ".popup__input_type_link"
);
const buttonAddPublication =
  editFormPublication.querySelector(".popup__button");

function addPublication(titleValue, linkValue) {
  const card = new Card(titleValue, linkValue, ".elemet-template");
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}
editFormPublication.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addPublication(titlePublication.value, linkPublication.value);
  editFormPublication.reset();
  buttonAddPublication.classList.add("popup__button_disabled");
  buttonAddPublication.disabled = true;
  closePopupPublication();
});

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

// enableValidation(config);
const valid = new FormValidator(config, ".popup__form_type_publication");
valid.enableValidation();

const validPopupPublication = new FormValidator(config, ".popup_type_profile");
validPopupPublication.enableValidation();

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
const popupPublication = document.querySelector(".popup_type_publication");
const elements = document.querySelector(".elements");
const editForm = document.forms["edit-form"];

function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener("click", openPopupProfile);

function handleFormSubmitProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}
editForm.addEventListener("submit", handleFormSubmitProfile);

const buttonOpenPopupPublication = document.querySelector(
  ".profile__add-button"
);

const openPopupPublication = () => openPopup(popupPublication);
const closePopupPublication = () => closePopup(popupPublication);
buttonOpenPopupPublication.addEventListener("click", openPopupPublication);

const newCard = (name, link, templateSelector) => {
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach(function (item) {
  const card = newCard(item.name, item.link, ".elemet-template");

  elements.append(card);
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
  const card = newCard(titleValue, linkValue, ".elemet-template");
  elements.prepend(card);
}
editFormPublication.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addPublication(titlePublication.value, linkPublication.value);
  editFormPublication.reset();
  validateEditFormPublication.inactiveButton(buttonAddPublication);
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

const validateEditFormPublication = new FormValidator(
  config,
  ".popup__form_type_publication"
);
validateEditFormPublication.enableValidation();

const validatePopupProfile = new FormValidator(config, ".popup_type_profile");
validatePopupProfile.enableValidation();

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
};

export const buttonOpenPopupProfile = document.querySelector(
  ".profile__edit-button_type_profile"
);
export const popupProfile = document.querySelector(".popup_type_profile");
export const inputName = document.querySelector(".popup__input_type_name");
export const inputJob = document.querySelector(".popup__input_type_job");
export const profileName = document.querySelector(
  ".profile__info-name_type_name"
);
export const profileJob = document.querySelector(
  ".profile__info-activity_type_activity"
);
export const popupPublication = document.querySelector(
  ".popup_type_publication"
);
export const elements = document.querySelector(".elements");
export const editForm = document.forms["edit-form"];
export const buttonOpenPopupPublication = document.querySelector(
  ".profile__add-button"
);
export const editFormPublication = document.querySelector(
  ".popup__form_type_publication"
);
export const titlePublication = document.querySelector(
  ".popup__input_type_title"
);
export const linkPublication = document.querySelector(
  ".popup__input_type_link"
);
export const popupImageFullScreen = document.querySelector(
  ".popup_type_full-screen"
);

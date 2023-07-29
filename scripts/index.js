const buttonOpenPopupProfile = document.querySelector(
  ".profile__edit-button_type_profile"
);
const popupProfile = document.querySelector(".popup_type_profile");
const contentButton = popupProfile.querySelector(".popup__content-button");
const buttonClosePopupProfile = popupProfile.querySelector(".popup__close");

const inputName = popupProfile.querySelector(".popup__input_type_name");
const inputJob = popupProfile.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__info-name_type_name");
const profileJob = document.querySelector(
  ".profile__info-activity_type_activity"
);

const editForm = popupProfile.querySelector(".popup__form");

const closePopupWithEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};
const closePopupWithOwerley = (evt) => {
  if (evt.target.classList.contains("popup_opened")) {
    evt.target.classList.remove("popup_opened");
  }
};

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
  popup.addEventListener("click", closePopupWithOwerley);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEsc);
  popup.removeEventListener("click", closePopupWithOwerley);
};

function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
}

buttonOpenPopupProfile.addEventListener("click", openPopupProfile);
function closePopupProfile() {
  closePopup(popupProfile);
}
buttonClosePopupProfile.addEventListener("click", closePopupProfile);

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
const buttonClosePublication = popupPublication.querySelector(".popup__close");

const openPopupPublication = () => {
  openPopup(popupPublication);
};
buttonOpenPopupPublication.addEventListener("click", openPopupPublication);

const closePopupPublication = () => {
  closePopup(popupPublication);
};

buttonClosePublication.addEventListener("click", closePopupPublication);

const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector(".elemet-template").content;

const popupImageFullScreen = document.querySelector(".popup_type_full-screen");
const imageFullScreen = popupImageFullScreen.querySelector(
  ".popup__figure-image"
);
const tiitleFullScreen =
  popupImageFullScreen.querySelector(".popup__figcaption");
const buttonClosePopupImageFullScreen =
  popupImageFullScreen.querySelector(".popup__close");

const createCard = (link, name) => {
  const elementEl = elementTemplate.querySelector(".element").cloneNode(true);
  const cardName = elementEl.querySelector(".element__place");
  cardName.textContent = name;
  const cardImage = elementEl.querySelector(".element__image");
  cardImage.src = link;
  cardImage.alt = `Изображение ${name}`;
  elementEl
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  elementEl.querySelector(".element__trash").addEventListener("click", () => {
    elementEl.remove();
  });

  cardImage.addEventListener("click", () => {
    imageFullScreen.alt = `Изображение ${name}`;
    imageFullScreen.src = cardImage.src;
    tiitleFullScreen.textContent = cardName.textContent;

    openPopup(popupImageFullScreen);
  });
  return elementEl;
};

initialCards.forEach(function (element) {
  const cardItem = createCard(element.link, element.name);
  elements.append(cardItem);
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
  const cardItem = createCard(linkValue, titleValue);
  elements.prepend(cardItem);
}
editFormPublication.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addPublication(titlePublication.value, linkPublication.value);
  editFormPublication.reset();
  buttonAddPublication.classList.add("popup__button_disabled");
  buttonAddPublication.disabled = true;
  closePopupPublication();
});

function closePopupImageFullScreen() {
  closePopup(popupImageFullScreen);
}
buttonClosePopupImageFullScreen.addEventListener(
  "click",
  closePopupImageFullScreen
);

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_visible",
});

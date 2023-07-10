const profileButton = document.querySelector(
  ".profile__edit-button_type_profile"
);
const popupProfie = document.querySelector(".popup_type_profile");
const contentButton = popupProfie.querySelector(".popup__content-button");
const buttonClosePopup = popupProfie.querySelector(".popup__close");

const inputName = popupProfie.querySelector(".popup__input_type_name");
const inputJob = popupProfie.querySelector(".popup__input_type_job");
const profileName = document.querySelector(".profile__info-name_type_name");
const profileJob = document.querySelector(
  ".profile__info-activity_type_activity"
);

const editForm = popupProfie.querySelector(".edit-form");

function openPopup() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfie.classList.add("popup_opened");
}
profileButton.addEventListener("click", openPopup);
function closePopup() {
  popupProfie.classList.remove("popup_opened");
}
buttonClosePopup.addEventListener("click", closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}
editForm.addEventListener("submit", handleFormSubmit);

const buttonPublication = document.querySelector(".profile__add-button");
const popupPublication = document.querySelector(".popup_type_publication");
const buttonClosePublication = popupPublication.querySelector(".popup__close");

const openPopupPublication = () => {
  popupPublication.classList.add("popup_opened");
};
buttonPublication.addEventListener("click", openPopupPublication);

const closePopupPublication = () => {
  popupPublication.classList.remove("popup_opened");
};

buttonClosePublication.addEventListener("click", closePopupPublication);

const elements = document.querySelector(".elements");
const elementTemplate = document.querySelector(".elemet-template").content;

const initialCards = [
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
const popupImageFullScreen = document.querySelector(".popup_type_full-screen");
const ImageFullScreen = popupImageFullScreen.querySelector(
  ".popup__figure-image"
);
const tiitleFullScreen =
  popupImageFullScreen.querySelector(".popup__figcaption");
const buttonClosePopupImageFullScreen =
  popupImageFullScreen.querySelector(".popup__close");

initialCards.forEach(function (element) {
  const elementEl = elementTemplate.querySelector(".element").cloneNode(true);
  elementEl.querySelector(".element__place").textContent = element.name;
  elementEl.querySelector(".element__image").src = element.link;
  elementEl
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  elementEl.querySelector(".element__trash").addEventListener("click", () => {
    elementEl.remove();
  });

  elements.append(elementEl);
  const elementImage = elementEl
    .querySelector(".element__image")
    .addEventListener("click", () => {
      const elementPlace = elementEl.querySelector(".element__place");
      const elementImages = elementEl.querySelector(".element__image");
      ImageFullScreen.src = elementImages.src;
      tiitleFullScreen.textContent = elementPlace.textContent;

      popupImageFullScreen.classList.add("popup_opened");
    });
});

const editFormPublication = popupPublication.querySelector(
  ".edit-form_type_publication"
);
const titlePublication = editFormPublication.querySelector(
  ".popup__input_type_title"
);
const linkPublication = editFormPublication.querySelector(
  ".popup__input_type_link"
);
const buttonAddPublication = editFormPublication.querySelector(
  "popup__content-button"
);

function addPublication(titleValue, linkValue) {
  const elementEl = elementTemplate.querySelector(".element").cloneNode(true);
  elementEl.querySelector(".element__place").textContent = titleValue;
  elementEl.querySelector(".element__image").src = linkValue;
  elementEl
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  elementEl.querySelector(".element__trash").addEventListener("click", () => {
    elementEl.remove();
  });

  elements.prepend(elementEl);
  const elementImage = elementEl
    .querySelector(".element__image")
    .addEventListener("click", () => {
      const elementPlace = elementEl.querySelector(".element__place");
      const elementImages = elementEl.querySelector(".element__image");
      ImageFullScreen.src = elementImages.src;
      tiitleFullScreen.textContent = elementPlace.textContent;

      popupImageFullScreen.classList.add("popup_opened");
    });
}
editFormPublication.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addPublication(titlePublication.value, linkPublication.value);
  titlePublication.value = "";
  linkPublication.value = "";
  closePopupPublication();
});

function closePopupImageFullScreen() {
  popupImageFullScreen.classList.remove("popup_opened");
}
buttonClosePopupImageFullScreen.addEventListener(
  "click",
  closePopupImageFullScreen
);

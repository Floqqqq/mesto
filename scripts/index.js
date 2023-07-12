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

const editForm = popupProfile.querySelector(".edit-form");
const openPopup = (popup) => popup.classList.add("popup_opened");
const closePopup = (popup) => popup.classList.remove("popup_opened");
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

  //elements.append(elementEl);
  const elementImage = elementEl
    .querySelector(".element__image")
    .addEventListener("click", () => {
      //const elementPlace = elementEl.querySelector(".element__place");
      //const elementImages = elementEl.querySelector(".element__image");
      imageFullScreen.alt = `Изображение ${name}`;
      imageFullScreen.src = cardImage.src;
      tiitleFullScreen.textContent = cardName.textContent;
      openPopup(popupImageFullScreen)

    });
  return elementEl;
};

initialCards.forEach(function (element) {
  const cardItem = createCard(element.link, element.name);
  elements.append(cardItem);
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
  const cardItem = createCard(linkValue, titleValue);
  elements.prepend(cardItem);
}
editFormPublication.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addPublication(titlePublication.value, linkPublication.value);
  editFormPublication.reset();
  closePopupPublication();
});

function closePopupImageFullScreen() {
  closePopup(popupImageFullScreen);
}
buttonClosePopupImageFullScreen.addEventListener(
  "click",
  closePopupImageFullScreen
);

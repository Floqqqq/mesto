import {
  initialCards,
  config,
  buttonOpenPopupProfile,
  popupProfile,
  inputName,
  inputJob,
  profileName,
  profileJob,
  popupPublication,
  elements,
  editForm,
  buttonOpenPopupPublication,
  editFormPublication,
  titlePublication,
  linkPublication,
  popupImageFullScreen,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
const validateEditFormPublication = new FormValidator(
  config,
  ".popup__form_type_publication"
);
const validateFormProfile = new FormValidator(config, ".popup__form");
validateFormProfile.enableValidation();
validateEditFormPublication.enableValidation();

const generateCard = (item) => {
  const card = new Card(item, ".elemet-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = generateCard(data);
      cardList.addItem(cardElement);
    },
  },
  elements
);
const popupImage = new PopupWithImage(popupImageFullScreen);
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

const popupFormProfile = new PopupWithForm(popupProfile, handleSubmitForm);
popupFormProfile.setEventListeners();
const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileJob,
});
function handleSubmitForm(data) {
  userInfo.setUserInfo(data);
  popupFormProfile.close();
  console.log(data);
}
buttonOpenPopupProfile.addEventListener("click", () => {
  const formValues = userInfo.getUserInfo();
  popupFormProfile.open();
  inputJob.value = formValues.info;
  inputName.value = formValues.name;
});

const popupFormPublication = new PopupWithForm(
  popupPublication,
  handleSubmitFormPublication
);
popupFormPublication.setEventListeners();

function handleSubmitFormPublication(data) {
  const cardElement = generateCard(data);
  cardList.addNewItem(cardElement);
  popupFormPublication.close();
}

buttonOpenPopupPublication.addEventListener("click", () => {
  popupFormPublication.open();
});
cardList.renderer();
// function openPopupProfile() {
//   inputName.value = profileName.textContent;
//   inputJob.value = profileJob.textContent;
//   openPopup(popupProfile);
// }

// buttonOpenPopupProfile.addEventListener("click", openPopupProfile);

// function handleFormSubmitProfile(evt) {
//   evt.preventDefault();

//   profileName.textContent = inputName.value;
//   profileJob.textContent = inputJob.value;
//   closePopup(popupProfile);
// }
// editForm.addEventListener("submit", handleFormSubmitProfile);

// const openPopupPublication = () => openPopup(popupPublication);
// const closePopupPublication = () => closePopup(popupPublication);
// buttonOpenPopupPublication.addEventListener("click", openPopupPublication);

// const newCard = (name, link, templateSelector) => {
//   const card = new Card(name, link, templateSelector);
//   const cardElement = card.generateCard();
//   return cardElement;
// };

// initialCards.forEach(function (item) {
//   const card = newCard(item.name, item.link, ".elemet-template");

//   elements.append(card);
// });

// const buttonAddPublication =
//   editFormPublication.querySelector(".popup__button");

// function addPublication(titleValue, linkValue) {
//   const card = newCard(titleValue, linkValue, ".elemet-template");
//   elements.prepend(card);
// }
// editFormPublication.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   addPublication(titlePublication.value, linkPublication.value);
//   editFormPublication.reset();
//   validateEditFormPublication.inactiveButton();
//   closePopupPublication();
// });

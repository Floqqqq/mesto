import "./index.css";
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
  buttonOpenPopupPublication,
  popupImageFullScreen,
} from "../../utils/constants.js";
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
  const card = new Card(item, ".elemet-template", (name, link) => {
    popupImage.open(name, link);
  });
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

const popupFormProfile = new PopupWithForm({
  popup: popupProfile,
  handleSubmitForm: (data) => {
    userInfo.setUserInfo(data);
    popupFormProfile.close();
  },
});
popupFormProfile.setEventListeners();
const userInfo = new UserInfo({
  userName: profileName,
  userInfo: profileJob,
});

buttonOpenPopupProfile.addEventListener("click", () => {
  const formValues = userInfo.getUserInfo();
  popupFormProfile.open();
  validateFormProfile.resetValidator();
  inputJob.value = formValues.info;
  inputName.value = formValues.name;
});

const popupFormPublication = new PopupWithForm({
  popup: popupPublication,
  handleSubmitForm: (data) => {
    const cardElement = generateCard(data);
    cardList.addNewItem(cardElement);
    popupFormPublication.close();
  },
});
popupFormPublication.setEventListeners();

buttonOpenPopupPublication.addEventListener("click", () => {
  popupFormPublication.open();
  validateEditFormPublication.resetValidator();
});
cardList.renderer();
//

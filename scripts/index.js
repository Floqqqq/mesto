const profileButton = document.querySelector(
  ".profile__edit-button_type_profile"
);
const popupProfie = document.querySelector(".popup_type_profile");
const buttonClosePopup = popupProfie.querySelector(".popup__close");

function togglePopup() {
  popupProfie.classList.toggle("popup_opened");
}
profileButton.addEventListener("click", togglePopup);
buttonClosePopup.addEventListener("click", togglePopup);

let inputName = popupProfie.querySelector(".popup__input_type_name");
let inputJob = popupProfie.querySelector(".popup__input_type_job");
let profileName = document.querySelector(".profile__info-name_type_name");
let profileJob = document.querySelector(
  ".profile__info-activity_type_activity"
);
const buttonSavePopup = popupProfie.querySelector(".popup__content-button");

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let nameValue = inputName.value;
  let jobValue = inputJob.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupProfie.addEventListener("submit", handleFormSubmit);
buttonSavePopup.addEventListener("click", togglePopup);

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

const editForm = popupProfie.querySelector('.edit-form')

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
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  // Вставьте новые значения с помощью textContent
  closePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editForm.addEventListener("submit", handleFormSubmit);

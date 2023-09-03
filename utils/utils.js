const closePopupWithEsc = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
};
// const closePopupWithOverlay = (evt) => {
//   if (evt.target.classList.contains("popup_opened")) {
//     closePopup(evt.target);
//   }
// };

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
  // popup.addEventListener("click", closePopupWithOverlay);
};
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEsc);
  // popup.removeEventListener("click", closePopupWithOverlay);
};
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

export { openPopup, closePopup, closePopupWithEsc };

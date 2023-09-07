import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._imageFullScreen = this.popup.querySelector(".popup__figure-image");
    this._tiitleFullScreen = this.popup.querySelector(".popup__figcaption");
  }
  open(link, name) {
    super.open();
    this._imageFullScreen.alt = `Изображение ${name}`;
    this._imageFullScreen.src = link;
    this._tiitleFullScreen.textContent = name;
  }
}

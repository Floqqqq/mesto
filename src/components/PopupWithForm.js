import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ popup, handleSubmitForm }) {
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this.popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      console.log(this._formValues);
      console.log(input);
      console.log(input.name);
      console.log(input.value);
    });
    return this._formValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      console.log(super.setEventListeners());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}

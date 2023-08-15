class FormValidator {
  constructor(config, templateSelector) {
    this._config = config;
    this._templateSelector = templateSelector;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = document.querySelector(this._templateSelector);
    // this._input = document.querySelector(this._templateSelector);
  }
  _setEventListeners() {
    // this._form = document.querySelector(this._templateSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._button = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    const form = document.querySelector(this._formSelector);
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
  _showInputError(input) {
    const span = this._form.querySelector(`.${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const span = this._form.querySelector(`.${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    span.textContent = "";
    span.classList.remove(this._errorClass);
  }

  _checkInputValidity(input) {
    !input.validity.valid
      ? this._showInputError(input)
      : this._hideInputError(input);
  }

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }
}
export default FormValidator;
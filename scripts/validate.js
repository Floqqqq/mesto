const showInputError = (form, input, config) => {
  const span = form.querySelector(`.${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  span.textContent = input.validationMessage;
  span.classList.add(config.errorClass);
};

const hideInputError = (form, input, config) => {
  const span = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  span.textContent = "";
  span.classList.remove(config.errorClass);
};

const checkInputValidity = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputs, button, config) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = false;
  }
};
const setEventListeners = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);

  toggleButtonState(inputs, button, config);

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(form, input, config);
      toggleButtonState(inputs, button, config);
    });
  });
};
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(form, config);
  });
};

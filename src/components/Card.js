class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(".elemet-template")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardName = this._element.querySelector(".element__place");
    this._cardName.textContent = this._name;
    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = `Изображение ${this._name}`;
    return this._element;
  }
  _hendleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _hendleLikedCard() {
    this._element
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  }
  _setEventListeners() {
    const deleteCard = this._element.querySelector(".element__trash");
    deleteCard.addEventListener("click", this._hendleDeleteCard.bind(this));

    const cardLike = this._element.querySelector(".element__like");
    cardLike.addEventListener("click", this._hendleLikedCard.bind(this));

    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }
}

export default Card;

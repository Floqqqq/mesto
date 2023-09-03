export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = selector;
  }

  renderer() {
    this._renderedItems.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.append(element);
  }
  addNewItem(element) {
    this._container.prepend(element);
  }
}

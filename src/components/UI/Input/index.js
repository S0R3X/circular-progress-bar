import { debounce } from "/src/helpers/debounce";

import "./styles.css";

class Input {
  constructor({ onChange = () => {} }) {
    this.onChange = onChange;
    this.element = this._render();

    if (onChange) this.attachEvents();
  }

  attachEvents() {
    const debouncedApplyValue = debounce(this.onChange, 500);

    this.element.addEventListener("input", (event) => {
      const value = Number(event.target.value);

      if (value > 0 && value < 10) {
        this.element.value = value;
      }

      if (value > 100 || value < 0 || isNaN(value) || !value) {
        this.element.value = 0;
      }

      debouncedApplyValue(Number(event.target.value));
    });
  }

  _render() {
    const inputElement = document.createElement("input");
    inputElement.classList.add("number-input");
    inputElement.value = 0;

    return inputElement;
  }
}

export default Input;

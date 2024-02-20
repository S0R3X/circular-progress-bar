import "./styles.css";

class Toggle {
  constructor({ onChange = () => {} }) {
    this.onChange = onChange;
    this.element = this._render();

    if (onChange) this.attachEvents();
  }

  attachEvents() {
    this.element.querySelector("input").addEventListener("change", (event) => {
      this.onChange(event.target.checked);
    });
  }

  _render() {
    const container = document.createElement("label");
    container.classList.add("toggle");

    const input = document.createElement("input");
    input.type = "checkbox";

    const slider = document.createElement("span");
    slider.classList.add("toggle-slider");

    container.appendChild(input);
    container.appendChild(slider);

    return container;
  }
}

export default Toggle;

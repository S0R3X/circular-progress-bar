import CotrolBlock from "../ControlBlock";

import "./styles.css";

class CotrolsContainer {
  constructor({ controls } = {}) {
    this.controls = controls;
    this.element = this.render();
  }

  render() {
    const controlsContainer = document.createElement("ul");
    controlsContainer.classList.add("controls-container");

    const controlElements = this.controls.map((control) => {
      const controlElement = document.createElement("li");
      controlElement.classList.add("control-element");
      controlElement.appendChild(control);

      return controlElement;
    });

    controlElements.forEach((controlElement) => {
      controlsContainer.appendChild(controlElement);
    });

    return controlsContainer;
  }
}

export default CotrolsContainer;

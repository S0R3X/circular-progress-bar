import "./styles.css";

class CotrolBlock {
  constructor({ controlElement, label } = {}) {
    this.controlElement = controlElement;
    this.label = label;
    this.element = this.render();
  }

  render() {
    const cotrolBlock = document.createElement("div");
    cotrolBlock.classList.add("cotrol-block");

    const contolText = document.createElement("span");
    contolText.classList.add("cotrol-text");
    contolText.innerText = this.label;

    cotrolBlock.appendChild(this.controlElement);
    cotrolBlock.appendChild(contolText);

    return cotrolBlock;
  }
}

export default CotrolBlock;

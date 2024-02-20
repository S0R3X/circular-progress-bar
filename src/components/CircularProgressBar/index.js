import "./styles.css";

class CircularProgressBar {
  constructor({ value, animation, hidden } = {}) {
    if (!this._isCorrectValue(value)) value = 0;

    this.value = value;
    this.animation = animation;
    this.hidden = hidden;

    this.element = this._render();

    this._setProgressBar(this.value);
    this._setAnimate();
    this._setHide();
  }

  _setHide() {
    if (this.hidden) {
      this.element.style.opacity = "0";
    } else {
      this.element.style.opacity = "100";
    }
  }

  _setAnimate() {
    if (this.animation) {
      this.element.classList.add("animation-progress-circular");
    } else {
      this.element.classList.remove("animation-progress-circular");
    }
  }

  _isCorrectValue(value) {
    if (typeof value === "number" && value >= 0 && value <= 100) {
      return true;
    } else return false;
  }

  _setProgressBar(value) {
    this.value = value;
    this.element.style.background = `conic-gradient(var(--progressBarFillColor) ${
      value * 3.6
    }deg, var(--progressBarBgColor) 0deg)`;
  }

  _render() {
    const circularProgressBar = document.createElement("div");
    circularProgressBar.classList.add("progress-circular");

    return circularProgressBar;
  }

  //===== API =====

  hide(value) {
    this.hidden = value;
    this._setHide();
  }

  animate(value) {
    this.animation = value;
    this._setAnimate();
  }

  changeProgressBar(newValue) {
    if (!this._isCorrectValue(newValue)) return;

    let curValue = this.value;

    if (curValue < newValue) {
      let progress = setInterval(() => {
        curValue++;

        this._setProgressBar(curValue);

        if (curValue >= newValue) {
          clearInterval(progress);
        }
      });
    } else if (curValue > newValue) {
      let progress = setInterval(() => {
        curValue--;

        this._setProgressBar(curValue);

        if (curValue <= newValue) {
          clearInterval(progress);
        }
      });
    }
  }
}

export default CircularProgressBar;

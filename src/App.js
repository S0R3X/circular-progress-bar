import CircularProgressBar from "./components/CircularProgressBar";
import Input from "./components/UI/Input";
import Toggle from "./components/UI/Toggle/Index";
import CotrolBlock from "./components/ControlBlock";
import CotrolsContainer from "./components/ControlsCotntainer";

import "./styles.css";

class App {
  constructor() {
    this.element = this._render();
  }

  _render() {
    //===== App =====
    const app = document.createElement("div");
    app.classList.add("app");

    //===== Circular Progress Bar =====
    const circularProgressBar = new CircularProgressBar();
    app.appendChild(circularProgressBar.element);

    //===== Controls =====
    const progressInput = new Input({
      onChange: (value) => {
        circularProgressBar.changeProgressBar(value);
      },
    });

    const animationToggle = new Toggle({
      onChange: (value) => {
        circularProgressBar.animate(value);
      },
    });

    const hiddenToggle = new Toggle({
      onChange: (value) => {
        circularProgressBar.hide(value);
      },
    });

    //===== Control Blocks =====
    const progressInputBlock = new CotrolBlock({
      controlElement: progressInput.element,
      label: "Value",
    });

    const animationToggleBlock = new CotrolBlock({
      controlElement: animationToggle.element,
      label: "Animate",
    });

    const hiddenToggleBlock = new CotrolBlock({
      controlElement: hiddenToggle.element,
      label: "Hide",
    });

    //===== Controls Container =====
    const controlsContainer = new CotrolsContainer({
      controls: [
        progressInputBlock.element,
        animationToggleBlock.element,
        hiddenToggleBlock.element,
      ],
    });

    app.appendChild(controlsContainer.element);

    return app;
  }
}

export default App;

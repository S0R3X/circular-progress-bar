import App from "./src/App";

class Render {
  constructor({ root, app }) {
    this._root = root;
    this._app = app;
  }

  render() {
    console.log(this._root);
    document
      .querySelector(this._root)
      .insertAdjacentElement("beforeend", this._app);
  }
}

const { element } = new App();

const root = new Render({ root: "#root", app: element });

root.render();

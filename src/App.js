const Bridge = require('./Bridge');

class App {
  #bridge;
  constructor () {
    this.#bridge = new Bridge();
  }
  play () {
    this.#bridge.start();
  }
}

const app = new App();
app.play();

module.exports = App;

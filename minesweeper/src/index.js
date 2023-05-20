import './assets/styles/normalize.scss';
import './assets/styles/style.scss';
import { minesweeperState } from './utils/services/minesweeper-state';
import { Template } from './components/Template';
import { Component } from './utils/component';
import { setClassTemplate } from './utils/services/set-class';
import { Header } from './components/Header';
import { minesweeperComponents } from './utils/services/minesweeper-components';
import { Popup } from './components/Popup';

class App {
  constructor(root) {
    this.popUp = new Popup({ className: 'popup', parent: root });
    this.header = new Header({ className: 'header', parent: root, tag: 'header' });
    this.main = new Component({ className: 'main', tag: 'main', parent: root });
    this.template = new Template({
      className: setClassTemplate[minesweeperState.difficulty],
      parent: this.main.node,
    });
    Object.assign(minesweeperComponents, {
      header: this.header,
      main: this.main,
      template: this.template,
      popup: this.popUp,
    });
  }

  init() {
    this.template.createTemplate();
  }
}

const app = new App(document.body);
app.init();

// setTimeout(() => {
//   minesweeperState.difficulty = 'medium';
//   rebuiltTemplate(app.template, app.main);
// }, 1000);

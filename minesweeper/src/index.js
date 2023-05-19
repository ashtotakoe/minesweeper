import './assets/styles/style.scss';
import { minesweeperState } from './utils/minesweeper-state';
import { Template } from './components/Template';
import { Component } from './utils/component';
import { setClassTemplate } from './utils/set-class';
import { rebuiltTemplate } from './utils/rebuilt-template';

class App {
  constructor(root) {
    this.header = new Component({ className: 'header', textContent: 'Minesweeper', parent: root, tag: 'header' });
    this.main = new Component({ className: 'main', tag: 'main', parent: root });
    this.template = new Template({
      className: setClassTemplate[minesweeperState.difficulty],
      parent: this.main.node,
    });
  }

  start() {
    this.template.createTemplate();
  }
}

const app = new App(document.body);
app.start();

setTimeout(() => {
  minesweeperState.difficulty = 'medium';
  rebuiltTemplate(app.template, app.main);
}, 1000);

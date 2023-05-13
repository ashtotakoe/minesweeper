import './assets/styles/style.scss';
import { Header } from './components/Header';
import { Template } from './components/Template';
import { Component } from './utils/Component';

class App {
  constructor(root) {
    this.header = new Header({ className: 'header', textContent: 'Minesweeper', parent: root, tag: 'header' });
    this.main = new Component({ className: 'main', tag: 'main', parent: root });
    this.template = new Template({ className: 'template', parent: this.main.node });
  }

  start() {
    this.template.createTemplate(100);
  }
}

const app = new App(document.body);
app.start();

/* 

{ className: 'main', tag: 'main', parent: root },
      {
        event: {
          name: 'click',
          callback: () => {
            console.log('helo');
          },
        },
        attrs: {
          'data-id': 'aboba',
        },
      },


*/

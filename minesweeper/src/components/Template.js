import { Component } from '../utils/Component';

export class Template extends Component {
  createTemplate(squareCount) {
    this.squaresArr = [];
    this.isFirstClick = true;
    for (let i = 0; i < squareCount; i++) {
      const square = new Component(
        { parent: this.node, className: 'template__item' },
        {
          attrs: {
            'data-id': i,
          },

          event: {
            name: 'click',
            callback: this.clickHandler,
          },
        },
      );
      this.squaresArr.push(square);
    }
  }

  addBombs() {
    this.bombIndexes = [];
    while (this.bombIndexes.length < 10) {
      const num = Math.floor(Math.random() * 100);
      if (!this.bombIndexes.includes(num)) {
        this.bombIndexes.push(num);
      }
    }
  }

  clickHandler() {
    console.log(this.isFirstClick);
    // if (this.isFirstClick) {
    //   console.log('da');
    //   this.isFirstClick = !this.isFirstClick;
    // } else {
    //   console.log('net');
    // }
  }
}

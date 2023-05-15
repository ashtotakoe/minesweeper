import { Component } from '../utils/Component';
import minesweeperState from '../utils/minesweeper-state';

export class Template extends Component {
  createTemplate(squareCount) {
    let dataId = 0;
    minesweeperState.squaresArr = Array.from({ length: squareCount / 10 }, (_, index1) =>
      Array.from(
        { length: squareCount / 10 },
        (__, index2) =>
          new Component(
            { parent: this.node, className: 'template__item' },
            {
              attrs: {
                'data-id': dataId++,
                'data-indexes': `${index1}.${index2}`,
              },
              event: {
                name: 'click',
                callback: (event) => this.clickHandler(event),
              },
            },
          ),
      ),
    );
  }

  addBombs() {
    while (minesweeperState.bombIndexes.length < 10) {
      const num = Math.floor(Math.random() * 100);
      if (!minesweeperState.bombIndexes.includes(num)) {
        minesweeperState.bombIndexes.push(num);
      }
    }
  }

  clickHandler(event) {
    const { bombIndexes, squaresArr } = minesweeperState;
    const elem = event.target;
    if (minesweeperState.clickCounter === 0) {
      this.addBombs();
    }
    minesweeperState.clickCounter++;

    if (bombIndexes.includes(Number(event.target.getAttribute('data-id')))) {
      bombIndexes.forEach((index) => {
        squaresArr.flat()[index].node.classList.add('bomb');
        document.querySelector('.header').textContent = 'You lost, try again!';
        return 'game over';
      });
    }
    elem.classList.add('opened');
    const checkedSquares = [];

    elem.textContent = this.surroundingCheck(elem, checkedSquares);

    // bombIndexes.forEach((index) => {
    //   squaresArr.flat()[index].node.classList.add('bomb');
    // });

    // console.log(bombIndexes, event.target.getAttribute('data-id'));

    // console.log(bombIndexes.includes(Number(event.target.getAttribute('data-id'))));
  }

  surroundingCheck(elem, checkedSquares) {
    let counter = 0;
    const [index1, index2] = elem
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));

    if (checkedSquares.includes(elem)) {
      return 0;
    }
    checkedSquares.push(elem);

    counter += this.squareCheck(checkedSquares, index1 - 1, index2 - 1);
    counter += this.squareCheck(checkedSquares, index1, index2 - 1);

    counter += this.squareCheck(checkedSquares, index1 + 1, index2 - 1);
    counter += this.squareCheck(checkedSquares, index1 + 1, index2);

    counter += this.squareCheck(checkedSquares, index1 + 1, index2 + 1);
    counter += this.squareCheck(checkedSquares, index1, index2 + 1);

    counter += this.squareCheck(checkedSquares, index1 - 1, index2 + 1);
    counter += this.squareCheck(checkedSquares, index1 - 1, index2);

    return counter;
  }

  squareCheck(checkedSquares, index1, index2) {
    const { squaresArr, bombIndexes } = minesweeperState;
    const component = squaresArr[index1][index2];
    if (index1 < 0 || index2 < 0 || index1 > 9 || index2 > 9) {
      return 0;
    }

    checkedSquares.push(component.node);

    const dataId = Number(component.node.getAttribute('data-id'));
    if (bombIndexes.includes(dataId)) {
      return 1;
    }
    component.node.classList.add('opened');

    this.surroundingCheck(component.node, checkedSquares);
    return 0;
  }
}

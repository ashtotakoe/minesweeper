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
        document.querySelector('.header').teextContent = 'You lost, try again!';
        return 'game over';
      });
    }
    const [index1, index2] = elem
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));
    const checkedSquares = [];
    const counter = this.surroundingCheck(elem);
    if (counter === 0) {
      this.recursiveOpen(index1, index2, checkedSquares);
    }
    elem.textContent = counter;
    return null;
  }

  surroundingCheck(elem) {
    let counter = 0;
    const [index1, index2] = elem
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));

    counter += this.squareCheck(index1 - 1, index2 - 1);
    counter += this.squareCheck(index1, index2 - 1);

    counter += this.squareCheck(index1 + 1, index2 - 1);
    counter += this.squareCheck(index1 + 1, index2);

    counter += this.squareCheck(index1 + 1, index2 + 1);
    counter += this.squareCheck(index1, index2 + 1);

    counter += this.squareCheck(index1 - 1, index2 + 1);
    counter += this.squareCheck(index1 - 1, index2);

    return counter;
  }

  squareCheck(index1, index2) {
    if (index1 < 0 || index2 < 0 || index1 > 9 || index2 > 9) {
      return 0;
    }
    const { squaresArr, bombIndexes } = minesweeperState;
    const component = squaresArr[index1][index2];

    const dataId = Number(component.node.getAttribute('data-id'));
    if (bombIndexes.includes(dataId)) {
      return 1;
    }
    return 0;
  }

  recursiveOpen(i1, i2, checkedSquares) {
    if (i1 < 0 || i2 < 0 || i1 > 9 || i2 > 9) {
      return 0;
    }
    const elem = minesweeperState.squaresArr[i1][i2].node;

    const [index1, index2] = elem
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));

    if (checkedSquares.includes(elem)) {
      return null;
    }
    if (this.surroundingCheck(elem) === 0) {
      elem.classList.add('opened');
      checkedSquares.push(elem);

      this.recursiveOpen(index1 - 1, index2 - 1, checkedSquares);
      this.recursiveOpen(index1, index2 - 1, checkedSquares);

      this.recursiveOpen(index1 + 1, index2 - 1, checkedSquares);
      this.recursiveOpen(index1 + 1, index2, checkedSquares);

      this.recursiveOpen(index1 + 1, index2 + 1, checkedSquares);
      this.recursiveOpen(index1, index2 + 1, checkedSquares);

      this.recursiveOpen(index1 - 1, index2 + 1, checkedSquares);
      this.recursiveOpen(index1 - 1, index2, checkedSquares);
      return null;
    }
    const node = elem;
    node.textContent = this.surroundingCheck(elem);
    return null;
  }
}

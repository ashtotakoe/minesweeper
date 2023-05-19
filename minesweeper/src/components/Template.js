import { Component } from '../utils/component';
import { minesweeperState } from '../utils/minesweeper-state';
import { setClass, getSquares } from '../utils/set-class';
import { toggleFlagClass } from '../utils/toggle-flag-class';
import { isIndexesBroken } from '../utils/is-indexes-broken';
import { getRandomIndex } from '../utils/get-random-index';

export class Template extends Component {
  createTemplate() {
    const { difficulty } = minesweeperState;
    let dataId = 0;
    const squareCount = getSquares[difficulty];
    minesweeperState.squareCount = squareCount;
    minesweeperState.squaresMatrix = Array.from({ length: squareCount }, (_, index1) =>
      Array.from(
        { length: squareCount },
        (__, index2) =>
          new Component(
            { parent: this.node, className: setClass[minesweeperState.difficulty] },
            {
              attrs: {
                'data-id': dataId++,
                'data-indexes': `${index1}.${index2}`,
              },
              events: [
                {
                  name: 'click',
                  callback: (event) => this.clickHandler(event),
                },
                {
                  name: 'contextmenu',
                  callback: toggleFlagClass,
                },
              ],
            },
          ),
      ),
    );
  }

  addBombs() {
    const { squareCount } = minesweeperState;

    while (minesweeperState.bombIndexes.length < squareCount ** 2 / 10) {
      const num = getRandomIndex(squareCount);
      if (!minesweeperState.bombIndexes.includes(num)) {
        minesweeperState.bombIndexes.push(num);
      }
    }
  }

  clickHandler(event) {
    // DO NOT WORK\
    if (event.target.classList.contains('flagged')) {
      return null;
    }

    const { bombIndexes, squaresMatrix } = minesweeperState;
    const [index1, index2] = event.target
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));
    if (minesweeperState.clickCounter === 0) {
      this.addBombs();
    }
    minesweeperState.clickCounter++;

    if (bombIndexes.includes(Number(event.target.getAttribute('data-id')))) {
      bombIndexes.forEach((index) => {
        squaresMatrix.flat()[index].node.classList.add('bomb');
      });
      document.querySelector('.header').textContent = 'You lost, try again!';
      return null;
    }
    // func do not stop

    const checkedSquares = [];
    const counter = this.surroundingCheck(index1, index2);
    if (counter === 0) {
      this.recursiveOpen(index1, index2, checkedSquares);
    }

    Object.assign(event.target, { textContent: counter });

    return null;
  }

  surroundingCheck(index1, index2) {
    let counter = 0;

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
    if (isIndexesBroken(index1, index2)) {
      return 0;
    }
    const { squaresMatrix, bombIndexes } = minesweeperState;
    const component = squaresMatrix[index1][index2];

    const dataId = Number(component.node.getAttribute('data-id'));
    if (bombIndexes.includes(dataId)) {
      return 1;
    }
    return 0;
  }

  recursiveOpen(index1, index2, checkedSquares) {
    if (isIndexesBroken(index1, index2)) {
      return 0;
    }
    const elem = this.getElem(index1, index2);

    if (checkedSquares.includes(elem)) {
      return null;
    }
    if (this.surroundingCheck(index1, index2) === 0) {
      elem.classList.add('opened');
      checkedSquares.push(elem);

      setTimeout(() => {
        this.recursiveOpen(index1, index2 - 1, checkedSquares);

        this.recursiveOpen(index1 + 1, index2, checkedSquares);

        this.recursiveOpen(index1, index2 + 1, checkedSquares);

        this.recursiveOpen(index1 - 1, index2, checkedSquares);
      }, 50);

      return null;
    }

    Object.assign(elem, { textContent: this.surroundingCheck(index1, index2) });
    return null;
  }

  getElem(indexFirst, indexSecond) {
    return minesweeperState.squaresMatrix[indexFirst][indexSecond].node;
  }
}

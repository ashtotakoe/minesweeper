import { Component } from '../utils/component';
import { minesweeperState } from '../utils/services/minesweeper-state';
import { setClass } from '../utils/services/set-class';
import { toggleFlagClass } from '../utils/toggle-flag-class';
import { isIndexesBroken } from '../utils/is-indexes-broken';
import { getRandomIndex } from '../utils/get-random-index';
import { clickDisplay } from '../utils/click-display';
import { minesweeperComponents } from '../utils/services/minesweeper-components';
import { displayDefeat } from '../utils/display-defeat';
import { getSquares } from '../utils/services/get-squares-count';

export class Template extends Component {
  createTemplate() {
    const { difficulty } = minesweeperState;
    let dataId = 0;
    const squareCount = getSquares[difficulty];
    minesweeperComponents.heading.node.textContent = 'Minesweeper';
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

  addBombs(elem) {
    const { customSquareCount, squareCount, bombIndexes } = minesweeperState;
    const squareNum = customSquareCount || squareCount ** 2 / 10;
    console.log(squareNum);
    while (bombIndexes.length < squareNum) {
      const num = getRandomIndex(squareCount);
      if (!bombIndexes.includes(num) && Number(elem.getAttribute('data-id')) !== num) {
        bombIndexes.push(num);
      }
    }
    console.log('bombs have been planted');
  }

  clickHandler(event) {
    if (event.target.classList.contains('flaged')) {
      return null;
    }

    const { bombIndexes } = minesweeperState;
    const [index1, index2] = event.target
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));
    if (minesweeperState.clickCounter === 0) {
      this.addBombs(event.target);
    }
    clickDisplay(event, minesweeperComponents.counter);
    if (bombIndexes.includes(Number(event.target.getAttribute('data-id')))) {
      displayDefeat(minesweeperComponents.heading);
    }

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
    const dataId = Number(this.getElem(index1, index2).getAttribute('data-id'));
    if (minesweeperState.bombIndexes.includes(dataId)) {
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

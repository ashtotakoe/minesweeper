import { Component } from '../utils/Component';
import minesweeperState from '../utils/minesweeper-state';
import { setDifficulty, getSquares } from '../utils/setClass';
import { addFlag } from '../utils/addFlag';

export class Template extends Component {
  createTemplate() {
    const { difficulty } = minesweeperState;
    let dataId = 0;
    const squareCount = getSquares[difficulty];
    minesweeperState.numderOfSquares = squareCount;
    console.log(1);
    minesweeperState.squaresArr = Array.from({ length: squareCount }, (_, index1) =>
      Array.from(
        { length: squareCount },
        (__, index2) =>
          new Component(
            { parent: this.node, className: setDifficulty[minesweeperState.difficulty] },
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
                  callback: addFlag,
                },
              ],
            },
          ),
      ),
    );

    console.log(minesweeperState);
  }

  addBombs() {
    const numberOfSquares = minesweeperState.numderOfSquares;

    while (minesweeperState.bombIndexes.length < numberOfSquares ** 2 / 10) {
      const num = Math.floor(Math.random() * numberOfSquares ** 2);
      if (!minesweeperState.bombIndexes.includes(num)) {
        minesweeperState.bombIndexes.push(num);
      }
    }
  }

  clickHandler(event) {
    if (event.target.classList.contains('flagged')) {
      return null;
    }

    const { bombIndexes, squaresArr } = minesweeperState;
    const elem = event.target;
    const [index1, index2] = elem
      .getAttribute('data-indexes')
      .split('.')
      .map((e) => Number(e));
    if (minesweeperState.clickCounter === 0) {
      this.addBombs();
    }
    minesweeperState.clickCounter++;

    if (bombIndexes.includes(Number(event.target.getAttribute('data-id')))) {
      bombIndexes.forEach((index) => {
        squaresArr.flat()[index].node.classList.add('bomb');
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
    elem.textContent = counter;
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
    if (
      index1 < 0 ||
      index2 < 0 ||
      index1 > minesweeperState.numderOfSquares - 1 ||
      index2 > minesweeperState.numderOfSquares - 1
    ) {
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

  recursiveOpen(index1, index2, checkedSquares) {
    if (
      index1 < 0 ||
      index2 < 0 ||
      index1 > minesweeperState.numderOfSquares - 1 ||
      index2 > minesweeperState.numderOfSquares - 1
    ) {
      return 0;
    }
    const elem = minesweeperState.squaresArr[index1][index2].node;

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
    const node = elem;
    node.textContent = this.surroundingCheck(index1, index2);
    return null;
  }
}

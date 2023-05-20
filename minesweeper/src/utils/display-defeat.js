import { minesweeperState } from './services/minesweeper-state';

export function displayDefeat(heading) {
  const { bombIndexes, squaresMatrix } = minesweeperState;

  bombIndexes.forEach((index) => {
    squaresMatrix.flat()[index].node.classList.add('bomb');
  });
  Object.assign(heading.node, { textContent: 'You lost, try again!' });

  return null;
}

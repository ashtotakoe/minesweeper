import { minesweeperState } from './minesweeper-state';

export function isIndexesBroken(indexFirst, indexSecond) {
  if (
    indexFirst < 0 ||
    indexSecond < 0 ||
    indexFirst > minesweeperState.numderOfSquares - 1 ||
    indexSecond > minesweeperState.numderOfSquares - 1
  ) {
    return true;
  }
  return false;
}

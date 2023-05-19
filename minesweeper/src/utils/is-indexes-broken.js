import { minesweeperState } from './minesweeper-state';

export function isIndexesBroken(indexFirst, indexSecond) {
  if (
    indexFirst < 0 ||
    indexSecond < 0 ||
    indexFirst > minesweeperState.squareCount - 1 ||
    indexSecond > minesweeperState.squareCount - 1
  ) {
    return true;
  }
  return false;
}

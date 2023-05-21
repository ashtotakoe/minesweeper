import { minesweeperState } from './services/minesweeper-state';
import { minesweeperComponents } from './services/minesweeper-components';

const time = {
  seconds: 0,
  tenseconds: 0,
  minutes: 0,
};

export function manageTimer(start) {
  if (start) {
    Object.assign(time, { seconds: 0, tenseconds: 0, minutes: 0 });
  }
  if (minesweeperState.isGameOver) {
    return null;
  }

  time.seconds++;
  if (time.seconds === 10) {
    time.seconds = 0;
    time.tenseconds++;
  }
  if (time.tenseconds === 6) {
    time.minutes++;
    time.tenseconds = 0;
  }

  minesweeperComponents.timer.node.textContent = `${time.minutes}:${time.tenseconds}${time.seconds}`;
  setTimeout(() => {
    manageTimer();
  }, 1000);
  return null;
}

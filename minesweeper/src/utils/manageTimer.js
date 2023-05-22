const time = {
  seconds: 0,
  tenseconds: 0,
  minutes: 0,
};

export function manageTimer(start, minesweeperComponents, minesweeperState) {
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

  Object.assign(minesweeperComponents.timer.node, { textContent: `${time.minutes}:${time.tenseconds}${time.seconds}` });

  setTimeout(() => {
    manageTimer(false, minesweeperComponents, minesweeperState);
  }, 1000);
  return null;
}

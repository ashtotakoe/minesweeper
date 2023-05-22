import { minesweeperState } from './services/minesweeper-state';

export function changeTheme(elem, minesweeperComponents) {
  let { squaresMatrix } = minesweeperState;
  const { template } = minesweeperComponents;
  squaresMatrix = squaresMatrix.map((components) =>
    components.map((component) => {
      component.node.classList.toggle('dark');
      return component;
    }),
  );
  document.body.classList.toggle('dark');
  template.node.classList.toggle('dark');

  if (elem.innerText === '\u263c') {
    Object.assign(elem, { innerText: '\u263e' });
    return null;
  }
  Object.assign(elem, { innerText: '\u263c' });
  return null;
}

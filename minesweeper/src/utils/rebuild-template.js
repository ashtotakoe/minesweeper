import { setClassTemplate } from './set-class';
import { Template } from '../components/Template';
import { minesweeperState } from './minesweeper-state';
import { minesweeperComponents } from './minesweeper-components';
import { changeTheme } from './change-theme';

export function rebuildTemplate() {
  const difficulty = setClassTemplate[minesweeperState.difficulty];
  minesweeperState.bombIndexes = [];
  minesweeperState.isGameOver = true;
  Object.assign(minesweeperComponents.difficulty.node, { textContent: `Difficulty: ${minesweeperState.difficulty}` });

  const templateNew = new Template({
    className: difficulty,
    parent: minesweeperComponents.main.node,
  });

  templateNew.createTemplate();
  minesweeperComponents.template.node.replaceWith(templateNew.node);
  minesweeperComponents.template = templateNew;
  if (minesweeperState.isDarkTheme) {
    document.body.classList.remove('dark');
    changeTheme(minesweeperComponents.themeBtn, minesweeperComponents, minesweeperState);
  }

  return templateNew;
}

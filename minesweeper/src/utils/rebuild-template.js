import { setClassTemplate } from './services/set-class';
import { Template } from '../components/Template';
import { minesweeperState } from './services/minesweeper-state';
import { minesweeperComponents } from './services/minesweeper-components';
import { changeTheme } from './changeTheme';

export function rebuildTemplate() {
  const difficulty = setClassTemplate[minesweeperState.difficulty];
  minesweeperState.bombIndexes = [];
  minesweeperState.isGameOver = true;

  const templateNew = new Template({
    className: difficulty,
    parent: minesweeperComponents.main.node,
  });

  templateNew.createTemplate();
  minesweeperComponents.template.node.replaceWith(templateNew.node);
  minesweeperComponents.template = templateNew;
  if (minesweeperState.isDarkTheme) {
    document.body.classList.remove('dark');
    changeTheme(minesweeperComponents.themeBtn, minesweeperComponents);
  }

  return templateNew;
}

import { setClassTemplate } from './services/set-class';
import { Template } from '../components/Template';
import { minesweeperState } from './services/minesweeper-state';
import { minesweeperComponents } from './services/minesweeper-components';

export function rebuildTemplate() {
  const difficulty = setClassTemplate[minesweeperState.difficulty];

  minesweeperState.clickCounter = 0;
  minesweeperComponents.counter.node.textContent = 'Click count: 0';

  const templateNew = new Template({
    className: difficulty,
    parent: minesweeperComponents.main.node,
  });

  templateNew.createTemplate();
  minesweeperComponents.template.node.replaceWith(templateNew.node);
  minesweeperComponents.template = templateNew;

  return templateNew;
}

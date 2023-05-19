import { setClassTemplate } from './set-class';
import { Template } from '../components/Template';
import { minesweeperState } from './minesweeper-state';

export function rebuiltTemplate(template, main) {
  const difficulty = setClassTemplate[minesweeperState.difficulty];

  const templateNew = new Template({
    className: difficulty,
    parent: main.node,
  });

  templateNew.createTemplate();
  template.node.replaceWith(templateNew.node);

  return templateNew;
}

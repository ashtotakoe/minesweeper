import { setDifficultyTemplate } from './setClass';
import { Template } from '../components/Template';
import minesweeperState from './minesweeper-state';

export function rebuiltTemplate(template, main) {
  const difficulty = setDifficultyTemplate[minesweeperState.difficulty];

  const templateNew = new Template({
    className: difficulty,
    parent: main.node,
  });

  templateNew.createTemplate();
  console.log(templateNew.node);
  template.node.replaceWith(templateNew.node);

  return templateNew;
}

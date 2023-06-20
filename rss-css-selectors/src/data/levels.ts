import { LevelElem } from '../types/interfaces'

export const levels: Record<string, LevelElem> = {
  level1: {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  },
}

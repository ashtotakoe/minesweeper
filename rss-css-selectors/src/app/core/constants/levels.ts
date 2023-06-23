import { Level } from '../../shared/level'

export const levels: Level[] = [
  new Level(1, {
    name: 'base',
    children: [{ name: 'plate', children: [{ name: 'apple', children: [] }] }],
  }),
  new Level(2, {
    name: 'base',
    children: [{ name: 'bento', children: [{ name: 'apple', children: [] }] }],
  }),
  new Level(3, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
]

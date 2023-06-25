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
  new Level(4, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(5, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(6, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(7, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(8, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(9, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
  new Level(10, {
    name: 'base',
    children: [
      { name: 'plate', children: [{ name: 'apple', children: [] }] },
      { name: 'plate', children: [] },
      { name: 'bento', children: [] },
    ],
  }),
]

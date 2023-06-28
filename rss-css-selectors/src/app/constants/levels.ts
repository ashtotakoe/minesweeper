import { Level } from '../utils/level'

export const levels: Level[] = [
  new Level({
    serialNumber: 1,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          className: 'plate',
          isTarget: true,
          children: [{ name: 'apple', children: [] }],
        },
      ],
    },
    task: 'select a plate',
  }),
  new Level({
    serialNumber: 2,
    structure: {
      name: 'base',
      className: 'table',
      isTarget: true,
      children: [{ name: 'bento', children: [{ name: 'apple', children: [] }] }],
    },
    task: 'select table',
  }),
  new Level({
    serialNumber: 3,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        { name: 'plate', children: [{ name: 'apple', className: 'apple', isTarget: true, children: [] }] },
        { name: 'plate', children: [] },
        { name: 'bento', children: [] },
      ],
    },
    task: 'select an apple',
  }),
  new Level({
    serialNumber: 1,
    structure: {
      name: 'base',
      children: [{ name: 'plate', children: [{ name: 'apple', children: [] }] }],
    },
    answer: ['aboba', 'buba'],
    task: 'just type aboba or buba',
  }),
  new Level({
    serialNumber: 2,
    structure: {
      name: 'base',
      children: [{ name: 'bento', children: [{ name: 'apple', children: [] }] }],
    },
  }),
  new Level({
    serialNumber: 3,
    structure: {
      name: 'base',
      children: [
        { name: 'plate', children: [{ name: 'apple', children: [] }] },
        { name: 'plate', children: [] },
        { name: 'bento', children: [] },
      ],
    },
  }),
  new Level({
    serialNumber: 1,
    structure: {
      name: 'base',
      children: [{ name: 'plate', children: [{ name: 'apple', children: [] }] }],
    },
    answer: ['aboba', 'buba'],
    task: 'just type aboba or buba',
  }),
  new Level({
    serialNumber: 2,
    structure: {
      name: 'base',
      children: [{ name: 'bento', children: [{ name: 'apple', children: [] }] }],
    },
  }),
  new Level({
    serialNumber: 3,
    structure: {
      name: 'base',
      children: [
        { name: 'plate', children: [{ name: 'apple', children: [] }] },
        { name: 'plate', children: [] },
        { name: 'bento', children: [] },
      ],
    },
  }),
  new Level({
    serialNumber: 1,
    structure: {
      name: 'base',
      children: [{ name: 'plate', children: [{ name: 'apple', children: [] }] }],
    },
    answer: ['aboba', 'buba'],
    task: 'just type aboba or buba',
  }),
]

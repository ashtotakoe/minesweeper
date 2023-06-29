import { Level } from '../utils/level'

export const levels: Level[] = [
  new Level({
    serialNumber: 1,
    structure: {
      name: 'base',
      className: 'table',
      isTarget: true,
      children: [],
    },
    task: 'select the table',
  }),

  new Level({
    serialNumber: 2,
    targetsCount: 2,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          isTarget: true,
          children: [],
        },
        {
          name: 'plate',
          isTarget: true,
          children: [],
        },
      ],
    },
    task: 'select the plates',
  }),

  new Level({
    serialNumber: 3,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          attributes: {
            id: 'appleHolder',
          },
          isTarget: true,
          children: [{ name: 'apple', children: [] }],
        },
        {
          name: 'plate',
          children: [],
        },
      ],
    },
    task: 'select the plate with an apple in it',
  }),

  new Level({
    serialNumber: 4,
    targetsCount: 2,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          className: 'apple-holder',
          isTarget: true,
          children: [{ name: 'apple', children: [] }],
        },
        {
          name: 'plate',
          children: [],
        },
        {
          name: 'plate',
          className: 'apple-holder',
          isTarget: true,
          children: [{ name: 'apple', children: [] }],
        },
      ],
    },
    task: 'select all of the plates with an apple in it',
  }),

  new Level({
    serialNumber: 5,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          children: [{ name: 'apple', children: [] }],
        },
        {
          name: 'plate',
          children: [],
        },
        {
          name: 'bento',
          children: [{ name: 'apple', isTarget: true, children: [] }],
        },
      ],
    },
    task: 'select an apple in bento',
  }),

  new Level({
    serialNumber: 6,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          className: 'fancy',
          children: [],
        },
        {
          name: 'plate',
          className: 'fancy',
          children: [],
        },
        {
          name: 'plate',
          isTarget: true,
          attributes: {
            fancy: '',
          },
          children: [],
        },
      ],
    },
    task: 'select the plate with the fancy attribute',
  }),

  new Level({
    serialNumber: 7,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'bento',
          attributes: {
            fancy: 'no',
          },
          children: [],
        },
        {
          name: 'bento',
          attributes: {
            fancy: 'no',
          },
          children: [],
        },
        {
          name: 'bento',
          isTarget: true,
          attributes: {
            fancy: 'yes',
          },
          children: [],
        },
      ],
    },
    task: 'select the bento with the fancy attribute',
  }),
]

/* 
  new Level({
    serialNumber: 3,
    structure: {
      name: 'base',
      className: 'table',
      children: [
        {
          name: 'plate',
          attributes: { buba: '' },
          children: [
            {
              name: 'apple',
              attributes: {
                apple: 'yes',
              },
              className: 'apple',
              isTarget: true,
              children: [],
            },
          ],
        },
        { name: 'plate', children: [] },
        { name: 'bento', children: [] },
      ],
    },
    task: 'select an apple',
  }),


*/

export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/armor_1.png',
  },
  {
    i18n: 'nightmare',
    type: 'artifact',
    img: 'items/armor_nightmare.png',
    minAd: 10,
    maxAd: 12,
    str: {
      sword: [
        'exp',
        200000,
        20,
      ],
      axe: [
        'exp',
        201000,
        30,
      ],
      dagger: [
        'exp',
        200000,
        10,
      ],
    },
    dex: 15,
    vit: [
      'exp',
      420000,
      70,
    ],
    ws: {
      sword: 5,
      axe: 6,
      dagger: 4,
    },
    sad: 3,
    voh: {
      sword: -2,
      axe: -3,
      dagger: -1,
    },
    special: {
      type: 'doubleStrike',
      value: {
        sword: 20,
        axe: 25,
        dagger: 10,
      },
    },
  },
  {
    i18n: 'splendidArmor',
    type: 'rare',
    img: 'items/armor_splendid.png',
    def: [
      'exp',
      12500,
      25,
    ],
    vit: [
      'exp',
      20000,
      40,
    ],
    ws: 2,
    xpg: 20,
  },
  {
    i18n: 'leatherVest',
    type: 'common',
    img: 'items/armor_1.png',
    def: 4,
  },
];

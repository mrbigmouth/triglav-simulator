export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/boots_1.png',
  },
  {
    i18n: 'pomponBoots',
    type: 'rare',
    img: 'items/boots_pompon.png',
    dex: 7,
    ws: 7,
  },
  {
    i18n: 'splendidBoots',
    type: 'rare',
    img: 'items/boots_splendid.png',
    def: 2,
    ws: 4,
    xpg: 10,
  },
  {
    i18n: 'bootsOfConcentration',
    type: 'rare',
    img: 'items/boots_concentration.png',
    def: 1,
    dex: 10,
    vit: -10,
    sad: -3,
    special: {
      type: 'restoresVitalityOnSpecialAttackKill',
      value: 3,
    },
  },
  {
    i18n: 'cloudwalker',
    type: 'rare',
    img: 'items/boots_cloudwalker.png',
    ar: ['exp', 100000, 20],
    def: 3,
    dex: 9,
    ws: 4,
  },
  {
    i18n: 'ironCrogs',
    type: 'rare',
    img: 'items/boots_ironCrogs.png',
    voh: 3,
    dr: 50,
    str: ['exp', 30000, 6],
    def: -9,
    vit: 39,
    ws: -3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'undercurrent',
    type: 'rare',
    img: 'items/boots_undercurrent.png',
    dr: 40,
    str: ['kills', 12000, 12],
    def: -2,
    dex: ['exp', 80000, 8],
    vit: 29,
    sad: -2,
  },
  {
    i18n: 'witchstalker',
    type: 'rare',
    img: 'items/boots_witchstalker.png',
    ar: ['exp', 150000, 10],
    dex: ['kills', 15000, -15],
    vit: ['exp', 400000, 40],
    ws: 5,
    sad: -3,
  },
  {
    i18n: 'danseMacabre',
    type: 'rare',
    img: 'items/boots_danseMacabre.png',
    voh: -1,
    minAd: 4,
    maxAd: 4,
    ar: ['exp', 200000, 10],
    def: 2,
    vit: 36,
    ws: 6,
    special: {
      type: 'reduceSadOnKill',
      value: 3,
    },
  },
  {
    i18n: 'eulogy',
    type: 'rare',
    img: 'items/boots_eulogy.png',
    minAd: 6,
    maxAd: 8,
    def: ['exp', 100000, 5],
    dex: 5,
    vit: ['exp', 220000, 22],
    ws: -2,
    special: {
      type: 'hitsAddWalkSpeed',
      value: 120,
      trigger: 40,
      duration: 8,
    },
  },
  {
    i18n: 'graceMonkeysSlippers',
    type: 'artifact',
    img: 'items/boots_graceMonkeysSlippers.png',
    ar: -8,
    str: 6,
    def: ['kills', 5000, 5, -2],
    vit: 20,
    ws: 4,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'jacksTabiBoots',
    type: 'artifact',
    img: 'items/boots_jacksTabiBoots.png',
    ar: 7,
    def: ['exp', 100000, 5],
    dex: -3,
    vit: 19,
    ws: 3,
  },
  {
    i18n: 'caterpillar',
    type: 'artifact',
    img: 'items/boots_caterpillar.png',
    voh: 2,
    dr: 75,
    ar: -8,
    str: {
      sword: 10,
      axe: 15,
      dagger: 5,
    },
    vit: {
      sword: ['exp', 165000, 33],
      axe: ['exp', 220000, 44],
      dagger: ['exp', 185000, 37],
    },
    ws: 4,
  },
  {
    i18n: 'moldervine',
    type: 'artifact',
    img: 'items/boots_moldervine.png',
    dr: 60,
    str: -5,
    def: 4,
    dex: ['exp', 90000, 9],
    ws: 2,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'phantomPain',
    type: 'artifact',
    img: 'items/boots_phantomPain.png',
    voh: 2,
    str: ['exp', 300000, 10],
    def: ['exp', 400000, -4],
    vit: ['kills', 9000, -10],
    ws: 2,
    sad: -3,
    special: {
      type: 'hitsAddWalkSpeed',
      value: 130,
      trigger: 30,
      duration: 6,
    },
  },
  {
    i18n: 'fromBeyond',
    type: 'artifact',
    img: 'items/boots_fromBeyond.png',
    voh: 1,
    as: -1,
    def: 2,
    dex: ['exp', 80000, 8],
    vit: ['kills', 40000, -20],
    sad: 5,
  },
  {
    i18n: 'spikedCarapace',
    type: 'artifact',
    img: 'items/boots_spikedCarapace.png',
    dr: 50,
    dex: 10,
    vit: 28,
    sad: -3,
  },
  {
    i18n: 'swiftcraft',
    type: 'artifact',
    img: 'items/boots_swiftcraft.png',
    as: -1,
    str: ['exp', 240000, -6],
    dex: -5,
    vit: ['exp', 200000, 20],
    ws: 4,
    sad: -3,
  },
  {
    i18n: 'deepThroat',
    type: 'artifact',
    img: 'items/boots_deepThroat.png',
    voh: 3,
    as: 1,
    def: 4,
    dex: 5,
    vit: ['exp', 60000, 30],
    ws: -4,
  },
  {
    i18n: 'theAssassin',
    type: 'artifact',
    img: 'items/boots_theAssassin.png',
    as: ['kills', 60000, -3, 2],
    ar: 4,
    str: {
      sword: 12,
      axe: 19,
      dagger: 8,
    },
    dex: -5,
    ws: 3,
    sad: 2,
    special: {
      type: 'reduceSadOnKill',
      value: 2,
    },
  },
  {
    i18n: 'wildFlower',
    type: 'artifact',
    img: 'items/boots_wildFlower.png',
    voh: 1,
    dr: 10,
    str: 4,
    def: 4,
    ws: 3,
    sad: ['kills', 24000, 10],
  },
  {
    i18n: 'usedHighSocks',
    type: 'common',
    img: 'items/boots_usedHighSocks.png',
    ws: 5,
  },
];

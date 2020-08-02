export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/shield_1.png',
  },
  {
    i18n: 'splendidShield',
    type: 'rare',
    img: 'items/shield_splendid.png',
    def: ['exp', 8000, 8],
    xpg: 10,
  },
  {
    i18n: 'buckler',
    type: 'rare',
    img: 'items/shield_buckler.png',
    dr: 50,
    minAd: 1,
    maxAd: 3,
    def: 2,
    sad: -3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 3,
    },
  },
  {
    i18n: 'hoshiKage',
    type: 'rare',
    img: 'items/shield_hoshiKage.png',
    as: -2,
    def: ['exp', 70000, 7, 3],
    vit: 15,
    ws: -5,
    sad: 5,
  },
  {
    i18n: 'theLaughingstock',
    type: 'rare',
    img: 'items/shield_theLaughingstock.png',
    as: -1,
    ar: ['kills', 900, 18],
    def: 4,
    dex: -2,
    ws: 4,
    special: {
      type: 'throwAttack',
      value: 60,
    },
  },
  {
    i18n: 'rush',
    type: 'rare',
    img: 'items/shield_rush.png',
    voh: 2,
    minAd: 2,
    maxAd: 5,
    as: -1,
    str: ['kills', 5000, 10],
    def: 3,
    ws: 4,
    sad: -2,
  },
  {
    i18n: 'believersShield',
    type: 'rare',
    img: 'items/shield_believers.png',
    dr: 50,
    ar: -6,
    str: 4,
    def: 6,
    dex: 10,
    vit: 27,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 20,
    },
  },
  {
    i18n: 'knighthood',
    type: 'rare',
    img: 'items/shield_knighthood.png',
    voh: 1,
    minAd: 1,
    maxAd: 12,
    def: 9,
    vit: 15,
    ws: -2,
  },
  {
    i18n: 'dualBias',
    type: 'rare',
    img: 'items/shield_dualBias.png',
    dr: 70,
    vit: ['kills', 3700, 37],
    ws: 4,
    sad: -3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 3,
    },
  },
  {
    i18n: 'roundVision',
    type: 'rare',
    img: 'items/shield_roundVision.png',
    dr: 55,
    minAd: 7,
    maxAd: 8,
    as: -1,
    str: ['kills', 40000, 8],
    def: 6,
    ws: 2,
    special: {
      type: 'killsTriggerNoDelay',
      value: 5,
      trigger: 18,
    },
  },
  {
    i18n: 'quadrant',
    type: 'rare',
    img: 'items/shield_quadrant.png',
    voh: 3,
    ar: 9,
    def: ['exp', 130000, 13],
    dex: -6,
    vit: 19,
    ws: -1,
    special: {
      type: 'hitsAddDefense',
      value: 110,
      trigger: 50,
      duration: 12,
    },
  },
  {
    i18n: 'gruGru',
    type: 'artifact',
    img: 'items/shield_gruGru.png',
    as: ['kills', 15000, -1],
    str: ['exp', 400000, 20],
    dex: 9,
    vit: ['kills', 15000, -15],
    ws: 4,
    sad: 2,
    special: {
      type: 'throwAttack',
      value: 60,
    },
  },
  {
    i18n: 'boneShield',
    type: 'artifact',
    img: 'items/shield_bone.png',
    dr: 65,
    ar: 8,
    def: 5,
    dex: 5,
    ws: 3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'hallowedGuardian',
    type: 'artifact',
    img: 'items/shield_hallowedGuardian.png',
    def: ['exp', 100000, 10],
    dex: 10,
    vit: ['kills', 35000, 35],
    ws: -4,
    special: {
      type: 'restoresVitalityOnKill',
      value: 3,
    },
  },
  {
    i18n: 'kunngann',
    type: 'artifact',
    img: 'items/shield_kunngann.png',
    as: -1,
    def: ['exp', 100000, 10],
    dex: ['exp', 70000, 7],
    ws: 2,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 20,
    },
  },
  {
    i18n: 'kunntaka',
    type: 'artifact',
    img: 'items/shield_kunntaka.png',
    as: -1,
    str: -7,
    def: 9,
    dex: ['exp', 45000, 9],
    sad: -2,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 30,
    },
  },
  {
    i18n: 'theScarletSteel',
    type: 'artifact',
    img: 'items/shield_theScarletSteel.png',
    voh: 2,
    def: 8,
    vit: 22,
    ws: 2,
    sad: -2,
  },
  {
    i18n: 'spikedShell',
    type: 'artifact',
    img: 'items/shield_spikedShell.png',
    voh: 3,
    dr: 60,
    as: -2,
    ar: -12,
    def: ['kills', 30000, -30],
    dex: ['exp', 60000, 6],
    vit: 50,
  },
];

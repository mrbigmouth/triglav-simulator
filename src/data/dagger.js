export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/dagger_1.png',
  },
  {
    i18n: 'splendidDagger',
    type: 'rare',
    img: 'items/dagger_splendidDagger.png',
    minAd: 2,
    maxAd: 6,
    str: ['exp', 10000, 10],
    dex: ['exp', 10000, 5],
    xpg: 10,
  },
  {
    i18n: 'sharktooth',
    type: 'rare',
    img: 'items/dagger_sharktooth.png',
    dr: 30,
    minAd: 2,
    maxAd: 5,
    ar: 6,
    str: ['kills', 1000, 10],
    sad: ['exp', 96000, 8],
    special: {
      type: 'hitsAddWalkSpeed',
      value: 120,
      trigger: 40,
      duration: 8,
    },
  },
  {
    i18n: 'soulflayer',
    type: 'rare',
    img: 'items/dagger_soulflayer.png',
    voh: 3,
    minAd: 3,
    maxAd: 5,
    ar: 1,
    vit: ['exp', 2000, 10],
    sad: -3,
    special: {
      type: 'throwAttack',
      value: 35,
    },
  },
  {
    i18n: 'daggerOfSpeed',
    type: 'rare',
    img: 'items/dagger_daggerOfSpeed.png',
    minAd: 2,
    maxAd: 8,
    as: -1,
    ar: 2,
    vit: -10,
    sad: -5,
  },
  {
    i18n: 'mystique',
    type: 'rare',
    img: 'items/dagger_mystique.png',
    voh: 3,
    minAd: 5,
    maxAd: 9,
    ar: 3,
    str: ['kills', 4000, 4],
    dex: ['kills', 2000, 10],
    vit: -15,
    special: {
      type: 'throwAttack',
      value: 35,
    },
  },
  {
    i18n: 'leftHander',
    type: 'rare',
    img: 'items/dagger_leftHander.png',
    dr: 70,
    minAd: 4,
    maxAd: 9,
    ar: 1,
    def: 4,
    vit: 18,
    sad: -2,
  },
  {
    i18n: 'blindside',
    type: 'rare',
    img: 'items/dagger_blindside.png',
    minAd: 2,
    maxAd: 18,
    ar: 4,
    str: ['exp', 20000, 10],
    ws: 4,
    sad: -2,
    special: {
      type: 'hitsTriggerNoDelay',
      value: 5,
      trigger: 60,
    },
  },
  {
    i18n: 'cleaver',
    type: 'rare',
    img: 'items/dagger_cleaver.png',
    voh: 3,
    minAd: 7,
    maxAd: 20,
    as: 1,
    def: 3,
    vit: 25,
    special: {
      type: 'restoresVitalityOnKill',
      value: 3,
    },
  },
  {
    i18n: 'bloodClaw',
    type: 'rare',
    img: 'items/dagger_bloodClaw.png',
    voh: 2,
    minAd: 1,
    maxAd: 16,
    ar: 1,
    str: ['kills', 7000, 14],
    dex: 6,
    vit: ['kills', 15000, -15],
  },
  {
    i18n: 'malNar',
    type: 'rare',
    img: 'items/dagger_malNar.png',
    dr: 60,
    minAd: 10,
    maxAd: 14,
    ar: ['kills', 1000, -10],
    str: ['exp', 50000, 10],
    vit: ['exp', 70000, 35],
    sad: -2,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'muSohSai',
    type: 'rare',
    img: 'items/dagger_muSohSai.png',
    dr: 35,
    minAd: 7,
    maxAd: 8,
    ar: ['exp', 40000, 8],
    def: 5,
    dex: 10,
    vit: 22,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 20,
    },
  },
  {
    i18n: 'phantomBride',
    type: 'rare',
    img: 'items/dagger_phantomBride.png',
    minAd: 8,
    maxAd: 40,
    ar: 2,
    str: -8,
    dex: ['exp', 48000, 12],
    ws: -1,
    sad: -2,
  },
  {
    i18n: 'quietude',
    type: 'rare',
    img: 'items/dagger_quietude.png',
    voh: 2,
    minAd: 5,
    maxAd: 33,
    ar: 3,
    def: -2,
    dex: 4,
    vit: ['kills', 35000, 35],
    sad: 3,
    special: {
      type: 'doubleStrike',
      value: 8,
    },
  },
  {
    i18n: 'birdOfPrey',
    type: 'rare',
    img: 'items/dagger_birdOfPrey.png',
    voh: 1,
    minAd: 10,
    maxAd: 20,
    str: ['exp', 240000, 8],
    def: 2,
    ws: 3,
    sad: -2,
    special: {
      type: 'hitsAddAttackSpeed',
      value: 120,
      trigger: 60,
      duration: 12,
    },
  },
  {
    i18n: 'orochi',
    type: 'rare',
    img: 'items/dagger_orochi.png',
    minAd: 4,
    maxAd: 7,
    ar: 2,
    dex: 5,
    vit: ['kills', 3600, -18],
    ws: 2,
    xpg: 6,
    special: {
      type: 'throwAttack',
      value: 35,
    },
  },
  {
    i18n: 'smashingPumpkins',
    type: 'rare',
    img: 'items/sword_smashingPumpkins.png',
    minAd: 5,
    maxAd: 10,
    str: ['exp', 100000, 10],
    def: 3,
    dex: 4,
    vit: ['exp', 200000, -20],
  },
  {
    i18n: 'martialMonkeysBlade',
    type: 'artifact',
    img: 'items/sword_martialMonkeysBlade.png',
    voh: 3,
    minAd: 4,
    maxAd: 8,
    as: 1,
    ar: 8,
    str: ['exp', 12000, 16],
    dex: 10,
  },
  {
    i18n: 'fangedOrochi',
    type: 'artifact',
    img: 'items/dagger_fangedOrochi.png',
    voh: -4,
    dr: 44,
    minAd: 11,
    maxAd: 13,
    as: -1,
    str: ['kills', 60000, 15],
    dex: 8,
    vit: ['kills', 36000, -18],
    ws: 3,
    special: {
      type: 'killsAddAttackSpeed',
      value: 120,
      trigger: 10,
      duration: 12,
    },
  },
  {
    i18n: 'haku',
    type: 'artifact',
    img: 'items/sword_haku.png',
    dr: 40,
    minAd: 14,
    maxAd: 20,
    as: -1,
    def: -2,
    dex: ['exp', 160000, 8],
    ws: 2,
    special: {
      type: 'lightningStrike',
      value: 12,
    },
  },
  {
    i18n: 'boneHarvest',
    type: 'artifact',
    img: 'items/sword_boneHarvest.png',
    voh: -1,
    dr: 50,
    minAd: 2,
    maxAd: 10,
    ar: 4,
    str: ['exp', 120000, 20],
    vit: ['kills', 60000, 60, -30],
    ws: 3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'nineLives',
    type: 'artifact',
    img: 'items/dagger_nineLives.png',
    voh: 1,
    minAd: 9,
    maxAd: 22,
    as: -1,
    vit: -19,
    ws: 2,
    special: {
      type: 'throwAttack',
      value: 30,
    },
  },
  {
    i18n: 'nightbane',
    type: 'artifact',
    img: 'items/dagger_nightbane.png',
    minAd: 1,
    maxAd: 2,
    str: ['exp', 200000, 20],
    def: -3,
    dex: 9,
    sad: -4,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'yenta',
    type: 'artifact',
    img: 'items/dagger_yenta.png',
    voh: 3,
    minAd: 13,
    maxAd: 20,
    as: 1,
    str: ['exp', 200000, 10],
    vit: ['exp', 250000, 25],
    ws: 2,
    special: {
      type: 'splashAttack',
    },
  },
  {
    i18n: 'flamespire',
    type: 'artifact',
    img: 'items/dagger_flamespire.png',
    dr: 50,
    minAd: 12,
    maxAd: 24,
    ar: 8,
    dex: 8,
    vit: 33,
    ws: 2,
  },
  {
    i18n: 'sinisterEdge',
    type: 'artifact',
    img: 'items/dagger_sinisterEdge.png',
    voh: -2,
    minAd: 15,
    maxAd: 17,
    str: ['exp', 200000, 4],
    def: ['kills', 5000, 5],
    dex: 9,
    ws: 2,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'unholySickle',
    type: 'artifact',
    img: 'items/dagger_unholySickle.png',
    minAd: 8,
    maxAd: 12,
    ar: ['kills', 6000, -6],
    str: ['kills', 6000, 6],
    def: 1,
    sad: -3,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 30,
    },
  },
  {
    i18n: 'theSeeker',
    type: 'artifact',
    img: 'items/dagger_theSeeker.png',
    str: ['exp', 20000, 10],
    dex: ['exp', 100000, 10],
    vit: 15,
    ws: 4,
    special: {
      type: 'doubleStrike',
      value: 20,
    },
  },
  {
    i18n: 'theSpecter',
    type: 'artifact',
    img: 'items/dagger_theSpecter.png',
    voh: 1,
    dr: 50,
    minAd: 11,
    maxAd: 15,
    def: -5,
    dex: ['exp', 40000, 8],
    vit: ['exp', 75000, 25],
    sad: 4,
  },
  {
    i18n: 'wheelOfFortune',
    type: 'artifact',
    img: 'items/dagger_wheelOfFortune.png',
    minAd: 0,
    maxAd: 44,
    as: 1,
    ar: 4,
    def: 4,
    dex: ['exp', 50000, 10],
    vit: ['exp', 200000, 20],
    special: {
      type: 'doubleStrike',
      value: 10,
    },
  },
  {
    i18n: 'hyperon',
    type: 'artifact',
    img: 'items/dagger_hyperon.png',
    voh: 2,
    minAd: 5,
    maxAd: 20,
    ar: -5,
    str: ['exp', 300000, 10],
    def: 2,
    dex: 5,
    sad: 5,
  },
];

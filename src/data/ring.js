export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/ring_1.png',
  },
  {
    i18n: 'uhuuhuRing',
    type: 'rare',
    img: 'items/ring_uhu.png',
    str: {
      sword: 14,
      axe: 25,
      dagger: 8,
    },
    def: 2,
    ws: 4,
  },
  {
    i18n: 'uhuuhaRing',
    type: 'rare',
    img: 'items/ring_uha.png',
    dr: 60,
    ar: -5,
    def: 4,
    dex: 10,
    ws: 4,
  },
  {
    i18n: 'uhugmaRing',
    type: 'rare',
    img: 'items/ring_gma.png',
    voh: 2,
    def: 6,
    vit: -15,
    ws: 4,
  },
  {
    i18n: 'uhuumaRing',
    type: 'rare',
    img: 'items/ring_uma.png',
    def: 4,
    vit: 40,
    ws: 2,
  },
  {
    i18n: 'uhauhuRing',
    type: 'rare',
    img: 'items/ring_uhu.png',
    ar: 8,
    str: {
      sword: 14,
      axe: 25,
      dagger: 8,
    },
    def: -2,
    dex: 8,
  },
  {
    i18n: 'uhauhaRing',
    type: 'rare',
    img: 'items/ring_uha.png',
    dr: 60,
    ar: 3,
    dex: 18,
  },
  {
    i18n: 'uhagmaRing',
    type: 'rare',
    img: 'items/ring_gma.png',
    voh: 2,
    ar: 8,
    def: 2,
    dex: 8,
    vit: -15,
  },
  {
    i18n: 'uhaumaRing',
    type: 'rare',
    img: 'items/ring_uma.png',
    ar: 8,
    dex: 8,
    vit: 40,
    ws: -2,
  },
  {
    i18n: 'gmauhuRing',
    type: 'rare',
    img: 'items/ring_uhu.png',
    str: {
      sword: 14,
      axe: 25,
      dagger: 8,
    },
    def: -2,
    vit: 25,
    ws: 4,
  },
  {
    i18n: 'gmauhaRing',
    type: 'rare',
    img: 'items/ring_uha.png',
    dr: 60,
    ar: -5,
    dex: 10,
    vit: 25,
    ws: 4,
  },
  {
    i18n: 'gmagmaRing',
    type: 'rare',
    img: 'items/ring_gma.png',
    voh: 2,
    def: 2,
    vit: 10,
    ws: 4,
  },
  {
    i18n: 'gmaumaRing',
    type: 'rare',
    img: 'items/ring_uma.png',
    vit: 65,
    ws: 2,
  },
  {
    i18n: 'umauhuRing',
    type: 'rare',
    img: 'items/ring_uhu.png',
    str: {
      sword: 24,
      axe: 43,
      dagger: 14,
    },
    def: -2,
    sad: -3,
  },
  {
    i18n: 'umauhaRing',
    type: 'rare',
    img: 'items/ring_uha.png',
    dr: 60,
    ar: -5,
    str: {
      sword: 10,
      axe: 18,
      dagger: 6,
    },
    dex: 10,
    sad: -3,
  },
  {
    i18n: 'umagmaRing',
    type: 'rare',
    img: 'items/ring_gma.png',
    voh: 2,
    str: {
      sword: 10,
      axe: 18,
      dagger: 6,
    },
    def: 2,
    vit: -15,
    sad: -3,
  },
  {
    i18n: 'umaumaRing',
    type: 'rare',
    img: 'items/ring_uma.png',
    str: {
      sword: 10,
      axe: 18,
      dagger: 6,
    },
    vit: 40,
    ws: -2,
    sad: -3,
  },
  {
    i18n: 'heartFullOfSoul',
    type: 'rare',
    img: 'items/ring_heartFullOfSoul.png',
    voh: 3,
    dr: 80,
    as: 1,
    str: ['exp', 180000, 6],
    def: ['exp', 60000, 6],
    sad: -3,
  },
  {
    i18n: 'splendidRing',
    type: 'rare',
    img: 'items/ring_splendid.png',
    voh: 2,
    def: ['exp', 10000, 5],
    sad: -3,
    xpg: 10,
  },
  {
    i18n: 'moonlightStone',
    type: 'rare',
    img: 'items/ring_moonlightStone.png',
    def: 5,
    dex: 6,
    ws: 3,
    special: {
      type: 'restoresVitalityOnKill',
      value: 3,
    },
  },
  {
    i18n: 'ringOfTao',
    type: 'rare',
    img: 'items/ring_tao.png',
    dr: 30,
    str: 3,
    def: 3,
    sad: -3,
  },
  {
    i18n: 'stribogsWheel',
    type: 'rare',
    img: 'items/ring_stribogsWheel.png',
    as: -1,
    vit: -15,
    ws: ['kills', 1000, 10],
    sad: -3,
    xpg: 10,
  },
  {
    i18n: 'seryiVolk',
    type: 'rare',
    img: 'items/ring_seryiVolk.png',
    minAd: 1,
    maxAd: {
      sword: 8,
      axe: 15,
      dagger: 4,
    },
    as: -1,
    ar: 5,
    vit: 20,
    ws: 2,
    special: {
      type: 'restoresVitalityOnKill',
      value: 4,
    },
  },
  {
    i18n: 'lifeblood',
    type: 'rare',
    img: 'items/ring_lifeblood.png',
    vit: ['kills', 9000, 90],
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 50,
    },
  },
  {
    i18n: 'witchcraft',
    type: 'rare',
    img: 'items/ring_witchcraft.png',
    str: {
      sword: 10,
      axe: 15,
      dagger: 8,
    },
    def: ['kills', 8000, 8, -6],
    vit: ['exp', 210000, -30],
    sad: -6,
  },
  {
    i18n: 'sevenSeasOfRhye',
    type: 'rare',
    img: 'items/ring_sevenSeasOfRhye.png',
    ar: 4,
    str: 4,
    def: 4,
    dex: 4,
    vit: 22,
    ws: 2,
    sad: -2,
  },
  {
    i18n: 'daiTeoAduun',
    type: 'rare',
    img: 'items/ring_daiTeoAduun.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    dex: ['exp', 75000, 15],
    vit: 15,
    ws: 3,
    sad: -4,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'ringOfIo',
    type: 'rare',
    img: 'items/ring_io.png',
    dr: 50,
    str: 5,
    def: 5,
    ws: -5,
    sad: -5,
  },
  {
    i18n: 'miserablism',
    type: 'rare',
    img: 'items/ring_miserablism.png',
    voh: 3,
    ar: -8,
    str: ['exp', 60000, 6, 6],
    def: ['kills', 6000, 6],
    vit: ['exp', 200000, -20],
  },
  {
    i18n: 'moonrider',
    type: 'rare',
    img: 'items/ring_moonrider.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    ar: 8,
    dex: ['exp', 5000, 10],
    vit: ['exp', 6000, 30],
    sad: -4,
  },
  {
    i18n: 'vapor',
    type: 'rare',
    img: 'items/ring_vapor.png',
    as: {
      sword: 11,
      axe: 17,
      dagger: 7,
    },
    str: {
      sword: 18,
      axe: 30,
      dagger: 10,
    },
    dex: ['exp', 270000, -9],
    ws: 6,
    sad: -3,
    special: {
      type: 'addStrengthOnTakenDamage',
      trigger: 90,
      value: 130,
      duration: 15,
    },
  },
  {
    i18n: 'passionGraceAndFire',
    type: 'rare',
    img: 'items/ring_passionGraceAndFire.png',
    voh: 2,
    as: -1,
    ar: ['exp', 60000, 12],
    str: -10,
    dex: ['kills', 4000, 4],
    ws: -3,
    sad: -4,
  },
  {
    i18n: 'passionGraceAndFire',
    type: 'rare',
    img: 'items/ring_passionGraceAndFire.png',
    voh: 2,
    as: -1,
    ar: ['exp', 60000, 12],
    str: -10,
    dex: ['kills', 4000, 4],
    ws: -3,
    sad: -4,
  },
  {
    i18n: 'theShootingStar',
    type: 'rare',
    img: 'items/ring_theShootingStar.png',
    voh: {
      sword: 2,
      axe: 3,
      dagger: 2,
    },
    minAd: {
      sword: 4,
      axe: 5,
      dagger: 2,
    },
    maxAd: {
      sword: 5,
      axe: 10,
      dagger: 3,
    },
    def: ['kills', 5000, 5],
    dex: ['exp', 60000, 6],
    vit: ['kills', 20000, -20],
    ws: {
      sword: 3,
      axe: 2,
      dagger: 4,
    },
  },
  {
    i18n: 'deathAndDecay',
    type: 'rare',
    img: 'items/ring_deathAndDecay.png',
    dr: 100,
    ar: 8,
    def: -4,
    dex: 14,
    sad: -4,
  },
  {
    i18n: 'dreadnaught',
    type: 'rare',
    img: 'items/ring_dreadnaught.png',
    voh: -2,
    minAd: 1,
    maxAd: {
      sword: 10,
      axe: 15,
      dagger: 6,
    },
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: 20,
      axe: 35,
      dagger: 12,
    },
    def: ['exp', 300000, -3],
    dex: 12,
    ws: 5,
  },
  {
    i18n: 'mementoOfLieserl',
    type: 'rare',
    img: 'items/ring_mementoOfLieserl.png',
    as: -1,
    ar: 5,
    str: {
      sword: 15,
      axe: 20,
      dagger: 10,
    },
    def: -5,
    vit: ['exp', 300000, 30],
    ws: -2,
    sad: -5,
    special: {
      type: 'restoresVitalityOnSpecialAttackKill',
      value: {
        sword: 1,
        axe: 2,
        dagger: 2,
      },
    },
  },
  {
    i18n: 'woebringer',
    type: 'rare',
    img: 'items/ring_woebringer.png',
    dr: 100,
    ar: -9,
    str: -9,
    vit: ['exp', 140000, 70, -40],
    ws: 3,
    special: {
      type: 'restoresVitalityOnDamageReflectionKill',
      value: 2,
    },
  },
  {
    i18n: 'ghostRider',
    type: 'rare',
    img: 'items/ring_ghostRider.png',
    voh: 2,
    def: ['exp', 120000, 6],
    dex: 8,
    vit: ['exp', 250000, 25],
    ws: -2,
    sad: -2,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinity_red.png',
    voh: {
      sword: 5,
      axe: 3,
      dagger: 2,
    },
    str: {
      sword: ['exp', 252000, 14],
      axe: ['exp', 264000, 22],
      dagger: ['exp', 256000, 8],
    },
    def: ['exp', 140000, 7],
    dex: ['exp', 80000, 8],
    vit: ['exp', 100000, 10],
    sad: ['exp', 270000, 45, -15],
  },
];

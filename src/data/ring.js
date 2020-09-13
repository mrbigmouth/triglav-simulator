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
    xpg: 15,
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
    ar: {
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
    i18n: 'braveMonkeysCirclet',
    type: 'artifact',
    img: 'items/ring_braveMonkeysCirclet.png',
    minAd: {
      sword: 3,
      axe: 5,
      dagger: 2,
    },
    maxAd: {
      sword: 3,
      axe: 5,
      dagger: 2,
    },
    def: 4,
    dex: {
      sword: 4,
      axe: 6,
      dagger: 8,
    },
    vit: 15,
    ws: -2,
    sad: ['kills', 9600, -4],
  },
  {
    i18n: 'willOTheWisp',
    type: 'artifact',
    img: 'items/ring_willOTheWisp.png',
    as: -1,
    vit: 15,
    ws: 4,
  },
  {
    i18n: 'infernoStone',
    type: 'artifact',
    img: 'items/ring_infernoStone.png',
    ar: 10,
    str: {
      sword: 10,
      axe: 15,
      dagger: 6,
    },
    ws: 4,
    sad: -4,
  },
  {
    i18n: 'theMistress',
    type: 'artifact',
    img: 'items/ring_theMistress.png',
    minAd: 6,
    maxAd: 8,
    def: 2,
    dex: ['exp', 90000, 9],
    vit: -15,
    ws: 5,
    sad: -5,
  },
  {
    i18n: 'exite',
    type: 'artifact',
    img: 'items/ring_exite.png',
    as: -1,
    ar: -7,
    def: 7,
    dex: 7,
    vit: ['exp', 15000, -15],
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'perfectStrangers',
    type: 'artifact',
    img: 'items/ring_perfectStrangers.png',
    voh: -2,
    str: ['kills', 12000, -6],
    def: 4,
    dex: ['kills', 24000, 12],
    vit: ['kills', 28000, 28],
    ws: -2,
    sad: -4,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 30,
    },
  },
  {
    i18n: 'eyeOfTheBeholder',
    type: 'artifact',
    img: 'items/ring_eyeOfTheBeholder.png',
    minAd: {
      sword: 4,
      axe: 8,
      dagger: 2,
    },
    maxAd: {
      sword: 5,
      axe: 10,
      dagger: 3,
    },
    def: ['exp', 120000, 4],
    dex: ['exp', 16000, 8],
    vit: 22,
    ws: 2,
  },
  {
    i18n: 'stoneColdCrazy',
    type: 'artifact',
    img: 'items/ring_stoneColdCrazy.png',
    dr: 50,
    ar: ['kills', 10000, 10],
    def: 6,
    vit: 25,
    ws: -2,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'hydrarisk',
    type: 'artifact',
    img: 'items/ring_hydrarisk.png',
    voh: 4,
    str: ['kills', 18000, -9],
    def: ['kills', 6000, 6],
    dex: 9,
    ws: -3,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'muala',
    type: 'artifact',
    img: 'items/ring_muala.png',
    voh: {
      sword: 3,
      axe: 4,
      dagger: 2,
    },
    minAd: -1,
    maxAd: -9,
    ar: 6,
    def: ['exp', 160000, 8],
    dex: ['kills', 8000, 8],
    sad: 8,
  },
  {
    i18n: 'olguulsEvilEye',
    type: 'artifact',
    img: 'items/ring_olguulsEvilEye.png',
    voh: -2,
    minAd: {
      sword: 6,
      axe: 10,
      dagger: 4,
    },
    maxAd: {
      sword: 9,
      axe: 15,
      dagger: 6,
    },
    ar: {
      sword: 8,
      axe: 15,
      dagger: 6,
    },
    def: ['exp', 300000, 5],
    dex: ['exp', 90000, 9],
    vit: 28,
    ws: 3,
    special: {
      type: 'specialThrowAttack',
      value: {
        sword: 60,
        axe: 100,
        dagger: 35,
      },
    },
  },
  {
    i18n: 'rananculasLament',
    type: 'artifact',
    img: 'items/ring_rananculasLament.png',
    voh: 4,
    dr: 44,
    ar: -4,
    def: -4,
    vit: 14,
    xpg: 4,
  },
  {
    i18n: 'farBeyond',
    type: 'artifact',
    img: 'items/ring_farBeyond.png',
    as: -1,
    ar: ['exp', 120000, -12],
    str: {
      sword: 14,
      axe: 20,
      dagger: 8,
    },
    def: 5,
    vit: ['exp', 600000, 15],
    ws: 3,
    sad: -3,
    special: {
      type: 'specialThrowAttack',
      value: 20,
    },
  },
  {
    i18n: 'skullWheel',
    type: 'artifact',
    img: 'items/ring_skullWheel.png',
    dr: 70,
    as: -1,
    str: {
      sword: 12,
      axe: 17,
      dagger: 7,
    },
    def: ['kills', 20000, -5, 6],
    vit: ['exp', 400000, 40],
    ws: 2,
    special: {
      type: 'reduceSadOnKill',
      value: 3,
    },
  },
  {
    i18n: 'helix',
    type: 'artifact',
    img: 'items/ring_helix.png',
    voh: 2,
    dr: 70,
    def: ['exp', 700000, 7],
    vit: ['kills', 270000, 27],
    ws: 3,
    special: {
      type: 'hitsAddDefense',
      value: 110,
      trigger: 50,
      duration: 12,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityBlue.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: ['exp', 250000, 10],
      axe: ['exp', 252000, 18],
      dagger: ['exp', 250000, 5],
    },
    def: ['exp', 100000, 5],
    dex: ['exp', 100000, 10],
    vit: ['exp', 100000, 5],
    sad: ['exp', 270000, 45, -15],
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityBlue.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: ['exp', 250000, 10],
      axe: ['exp', 252000, 18],
      dagger: ['exp', 250000, 5],
    },
    def: ['exp', 100000, 5],
    dex: ['exp', 100000, 10],
    vit: ['exp', 100000, 5],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityBlue.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: ['exp', 250000, 10],
      axe: ['exp', 252000, 18],
      dagger: ['exp', 250000, 5],
    },
    def: ['exp', 100000, 5],
    dex: ['exp', 100000, 10],
    vit: ['exp', 100000, 5],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'resetSadOnKill',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityBlue.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: ['exp', 250000, 10],
      axe: ['exp', 252000, 18],
      dagger: ['exp', 250000, 5],
    },
    def: ['exp', 100000, 5],
    dex: ['exp', 100000, 10],
    vit: ['exp', 100000, 5],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityBlue.png',
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    str: {
      sword: ['exp', 250000, 10],
      axe: ['exp', 252000, 18],
      dagger: ['exp', 250000, 5],
    },
    def: ['exp', 100000, 5],
    dex: ['exp', 100000, 10],
    vit: ['exp', 100000, 5],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'killsAddAttackSpeed',
      value: 120,
      trigger: 15,
      duration: 12,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityRed.png',
    voh: {
      sword: 3,
      axe: 5,
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
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityRed.png',
    voh: {
      sword: 3,
      axe: 5,
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
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityRed.png',
    voh: {
      sword: 3,
      axe: 5,
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
    special: {
      type: 'resetSadOnKill',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityRed.png',
    voh: {
      sword: 3,
      axe: 5,
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
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityRed.png',
    voh: {
      sword: 3,
      axe: 5,
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
    special: {
      type: 'hitsAddDefense',
      value: 110,
      trigger: 50,
      duration: 12,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityYellow.png',
    dr: 100,
    str: {
      sword: ['exp', 200000, 20],
      axe: ['exp', 210000, 30],
      dagger: ['exp', 240000, 12],
    },
    def: ['exp', 180000, 6],
    dex: ['exp', 60000, 6],
    vit: ['exp', 100000, 20],
    sad: ['exp', 270000, 45, -15],
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityYellow.png',
    dr: 100,
    str: {
      sword: ['exp', 200000, 20],
      axe: ['exp', 210000, 30],
      dagger: ['exp', 240000, 12],
    },
    def: ['exp', 180000, 6],
    dex: ['exp', 60000, 6],
    vit: ['exp', 100000, 20],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityYellow.png',
    dr: 100,
    str: {
      sword: ['exp', 200000, 20],
      axe: ['exp', 210000, 30],
      dagger: ['exp', 240000, 12],
    },
    def: ['exp', 180000, 6],
    dex: ['exp', 60000, 6],
    vit: ['exp', 100000, 20],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'resetSadOnKill',
      value: 10,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityYellow.png',
    dr: 100,
    str: {
      sword: ['exp', 200000, 20],
      axe: ['exp', 210000, 30],
      dagger: ['exp', 240000, 12],
    },
    def: ['exp', 180000, 6],
    dex: ['exp', 60000, 6],
    vit: ['exp', 100000, 20],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'trinity',
    type: 'artifact',
    img: 'items/ring_trinityYellow.png',
    dr: 100,
    str: {
      sword: ['exp', 200000, 20],
      axe: ['exp', 210000, 30],
      dagger: ['exp', 240000, 12],
    },
    def: ['exp', 180000, 6],
    dex: ['exp', 60000, 6],
    vit: ['exp', 100000, 20],
    sad: ['exp', 270000, 45, -15],
    special: {
      type: 'addStrengthOnTakenDamage',
      value: 130,
      trigger: 90,
      duration: 15,
    },
  },
  {
    i18n: 'ulibhool',
    type: 'artifact',
    img: 'items/ring_ulibhool.png',
    voh: 2,
    minAd: 1,
    maxAd: {
      sword: 14,
      axe: 26,
      dagger: 8,
    },
    as: {
      sword: -1,
      axe: -2,
      dagger: -1,
    },
    def: -3,
    dex: 12,
    vit: 21,
  },
  {
    i18n: 'theSongOfTheNightingale',
    type: 'artifact',
    img: 'items/ring_theSongOfTheNightingale.png',
    dr: 70,
    dex: ['exp', 100000, 10],
    vit: ['exp', 90000, 30],
    ws: 3,
    sad: -4,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'theNightingale',
    type: 'artifact',
    img: 'items/ring_theNightingale.png',
    dr: 60,
    def: -3,
    dex: ['exp', 50000, 10],
    vit: ['exp', 50000, 25],
    ws: 3,
    sad: 5,
    special: {
      type: 'restoresVitalityOnKill',
      value: 2,
    },
  },
  {
    i18n: 'hyperventilate',
    type: 'artifact',
    img: 'items/ring_hyperventilate.png',
    voh: {
      sword: 3,
      axe: 4,
      dagger: 2,
    },
    minAd: {
      sword: 10,
      axe: 12,
      dagger: 8,
    },
    maxAd: {
      sword: 15,
      axe: 15,
      dagger: 10,
    },
    ar: ['exp', 160000, -8],
    dex: 5,
    ws: 2,
    sad: -5,
    special: {
      type: 'reduceSadOnKill',
      value: 1,
    },
  },
  {
    i18n: 'theNightmareFiend',
    type: 'artifact',
    img: 'items/ring_theNightmareFiend.png',
    voh: 3,
    as: {
      sword: -2,
      axe: -3,
      dagger: -1,
    },
    ar: -14,
    def: ['exp', 120000, 6],
    dex: -8,
    vit: ['kills', 300000, 50],
    sad: -4,
    special: {
      type: 'specialThrowAttack',
      value: 50,
    },
  },
  {
    i18n: 'thePoeticFiend',
    type: 'artifact',
    img: 'items/ring_thePoeticFiend.png',
    voh: 3,
    as: {
      sword: -2,
      axe: -3,
      dagger: -1,
    },
    ar: -14,
    def: ['exp', 120000, 6],
    dex: -10,
    vit: ['kills', 200000, 40],
    ws: 4,
  },
  {
    i18n: 'theGrayWolf',
    type: 'artifact',
    img: 'items/ring_theGrayWolf.png',
    as: -1,
    minAd: 5,
    maxAd: 12,
    ar: 7,
    vit: 20,
    ws: 2,
    sad: -4,
    special: {
      type: 'restoresVitalityOnKill',
      value: 4,
    },
  },
];

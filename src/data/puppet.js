export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/puppet_1.png',
  },
  {
    i18n: 'warsong',
    type: 'rare',
    img: 'items/puppet_warsong.png',
    xpg: 100,
  },
  {
    i18n: 'stormsong',
    type: 'rare',
    img: 'items/puppet_stormsong.png',
    sad: -150,
  },
  {
    i18n: 'vampiricHeart',
    type: 'rare',
    img: 'items/puppet_vampiricHeart.png',
    voh: {
      sword: 12,
      axe: 15,
      dagger: 10,
    },
  },
  {
    i18n: 'goblinsTeeth',
    type: 'rare',
    img: 'items/puppet_goblinsTeeth.png',
    dr: 200,
    vit: 100,
    ws: 30,
  },
  {
    i18n: 'speedstar',
    type: 'rare',
    img: 'items/puppet_speedstar.png',
    ws: 100,
  },
  {
    i18n: 'graceMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_graceMonkeysPuppet.png',
    ar: -8,
    str: 6,
    def: 5,
    vit: 20,
    ws: 3,
  },
  {
    i18n: 'cunningMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_cunningMonkeysPuppet.png',
  },
  {
    i18n: 'cunningMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_cunningMonkeysPuppet.png',
    dr: 80,
    as: -2,
    ar: 8,
    str: -10,
    def: 3,
    dex: 10,
  },
  {
    i18n: 'braveMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_braveMonkeysPuppet.png',
    minAd: 3,
    maxAd: 6,
    def: 2,
    dex: 10,
    vit: 15,
    ws: -2,
    sad: -4,
  },
  {
    i18n: 'proudMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_proudMonkeysPuppet.png',
    def: 20,
    dex: -8,
    vit: 40,
    ws: 4,
  },
  {
    i18n: 'grandMonkeysPuppet',
    type: 'rare',
    img: 'items/puppet_grandMonkeysPuppet.png',
    voh: 3,
    as: 1,
    ar: 10,
    str: 20,
    dex: 8,
  },
  {
    i18n: 'stimpack',
    type: 'rare',
    img: 'items/puppet_stimpack.png',
    voh: 20,
    minAd: {
      sword: 11,
      axe: 22,
      dagger: 6,
    },
    maxAd: {
      sword: 28,
      axe: 50,
      dagger: 15,
    },
    def: -8,
    ws: 20,
  },
  {
    i18n: 'outreach',
    type: 'rare',
    img: 'items/puppet_outreach.png',
    ar: 180,
  },
  {
    i18n: 'defender',
    type: 'rare',
    img: 'items/puppet_defender.png',
    dr: 200,
    vit: 100,
    ws: -10,
  },
  {
    i18n: 'snowmanDoll',
    type: 'rare',
    img: 'items/puppet_snowmanDoll.png',
    str: 6,
    def: 2,
    dex: 7,
    vit: 30,
  },
  {
    i18n: 'frenzy',
    type: 'rare',
    img: 'items/puppet_frenzy.png',
    as: {
      sword: -6,
      axe: -10,
      dagger: -3,
    },
    ws: 5,
  },
  {
    i18n: 'everyRoseHasItsThorn',
    type: 'rare',
    img: 'items/puppet_everyRoseHasItsThorn.png',
    dr: 1000,
    def: -50,
    dex: 20,
    vit: 350,
  },
  {
    i18n: 'tridigitateOniGecko',
    type: 'rare',
    img: 'items/puppet_tridigitateOniGecko.png',
    vit: 200,
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 50,
    },
  },
  {
    i18n: 'magicMissile',
    type: 'rare',
    img: 'items/puppet_magicMissile.png',
    as: {
      sword: -2,
      axe: -3,
      dagger: -1,
    },
    ws: 6,
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
    i18n: 'silkDrawers',
    type: 'rare',
    img: 'items/puppet_silkDrawers.png',
    special: {
      type: 'specialThrowAttack',
      value: 100,
    },
  },
  {
    i18n: 'ghostOfChance',
    type: 'artifact',
    img: 'items/puppet_puppet_ghostOfChance.png',
    ws: 4,
    xpg: 300,
    special: {
      type: 'resetSadOnKill',
      value: 10,
    },
  },
  {
    i18n: 'hauntedDoll',
    type: 'artifact',
    img: 'items/puppet_hauntedDoll.png',
    def: -8,
    vit: -20,
    ws: 6,
    xpg: 300,
  },
  {
    i18n: 'tyrantsLegacy',
    type: 'artifact',
    img: 'items/puppet_tyrantsLegacy.png',
    ws: 12,
  },
  {
    i18n: 'timeIsMoney',
    type: 'artifact',
    img: 'items/puppet_timeIsMoney.png',
    ar: -30,
    sad: 5,
    xpg: 1000,
  },
  {
    i18n: 'scarabLarva',
    type: 'artifact',
    img: 'items/puppet_scarabLarva.png',
    ar: 10,
    str: {
      sword: 10,
      axe: 16,
      dagger: 6,
    },
    def: 4,
    vit: 22,
    ws: 5,
    sad: 2,
  },
  {
    i18n: 'howMyHeartSings',
    type: 'artifact',
    img: 'items/puppet_howMyHeartSings.png',
    ws: 5,
    xpg: 300,
    special: {
      type: 'specialThrowAttack',
      value: 40,
    },
  },
  {
    i18n: 'puppetOfKupula',
    type: 'common',
    img: 'items/puppet_1.png',
    def: 6,
  },
];

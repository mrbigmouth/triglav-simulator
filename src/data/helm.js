export default [
  {
    i18n: 'none',
    type: 'none',
    img: 'items/helm_base.png',
  },
  {
    i18n: 'boneHelm',
    type: 'artifact',
    img: 'items/helm_bone.png',
    voh: 2,
    dr: 77,
    str: 7,
    def: -3,
    dex: 9,
    vit: ['exp', 70000, 35],
    special: {
      type: 'restoresVitalityOnTakenDamage',
      value: 20,
    },
  },
];

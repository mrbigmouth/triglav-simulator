export default {
  namespaced: true,
  state() {
    return {
      characterClass: 'swordMaster',
      exp: 10000000,
      kills: 1000000,
      boostAllRecords: 2,
      boostVitalityRecords: 13,
      boostStrengthRecords: 1,
      boostDexteriryRecords: 1,
      boostDefenseRecords: 1,
      weapon1: '',
      weapon2: '',
      ring1: '',
      ring2: '',
      helm: '',
      armor: '',
      gloves: '',
      boots: '',
      freshy: '',
      puppet1: '',
      puppet2: '',
      puppet3: '',
    };
  },
  getter: {
  },
  mutations: {
    changeBuildValue(state, { key, value }) {
      state[key] = value;
    },
  },
};

// const basicAttackSpeedByClass = {
//   swordMaster: 18,
//   axeMaster: 25,
//   daggerMaster: 10,
// };

// const basicVitalityByClass = {
//   swordMaster: 100,
//   axeMaster: 120,
//   daggerMaster: 80,
// };

// const boostVitalityByClass = {
//   swordMaster: 12,
//   axeMaster: 15,
//   daggerMaster: 10,
// };

// const basicStrengthByClass = {
//   swordMaster: 6,
//   axeMaster: 8,
//   daggerMaster: 4,
// };

// const boostStrengthByClass = {
//   swordMaster: 3,
//   axeMaster: 4,
//   daggerMaster: 2,
// };

// const basicDexteriryByClass = {
//   swordMaster: 6,
//   axeMaster: 4,
//   daggerMaster: 8,
// };

// const boostDexteriryByClass = {
//   swordMaster: 2,
//   axeMaster: 1,
//   daggerMaster: 3,
// };

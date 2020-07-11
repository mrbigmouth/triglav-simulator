export const computedBuildValueForVModel = {
  computed: {
    ...generateComputedProperties(
      'characterClass',
      'exp',
      'kills',
      'boostAllRecords',
      'boostVitalityRecords',
      'boostStrengthRecords',
      'boostDexteriryRecords',
      'boostDefenseRecords',
      'weapon1',
      'weapon2',
      'ring1',
      'ring2',
      'helm',
      'armor',
      'gloves',
      'boots',
      'freshy',
      'puppet1',
      'puppet2',
      'puppet3',
    ),
  },
};
export default computedBuildValueForVModel;

function generateComputedProperties(...argList) {
  const result = {};

  argList.forEach((key) => {
    result[key] = {
      get() {
        return this.$store.state.build[key];
      },
      set(value) {
        return this.$store.commit('build/changeBuildValue', {
          key,
          value,
        });
      },
    };
  });

  return result;
}

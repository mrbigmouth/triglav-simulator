import { mapGetters } from 'vuex';

export const computedBuildValueForVModel = {
  computed: {
    ...generateComputedPropertiesForVModel(
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
    ...mapGetters('build', [
      'getItemValue',
    ]),
  },
};
export default computedBuildValueForVModel;

function generateComputedPropertiesForVModel(...argList) {
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

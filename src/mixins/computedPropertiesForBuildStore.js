import { mapGetters } from 'vuex';
import build from 'src/store/modules/build';

export default {
  computed: {
    ...generateComputedPropertiesForVModel(Object.keys(build.state())),
    ...mapGetters('build', Object.keys(build.getters)),
  },
};

function generateComputedPropertiesForVModel(argList) {
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

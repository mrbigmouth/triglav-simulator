<template>
  <form
    class="row q-col-gutter-xs"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false">
    <div class="col-xs-12 col-md-6 col-sm-4 col-xl-3">
      <q-select
        v-model="characterClass"
        label="腳色職業"
        :options="[
          {
            label: '劍系大師',
            value: 'swordMaster',
          },
          {
            label: '斧系大師',
            value: 'axeMaster',
          },
          {
            label: '匕首大師',
            value: 'daggerMaster',
          },
        ]"
        emit-value
        map-options />
    </div>
    <div class="col-xs-12 col-md-6 col-sm-4 col-xl-3">
      <q-input
        v-model.number="exp"
        label="經驗值"
        type="number"
        min="1"
        step="1" />
    </div>
    <div class="col-xs-12 col-md-6 col-sm-4 col-xl-3">
      <q-input
        v-model.number="kills"
        label="擊殺數"
        type="number"
        min="1"
        step="1" />
    </div>
    <div class="col-xs-12 col-md-6 col-sm-12 col-xl-3">
      <boost-strategy />
    </div>
  </form>
</template>

<script>
import computedBuildValueForVModel from 'src/mixins/computedBuildValueForVModel';
import BoostStrategy from './BoostStrategy';

export default {
  name: 'BuildPanel',
  components: {
    BoostStrategy,
  },
  mixins: [
    computedBuildValueForVModel,
  ],
  data() {
    return {
      boostStrategy: 'vitality',
    };
  },
  mounted() {
  },
};

</script>

<template>
  <div class="row q-col-gutter-md">
    <div
      class="col-xs-12 col-sm-shrink"
      style="min-width: 15rem;">
      <character-number-area />
    </div>
    <div class="col">
      <enemy-area />
    </div>
  </div>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import CharacterNumberArea from './CharacterNumberArea';
import EnemyArea from './EnemyArea';

export default {
  name: 'SimulatorPanel',
  components: {
    CharacterNumberArea,
    EnemyArea,
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
};

</script>

<style lang="stylus">
  .numberArea {
    .attribute {
      display: inline-block
      min-width: 10rem;
      text-align: right;
    }
    .number {
      text-align: right;
    }
  }
</style>

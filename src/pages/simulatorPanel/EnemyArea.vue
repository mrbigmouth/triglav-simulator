<template>
  <q-expansion-item
    label="模擬戰鬥"
    class="shadow-1 overflow-hidden"
    style="border-radius: 1rem;"
    header-class="bg-primary text-white"
    expand-icon-class="text-white"
    default-opened
    dense>
    <div class="q-pa-sm">
      <div class="row full-width wrap justify-around items-start">
        <simulator
          v-for="(enemyData, index) in simulatorEnemyList"
          :key="index"
          :enemy-data="enemyData"
          :temporary-buff="temporaryBuff" />
      </div>
      <div class="flex-break" />
      <div class="text-center q-pa-sm">
        <q-btn
          class="q-mx-sm"
          icon="queue_play_next"
          color="primary"
          label="新增敵方模擬"
          @click="showSelectEnemyDialog = true;" />
        <q-btn
          v-if="simulatorEnemyList.length > 0"
          class="q-mx-sm"
          icon="delete_forever"
          color="negative"
          label="移除所有模擬"
          @click="simulatorEnemyList.splice(0);" />
      </div>
    </div>
    <select-enemy-dialog
      :is-show.sync="showSelectEnemyDialog"
      :display-enemy-list="simulatorEnemyList"
      @addEnemy="onAddEnemy" />
  </q-expansion-item>
</template>

<script>
import Simulator from './Simulator';
import SelectEnemyDialog from './SelectEnemyDialog';

const simulatorEnemyList = [];
export default {
  name: 'EnemyArea',
  components: {
    Simulator,
    SelectEnemyDialog,
  },
  data() {
    return {
      showSelectEnemyDialog: false,
      simulatorEnemyList,
    };
  },
  methods: {
    onAddEnemy(enemyData) {
      simulatorEnemyList.push(enemyData);
    },
  },
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

<template>
  <q-expansion-item
    label="模擬戰鬥"
    class="shadow-1 overflow-hidden"
    style="border-radius: 1rem;"
    header-class="bg-primary text-white"
    expand-icon-class="text-white"
    default-opened
    dense>
    <div class="text-center q-pa-sm">
      <q-btn
        class="q-mx-sm"
        icon="queue_play_next"
        color="primary"
        label="新增敵方模擬"
        @click="showSelectEnemyDialog = true;" />
      <q-btn
        v-if="displayEnemyList.length > 0"
        class="q-mx-sm"
        icon="delete_forever"
        color="negative"
        label="移除所有模擬"
        @click="displayEnemyList = [];" />
    </div>
    <select-enemy-dialog
      :is-show.sync="showSelectEnemyDialog"
      :display-enemy-list.sync="displayEnemyList" />
  </q-expansion-item>
</template>

<script>
import SelectEnemyDialog from './SelectEnemyDialog';

export default {
  name: 'EnemyArea',
  components: {
    SelectEnemyDialog,
  },
  data() {
    return {
      showSelectEnemyDialog: false,
      displayEnemyList: [],
    };
  },
  methods: {
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

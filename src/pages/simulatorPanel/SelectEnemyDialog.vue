<template>
  <q-dialog
    v-model="proxyIsShow"
    persistent
    full-height>
    <q-card>
      <q-bar>
        <div>選擇模擬敵方</div>

        <q-space />

        <q-btn
          icon="close"
          dense
          flat
          v-close-popup />
      </q-bar>
      <q-card-section>
        <template v-for="enemyData in displayEnemyList">
          <div
            :key="enemyData.id"
            class="row q-col-gutter-sm">
            <div>
              <img :src="enemyData.img" />
            </div>
            <div class="col">
              <q-input
                v-model="$t('enemyData.i18n')"
                label="名稱"
                type="text"
                dense />
              <q-input
                v-model.number="enemyData.minAd"
                label="最小傷害"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.maxAd"
                label="最大傷害"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.dex"
                label="敏捷"
                type="number"
                min="0"
                step="1"
                dense />
            </div>
            <div class="col">
              <q-input
                v-model.number="enemyData.def"
                label="防禦"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.vit"
                label="體力"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.dr"
                label="反傷"
                type="number"
                min="0"
                step="1"
                dense>
                <template v-slot:append>
                  ％
                </template>
              </q-input>
              <q-input
                v-model.number="enemyData.voh"
                label="吸血"
                type="number"
                min="0"
                step="1"
                dense>
                <template v-slot:append>
                  ％
                </template>
              </q-input>
            </div>
            <div>
              <q-btn
                icon="add"
                color="positive"
                size="sm"
                title="加入模擬"
                dense />
            </div>
          </div>
          <q-separator
            :key="`separator_${enemyData.id}`"
            style="margin: 0.5rem;" />
        </template>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import enemy from 'src/data/enemy';

export default {
  name: 'SelectEnemyDialog',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [
  ],
  data() {
    return {
      filter: [],
      enemyList: enemy.slice().map((enemyData) => {
        return {
          ...enemyData,
        };
      }),
    };
  },
  computed: {
    proxyIsShow: {
      get() {
        return this.isShow;
      },
      set(isShow) {
        this.$emit('update:isShow', isShow);
      },
    },
    displayEnemyList() {
      return this.enemyList;
    },
  },
  methods: {
    onSelectItem(itemIndex) {
      this[this.itemSlot] = itemIndex;
      this.proxyIsShow = false;
    },
  },
};

</script>

<style lang="stylus">
  img {
    width: 40px;
    height: 40px;
  }
</style>

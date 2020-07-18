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
        <q-btn
          color="positive"
          class="full-width"
          label="加入以下全部"
          @click="onAddAll" />
        <q-separator />
        <template v-for="(enemyData, index) in displayEnemyList">
          <div
            :key="index"
            class="row q-col-gutter-sm">
            <div>
              <img :src="enemyData.img" />
            </div>
            <div class="col">
              <q-input
                v-model="enemyData.name"
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
                v-model.number="enemyData.hitsPerSecond"
                label="每秒攻擊次數"
                type="number"
                min="0"
                step="0.1"
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
                min="1"
                step="1"
                hide-hint
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
              <q-input
                v-model.number="enemyData.healingPerSecond"
                label="每秒回血"
                type="number"
                min="0"
                step="1"
                dense />
            </div>
            <div>
              <q-btn
                icon="add"
                color="positive"
                size="sm"
                title="加入模擬"
                dense
                @click="onAddEnemy(enemyData)" />
            </div>
          </div>
          <q-separator :key="`separator_${index}`" />
        </template>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import enemy from 'src/data/enemy';
import build from 'src/store/modules/build';
const getHitsPerSecondByAs = build.getters.getHitsPerSecondByAs();

export default {
  name: 'SelectEnemyDialog',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filter: [],
      enemyList: enemy.slice().map((enemyData) => {
        return {
          name: this.$t('enemy.' + enemyData.i18n),
          img: enemyData.img || 'none.png',
          minAd: enemyData.minAd || 0,
          maxAd: enemyData.maxAd || 0,
          hitsPerSecond: enemyData.as ? getHitsPerSecondByAs(enemyData.as) : 0.5,
          dex: enemyData.dex || 0,
          def: enemyData.def || 0,
          vit: enemyData.vit || 0,
          voh: enemyData.voh || 0,
          dr: enemyData.dr || 0,
          healingPerSecond: enemyData.healingPerSecond || 0,
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
    onAddAll() {
      this.displayEnemyList.forEach((enemyData) => {
        this.$emit('addEnemy', enemyData);
      });
    },
    onAddEnemy(enemyData) {
      this.$emit('addEnemy', enemyData);
    },
  },
};

</script>

<style lang="stylus">
  img {
    width: 40px;
    height: 40px;
  }

  hr.q-separator {
    margin: 0.5rem 0;
  }
</style>

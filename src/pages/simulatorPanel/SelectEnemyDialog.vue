<template>
  <q-dialog
    v-model="proxyIsShow"
    persistent
    full-height>
    <q-card>
      <q-bar style="position: sticky; top: 0; z-index: 3; background-color: #333;">
        <div>
          {{ $t('selectSimulateEnemy') }}
        </div>
        <q-space />
        <q-btn
          icon="close"
          dense
          flat
          v-close-popup />
      </q-bar>
      <q-card-section>
        <q-select
          v-model="filterLocation"
          :label="$t('pleaseSelectArea')"
          :options="displayLocationOptionList"
          use-input
          clearable
          options-cover
          emit-value
          map-options
          @filter="onSearchLocation" />
        <q-separator />
        <q-btn
          color="positive"
          class="full-width"
          :label="$t('addAllBelow')"
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
                :label="$t('displayName')"
                type="text"
                dense />
              <q-input
                v-model.number="enemyData.minAd"
                :label="$t('minimumDamage')"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.maxAd"
                :label="$t('maximumDamage')"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.hitsPerSecond"
                :label="$t('hitsPerSecond')"
                type="number"
                min="0"
                step="0.1"
                dense />
              <q-input
                v-model.number="enemyData.dex"
                :label="$t('dexterity')"
                type="number"
                min="0"
                step="1"
                dense />
            </div>
            <div class="col">
              <q-input
                v-model.number="enemyData.voh"
                :label="$t('voh')"
                type="number"
                min="0"
                step="1"
                dense>
                <template v-slot:append>
                  ％
                </template>
              </q-input>
              <q-input
                v-model.number="enemyData.dr"
                :label="$t('damageReflection')"
                type="number"
                min="0"
                step="1"
                dense>
                <template v-slot:append>
                  ％
                </template>
              </q-input>
              <q-input
                v-model.number="enemyData.def"
                :label="$t('defense')"
                type="number"
                min="0"
                step="1"
                dense />
              <q-input
                v-model.number="enemyData.vit"
                :label="$t('vitality')"
                type="number"
                min="1"
                step="1"
                hide-hint
                dense />
              <q-input
                v-model.number="enemyData.healingPerSecond"
                :label="$t('regeneratePerSecond')"
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
import locationList from 'src/data/location';
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
    const locationOptionList = locationList.map((location) => {
      return {
        label: this.$t('location.' + location),
        value: location,
      };
    });

    return {
      filterLocation: '',
      locationOptionList,
      displayLocationOptionList: locationOptionList,
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
    enemyList() {
      return enemy.slice().map((enemyData) => {
        return {
          name: this.$t('enemy.' + enemyData.i18n),
          location: enemyData.location,
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
      });
    },
    displayEnemyList() {
      const filterLocation = this.filterLocation;
      return this.enemyList.filter((enemyData) => {
        return enemyData.location.includes(filterLocation);
      });
    },
  },
  methods: {
    onSearchLocation(value, update) {
      if (value) {
        update(() => {
          this.displayLocationOptionList = this.locationOptionList.filter((locationOption) => {
            return (
              locationOption.label.indexOf(value) !== -1 ||
              locationOption.value.indexOf(value) !== -1
            );
          });
        });
      }
      else {
        update(() => {
          this.displayLocationOptionList = this.locationOptionList;
        });
      }
    },
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
    min-width: 303px;
    margin: 0.5rem 0;
  }
</style>

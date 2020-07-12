<template>
  <div class="column">
    <div
      class="col-6"
      style="font-size: 0.8rem;">
      強化藥水使用紀錄：
    </div>
    <div class="col-6">
      <q-btn-toggle
        v-model="boostStrategy"
        toggle-color="primary"
        size="sm"
        :options="[
          {
            label: '全體力',
            value: 'vitality',
          },
          {
            label: '全力量',
            value: 'strength',
          },
          {
            label: '全敏捷',
            value: 'dexteriry',
          },
          {
            label: '全防禦',
            value: 'defense',
          },
          {
            label: '自定義',
            value: 'custom',
          },
        ]"
        @click="onClickBtns" />
    </div>
    <q-dialog
      v-model="showCustomDialog"
      persistent>
      <q-card>
        <q-bar>
          <div>自定義強化藥水使用紀錄</div>

          <q-space />

          <q-btn
            icon="close"
            dense
            flat
            v-close-popup />
        </q-bar>
        <q-card-section>
          <q-input
            v-model.number="boostAllRecords"
            label="萬靈密藥(全屬性)使用次數"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostVitalityRecords"
            label="長生靈丹(體力)使用次數"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostStrengthRecords"
            label="滋王丸藥(力量)使用次數"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostDexteriryRecords"
            label="玉液瓊漿(敏捷)使用次數"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostDefenseRecords"
            label="九頭蛇釀(防禦)使用次數"
            type="number"
            min="0"
            step="1" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="確定"
            color="primary"
            v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';

export default {
  name: 'BoostRecords',
  components: {
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  data() {
    return {
      boostStrategy: 'vitality',
      showCustomDialog: false,
    };
  },
  watch: {
    boostStrategy(boostStrategy) {
      switch (boostStrategy) {
        case 'vitality': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 13;
          this.boostStrengthRecords = 1;
          this.boostDexteriryRecords = 1;
          this.boostDefenseRecords = 1;
          break;
        }
        case 'strength': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 1;
          this.boostStrengthRecords = 13;
          this.boostDexteriryRecords = 1;
          this.boostDefenseRecords = 1;
          break;
        }
        case 'dexteriry': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 1;
          this.boostStrengthRecords = 1;
          this.boostDexteriryRecords = 13;
          this.boostDefenseRecords = 1;
          break;
        }
        case 'defense': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 1;
          this.boostStrengthRecords = 1;
          this.boostDexteriryRecords = 1;
          this.boostDefenseRecords = 13;
          break;
        }
        case 'custom':
        default: {
          break;
        }
      }
    },
  },
  methods: {
    onClickBtns() {
      if (this.boostStrategy === 'custom') {
        this.showCustomDialog = true;
      }
    },
  },
};

</script>

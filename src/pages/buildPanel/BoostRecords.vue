<template>
  <div class="column">
    <div
      class="col-6"
      style="font-size: 0.8rem;">
      {{ $t('boostRecords') }}
    </div>
    <div class="col-6">
      <q-btn-toggle
        v-model="boostStrategy"
        toggle-color="primary"
        size="sm"
        :options="[
          {
            label: $t('allVitality'),
            value: 'vitality',
          },
          {
            label: $t('allStrength'),
            value: 'strength',
          },
          {
            label: $t('allDexterity'),
            value: 'dexteriry',
          },
          {
            label: $t('allDefense'),
            value: 'defense',
          },
          {
            label: $t('custom'),
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
          <div>
            {{ $t('customBoostRecords') }}
          </div>

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
            :label="$t('nostrumRecord')"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostVitalityRecords"
            :label="$t('elixirRecord')"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostStrengthRecords"
            :label="$t('gioganRecord')"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostDexteriryRecords"
            :label="$t('necterRecord')"
            type="number"
            min="0"
            step="1" />
          <q-input
            v-model.number="boostDefenseRecords"
            :label="$t('hydrabrewRecord')"
            type="number"
            min="0"
            step="1" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            :label="$t('confirm')"
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
          this.boostVitalityRecords = 4;
          this.boostStrengthRecords = 10;
          this.boostDexteriryRecords = 1;
          this.boostDefenseRecords = 1;
          break;
        }
        case 'dexteriry': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 4;
          this.boostStrengthRecords = 1;
          this.boostDexteriryRecords = 10;
          this.boostDefenseRecords = 1;
          break;
        }
        case 'defense': {
          this.boostAllRecords = 2;
          this.boostVitalityRecords = 4;
          this.boostStrengthRecords = 1;
          this.boostDexteriryRecords = 1;
          this.boostDefenseRecords = 10;
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

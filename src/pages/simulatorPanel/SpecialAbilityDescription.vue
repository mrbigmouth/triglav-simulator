<template>
  <div>
    <q-checkbox
      v-if="canBeToggle"
      v-model="checked"
      @input="onToggle" />
    {{ getSpecialDescription(specialData) }}
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';

const canBeToggleSpecialTypeList = [
  'addVoHOnTakenDamage',
  'addStrengthOnTakenDamage',
  'addVitalityOnTakenDamage',
  'addAttackSpeedOnTakenDamage',
  'addDamageReflectionOnTakenDamage',
  'killsAddAttackRange',
  'killsAddAttackSpeed',
  'killsAddWalkSpeed',
  'hitsAddAttackSpeed',
  'hitsAddWalkSpeed',
  'hitsAddDefense',
  'hitsAddStrength',
  'throwAttack',
  'specialThrowAttack',
];
export default {
  name: 'SpecialAbilityDescription',
  mixins: [
    computedPropertiesForBuildStore,
  ],
  props: {
    specialData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  computed: {
    canBeToggle() {
      return canBeToggleSpecialTypeList.includes(this.specialData.type);
    },
    adjustKey() {
      if (this.canBeToggle) {
        switch (this.specialData.type) {
          case 'addVoHOnTakenDamage': {
            return 'voh';
          }
          case 'hitsAddStrength':
          case 'addStrengthOnTakenDamage': {
            return 'str';
          }
          case 'addVitalityOnTakenDamage': {
            return 'vit';
          }
          case 'hitsAddAttackSpeed':
          case 'killsAddAttackSpeed':
          case 'addAttackSpeedOnTakenDamage': {
            return 'as';
          }
          case 'addDamageReflectionOnTakenDamage': {
            return 'dr';
          }
          case 'killsAddAttackRange': {
            return 'ar';
          }
          case 'hitsAddWalkSpeed':
          case 'killsAddWalkSpeed': {
            return 'ws';
          }
          case 'hitsAddDefense': {
            return 'def';
          }
          case 'throwAttack': {
            return 'throwAttack';
          }
        }
      }

      return '';
    },
  },
  methods: {
    ...mapMutations('build', [
      'addTemporaryBuff',
      'removeTemporaryBuff',
    ]),
    onToggle(checked) {
      if (checked) {
        this.addTemporaryBuff({
          key: this.adjustKey,
          value: this.specialData.value,
        });
      }
      else {
        this.removeTemporaryBuff({
          key: this.adjustKey,
          value: this.specialData.value,
        });
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
  div {
    color: #9fd900;
  }
</style>

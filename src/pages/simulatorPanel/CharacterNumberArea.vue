<template>
  <div>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      :label="$t('normalAttack')"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      default-opened
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">
              {{ $t('damagePerSecond') }}：
            </span>
            <span class="col number">
              {{ playerDamagePerSecond }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('expectDamage') }}：
            </span>
            <span class="col number">
              {{ playerExpectDamagePerHit }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('minimumDamage') }}：
            </span>
            <span class="col number">
              {{ playerMinAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('maximumDamage') }}：
            </span>
            <span class="col number">
              {{ playerMaxAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('expectVitalityOnHit') }}：
            </span>
            <span class="col number">
              {{ playerExpectFeedbackPerHit }}
              (
              {{ vitPercentage(playerExpectFeedbackPerHit) }}
              %
              )
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('hitsPerSecond') }}：
            </span>
            <span class="col number">
              {{ playerHitsPerSecond }}
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      :label="$t('specialAttack')"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">
              {{ $t('expectDamage') }}：
            </span>
            <span class="col number">
              {{ playerSaExpectDamage }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('minimumDamage') }}：
            </span>
            <span class="col number">
              {{ playerSaMinAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('maximumDamage') }}：
            </span>
            <span class="col number">
              {{ playerSaMaxAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('expectVitalityOnHit') }}：
            </span>
            <span class="col number">
              {{ playerSaExpectFeedbackPerHit }}
              (
              {{ vitPercentage(playerSaExpectFeedbackPerHit) }}
              %
              )
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('specialAttackDelay') }}：
            </span>
            <span class="col number">
              {{ playerSad }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('damageReflection') }}：
            </span>
            <span class="col number">
              {{ playerDr }}
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      :label="$t('basicValue')"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">
              {{ $t('strength') }}：
            </span>
            <span class="col number">
              {{ playerStr }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('dexterity') }}：
            </span>
            <span class="col number">
              {{ playerDex }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('vitality') }}：
            </span>
            <span class="col number">
              {{ playerVit }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('defense') }}：
            </span>
            <span class="col number">
              {{ playerDef }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('attackSpeed') }}：
            </span>
            <span class="col number">
              {{ playerAs }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('doubleStrikeChange') }}：
            </span>
            <span class="col number">
              {{ playerDoubleStrike }}
              %
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('attackRange') }}：
            </span>
            <span class="col number">
              {{ playerAr }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('walkSpeed') }}：
            </span>
            <span class="col number">
              {{ playerWs }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">
              {{ $t('experienceGain') }}：
            </span>
            <span class="col number">
              {{ playerXpg }}
              %
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      :label="$t('specialAbility')"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="card">
        <q-card-section>
          <template v-if="playerSpecialAbilityList.length > 0">
            <special-ability-description
              v-for="(speicalData, index) in playerSpecialAbilityList"
              :key="index"
              :special-data="speicalData" />
          </template>
          <template v-else>
            {{ $t('none') }}
          </template>
        </q-card-section>
      </div>
    </q-expansion-item>
  </div>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import SpecialAbilityDescription from './SpecialAbilityDescription';

export default {
  name: 'CharacterNumberArea',
  mixins: [
    computedPropertiesForBuildStore,
  ],
  components: {
    SpecialAbilityDescription,
  },
  computed: {
    vitPercentage() {
      return (num1, num2) => {
        return Math.round(num1 / this.getCharacterValue('vit') * 1000) / 10;
      };
    },
  },
};
</script>

<style lang="stylus">
.attribute {
  display: inline-block
  min-width: 10rem;
  text-align: right;
}
.number {
  text-align: right;
}
</style>

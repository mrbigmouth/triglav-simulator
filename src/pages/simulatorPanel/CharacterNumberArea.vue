<template>
  <div>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      label="普通攻擊"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      default-opened
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">每秒傷害：</span>
            <span class="col number">
              {{ expectDps }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">期望傷害：</span>
            <span class="col number">
              {{ expectDmgPerHit }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">最小傷害：</span>
            <span class="col number">
              {{ totalMinAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">最大傷害：</span>
            <span class="col number">
              {{ totalMinAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">預期吸血量：</span>
            <span class="col number">
              {{ expectHealingPerHit }}
              (
              {{ vitPercentage(expectHealingPerHit) }}
              %
              )
            </span>
          </div>
          <div class="row">
            <span class="col attribute">攻擊速度：</span>
            <span class="col number">
              {{ getCharacterValue('as') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">每秒攻擊數：</span>
            <span class="col number">
              {{ hitsPerSecond }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">雙擊機率：</span>
            <span class="col number">
              {{ totalDoubleStrikeChance }}
              %
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      label="特殊攻擊"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">期望傷害：</span>
            <span class="col number">
              {{ expectSADmgPerHit }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">最小傷害：</span>
            <span class="col number">
              {{ totalSAMaxAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">最大傷害：</span>
            <span class="col number">
              {{ totalSAMinAd }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">預期吸血量：</span>
            <span class="col number">
              {{ expectSAHealingPerHit }}
              (
              {{ expectSAHealingPerHit }}
              %
              )
            </span>
          </div>
          <div class="row">
            <span class="col attribute">特攻延遲：</span>
            <span class="col number">
              {{ totalSADelay }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">傷害反彈：</span>
            <span class="col number">
              {{ getCharacterValue('dr') }}
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      label="其他數值"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <q-card>
        <q-card-section>
          <div class="row">
            <span class="col attribute">力量：</span>
            <span class="col number">
              {{ getCharacterValue('str') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">敏捷：</span>
            <span class="col number">
              {{ getCharacterValue('dex') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">體力：</span>
            <span class="col number">
              {{ getCharacterValue('vit') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">防禦：</span>
            <span class="col number">
              {{ getCharacterValue('def') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">攻擊距離：</span>
            <span class="col number">
              {{ getCharacterValue('ar') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">移動速度：</span>
            <span class="col number">
              {{ getCharacterValue('ws') }}
            </span>
          </div>
          <div class="row">
            <span class="col attribute">經驗加成：</span>
            <span class="col number">
              {{ getCharacterValue('xpg') }}
              %
            </span>
          </div>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 1rem;"
      label="特殊能力"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="card">
        <q-card-section>
          <template v-if="specialAbilityList.length > 0">
            <div
              v-for="(speicalData, index) in specialAbilityList"
              :key="index"
              style="color: #9fd900;">
              {{ getSpecialDescription(speicalData) }}
            </div>
          </template>
          <template v-else>
            無
          </template>
        </q-card-section>
      </div>
    </q-expansion-item>
  </div>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';

export default {
  name: 'CharacterNumberArea',
  components: {
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  computed: {
    vitPercentage() {
      return (num1, num2) => {
        return Math.round(num1 / this.getCharacterValue('vit') * 100) / 100;
      };
    },
  },
};
</script>

<style lang="stylus">
.attribute {
  display: inline-block
  min-width: 8rem;
  text-align: right;
}
.number {
  text-align: right;
}
</style>

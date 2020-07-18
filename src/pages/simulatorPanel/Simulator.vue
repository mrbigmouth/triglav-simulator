<template>
  <q-card
    style="max-width: 25rem; margin-top: 1rem;"
    flat
    bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="enemyData.img" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{ enemyData.name }}
        </q-item-label>
        <q-item-label caption>
          戰鬥模擬結果
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator style="margin-bottom: 0;" />
    <q-expansion-item
      label="普攻模擬結果"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      :default-opened="playerSad < 30"
      dense>
      <div class="row">
        <div class="col-3 text-right">
          <div>擊殺時間：</div>
        </div>
        <div class="col-3 text-center">
          <div>3秒</div>
        </div>
        <div class="col-3 text-right">
          <div>承受損傷：</div>
        </div>
        <div class="col-3 text-center">
          <div>30(30%)</div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
      v-if="playerSad >= 30"
      label="特攻模擬結果"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      default-opened
      dense>
      <div class="row">
        <div class="col-3 text-right">
          <div>擊殺時間：</div>
        </div>
        <div class="col-3 text-center">
          <div>3秒</div>
        </div>
        <div class="col-3 text-right">
          <div>承受損傷：</div>
        </div>
        <div class="col-3 text-center">
          <div>30(30%)</div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
      label="普攻計算"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="row">
        <div class="col-3 text-right">
          <div>每秒傷害：</div>
          <div>每擊傷害：</div>
          <div>敵百分比：</div>
          <div>預期吸血量：</div>
          <div>我百分比：</div>
        </div>
        <div class="col-3 text-center">
          <div>
            {{ attackDealDamagePerSecond }}
          </div>
          <div>
            {{ attackDealMinAd }}
            ~
            {{ attackDealMaxAd }}
          </div>
          <div>
            {{ getEnemyVitPercentage(attackDealMinAd) }}%
            ~
            {{ getEnemyVitPercentage(attackDealMaxAd) }}%
          </div>
          <div>
            {{  }}
          </div>
        </div>
        <div class="col-3 text-right">
          <div>承受反擊：</div>
          <div>期望值：</div>
          <div>敵百分比：</div>
          <div>每秒攻擊數：</div>
          <div>雙擊機率：</div>
        </div>
        <div class="col-3 text-center">
          <div>
            {{ attackBeDamageReflectExpectDamagePerSecond }}
          </div>
          <div>
            {{ attackDealExpectDmg }}
          </div>
          <div>
            {{ getEnemyVitPercentage(attackDealExpectDmg) }}%
          </div>
          <div>
            {{ playerHitsPerSecond }}
          </div>
          <div>
            {{ playerDoubleStrike }}%
          </div>
        </div>
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';

export default {
  name: 'Simulator',
  mixins: [
    computedPropertiesForBuildStore,
  ],
  props: {
    enemyData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getEnemyVitPercentage() {
      return (num) => {
        return Math.round(num / this.enemyData.vit * 1000) / 10;
      };
    },
    getPlayerVitPercentage() {
      return (num) => {
        return Math.round(num / this.getCharacterValue('def') * 1000) / 10;
      };
    },
    effectiveEnemyDef() {
      return Math.max(0, this.enemyData.def - this.playerDex);
    },
    effectivePlayerDef() {
      return Math.max(0, this.playerDef - this.enemyData.dex);
    },
    expectKillAttack() {
      return Math.ceil(this.enemyData.vit / this.attackDealExpectDmg);
    },
    expectKillTime() {
      return Math.round(this.expectKillAttack / this.hitsPerSecond * 100) / 100;
    },
    attackBeDamageReflectMin() {
      return Math.max(0, Math.round(this.attackDealMinAd * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    attackBeDamageReflectMax() {
      return Math.max(0, Math.round(this.attackDealMinAd * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    attackBeDamageReflectExpectDamage() {
      return Math.max(0, Math.round(this.attackDealExpectDmg * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    attackBeDamageReflectExpectDamagePerSecond() {
      return Math.round(this.attackBeDamageReflectExpectDamage * this.playerHitsPerSecond * this.playerDoubleStrike) / 100;
    },
    attackHealingAmount() {
      return Math.round(this.attackDealExpectDmg * this.playerVoh / 100);
    },
    saAttackDealMinAd() {
      return Math.max(0, this.totalSAMinAd - this.effectiveEnemyDef);
    },
    saAttackDealMaxAd() {
      return Math.max(0, this.totalSAMaxAd - this.effectiveEnemyDef);
    },
    saAttackDealExpectDmg() {
      return (this.saAttackDealMinAd + this.saAttackDealMaxAd) / 2;
    },
    expectKillSAAttack() {
      return Math.ceil(this.enemyData.vit / this.saAttackDealExpectDmg);
    },
    expectKillSATime() {
      return Math.round(this.expectKillSAAttack / this.saHitsPerSecond * 100) / 100;
    },
    saAttackBeDamageReflectMin() {
      return Math.max(0, Math.round(this.saAttackDealMinAd * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    saAttackBeDamageReflectMax() {
      return Math.max(0, Math.round(this.saAttackDealMaxAd * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    saAttackBeDamageReflectExpectDmg() {
      return Math.max(0, Math.round(this.saAttackDealExpectDmg * this.enemyData.dr / 100) - this.effectivePlayerDef);
    },
    saAttackHealingAmount() {
      return Math.round(this.saAttackDealExpectDmg * this.playerVoh / 100);
    },
    beAttackDealMinAd() {
      return Math.max(0, this.enemyData.minAd - this.effectivePlayerDef);
    },
    beAttackDealMaxAd() {
      return Math.max(0, this.enemyData.maxAd - this.effectivePlayerDef);
    },
    beAttackDealExpectDmg() {
      return (this.beAttackDealMinAd + this.beAttackDealMaxAd) / 2;
    },
    beAttackDamageReflectMin() {
      return Math.max(0, Math.round(this.beAttackDealMinAd * this.playerDr / 100) - this.effectiveEnemyDef);
    },
    beAttackDamageReflectMax() {
      return Math.max(0, Math.round(this.beAttackDealMaxAd * this.enemyData.dr / 100));
    },
    beAttackDamageReflectExpectDmg() {
      return Math.max(0, Math.round(this.beAttackDealExpectDmg * this.enemyData.dr / 100));
    },
    beAttackHealingAmount() {
      return Math.round(this.attackDealExpectDmg * this.enemyData.voh / 100);
    },
  },
};

</script>

<style lang="stylus">

</style>

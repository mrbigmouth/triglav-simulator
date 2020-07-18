<template>
  <q-card
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
    <q-separator />
    <q-card-section>
      <div>
        敵方屬性–
        傷害：{{ enemyData.minAd }}~{{ enemyData.maxAd }}，
        敏捷：{{ enemyData.dex }}，
        吸血：{{ enemyData.voh }}%，
        防禦：{{ enemyData.def }}，
        體力：{{ enemyData.vit }}，
        反傷：{{ enemyData.dr }}%。
      </div>
      <div>
        每次對其攻擊將造成
        {{ attackDealMinAd }}
        (
        {{ getEnemyVitPercentage(attackDealMinAd) }}%
        )
        ~
        {{ attackDealMaxAd }}
        (
        {{ getEnemyVitPercentage(attackDealMaxAd) }}%
        )
        點傷害，傷害期望值為
        {{ attackDealExpectDmg }}
        (
        {{ getEnemyVitPercentage(attackDealExpectDmg) }}%
        )
        。
        預計需要攻擊
        {{ expectKillAttack }}
        次方可擊殺，花費時間
        {{ expectKillTime }}
        秒。
      </div>
      <div>
        每次對其攻擊將被反彈
        {{ attackBeDamageReflectMin }}
        (
        {{ getPlayerVitPercentage(attackBeDamageReflectMin) }}%
        )
        ~
        {{ attackBeDamageReflectMax }}
        (
        {{ getPlayerVitPercentage(attackBeDamageReflectMax) }}%
        )
        點傷害。傷害期望值為
        {{ attackBeDamageReflectExpectDmg }}
        (
        {{ getPlayerVitPercentage(attackBeDamageReflectExpectDmg) }}%
        )
        。預期吸血量為
        {{ attackHealingAmount }}
        (
        {{ getPlayerVitPercentage(attackHealingAmount) }}%
        )。
      </div>
      <div>
        每次對其特殊攻擊將造成
        {{ saAttackDealMinAd }}
        (
        {{ getEnemyVitPercentage(saAttackDealMinAd) }}%
        )
        ~
        {{ saAttackDealMaxAd }}
        (
        {{ getEnemyVitPercentage(saAttackDealMaxAd) }}%
        )
        點傷害，傷害期望值為
        {{ saAttackDealExpectDmg }}
        (
        {{ getEnemyVitPercentage(saAttackDealExpectDmg) }}%
        )
        。
        預計需要攻擊
        {{ expectKillSAAttack }}
        次方可擊殺，花費時間
        {{ expectKillSATime }}
        秒。
      </div>
      <div>
        每次對其攻擊將被反彈
        {{ saAttackBeDamageReflectMin }}
        (
        {{ getPlayerVitPercentage(saAttackBeDamageReflectMin) }}%
        )
        ~
        {{ saAttackBeDamageReflectMax }}
        (
        {{ getPlayerVitPercentage(saAttackBeDamageReflectMax) }}%
        )
        點傷害。傷害期望值為
        {{ saAttackBeDamageReflectExpectDmg }}
        (
        {{ getPlayerVitPercentage(saAttackBeDamageReflectExpectDmg) }}%
        )
        。預期吸血量為
        {{ saAttackHealingAmount }}
        (
        {{ getPlayerVitPercentage(saAttackHealingAmount) }}%
        )。
      </div>
      <div>
        每次被其攻擊將被造成
        {{ beAttackDealMinAd }}
        (
        {{ getPlayerVitPercentage(beAttackDealMinAd) }}%
        )
        ~
        {{ beAttackDealMaxAd }}
        (
        {{ getPlayerVitPercentage(beAttackDealMaxAd) }}%
        )
        傷害。傷害期望值為
        {{ beAttackDealExpectDmg }}
        (
        {{ getPlayerVitPercentage(beAttackDealExpectDmg) }}%
        )
        。
      </div>
      <div>
        每次被其攻擊將反彈
        {{ beAttackDamageReflectMin }}
        (
        {{ getEnemyVitPercentage(beAttackDamageReflectMin) }}%
        )
        ~
        {{ beAttackDamageReflectMax }}
        (
        {{ getEnemyVitPercentage(beAttackDamageReflectMax) }}%
        )
        點傷害。傷害期望值為
        {{ beAttackDamageReflectExpectDmg }}
        (
        {{ getEnemyVitPercentage(beAttackDamageReflectExpectDmg) }}%
        )
        。預期被吸血量為
        {{ beAttackHealingAmount }}
        (
        {{ getEnemyVitPercentage(beAttackHealingAmount) }}%
        )
        。
      </div>
    </q-card-section>
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
        return Math.round(num / this.playerVit * 1000) / 10;
      };
    },
    playerVit() {
      return this.getCharacterValue('vit');
    },
    playerDef() {
      return this.getCharacterValue('def');
    },
    playerDex() {
      return this.getCharacterValue('dex');
    },
    playerVoh() {
      return this.getCharacterValue('voh');
    },
    playerDr() {
      return this.getCharacterValue('dr');
    },
    effectiveEnemyDef() {
      return Math.max(0, this.enemyData.def - this.playerDex);
    },
    effectivePlayerDef() {
      return Math.max(0, this.playerDef - this.enemyData.dex);
    },
    attackDealMinAd() {
      return Math.max(0, this.totalMinAd - this.effectiveEnemyDef);
    },
    attackDealMaxAd() {
      return Math.max(0, this.totalMaxAd - this.effectiveEnemyDef);
    },
    attackDealExpectDmg() {
      return (this.attackDealMinAd + this.attackDealMaxAd) / 2;
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
    attackBeDamageReflectExpectDmg() {
      return Math.max(0, Math.round(this.attackDealExpectDmg * this.enemyData.dr / 100) - this.effectivePlayerDef);
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

<template>
  <q-card
    style="width: 15rem; margin-top: 1rem;"
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
      <q-item-section side>
        <q-btn
          icon="delete_forever"
          title="刪除此模擬"
          color="negative"
          flat
          dense
          @click.prevent="$emit('delete')" />
      </q-item-section>
    </q-item>
    <q-separator style="margin-bottom: 0;" />
    <q-expansion-item
      label="模擬結果"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      default-opened
      dense>
      <div class="row">
        <span class="col attribute">戰鬥時間：</span>
        <span class="col number">
          {{ simulatorResult.secondPass }}秒
        </span>
      </div>
      <div
        v-if="simulatorResult.enemyVit"
        class="row">
        <span class="col attribute">敵方殘餘：</span>
        <span class="col number">
          {{ simulatorResult.enemyVit }}
          (
          {{ getEnemyVitPercentage(simulatorResult.enemyVit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">承受損傷：</span>
        <span class="col number">
          {{ simulatorResult.playerLossVit }}
          (
          {{ getPlayerVitPercentage(simulatorResult.playerLossVit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">攻擊次數：</span>
        <span class="col number">
          {{ simulatorResult.playerHits }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">特攻次數：</span>
        <span class="col number">
          {{ simulatorResult.playerSaHits }}
        </span>
      </div>
    </q-expansion-item>
    <q-expansion-item
      label="模擬歷程"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      default-opened
      dense>
      <template v-for="(record, index) in simulatorResult.recordList">
        <div
          :key="`time_${index}`"
          class="row">
          <span class="col attribute">時間：</span>
          <span class="col number">
            {{ record.time }}秒
          </span>
        </div>
        <div
          :key="`event_${index}`"
          class="row">
          <span class="col attribute">事件：</span>
          <span class="col number">
            {{ parseRecordAction(record.event) }}
          </span>
        </div>
        <div
          :key="`enemy_${index}`"
          class="row">
          <span class="col attribute">敵方殘血：</span>
          <span class="col number">
            {{ record.enemyVit }}
            (
            {{ getEnemyVitPercentage(record.enemyVit) }}
            %)
          </span>
        </div>
        <div
          :key="`player_${index}`"
          class="row">
          <span class="col attribute">我方損傷：</span>
          <span class="col number">
            {{ record.playerLossVit }}
            (
            {{ getPlayerVitPercentage(record.playerLossVit) }}
            %)
          </span>
        </div>
        <q-separator :key="`separator_${index}`" />
      </template>
    </q-expansion-item>
    <q-expansion-item
      label="普攻數值"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="row">
        <span class="col attribute">每秒傷害：</span>
        <span class="col number">
          {{ simulatorPlayerExpectDamagePerSecond }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerExpectDamagePerSecond) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">期望傷害：</span>
        <span class="col number">
          {{ simulatorPlayerExpectDamagePerHit }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerExpectDamagePerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最小傷害：</span>
        <span class="col number">
          {{ simulatorPlayerMinAd }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerMinAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最大傷害：</span>
        <span class="col number">
          {{ simulatorPlayerMaxAd }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerMaxAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">反饋生命：</span>
        <span class="col number">
          {{ simulatorPlayerExpectFeedbackPerHit }}
          (
          {{ getPlayerVitPercentage(simulatorPlayerExpectFeedbackPerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">每秒攻擊數：</span>
        <span class="col number">
          {{ playerHitsPerSecond }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">雙擊機率：</span>
        <span class="col number">
          {{ playerDoubleStrike }}%
        </span>
      </div>
      <div class="row">
        <span class="col attribute">投擲機率：</span>
        <span class="col number">
          {{ temporaryBuff.throwAttack }}%
        </span>
      </div>
    </q-expansion-item>
    <q-expansion-item
      label="特攻數值"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="row">
        <span class="col attribute">期望傷害：</span>
        <span class="col number">
          {{ simulatorPlayerSaExpectDamagePerHit }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerSaExpectDamagePerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最小傷害：</span>
        <span class="col number">
          {{ simulatorPlayerSaMinAd }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerSaMinAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最大傷害：</span>
        <span class="col number">
          {{ simulatorPlayerSaMaxAd }}
          (
          {{ getEnemyVitPercentage(simulatorPlayerSaMaxAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">反饋生命：</span>
        <span class="col number">
          {{ simulatorPlayerSaExpectFeedbackPerHit }}
          (
          {{ getPlayerVitPercentage(simulatorPlayerSaExpectFeedbackPerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">投擲機率：</span>
        <span class="col number">
          {{ temporaryBuff.specialThrowAttack }}%
        </span>
      </div>
    </q-expansion-item>
    <q-expansion-item
      label="敵方攻擊"
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <div class="row">
        <span class="col attribute">每秒傷害：</span>
        <span class="col number">
          {{ simulatorEnemyExpectDamagePerSecond }}
          (
          {{ getPlayerVitPercentage(simulatorEnemyExpectDamagePerSecond) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">期望傷害：</span>
        <span class="col number">
          {{ simulatorEnemyExpectDamagePerHit }}
          (
          {{ getPlayerVitPercentage(simulatorEnemyExpectDamagePerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最小傷害：</span>
        <span class="col number">
          {{ simulatorEnemyMinAd }}
          (
          {{ getPlayerVitPercentage(simulatorEnemyMinAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最大傷害：</span>
        <span class="col number">
          {{ simulatorEnemyMaxAd }}
          (
          {{ getPlayerVitPercentage(simulatorEnemyMaxAd) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">反饋生命：</span>
        <span class="col number">
          {{ simulatorEnemyExpectFeedbackPerHit }}
          (
          {{ getEnemyVitPercentage(simulatorEnemyExpectFeedbackPerHit) }}
          %)
        </span>
      </div>
      <div class="row">
        <span class="col attribute">每秒攻擊數：</span>
        <span class="col number">
          {{ enemyData.hitsPerSecond }}
        </span>
      </div>
    </q-expansion-item>
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
      dense>
      <template v-slot:header>
        <q-item-section>
          敵方數值
        </q-item-section>
      </template>
      <div class="row">
        <span class="col attribute">最小傷害：</span>
        <span class="col number">
          {{ enemyData.minAd }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">最大傷害：</span>
        <span class="col number">
          {{ enemyData.maxAd }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">每秒攻擊數：</span>
        <span class="col number">
          {{ enemyData.hitsPerSecond }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">敏捷：</span>
        <span class="col number">
          {{ enemyData.dex }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">吸血：</span>
        <span class="col number">
          {{ enemyData.voh }}%
        </span>
      </div>
      <div class="row">
        <span class="col attribute">反傷：</span>
        <span class="col number">
          {{ enemyData.dr }}%
        </span>
      </div>
      <div class="row">
        <span class="col attribute">防禦：</span>
        <span class="col number">
          {{ enemyData.def }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">體力：</span>
        <span class="col number">
          {{ enemyData.vit }}
        </span>
      </div>
      <div class="row">
        <span class="col attribute">每秒回血：</span>
        <span class="col number">
          {{ enemyData.healingPerSecond }}
        </span>
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
        return Math.round(num / this.playerVit * 1000) / 10;
      };
    },
    effectivePlayerDef() {
      return Math.max(0, this.playerDef - this.enemyData.dex);
    },
    effectiveEnemyDef() {
      return Math.max(0, this.enemyData.def - this.playerDex);
    },
    simulatorPlayerMinAd() {
      return Math.max(0, this.playerMinAd - this.effectiveEnemyDef);
    },
    simulatorPlayerMaxAd() {
      return Math.max(0, this.playerMaxAd - this.effectiveEnemyDef);
    },
    simulatorPlayerExpectDamagePerHit() {
      return this.getPlayerExpectDamagePerHit(this.enemyData.def);
    },
    simulatorPlayerExpectDamagePerSecond() {
      return Math.round(this.getPlayerDamagePerSecond(this.enemyData.def) * 1000) / 1000;
    },
    simulatorPlayerExpectFeedbackPerHit() {
      const enemyData = this.enemyData;

      return this.getPlayerExpectFeedbackPerHit({
        enemyDex: enemyData.dex,
        enemyDef: enemyData.def,
        enemyDr: enemyData.dr,
      });
    },
    simulatorPlayerSaMinAd() {
      return Math.max(0, this.playerSaMinAd - this.effectiveEnemyDef);
    },
    simulatorPlayerSaMaxAd() {
      return Math.max(0, this.playerSaMaxAd - this.effectiveEnemyDef);
    },
    simulatorPlayerSaExpectDamagePerHit() {
      return this.getPlayerSaExpectDamage(this.enemyData.def);
    },
    simulatorPlayerSaExpectFeedbackPerHit() {
      const enemyData = this.enemyData;

      return this.getPlayerSaExpectFeedbackPerHit({
        enemyDex: enemyData.dex,
        enemyDef: enemyData.def,
        enemyDr: enemyData.dr,
      });
    },
    simulatorEnemyMinAd() {
      return Math.max(0, this.enemyData.minAd - this.effectivePlayerDef);
    },
    simulatorEnemyMaxAd() {
      return Math.max(0, this.enemyData.maxAd - this.effectivePlayerDef);
    },
    simulatorEnemyExpectDamagePerHit() {
      const enemyData = this.enemyData;

      return this.getExpectDamagePerHit({
        minAd: enemyData.minAd,
        maxAd: enemyData.maxAd,
        attackerDex: enemyData.dex,
        defenderDef: this.playerDef,
        doubleStrike: 0,
        throwAttack: 0,
      });
    },
    simulatorEnemyExpectDamagePerSecond() {
      return Math.round(this.simulatorEnemyExpectDamagePerHit * this.enemyData.hitsPerSecond * 1000) / 1000;
    },
    simulatorEnemyExpectFeedbackPerHit() {
      const enemyData = this.enemyData;

      return this.getExpectFeedbackPerHit({
        minAd: enemyData.minAd,
        maxAd: enemyData.maxAd,
        attackerDex: enemyData.dex,
        attackerDef: enemyData.def,
        defenderDex: this.playerDex,
        defenderDef: this.playerDef,
        doubleStrike: 0,
        throwAttack: 0,
        attackerVoh: enemyData.voh,
        defenderDr: this.playerDr,
      });
    },
    simulatorResult() {
      const enemyData = this.enemyData;
      const playerHitCostTime = 1 / this.playerHitsPerSecond;
      const playerSad = this.playerSad;
      const enemyHitCostTime = 1 / enemyData.hitsPerSecond;
      let nextPlayerAttackTime = playerHitCostTime;
      let nextPlayerSaTime = Math.max(playerSad, playerHitCostTime);
      let nextEnemyAttackTime = enemyHitCostTime;
      let enemyVit = enemyData.vit;
      let playerLossVit = 0;
      let playerHitsRecord = 0;
      let playerSaHitsRecord = 0;
      let secondPass = 0;
      let enemyHealingCount = 0;
      const recordList = [];
      while (enemyVit > 0) {
        secondPass = nextPlayerAttackTime <= nextEnemyAttackTime ? nextPlayerAttackTime : nextEnemyAttackTime;
        // enemy healing
        while (enemyData.healingPerSecond > 0 && secondPass - enemyHealingCount > 1) {
          enemyVit += enemyData.healingPerSecond;
          enemyHealingCount += 1;
          recordList.push({
            time: enemyHealingCount,
            event: 'enemyHealing',
            enemyVit,
            playerLossVit,
          });
        }
        // player attack
        if (nextPlayerAttackTime <= secondPass) {
          // special attack
          if (nextPlayerSaTime <= secondPass) {
            playerSaHitsRecord += 1;
            enemyVit -= this.simulatorPlayerSaExpectDamagePerHit;
            playerLossVit -= this.simulatorPlayerSaExpectFeedbackPerHit;
            nextPlayerSaTime += Math.max(playerSad, playerHitCostTime);
            recordList.push({
              time: Math.round(secondPass * 100) / 100,
              event: 'specialAttack',
              enemyVit,
              playerLossVit,
            });
          }
          // normal attack
          else {
            playerHitsRecord += 1;
            enemyVit -= this.simulatorPlayerExpectDamagePerHit;
            playerLossVit -= this.simulatorPlayerExpectFeedbackPerHit;
            recordList.push({
              time: Math.round(secondPass * 100) / 100,
              event: 'normalAttack',
              enemyVit,
              playerLossVit,
            });
          }
          nextPlayerAttackTime += playerHitCostTime;
        }
        // enemy attack
        if (nextEnemyAttackTime <= secondPass) {
          playerLossVit += this.simulatorEnemyExpectDamagePerHit;
          enemyVit += this.simulatorEnemyExpectFeedbackPerHit;
          nextEnemyAttackTime += enemyHitCostTime;
          secondPass += enemyHitCostTime;
          recordList.push({
            time: Math.round(secondPass * 100) / 100,
            event: 'enemyAttack',
            enemyVit,
            playerLossVit,
          });
        }
        if (secondPass > 300) {
          return {
            playerHits: playerHitsRecord,
            playerSaHits: playerSaHitsRecord,
            secondPass: Math.round(secondPass * 1000) / 1000,
            playerLossVit: Math.round(Math.max(0, playerLossVit)),
            enemyVit: Math.round(enemyVit),
            recordList,
          };
        }
      }

      return {
        playerHits: playerHitsRecord,
        playerSaHits: playerSaHitsRecord,
        secondPass: Math.round(secondPass * 1000) / 1000,
        playerLossVit: Math.round(Math.max(0, playerLossVit)),
        recordList,
      };
    },
    parseRecordAction() {
      return (event) => {
        switch (event) {
          case 'enemyHealing': {
            return '敵方再生';
          }
          case 'normalAttack': {
            return '我方攻擊';
          }
          case 'specialAttack': {
            return '我方特攻';
          }
          case 'enemyAttack': {
            return '敵方攻擊';
          }
        }
      };
    },
  },
};

</script>

<style lang="stylus">
  .attribute {
    display: inline-block;
    padding-left: 5px;
    min-width: 8rem;
    text-align: right;
  }
  .number {
    padding-right: 5px;
    text-align: right;
  }
</style>

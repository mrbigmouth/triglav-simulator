import item from 'src/data/item';
import { i18n } from 'src/boot/i18n';

export default {
  namespaced: true,
  state() {
    return {
      characterClass: 'sword',
      exp: 10000000,
      kills: 1000000,
      boostAllRecords: 2,
      boostVitalityRecords: 13,
      boostStrengthRecords: 1,
      boostDexteriryRecords: 1,
      boostDefenseRecords: 1,
      weapon1: 0,
      weapon2: 0,
      ring1: 0,
      ring2: 0,
      helm: 0,
      armor: 0,
      gloves: 0,
      boots: 0,
      freshy: 0,
      puppet1: 0,
      puppet2: 0,
      puppet3: 0,
      temporaryBuff: {
        str: 0,
        vit: 0,
        def: 0,
        voh: 0,
        dr: 0,
        ar: 0,
        as: 0,
        sad: 0,
        ws: 0,
        throwAttack: 0,
        specialThrowAttack: 0,
      },
    };
  },
  mutations: {
    changeBuildValue(state, { key, value }) {
      if (key === 'characterClass') {
        state.weapon1 = 0;
        state.weapon2 = 0;
      }
      state[key] = value;
      const defaultBuildList = [
        state.characterClass,
        state.exp,
        state.kills,
        state.boostAllRecords,
        state.boostVitalityRecords,
        state.boostStrengthRecords,
        state.boostDexteriryRecords,
        state.boostDefenseRecords,
        state.weapon1,
        state.weapon2,
        state.ring1,
        state.ring2,
        state.helm,
        state.armor,
        state.gloves,
        state.boots,
        state.freshy,
        state.puppet1,
        state.puppet2,
        state.puppet3,
      ];
      location.hash = '#/' + encodeURIComponent(JSON.stringify(defaultBuildList));
    },
    adjustTemporaryBuff(state, { key, value }) {
      state.temporaryBuff[key] += value;
    },
  },
  getters: {
    parseScaleValue(state) {
      return (value = []) => {
        const scaleKey = value[0] || 'exp';
        const maxRequired = value[1] || 0;
        const maxValue = value[2] || 0;
        const minValue = value[3] || 0;
        const scaleByNumber = Math.min(state[scaleKey], maxRequired);
        let scaleValue = maxValue * scaleByNumber / maxRequired;
        scaleValue = scaleValue > 0 ? Math.floor(scaleValue) : Math.ceil(scaleValue);

        return minValue + scaleValue;
      };
    },
    parseItemValue(state, getters) {
      return (value) => {
        if (!value) {
          return 0;
        }
        else if (typeof value === 'number') {
          return value;
        }
        else if (Array.isArray(value)) {
          return getters.parseItemValue(getters.parseScaleValue(value));
        }
        else if (typeof value === 'object') {
          if (value.type) {
            const speicalData = {
              ...value,
              value: getters.parseItemValue(value.value),
            };

            return speicalData;
          }
          else {
            return getters.parseItemValue(value[state.characterClass]);
          }
        }
      };
    },
    getItemValue(state, getters) {
      return (itemData, key) => {
        if (!key) {
          return {
            minAd: getters.getItemValue(itemData, 'minAd'),
            maxAd: getters.getItemValue(itemData, 'maxAd'),
            as: getters.getItemValue(itemData, 'as'),
            str: getters.getItemValue(itemData, 'str'),
            dex: getters.getItemValue(itemData, 'dex'),
            def: getters.getItemValue(itemData, 'def'),
            vit: getters.getItemValue(itemData, 'vit'),
            ws: getters.getItemValue(itemData, 'ws'),
            ar: getters.getItemValue(itemData, 'ar'),
            sad: getters.getItemValue(itemData, 'sad'),
            voh: getters.getItemValue(itemData, 'voh'),
            dr: getters.getItemValue(itemData, 'dr'),
            xpg: getters.getItemValue(itemData, 'xpg'),
            special: getters.getItemValue(itemData, 'special'),
          };
        }

        return getters.parseItemValue(itemData[key]);
      };
    },
    getSlotValue(state, getters) {
      return (slot, key) => {
        const itemIndex = state[slot];
        let itemType = slot;
        switch (slot) {
          case 'weapon1': {
            switch (state.characterClass) {
              case 'sword': {
                itemType = 'sword';
                break;
              }
              case 'axe': {
                itemType = 'axe';
                break;
              }
              case 'dagger': {
                itemType = 'dagger';
                break;
              }
            }
            break;
          }
          case 'weapon2': {
            switch (state.characterClass) {
              case 'sword': {
                itemType = 'shield';
                break;
              }
              case 'axe': {
                itemType = 'mantle';
                break;
              }
              case 'dagger': {
                itemType = 'dagger';
                break;
              }
            }
            break;
          }
          case 'ring1':
          case 'ring2': {
            itemType = 'ring';
            break;
          }
          case 'puppet1':
          case 'puppet2':
          case 'puppet3': {
            itemType = 'puppet';
            break;
          }
        }
        const itemList = item[itemType];
        const itemData = itemList[itemIndex];

        return getters.getItemValue(itemData, key);
      };
    },
    getTotalItemValue(state, getters) {
      return (key) => {
        return slotList.reduce((sum, slot) => {
          return sum + getters.getSlotValue(slot, key);
        }, 0);
      };
    },
    getCharacterBasicValue(state) {
      return (key) => {
        switch (key) {
          case 'vit': {
            return basicVitalityByClass[state.characterClass];
          }
          case 'str': {
            return basicStrengthByClass[state.characterClass];
          }
          case 'dex': {
            return basicDexteriryByClass[state.characterClass];
          }
          case 'as': {
            return basicAttackSpeedByClass[state.characterClass];
          }
          case 'ws': {
            return basicWalkSpeedByClass[state.characterClass];
          }
          case 'ar': {
            return basicAttackRangeByClass[state.characterClass];
          }
          default: {
            return 0;
          }
        }
      };
    },
    getBoostValue(state) {
      return (key) => {
        switch (key) {
          case 'vit': {
            return (state.boostAllRecords + state.boostVitalityRecords) * boostVitalityByClass[state.characterClass];
          }
          case 'str': {
            return (state.boostAllRecords + state.boostStrengthRecords) * boostStrengthByClass[state.characterClass];
          }
          case 'dex': {
            return (state.boostAllRecords + state.boostDexteriryRecords) * boostDexteriryByClass[state.characterClass];
          }
          case 'def': {
            return (state.boostAllRecords + state.boostDefenseRecords);
          }
          default: {
            return 0;
          }
        }
      };
    },
    getCharacterOriginValue(state, getters) {
      return (key) => {
        const characterValue = (
          getters.getTotalItemValue(key) +
          getters.getCharacterBasicValue(key) +
          getters.getBoostValue(key)
        );

        if (key === 'sad') {
          return characterValue;
        }

        return Math.max(0, characterValue);
      };
    },
    getCharacterValue(state, getters) {
      return (key) => {
        const characterValue = (
          getters.getTotalItemValue(key) +
          getters.getCharacterBasicValue(key) +
          getters.getBoostValue(key) +
          (state.temporaryBuff[key] || 0)
        );

        if (key === 'sad') {
          return characterValue;
        }

        return Math.max(0, characterValue);
      };
    },
    playerMinAd(state, getters) {
      return getters.getCharacterValue('minAd') + Math.round(getters.playerStr / 2);
    },
    playerMaxAd(state, getters) {
      return getters.getCharacterValue('maxAd') + getters.playerStr;
    },
    playerStr(state, getters) {
      return getters.getCharacterValue('str');
    },
    playerDex(state, getters) {
      return getters.getCharacterValue('dex');
    },
    playerDef(state, getters) {
      return getters.getCharacterValue('def');
    },
    playerVit(state, getters) {
      return getters.getCharacterValue('vit');
    },
    playerWs(state, getters) {
      return getters.getCharacterValue('ws');
    },
    playerAr(state, getters) {
      return getters.getCharacterValue('ar');
    },
    playerAs(state, getters) {
      return getters.getCharacterValue('as');
    },
    playerSad(state, getters) {
      return Math.max(0, 30 + getters.getCharacterValue('sad'));
    },
    playerVoh(state, getters) {
      return getters.getCharacterValue('voh');
    },
    playerDr(state, getters) {
      return getters.getCharacterValue('dr');
    },
    playerXpg(state, getters) {
      return getters.getCharacterValue('xpg');
    },
    playerDoubleStrike(state, getters) {
      const doublestrikeList = [];
      slotList.forEach((slot) => {
        const specialData = getters.getSlotValue(slot, 'special');
        if (specialData.type === 'doubleStrike') {
          doublestrikeList.push(specialData.value);
        }
      });

      const notDoubleStrikeChancePerHit = doublestrikeList.reduce((sum, doubleStrikeChance) => {
        return sum * (100 - doubleStrikeChance);
      }, 100) / Math.pow(100, doublestrikeList.length);

      return (100 - notDoubleStrikeChancePerHit);
    },
    playerSpecialAbilityList(state, getters) {
      const result = [];
      slotList.forEach((slot) => {
        const speicalData = getters.getSlotValue(slot, 'special');
        if (speicalData && speicalData.type !== 'doubleStrike') {
          result.push(speicalData);
        }
      });

      return result;
    },
    getExpectDamagePerHit() {
      return ({
        minAd,
        maxAd,
        attackerDex,
        defenderDef,
        doubleStrike,
        throwAttack,
      }) => {
        const effectiveDef = Math.max(0, defenderDef - attackerDex);
        const expectDamagePerHit = Math.max(1, (minAd + maxAd) / 2 - effectiveDef);
        const doubleStrikeAdjust = (doubleStrike + 100);
        const throwAttackAdjust = (throwAttack + 100);

        return Math.round(expectDamagePerHit * doubleStrikeAdjust * throwAttackAdjust / 10000);
      };
    },
    playerExpectDamagePerHit(state, getters) {
      return getters.getExpectDamagePerHit({
        minAd: getters.playerMinAd,
        maxAd: getters.playerMaxAd,
        attackerDex: getters.playerDex,
        defenderDef: 0,
        doubleStrike: getters.playerDoubleStrike,
        throwAttack: state.temporaryBuff.throwAttack + state.temporaryBuff.specialThrowAttack,
      });
    },
    getPlayerExpectDamagePerHit(state, getters) {
      return (enemyDef) => {
        return getters.getExpectDamagePerHit({
          minAd: getters.playerMinAd,
          maxAd: getters.playerMaxAd,
          attackerDex: getters.playerDex,
          defenderDef: enemyDef,
          doubleStrike: getters.playerDoubleStrike,
          throwAttack: state.temporaryBuff.throwAttack + state.temporaryBuff.specialThrowAttack,
        });
      };
    },
    getExpectFeedbackPerHit() {
      return ({
        minAd,
        maxAd,
        attackerDex,
        attackerDef,
        defenderDex,
        defenderDef,
        doubleStrike,
        throwAttack,
        attackerVoh,
        defenderDr,
      }) => {
        const effectiveDefenderDef = Math.max(0, defenderDef - attackerDex);
        const effectiveAttackerDef = Math.max(0, defenderDex - attackerDef);
        const expectDamagePerHit = Math.max(1, (minAd + maxAd) / 2 - effectiveDefenderDef);
        const doubleStrikeAdjust = (doubleStrike + 100);
        const damagePerHitNothrowAttack = Math.round(expectDamagePerHit * doubleStrikeAdjust / 100);
        const healingPerHit = Math.round(damagePerHitNothrowAttack * attackerVoh / 100);
        const throwAttackAdjust = (throwAttack + 100);
        const damagePerHit = Math.round(expectDamagePerHit * doubleStrikeAdjust * throwAttackAdjust / 10000);
        const damageReflect = Math.max(0, Math.round(damagePerHit * defenderDr / 100) - effectiveAttackerDef);

        return healingPerHit - damageReflect;
      };
    },
    playerExpectFeedbackPerHit(state, getters) {
      return getters.getExpectFeedbackPerHit({
        minAd: getters.playerMinAd,
        maxAd: getters.playerMaxAd,
        attackerDex: getters.playerDex,
        attackerDef: getters.playerDef,
        defenderDex: 0,
        defenderDef: 0,
        doubleStrike: getters.playerDoubleStrike,
        throwAttack: state.temporaryBuff.throwAttack + state.temporaryBuff.specialThrowAttack,
        attackerVoh: getters.playerVoh,
        defenderDr: 0,
      });
    },
    getPlayerExpectFeedbackPerHit(state, getters) {
      return ({ enemyDex, enemyDef, enemyDr }) => {
        return getters.getExpectFeedbackPerHit({
          minAd: getters.playerMinAd,
          maxAd: getters.playerMaxAd,
          attackerDex: getters.playerDex,
          attackerDef: getters.playerDef,
          defenderDex: enemyDex,
          defenderDef: enemyDef,
          doubleStrike: getters.playerDoubleStrike,
          throwAttack: state.temporaryBuff.throwAttack + state.temporaryBuff.specialThrowAttack,
          attackerVoh: getters.playerVoh,
          defenderDr: enemyDr,
        });
      };
    },
    getHitsPerSecondByAs() {
      return (as) => {
        if (as >= 10) {
          return Math.round(30 / as * 1000) / 1000;
        }
        else if (as <= 2) {
          return 8.064;
        }
        else if (as <= 3) {
          return 6.669 + (3 - as) * (8.064 - 6.669);
        }
        else if (as <= 4) {
          return 5.998 + (4 - as) * (6.669 - 5.998);
        }
        else if (as <= 5) {
          return 5.332 + (5 - as) * (5.998 - 5.332);
        }
        else if (as <= 6) {
          return 4.801 + (6 - as) * (5.332 - 4.801);
        }
        else if (as <= 7) {
          return 4.136 + (7 - as) * (4.801 - 4.136);
        }
        else if (as <= 8) {
          return 3.738 + (8 - as) * (4.136 - 3.738);
        }
        else if (as <= 9) {
          return 3.311 + (9 - as) * (3.738 - 3.311);
        }
        else {
          return 3 + (10 - as) * (3.311 - 3);
        }
      };
    },
    playerHitsPerSecond(state, getters) {
      return getters.getHitsPerSecondByAs(getters.playerAs);
    },
    getDamagePerSecond(state, getters) {
      return ({
        minAd,
        maxAd,
        attackerDex,
        defenderDef,
        doubleStrike,
        throwAttack,
        hitsPerSecond,
      }) => {
        const damagePerHit = getters.getExpectDamagePerHit({
          minAd,
          maxAd,
          attackerDex,
          defenderDef,
          doubleStrike,
          throwAttack,
        });

        return damagePerHit * hitsPerSecond;
      };
    },
    playerDamagePerSecond(state, getters) {
      return getters.playerExpectDamagePerHit * getters.playerHitsPerSecond;
    },
    getPlayerDamagePerSecond(state, getters) {
      return (defenderDef) => {
        return getters.getDamagePerSecond({
          minAd: getters.playerMinAd,
          maxAd: getters.playerMaxAd,
          attackerDex: getters.playerDex,
          defenderDef: defenderDef,
          doubleStrike: getters.playerDoubleStrike,
          throwAttack: state.temporaryBuff.throwAttack + state.temporaryBuff.specialThrowAttack,
          hitsPerSecond: getters.playerHitsPerSecond,
        });
      };
    },
    playerSaMinAd(state, getters) {
      return getters.playerMinAd * saMultiperByClass[state.characterClass];
    },
    playerSaMaxAd(state, getters) {
      return getters.playerMaxAd * saMultiperByClass[state.characterClass];
    },
    playerSaExpectDamage(state, getters) {
      return getters.getExpectDamagePerHit({
        minAd: getters.playerSaMinAd,
        maxAd: getters.playerSaMaxAd,
        attackerDex: getters.playerDex,
        defenderDef: 0,
        doubleStrike: 0,
        throwAttack: state.temporaryBuff.specialThrowAttack,
      });
    },
    getPlayerSaExpectDamage(state, getters) {
      return (enemyDef) => {
        return getters.getExpectDamagePerHit({
          minAd: getters.playerSaMinAd,
          maxAd: getters.playerSaMaxAd,
          attackerDex: getters.playerDex,
          defenderDef: 0,
          doubleStrike: 0,
          throwAttack: state.temporaryBuff.specialThrowAttack,
        });
      };
    },
    playerSaExpectFeedbackPerHit(state, getters) {
      return getters.getExpectFeedbackPerHit({
        minAd: getters.playerSaMinAd,
        maxAd: getters.playerSaMaxAd,
        attackerDex: getters.playerDex,
        attackerDef: getters.playerDef,
        defenderDex: 0,
        defenderDef: 0,
        doubleStrike: 0,
        throwAttack: state.temporaryBuff.specialThrowAttack,
        attackerVoh: getters.playerVoh,
        defenderDr: 0,
      });
    },
    getPlayerSaExpectFeedbackPerHit(state, getters) {
      return ({ enemyDex, enemyDef, enemyDr }) => {
        return getters.getExpectFeedbackPerHit({
          minAd: getters.playerSaMinAd,
          maxAd: getters.playerSaMaxAd,
          attackerDex: getters.playerDex,
          attackerDef: getters.playerDef,
          defenderDex: enemyDex,
          defenderDef: enemyDef,
          doubleStrike: 0,
          throwAttack: state.temporaryBuff.specialThrowAttack,
          attackerVoh: getters.playerVoh,
          defenderDr: enemyDr,
        });
      };
    },
    playerSaHitsPerSecond(state, getters) {
      const hitsPerSecond = getters.playerHitsPerSecond;
      const playerSad = getters.playerSad;
      if (playerSad > 0) {
        return Math.min(hitsPerSecond, Math.max(Math.floor(1 / playerSad), 1));
      }
      else {
        return hitsPerSecond;
      }
    },
    getSpecialDescription(state) {
      return (specialData) => {
        switch (specialData.type) {
          case 'splashAttack': {
            return i18n.t('special.splashAttack');
          }
          case 'triggerNoDelayOnTakenDamage':
          case 'hitsTriggerNoDelay':
          case 'killsTriggerNoDelay': {
            return i18n.t('special.' + specialData.type, {
              value: specialData.value,
              trigger: specialData.trigger,
            });
          }
          case 'addVoHOnTakenDamage':
          case 'addStrengthOnTakenDamage':
          case 'addVitalityOnTakenDamage':
          case 'addAttackSpeedOnTakenDamage':
          case 'addDamageReflectionOnTakenDamage':
          case 'killsAddAttackRange':
          case 'killsAddAttackSpeed':
          case 'killsAddWalkSpeed':
          case 'hitsAddAttackSpeed':
          case 'hitsAddWalkSpeed':
          case 'hitsAddDefense':
          case 'hitsAddStrength': {
            return i18n.t('special.' + specialData.type, {
              value: specialData.value,
              trigger: specialData.trigger,
              duration: specialData.duration,
            });
          }
          case 'lightningStrike':
          case 'specialThrowAttack':
          case 'throwAttack':
          case 'doubleStrike':
          case 'restoresVitalityOnTakenDamage':
          case 'restoresVitalityOnSpecialAttackKill':
          case 'restoresVitalityOnDamageReflectionKill':
          case 'restoresVitalityOnKill':
          case 'reduceSadOnKill':
          case 'resetSadOnKill':
          default: {
            return i18n.t('special.' + specialData.type, {
              value: specialData.value,
            });
          }
        }
      };
    },
  },
};

const slotList = [
  'weapon1',
  'weapon2',
  'ring1',
  'ring2',
  'helm',
  'armor',
  'gloves',
  'boots',
  'freshy',
  'puppet1',
  'puppet3',
];

const basicAttackSpeedByClass = {
  sword: 18,
  axe: 25,
  dagger: 10,
};

const basicVitalityByClass = {
  sword: 100,
  axe: 120,
  dagger: 80,
};

const basicWalkSpeedByClass = {
  sword: 57,
  axe: 54,
  dagger: 60,
};

const basicAttackRangeByClass = {
  sword: 42,
  axe: 48,
  dagger: 40,
};

const boostVitalityByClass = {
  sword: 12,
  axe: 15,
  dagger: 10,
};

const basicStrengthByClass = {
  sword: 6,
  axe: 8,
  dagger: 4,
};

const boostStrengthByClass = {
  sword: 3,
  axe: 4,
  dagger: 2,
};

const basicDexteriryByClass = {
  sword: 6,
  axe: 4,
  dagger: 8,
};

const boostDexteriryByClass = {
  sword: 2,
  axe: 1,
  dagger: 3,
};

const saMultiperByClass = {
  sword: 1.5,
  axe: 3,
  dagger: 2,
};

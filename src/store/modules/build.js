import item from 'src/data/item';

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
    };
  },
  mutations: {
    changeBuildValue(state, { key, value }) {
      if (key === 'characterClass') {
        state.weapon1 = 0;
        state.weapon2 = 0;
      }
      state[key] = value;
    },
  },
  getters: {
    getCharacterValue(state) {
      return (key) => {
        const characterValue = getCharacterValue(state, key);

        return Math.max(0, characterValue);
      };
    },
    getItemValue(state) {
      return (itemData, key) => {
        return getItemValue(state, itemData, key);
      };
    },
    hitsPerSecond,
    totalMinAd,
    totalMaxAd,
    expectDmgPerHit(state) {
      return getExpectDmgPerHit(state, 0);
    },
    getExpectDmgPerHit(state) {
      return (enemyDef = 0) => {
        return getExpectDmgPerHit(state, enemyDef);
      };
    },
    expectHealingPerHit(state) {
      return getExpectHealingPerHit(state, 0);
    },
    getExpectHealingPerHit(state) {
      return (enemyDef = 0) => {
        return getExpectHealingPerHit(state, 0);
      };
    },
    totalDoubleStrikeChance(state) {
      return totalDoubleStrikeChance(state);
    },
    expectDps(state) {
      return getExpectDps(state, 0);
    },
    getExpectDps(state) {
      return (enemyDef = 0) => {
        return getExpectDps(state, enemyDef);
      };
    },
    totalSAMinAd,
    totalSAMaxAd,
    expectSADmgPerHit(state) {
      return getExpectSADmgPerHit(state, 0);
    },
    getExpectSADmgPerHit(state) {
      return (enemyDef = 0) => {
        return getExpectSADmgPerHit(state, enemyDef);
      };
    },
    expectSAHealingPerHit(state) {
      return getExpectSAHealingPerHit(state, 0);
    },
    getExpectSAHealingPerHit(state) {
      return (enemyDef = 0) => {
        return getExpectSAHealingPerHit(state, enemyDef);
      };
    },
    saHitsPerSecond,
    getSpecialDescription(state) {
      return (specialData) => {
        switch (specialData.type) {
          case 'doubleStrike': {
            return specialData.value + ' %的機率能攻擊目標兩次.';
          }
          case 'restoresVitalityOnTakenDamage': {
            return '持續恢復受到傷害的' + specialData.value + '%體力.';
          }
        }
      };
    },
    totalSADelay(state) {
      return Math.max(0, 30 - getCharacterValue(state, 'sad'));
    },
    specialAbilityList(state) {
      const result = [];
      slotList.forEach((slot) => {
        const speicalData = getSlotValue(state, slot, 'special');
        if (speicalData && speicalData.type !== 'doubleStrike') {
          result.push(speicalData);
        }
      });

      return result;
    },
  },
};

function getCharacterValue(state, key) {
  return (
    getTotalItemValue(state, key) +
    getCharacterBasicValue(state, key) +
    getBoostValue(state, key)
  );
}

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
function getTotalItemValue(state, key) {
  return slotList.reduce((sum, slot) => {
    return sum + getSlotValue(state, slot, key);
  }, 0);
}

function getSlotValue(state, slot, key) {
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

  return getItemValue(state, itemData, key);
}

function getItemValue(state, itemData, key) {
  if (!key) {
    return {
      minAd: getItemValue(state, itemData, 'minAd'),
      maxAd: getItemValue(state, itemData, 'maxAd'),
      as: getItemValue(state, itemData, 'as'),
      str: getItemValue(state, itemData, 'str'),
      dex: getItemValue(state, itemData, 'dex'),
      def: getItemValue(state, itemData, 'def'),
      vit: getItemValue(state, itemData, 'vit'),
      ws: getItemValue(state, itemData, 'ws'),
      ar: getItemValue(state, itemData, 'ar'),
      sad: getItemValue(state, itemData, 'sad'),
      voh: getItemValue(state, itemData, 'voh'),
      dr: getItemValue(state, itemData, 'dr'),
      xpg: getItemValue(state, itemData, 'xpg'),
      special: getItemValue(state, itemData, 'special'),
    };
  }

  return parseItemValue(state, itemData[key]);
}

function parseItemValue(state, value) {
  if (typeof value === 'undefined') {
    return 0;
  }
  else if (typeof value === 'number') {
    return value;
  }
  else if (Array.isArray(value)) {
    return parseItemValue(state, parseScaleValue(state, value));
  }
  else if (typeof value === 'object') {
    if (value.type) {
      const speicalData = {
        ...value,
        value: parseItemValue(state, value.value),
      };

      return speicalData;
    }
    else {
      return parseItemValue(state, value[state.characterClass]);
    }
  }
}

function parseScaleValue(state, value = []) {
  const scaleKey = value[0] || 'exp';
  const maxRequired = value[1] || 0;
  const maxValue = value[2] || 0;
  const minValue = value[3] || 0;
  const scaleByNumber = Math.min(state[scaleKey], maxRequired);
  const scaleResult = Math.round(maxValue * scaleByNumber / maxRequired * 10) / 10;

  return minValue + scaleResult;
}

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

function getCharacterBasicValue(state, key) {
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
}

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

function getBoostValue(state, key) {
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
}

function totalMinAd(state) {
  const str = getCharacterValue(state, 'str');

  return getCharacterValue(state, 'minAd') + Math.round(str / 2);
}

function totalMaxAd(state) {
  const str = getCharacterValue(state, 'str');

  return getCharacterValue(state, 'maxAd') + str;
}

function getExpectDmgPerHit(state, enemyDef) {
  const minusAd = Math.max(0, enemyDef - getCharacterValue(state, 'dex'));
  const minAd = Math.max(0, totalMinAd(state) - minusAd);
  const maxAd = Math.max(0, totalMaxAd(state) - minusAd);

  return (minAd + maxAd) / 2;
}

function getExpectHealingPerHit(state, enemyDef = 0) {
  return Math.round(getExpectDmgPerHit(state, enemyDef) * getCharacterValue(state, 'voh') / 100);
}

function hitsPerSecond(state) {
  const as = getCharacterValue(state, 'as');
  if (as >= 10) {
    return Math.round(30 / as * 1000) / 1000;
  }
  else if (as <= 2) {
    return 8.064;
  }
  switch (as) {
    case 3: {
      return 6.669;
    }
    case 4: {
      return 5.998;
    }
    case 5: {
      return 5.332;
    }
    case 6: {
      return 4.801;
    }
    case 7: {
      return 4.136;
    }
    case 8: {
      return 3.738;
    }
    case 9: {
      return 3.311;
    }
  }
}

function totalDoubleStrikeChance(state) {
  const doublestrikeList = [];
  slotList.forEach((slot) => {
    const specialData = getSlotValue(state, slot, 'special');
    if (specialData.type === 'doubleStrike') {
      doublestrikeList.push(specialData.value);
    }
  });

  const notDoubleStrikeChancePerHit = doublestrikeList.reduce((sum, doubleStrikeChance) => {
    return sum * (100 - doubleStrikeChance);
  }, 100) / Math.pow(100, doublestrikeList.length);

  return (100 - notDoubleStrikeChancePerHit);
}

function getExpectDps(state, enemyDef = 0) {
  const expectDmgPerHit = getExpectDmgPerHit(state, enemyDef);
  const hitsPerSecondAdjust = hitsPerSecond(state);
  const doubleStrikeAdjust = totalDoubleStrikeChance(state) + 100;

  return Math.round(expectDmgPerHit * hitsPerSecondAdjust * doubleStrikeAdjust) / 100;
}

function totalSAMinAd(state) {
  switch (state.characterClass) {
    case 'sword': {
      return totalMinAd(state) * 1.5;
    }
    case 'axe': {
      return totalMinAd(state) * 3;
    }
    case 'dagger': {
      return totalMinAd(state) * 2;
    }
  }
}

function totalSAMaxAd(state) {
  switch (state.characterClass) {
    case 'sword': {
      return totalMaxAd(state) * 1.5;
    }
    case 'axe': {
      return totalMaxAd(state) * 3;
    }
    case 'dagger': {
      return totalMaxAd(state) * 2;
    }
  }
}

function getExpectSADmgPerHit(state, enemyDef) {
  const minusAd = Math.max(0, enemyDef - getCharacterValue(state, 'dex'));
  const minAd = Math.max(0, totalSAMinAd(state) - minusAd);
  const maxAd = Math.max(0, totalSAMaxAd(state) - minusAd);

  return (minAd + maxAd) / 2;
}

function getExpectSAHealingPerHit(state, enemyDef = 0) {
  return Math.round(getExpectSADmgPerHit(state, enemyDef) * getCharacterValue(state, 'voh') / 100);
}

function saHitsPerSecond(state) {
  const sad = getCharacterValue(state, 'sad');
  if (sad > 0) {
    return Math.max(Math.floor(1 / sad), 1);
  }
  else {
    return hitsPerSecond(state);
  }
}

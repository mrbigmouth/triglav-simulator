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
        return getCharacterValue(state, key);
      };
    },
    getTotalItemValue(state) {
      return (key) => {
        return getTotalItemValue(state, key);
      };
    },
    getSlotValue(state) {
      return (slot, key) => {
        return getSlotValue(state, slot, key);
      };
    },
    getItemValue(state) {
      return (itemData, key) => {
        return getItemValue(state, itemData, key) || 0;
      };
    },
    getCharacterBasicValue(state) {
      return (key) => {
        return getCharacterBasicValue(state, key);
      };
    },
    getBoostValue({ state }) {
      return (key) => {
        return getBoostValue(state, key);
      };
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

function getTotalItemValue(state, key) {
  return (
    getSlotValue('weapon1', key) +
    getSlotValue('weapon2', key) +
    getSlotValue('ring1', key) +
    getSlotValue('ring2', key) +
    getSlotValue('helm', key) +
    getSlotValue('armor', key) +
    getSlotValue('gloves', key) +
    getSlotValue('boots', key) +
    getSlotValue('freshy', key) +
    getSlotValue('puppet1', key) +
    getSlotValue('puppet2', key) +
    getSlotValue('puppet3', key)
  );
}

function getSlotValue(state, slot, key) {
  const itemIndex = state[slot];
  const itemList = item[slot];
  const itemData = itemList[itemIndex];

  return getItemValue(itemData, key);
}

function getItemValue(state, itemData, key) {
  let value = itemData[key];
  if (typeof value === 'undefined') {
    return 0;
  }
  // 若數值是成長性或依職業不同的數值, 則取出當前數值
  else if (Array.isArray(value)) {
    value = getScaleValue(state, value);
  }
  else if (typeof value === 'object') {
    value = value[state.characterClass];
  }
  // 取數值步驟要重複一次, 這樣才可以讓裝備資料巢狀包裝的順序不受限制
  if (Array.isArray(value)) {
    value = getScaleValue(state, value);
  }
  else if (typeof value === 'object') {
    value = value[state.characterClass];
  }

  return value;
}

function getScaleValue(state, value = []) {
  const scaleKey = value[0] || 'exp';
  const maxRequired = value[1] || 0;
  const maxValue = value[2] || 0;
  const minValue = value[3] || 0;
  const scaleByNumber = Math.min(state[scaleKey], maxRequired);
  const scaleResult = Math.round((maxValue - minValue) * scaleByNumber / maxRequired * 10) / 10;

  return minValue + scaleResult;
}

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
    default: {
      return 0;
    }
  }
}

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

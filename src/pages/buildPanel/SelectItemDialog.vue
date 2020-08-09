<template>
  <div>
    <q-dialog
      v-model="proxyIsShow"
      persistent
      full-width
      full-height>
      <q-card>
        <q-bar>
          <div>選擇裝備</div>

          <q-space />

          <q-btn
            icon="close"
            dense
            flat
            v-close-popup />
        </q-bar>
        <q-card-section>
          <div>
            {{ $t('sortBy') }}
            <span
              v-for="(sorInfo, sortIndex) in sortList"
              :key="sorInfo.by"
              class="sortInfo">
              <q-icon
                name="clear"
                color="negative"
                class="cursor-pointer"
                @click="onClearSort(sortIndex)" />
              {{ $t(sorInfo.by) }}
              <q-icon
                :name="sorInfo.dir === 'desc' ? 'expand_more' : 'expand_less'"
                class="cursor-pointer"
                @click="onToggleSortDir(sorInfo)" />
            </span>
            <q-btn
              icon="add_box"
              color="positive"
              size="sm"
              dense
              @click="showAddSortDialog = true;" />
          </div>
          <div>
            {{ $t('filterByItemType') }}
            <q-checkbox
              v-model="filter"
              val="common"
              :label="$t('common')"
              color="grey-11" />
            <q-checkbox
              v-model="filter"
              val="rare"
              :label="$t('rare')"
              color="cyan-3" />
            <q-checkbox
              v-model="filter"
              val="artifact"
              :label="$t('artifact')"
              color="accent" />
          </div>
          <div style="max-width: 20rem;">
            <q-input
              v-model="searchText"
              type="text"
              :label="$t('searchByName')"
              clearable
              standout
              dense />
          </div>
          <div class="text-center">
            <q-checkbox
              v-model="displayName"
              :label="$t('displayEquipmentName')" />
            <q-checkbox
              v-model="displaySpecial"
              :label="$t('displaySpecial')" />
          </div>
          <item-table
            :sort-list.sync="sortList"
            sortable>
            <item-row
              v-for="itemData in itemList"
              :key="itemData.id"
              :item-data="itemData"
              :display-name="displayName"
              :display-special="displaySpecial"
              @click="onSelectItem(itemData.id)" />
          </item-table>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="showAddSortDialog"
      persistent>
      <q-list
        dense
        bordered
        separator>
        <q-item
          v-for="sortBy in displaySortOptionList"
          :key="sortBy"
          style="background: black;"
          clickable
          @click="onAddSort(sortBy)">
          <q-item-section>
            <q-item-label>
              {{ $t(sortBy) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-dialog>
  </div>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import ItemTable from './ItemTable';
import ItemRow from './ItemRow';
import item from 'src/data/item';

const cacheData = {
  showAddSortDialog: false,
  sortOptionList: [
    'minDmg',
    'minDmgStrDex',
    'maxDmg',
    'maxDmgStr',
    'avgDmg',
    'avgDmgStr',
    'avgDmgStrDex',
    'dmg',
    'as',
    'str',
    'dex',
    'def',
    'vit',
    'ws',
    'ar',
    'sad',
    'voh',
    'dr',
    'xpg',
    'spe',
  ],
  sortList: [
    {
      by: 'avgDmgStrDex',
      dir: 'desc',
    },
  ],
  filter: [
    'none',
    'rare',
    'artifact',
  ],
  searchText: '',
  displayName: false,
  displaySpecial: false,
};

export default {
  name: 'SelectItemDialog',
  components: {
    ItemTable,
    ItemRow,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    itemType: {
      type: String,
      default: '',
    },
    itemSlot: {
      type: String,
      default: '',
    },
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  data() {
    return cacheData;
  },
  computed: {
    proxyIsShow: {
      get() {
        return this.isShow;
      },
      set(isShow) {
        this.$emit('update:isShow', isShow);
      },
    },
    displaySortOptionList() {
      const sortByList = this.sortList.map((sortInfo) => {
        return sortInfo.by;
      });

      return this.sortOptionList.filter((sortBy) => {
        return !sortByList.includes(sortBy);
      });
    },
    itemList() {
      const itemList = item[this.itemType];
      if (!itemList) {
        return [];
      }
      const searchRegExp = this.searchText ? new RegExp(this.searchText) : /.*/;
      const filter = this.filter;
      const filteredItemList = itemList.filter((itemData) => {
        return filter.includes(itemData.type) && searchRegExp.test(this.$t(itemData.i18n));
      });
      const sortList = this.sortList;
      const getItemValue = this.getItemValue;
      filteredItemList.sort((itemData1, itemData2) => {
        return sortList.reduce((compareResult, sortInfo) => {
          if (compareResult === 0) {
            const sortBy = sortInfo.by;
            let compareValue1;
            let compareValue2;
            switch (sortBy) {
              case 'minDmgStrDex': {
                compareValue1 = getItemValue(itemData1, 'minAd') + getItemValue(itemData1, 'dex') + (getItemValue(itemData1, 'str') / 2);
                compareValue2 = getItemValue(itemData2, 'minAd') + getItemValue(itemData2, 'dex') + (getItemValue(itemData2, 'str') / 2);
                break;
              }
              case 'maxDmgStr': {
                compareValue1 = getItemValue(itemData1, 'minAd') + getItemValue(itemData1, 'str');
                compareValue2 = getItemValue(itemData2, 'minAd') + getItemValue(itemData2, 'str');
                break;
              }
              case 'avgDmg': {
                compareValue1 = (getItemValue(itemData1, 'minAd') + getItemValue(itemData1, 'maxAd')) / 2;
                compareValue2 = (getItemValue(itemData2, 'minAd') + getItemValue(itemData2, 'maxAd')) / 2;
                break;
              }
              case 'avgDmgStr' : {
                const str1 = getItemValue(itemData1, 'str');
                const minAd1 = getItemValue(itemData1, 'minAd') + Math.floor(str1 / 2);
                const maxAd1 = getItemValue(itemData1, 'maxAd') + str1;
                compareValue1 = (minAd1 + maxAd1) / 2;
                const str2 = getItemValue(itemData2, 'str');
                const minAd2 = getItemValue(itemData2, 'minAd') + Math.floor(str2 / 2);
                const maxAd2 = getItemValue(itemData2, 'maxAd') + str2;
                compareValue2 = (minAd2 + maxAd2) / 2;
                break;
              }
              case 'avgDmgStrDex' : {
                const str1 = getItemValue(itemData1, 'str');
                const dex1 = getItemValue(itemData1, 'dex');
                const minAd1 = getItemValue(itemData1, 'minAd') + Math.floor(str1 / 2) + dex1;
                const maxAd1 = getItemValue(itemData1, 'maxAd') + str1;
                compareValue1 = (minAd1 + Math.max(minAd1, maxAd1)) / 2;
                const str2 = getItemValue(itemData2, 'str');
                const dex2 = getItemValue(itemData2, 'dex');
                const minAd2 = getItemValue(itemData2, 'minAd') + Math.floor(str2 / 2) + dex2;
                const maxAd2 = getItemValue(itemData2, 'maxAd') + str2;
                compareValue2 = (minAd2 + Math.max(minAd2, maxAd2)) / 2;
                break;
              }
              case 'spe': {
                const special1 = getItemValue(itemData1, 'special');
                const special2 = getItemValue(itemData2, 'special');
                if (!(special1 && special2)) {
                  compareValue1 = special1 ? 1 : 0;
                  compareValue2 = special2 ? 1 : 0;
                }
                else if (special1.type === special2.type) {
                  compareValue1 = special1.value;
                  compareValue2 = special2.value;
                }
                else {
                  compareValue1 = special1.type;
                  compareValue2 = special2.type;
                }
                break;
              }
              default: {
                compareValue1 = getItemValue(itemData1, sortBy);
                compareValue2 = getItemValue(itemData2, sortBy);
                break;
              }
            }
            if (sortInfo.dir === 'desc') {
              return compareValue2 - compareValue1;
            }
            else {
              return compareValue1 - compareValue2;
            }
          }

          return compareResult;
        }, 0);
      });

      return filteredItemList;
    },
  },
  methods: {
    onSelectItem(itemId) {
      this[this.itemSlot] = itemId;
      this.proxyIsShow = false;
    },
    onClearSort(sortIndex) {
      this.sortList.splice(sortIndex, 1);
    },
    onToggleSortDir(sortInfo) {
      sortInfo.dir = (sortInfo.dir === 'asc' ? 'desc' : 'asc');
    },
    onAddSort(sortBy) {
      this.sortList.push({
        by: sortBy,
        dir: 'desc',
      });
      this.showAddSortDialog = false;
    },
  },
};

</script>

<style lang="stylus">
  .sortInfo {
    margin: 0 0.5rem;
    padding: 3px;
    border: 1px solid #ddd;
  }
  .q-checkbox__bg {
    svg {
      color: black;
    }
  }
</style>

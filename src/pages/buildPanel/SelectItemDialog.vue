<template>
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
        <item-table>
          <item-row
            v-for="(item, itemIndex) in itemList"
            :key="itemIndex"
            :type="itemType"
            :itemIndex="itemIndex"
            @click="onSelectItem(itemIndex)" />
        </item-table>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import ItemTable from './ItemTable';
import ItemRow from './ItemRow';
import item from 'src/data/item';

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
    return {
      order: [],
      filter: [],
    };
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
    itemList() {
      const itemList = item[this.itemType];
      if (!itemList) {
        return [];
      }
      const cloneItemList = itemList.slice();

      return cloneItemList;
    },
  },
  methods: {
    onSelectItem(itemIndex) {
      this[this.itemSlot] = itemIndex;
      this.proxyIsShow = false;
    },
  },
};

</script>
